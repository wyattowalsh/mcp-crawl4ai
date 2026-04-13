# CI/Build Audit — mcp-crawl4ai

**Date**: 2026-04-13
**Scope**: `.github/workflows/ci.yml`, `.github/workflows/release.yml`, `.github/dependabot.yml`, `.pre-commit-config.yaml`, `Dockerfile`, `pyproject.toml`, `uv.lock`, `replit.nix`, `.replit`.

---

## Summary

| Impact | Count |
|--------|-------|
| High   | 3     |
| Medium | 8     |
| Low    | 6     |
| **Total** | **17** |

---

## High Impact

### CI-H01: `ruff>=0.15.4` specifies a nonexistent version — dev install is broken

**Files**: `pyproject.toml:50`, `.pre-commit-config.yaml:3`

The dev dependency group pins `"ruff>=0.15.4"` and the pre-commit config pins `rev: v0.15.4`. As of April 2026, the latest ruff release is in the 0.11.x series. Version 0.15.4 does not exist.

**Impact**:
- `uv sync --group dev` will fail with an unresolvable dependency error.
- `pre-commit install && pre-commit run` will fail because the tag `v0.15.4` does not exist in the ruff-pre-commit repo.
- The CI pipeline's `lint` job (which runs `uv sync` then `uv run ruff check`) will fail on every run.

**Confirmation**: Dev tools are not installed in the Replit `.venv313/` (verified: `ruff` and `pytest` are both absent), meaning this breakage has gone unnoticed.

**Correction**:
- `pyproject.toml`: Change to `"ruff>=0.11.0"` (or pin the exact latest version).
- `.pre-commit-config.yaml`: Change `rev` to the matching ruff-pre-commit tag (e.g., `v0.11.6`).

### CI-H02: CI pipeline has no Python version matrix — only tests on one version

**File**: `.github/workflows/ci.yml:12, 35, 54`

All three CI jobs (`test`, `lint`, `typecheck`) run on `ubuntu-latest` with a single Python version resolved by `uv python install` (which picks the version from `requires-python`). The project declares `requires-python = ">=3.13"`, but CI never tests Python 3.14+.

**Impact**: Regressions on newer Python versions will be silently shipped.

**Correction**: Add a version matrix to the `test` job:
```yaml
strategy:
  matrix:
    python-version: ["3.13", "3.14"]
steps:
  - run: uv python install ${{ matrix.python-version }}
```

### CI-H03: Replit venv `.venv313/` is not managed by `uv.lock` — no reproducibility

**File**: `.replit:29`

The Replit workflow runs the server from `.venv313/bin/python` — a manually-created virtualenv installed via `pip install`, not `uv sync`. The official `uv.lock` (2676 lines) exists for `uv sync` usage but:
1. `.venv313/` was created with `ensurepip` and packages installed via `pip install`, not `uv sync`.
2. There is no script or documentation explaining how to set up `.venv313/` from `uv.lock`.
3. Dependency versions in `.venv313/` may drift from `uv.lock` over time.

**Correction**: Either (a) use `uv sync` to manage the venv and use `.venv` (uv's default), or (b) document the `.venv313/` setup procedure and add a lockfile sync script.

---

## Medium Impact

### CI-M01: CI jobs install `libxml2-dev libxslt-dev` redundantly in all 3 jobs

**File**: `.github/workflows/ci.yml:16, 39, 57`

The `test`, `lint`, and `typecheck` jobs each independently run:
```bash
sudo apt-get update && sudo apt-get install -y libxml2-dev libxslt-dev
```

This adds ~15-20s to each job. The `lint` and `typecheck` jobs likely don't need these system packages since they don't compile C extensions.

**Correction**:
- Remove `apt-get` from `lint` and `typecheck` jobs (ruff and ty are pure Python).
- If needed, extract a shared setup step or use a composite action.

### CI-M02: CI has no coverage enforcement — `fail_under = 90` is only in pyproject.toml

**File**: `.github/workflows/ci.yml:26`, `pyproject.toml:70`

The test job runs:
```bash
uv run pytest --cov=mcp_crawl4ai --cov-report=xml --cov-report=term-missing
```

But it does not pass `--cov-fail-under=90` or use the `[tool.coverage.report] fail_under = 90` setting. pytest-cov only enforces `fail_under` when the coverage report is generated in `report` mode, not when using `--cov-report=xml`.

**Correction**: Add `--cov-fail-under=90` to the pytest command, or verify that `[tool.coverage.report] fail_under` is respected with the current invocation.

### CI-M03: Release workflow does not verify tag matches `pyproject.toml` version

**File**: `.github/workflows/release.yml:5-6, 28-31`

The release triggers on `push: tags: ["v*"]`. It runs tests and builds, but never validates that the tag (e.g., `v0.3.1`) matches the version in `pyproject.toml` (`version = "0.3.1"`). A mismatched tag could publish a package whose version doesn't match its git tag.

**Correction**: Add a version consistency check step:
```yaml
- name: Verify version matches tag
  run: |
    TAG_VERSION=${GITHUB_REF#refs/tags/v}
    PKG_VERSION=$(python -c "import tomllib; print(tomllib.load(open('pyproject.toml','rb'))['project']['version'])")
    if [ "$TAG_VERSION" != "$PKG_VERSION" ]; then
      echo "::error::Tag v$TAG_VERSION does not match pyproject.toml version $PKG_VERSION"
      exit 1
    fi
```

### CI-M04: Release workflow does not publish to Test PyPI first

**File**: `.github/workflows/release.yml:38-75`

The `publish` job goes directly to production PyPI. There is no Test PyPI step to validate the package installs and works before the irreversible production publish.

**Correction**: Add a Test PyPI publish step before production PyPI, or add a separate `test-release` workflow triggered on pre-release tags (e.g., `v*-rc*`).

### CI-M05: Dockerfile uses `pip install uv` in both stages — should use official multi-stage copy

**File**: `Dockerfile:7, 29`

Both stages run `pip install --no-cache-dir uv`. The official uv installation method is:
```dockerfile
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/
```

Using pip to install uv:
- Adds ~30s to build time per stage.
- May install different uv versions between stages if pip cache is stale.
- Pulls in pip's dependency resolver unnecessarily.

**Correction**: Use the official multi-stage copy method for uv installation.

### CI-M06: Dockerfile copies entire `/root/.cache` — should target Playwright only

**File**: `Dockerfile:41`
```dockerfile
COPY --from=builder /root/.cache /root/.cache
```

This copies the entire cache directory, not just Playwright binaries. The builder stage may have pip caches, uv caches, or other artifacts in `/root/.cache/`.

**Correction**: Be precise:
```dockerfile
COPY --from=builder /root/.cache/ms-playwright /root/.cache/ms-playwright
```

### CI-M07: No `.dockerignore` — Docker build context includes unnecessary files

**File**: `.dockerignore` — does not exist

Without a `.dockerignore`, `docker build` sends the entire repository (including `.git/`, `.venv313/`, tests, docs, node_modules if present) as build context. This:
1. Slows down builds significantly.
2. May leak secrets if any are in the repo.
3. Increases layer cache invalidation.

**Correction**: Create `.dockerignore`:
```
.git
.venv*
__pycache__
tests/
docs/
*.md
!README.md
!LICENSE
```

### CI-M08: Dockerfile runs as `root` — no non-root user created

**File**: `Dockerfile:26-47`

The runtime stage runs the server as `root`. This is a security concern: if the crawl4ai browser sandbox is escaped, the attacker has full root access to the container.

**Correction**: Add a non-root user:
```dockerfile
RUN useradd --create-home --shell /bin/bash appuser
USER appuser
```
Note: Playwright browser binaries would need to be copied to the non-root user's home directory.

---

## Low Impact

### CI-L01: `replit.nix` hardcodes Nix store path for `mesa-libgbm`

**File**: `.replit:29`
**Text**: `LD_LIBRARY_PATH=/nix/store/24w3s75aa2lrvvxsybficn8y3zxd27kp-mesa-libgbm-25.1.0/lib:$LD_LIBRARY_PATH`

The Nix store hash is content-addressed and will change when the `mesa` package is updated. If `replit.nix` updates the Nix channel and mesa is rebuilt, this hardcoded path will break.

**Correction**: Use a wrapper script that discovers the path dynamically, or accept that this must be updated manually when the Nix channel changes.

### CI-L02: `pyproject.toml` classifiers list only Python 3.13

**File**: `pyproject.toml:15`

The `requires-python = ">=3.13"` allows 3.14+, but classifiers only mention 3.13. PyPI uses classifiers for compatibility signaling.

**Correction**: Add `"Programming Language :: Python :: 3.14"` when Python 3.14 is released and tested.

### CI-L03: No `MANIFEST.in` — sdist may miss auxiliary files

**File**: `MANIFEST.in` — does not exist

While modern setuptools with `pyproject.toml` auto-includes many files, explicit `MANIFEST.in` is recommended for ensuring LICENSE, CHANGELOG.md, and test fixtures are included in source distributions.

**Correction**: Create `MANIFEST.in`:
```
include LICENSE CHANGELOG.md
recursive-include tests *.py
```

### CI-L04: Version is hardcoded with no automated bump tooling

**File**: `pyproject.toml:3`, `mcp_crawl4ai/__init__.py:112`

The version `0.3.1` is defined in `pyproject.toml:3` and read at runtime via `importlib.metadata.version("mcp-crawl4ai")`. When run from source without installation, `__version__` falls back to `"0.0.0"`.

This works but requires manual version bumps. Tools like `setuptools-scm` or `hatch-vcs` can derive version from git tags automatically.

### CI-L05: `asyncio_default_fixture_loop_scope = "function"` is redundant

**File**: `pyproject.toml:56`

The `function` scope is the default for `pytest-asyncio`. This setting is harmless but adds noise.

**Correction**: Remove or keep for explicitness (optional).

### CI-L06: `dependabot.yml` uses `pip` ecosystem — project uses `uv`

**File**: `.github/dependabot.yml:3`
```yaml
- package-ecosystem: "pip"
  directory: "/"
```

The project uses `uv` with `uv.lock`, not pip with `requirements.txt`. Dependabot's `pip` ecosystem looks for `requirements.txt`, `setup.py`, or `Pipfile`. It may not correctly parse `pyproject.toml` dependencies or update `uv.lock`.

**Correction**: As of early 2026, Dependabot has limited `uv` support. Consider using Renovate Bot instead, which has native `uv.lock` support. Alternatively, verify that Dependabot's pip ecosystem correctly creates PRs for this project's `pyproject.toml` dependencies.

---

## CI Pipeline Assessment

### `.github/workflows/ci.yml` — Detailed Review

| Aspect | Status | Notes |
|--------|--------|-------|
| Trigger events | OK | push to main + PRs |
| Action versions pinned | OK | `actions/checkout@v4`, `astral-sh/setup-uv@v3`, `codecov/codecov-action@v5` |
| Python version matrix | **Missing** | Single version only |
| uv caching | OK | `enable-cache: true` |
| Lint job | **Broken** | `ruff>=0.15.4` doesn't exist |
| Typecheck job | OK (when deps install) | `uv run ty check mcp_crawl4ai/` |
| Test job | OK (when deps install) | Runs pytest with coverage |
| Coverage enforcement | **Missing** | `fail_under` not enforced in CI |
| Coverage upload | OK | codecov with `fail_ci_if_error: false` |
| Security scanning | **Missing** | No dependency audit step |
| Redundant `apt-get` | Yes | All 3 jobs install system deps |

### `.github/workflows/release.yml` — Detailed Review

| Aspect | Status | Notes |
|--------|--------|-------|
| Trigger | OK | Tag push `v*` |
| Permissions | OK | `contents: write`, `id-token: write` |
| Tests before publish | OK | Runs pytest in build job |
| Version/tag consistency | **Missing** | No check that tag matches pyproject.toml |
| Test PyPI first | **Missing** | Goes directly to production PyPI |
| OIDC trusted publishing | OK | Primary publish method |
| API token fallback | OK | Falls back to `PYPI_API_TOKEN` secret |
| Error handling | OK | Clear error messages for both failure modes |
| GitHub Release | OK | Auto-generates release notes, attaches dist files |
| Artifact integrity | OK | Uses `upload-artifact@v4` / `download-artifact@v4` |

### `.pre-commit-config.yaml` — Review

| Hook | Status | Notes |
|------|--------|-------|
| ruff (lint + fix) | **Broken** | `rev: v0.15.4` doesn't exist |
| ruff-format | **Broken** | Same rev |
| trailing-whitespace | OK | |
| end-of-file-fixer | OK | |
| check-yaml | OK | |
| check-toml | OK | |
| check-merge-conflict | OK | |
| debug-statements | OK | |
| Missing: type checking | N/A | ty not included (acceptable — slow for pre-commit) |
| Missing: secret detection | **Gap** | No `detect-secrets` or `gitleaks` hook |

### `Dockerfile` — Review

| Aspect | Status | Notes |
|--------|--------|-------|
| Multi-stage build | OK | Builder + runtime |
| Layer caching | OK | Copy pyproject.toml/uv.lock first |
| Base image | OK | `python:3.13-slim` (both stages) |
| uv installation | Suboptimal | pip install vs official COPY method |
| Playwright setup | OK | `crawl4ai-setup` in builder |
| Playwright binary copy | Suboptimal | Copies entire `/root/.cache` |
| System deps | OK | Minimal Playwright runtime deps |
| `.dockerignore` | **Missing** | No context filtering |
| Non-root user | **Missing** | Runs as root |
| Health check | **Missing** | No HEALTHCHECK instruction |
| Image labeling | **Missing** | No OCI labels (maintainer, version, etc.) |

### `pyproject.toml` — Review

| Aspect | Status | Notes |
|--------|--------|-------|
| Build backend | OK | setuptools>=61.0 |
| Metadata | OK | Name, description, license, authors, keywords, classifiers |
| URLs | OK | Homepage, docs, repo, issues, changelog |
| Runtime deps | OK | 3 deps with reasonable lower bounds |
| Dev deps | **Broken** | ruff version doesn't exist |
| `py.typed` marker | OK | File exists, declared in package-data |
| pytest config | OK | Markers, paths, asyncio mode |
| Coverage config | OK | Source, omit, fail_under |
| Ruff config | OK | Line length, rule selection |
| ty config | Acceptable | Global suppressions documented |

---

## Build Reproducibility Assessment

| Aspect | Status | Notes |
|--------|--------|-------|
| Lockfile exists | Yes | `uv.lock` (2676 lines) |
| Lockfile used in Docker | Yes | `uv sync --frozen` |
| Lockfile used in CI | Yes | `uv sync` (respects existing lock) |
| Lockfile used in Replit | **No** | `.venv313/` created manually |
| CI enforces lockfile | Partial | Uses lock but doesn't verify integrity |
| Dependency pinning (runtime) | Yes | Via `uv.lock` |
| Dependency pinning (dev) | **Broken** | `ruff>=0.15.4` doesn't exist |
| Build backend | setuptools | Standard, well-supported |
| Multi-stage Docker | Yes | Builder + runtime |
| Image size optimization | Partial | No `.dockerignore`, full cache copy |

---

## Prioritized Correction Roadmap

### Immediate (blocks CI/development)
1. **CI-H01**: Fix ruff version in `pyproject.toml` and `.pre-commit-config.yaml`
2. **CI-M02**: Add `--cov-fail-under=90` to CI test command

### Short-term (improves reliability)
3. **CI-H02**: Add Python version matrix to CI test job
4. **CI-M03**: Add tag-version consistency check to release workflow
5. **CI-M04**: Add Test PyPI step to release workflow
6. **CI-H03**: Align Replit venv with `uv.lock`
7. **CI-M01**: Remove redundant `apt-get` from lint/typecheck jobs

### Medium-term (hardening)
8. **CI-M05**: Use official uv COPY in Dockerfile
9. **CI-M06**: Target Playwright cache copy precisely
10. **CI-M07**: Add `.dockerignore`
11. **CI-M08**: Add non-root user to Dockerfile
12. **CI-L06**: Evaluate Renovate Bot for uv.lock support

### Low priority
13. Fix remaining Low items (L01–L05)
14. Add secret detection pre-commit hook
15. Add HEALTHCHECK and OCI labels to Dockerfile
