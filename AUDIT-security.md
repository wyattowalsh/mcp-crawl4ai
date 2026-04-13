# Security Surface Audit — mcp-crawl4ai

**Date**: 2026-04-13
**Scope**: MCP server (`mcp_crawl4ai/server.py`), dependency manifest (`uv.lock`), Docker build (`Dockerfile`), HTTP transport surface.
**Out of scope**: Crawl4AI library internals, documentation site, fix implementation.
**Methodology**: Static code analysis + empirical validation (Python REPL). Findings tagged `[reproduced]` were empirically tested; `[static-analysis]` were identified via code review; `[theoretical]` are plausible but unconfirmed.

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 2     |
| High     | 4     |
| Medium   | 7     |
| Low      | 5     |
| **Total** | **18** |

---

## Critical

### SEC-C01: `execute_js` — Unrestricted arbitrary JavaScript execution in a real browser `[static-analysis]`

**Location**: `server.py:3685–3786`

The `execute_js` tool accepts arbitrary JavaScript from any MCP client and executes it inside a full Chromium browser context. This is an intentional feature but constitutes the single highest-risk surface in the server:

- **Page-context scope**: Arbitrary JS runs with full DOM/cookie/storage access for the target page. An attacker-directed client can steal session cookies, modify page content, or exfiltrate data from any crawled origin.
- **Browser-sandbox escape risk**: While Chromium sandbox mitigates OS-level escape, the tool still permits:
  - Reading `document.cookie` (including non-HttpOnly cookies)
  - Accessing `localStorage` / `sessionStorage`
  - Making arbitrary `fetch()` / `XMLHttpRequest` calls from the page origin
  - Navigating the page away to an attacker-controlled URL
- **Session persistence**: When combined with `session_id`, JS execution state persists across calls, enabling multi-step attack chains (login → exfiltrate).
- **No CSP enforcement**: The server does not inject a Content Security Policy into crawled pages.

**Risk**: An MCP client (or a compromised LLM) can weaponize the browser as a proxy to attack internal services, exfiltrate data, or perform actions on behalf of crawled origins.

**Remediation**:
1. Gate `execute_js` behind a capability flag (default: disabled).
2. Require explicit opt-in via an environment variable (`MCP_CRAWL4AI__CAPABILITIES__ALLOW_JS_EXECUTION=true`).
3. Consider a JS allowlist or sandboxed evaluation context.
4. Log all JS execution with the full code payload for audit trails.

### SEC-C02: HTTP transport has zero authentication `[reproduced]`

**Location**: `server.py:4085–4092`, `Dockerfile:47`

The HTTP transport (`--transport http`) has no authentication mechanism:

- No API key, bearer token, or mTLS requirement.
- The Dockerfile CMD defaults to `--host 0.0.0.0`, binding to all interfaces.
- The server emits a stderr warning when bound to non-loopback (`server.py:4087`), but the Docker image silently exposes an unauthenticated HTTP endpoint on port 8000.
- Any network-adjacent attacker can invoke all MCP tools, including `execute_js`, `scrape`, and `deep_crawl`.

**Risk**: Complete server takeover by any network-reachable client. The browser becomes an open proxy for SSRF, credential theft, and deep crawling of internal networks.

**Remediation**:
1. Add a mandatory `--auth-token` / `MCP_CRAWL4AI_AUTH_TOKEN` for HTTP transport.
2. Reject all requests without a valid `Authorization: Bearer <token>` header.
3. Default the Dockerfile to `--host 127.0.0.1` and require explicit override.
4. Document that HTTP transport MUST be deployed behind a reverse proxy with TLS.

---

## High

### SEC-H01: SSRF — DNS rebinding TOCTOU window (from server audit H-02) `[static-analysis]`

**Location**: `server.py:365–399`

`_validate_url` resolves DNS via `socket.getaddrinfo` at validation time, but the actual browser navigation happens later through Crawl4AI/Playwright. Between validation and navigation, a DNS record can change (DNS rebinding), redirecting the browser to an internal IP.

**Attack scenario**:
1. Attacker controls DNS for `evil.example.com`, TTL=0.
2. First resolution → `93.184.216.34` (public) → passes `_validate_url`.
3. Browser resolves again → `169.254.169.254` (cloud metadata) → access granted.

**Risk**: Cloud metadata service access (AWS `169.254.169.254`, GCP, Azure), internal service enumeration, credential theft from instance metadata.

**Remediation**:
1. Pin resolved IPs and pass them to the browser (requires Playwright proxy or connect-to support).
2. Alternatively, validate the *response* URL after navigation and abort if it points to a private IP.
3. Use a DNS resolver that pins results (e.g., a local DNS proxy with rebind protection).

### SEC-H02: SSRF — DNS resolution failure silently passes through `[reproduced]`

**Location**: `server.py:387–388`

When `socket.getaddrinfo` raises `OSError`, `_validate_url` returns without error, allowing the URL through. The browser may later resolve the hostname using a different resolver that succeeds.

```python
except OSError:  # AUDIT: M-02
    return  # ← URL is accepted
```

**Risk**: If the server's system resolver fails but the browser's resolver succeeds (different DNS servers, different network namespace), private IPs can be reached.

**Remediation**: Reject URLs where DNS resolution fails. An unresolvable hostname should be an error, not a pass.

### SEC-H03: Deep crawl discovered URLs bypass SSRF validation (from server audit H-03) `[static-analysis]`

**Location**: `server.py:2460`, `_build_deep_crawl_strategy`

`_validate_url` is called on the initial seed URL, but URLs discovered during deep crawl (followed links) are handled by Crawl4AI's `BFSDeepCrawlStrategy`/`DFSDeepCrawlStrategy` without passing through `_validate_url`. A public page can contain links to `http://169.254.169.254/` or `http://internal-service/`, and the crawler will follow them.

**Risk**: SSRF via second-order URL injection. An attacker hosts a page with links to internal services, submits it as a deep crawl seed, and the server crawls the internal targets.

**Remediation**:
1. Implement a URL filter callback that applies `_validate_url` to every discovered URL before crawling.
2. Pass the filter to `URLPatternFilter` or wrap the deep crawl strategy.

### SEC-H04: `socket.getaddrinfo` blocks the async event loop (from server audit H-04) `[reproduced]`

**Location**: `server.py:386`

`socket.getaddrinfo` is a synchronous, blocking call. In the async server context, it blocks the entire event loop during DNS resolution, which can take seconds (especially with timeouts or slow DNS).

**Risk**: Denial of service. A burst of requests with slow-resolving hostnames can stall the entire server. Compounded by the 5-minute timeout (`RUNTIME_TIMEOUT_MS_MAX = 300_000`).

**Remediation**: Use `asyncio.get_event_loop().getaddrinfo()` or `aiodns` for non-blocking DNS resolution.

---

## Medium

### SEC-M01: No session count limit — unbounded memory growth

**Location**: `server.py:282`

`session_registry` is an unbounded `dict`. Each session creates a registry entry with TTL tracking state. While sessions expire after `SESSION_TTL_SECONDS_DEFAULT` (900s), a client can create sessions faster than they expire.

**Attack**: Create 10,000+ sessions in rapid succession → memory exhaustion → OOM kill.

**Risk**: Denial of service via memory exhaustion.

**Remediation**: Add `MAX_SESSIONS` constant (e.g., 100) and reject new sessions when the limit is reached.

### SEC-M02: No rate limiting on tool invocations

**Location**: All tool endpoints

The server has no per-client or global rate limiting on tool calls. A malicious client can:
- Invoke `scrape` in a tight loop → browser tab exhaustion.
- Invoke `deep_crawl` with `max_pages=100` and `max_depth=5` → 100 concurrent page loads.
- Chain `execute_js` calls → sustained CPU/memory pressure.

**Risk**: Resource exhaustion, denial of service, elevated cloud costs.

**Remediation**: Implement a token-bucket or sliding-window rate limiter per session/client.

### SEC-M03: Deep crawl amplification factor

**Location**: `server.py:700–701`

Deep crawl allows `max_depth=5` and `max_pages=100`. With the default concurrency of 5, a single `deep_crawl` call can trigger up to 100 browser page loads. Combined with `scrape_many`'s `SCRAPE_TARGETS_MAX_ITEMS = 20` and concurrency of 20, the amplification from a single MCP call is substantial.

**Risk**: Resource exhaustion, potential use as a DDoS reflector against target sites.

**Remediation**:
1. Lower `max_pages` default/maximum (e.g., 50).
2. Add a global concurrent-crawl counter that limits total browser tabs.
3. Implement per-IP/per-domain rate limiting.

### SEC-M04: `_sanitize_artifact_value` — unbounded recursion on nested payloads

**Location**: `server.py:1365`

The function recurses into nested dicts/lists without a depth limit. A crafted artifact payload with 1000+ nesting levels hits Python's recursion limit (default: 1000), raising `RecursionError`.

**Risk**: Server crash (unhandled `RecursionError` in the async handler).

**Remediation**: Add a `max_depth` parameter (default: 20) and return a placeholder at depth limit.

### SEC-M05: `_next_opaque_artifact_id` — theoretical infinite loop `[theoretical]`

**Location**: `server.py:1412–1418`

The `while True` loop generates random IDs until a non-colliding one is found. With `secrets.token_urlsafe(12)` (72 bits of entropy), collision is astronomically unlikely, but there is no loop counter or timeout.

**Risk**: Negligible in practice, but violates defense-in-depth. If the random pool degrades, the server hangs.

**Remediation**: Add a loop counter (e.g., max 1000 iterations) and raise an error if exceeded.

### SEC-M06: URL filter patterns have no count limit

**Location**: `server.py:3083`

`_validate_deep_crawl_url_filter_patterns` validates individual pattern length (512 chars max) but imposes no limit on the number of patterns. A client can submit thousands of patterns, causing regex compilation overhead in `URLPatternFilter`.

**Risk**: CPU exhaustion during pattern compilation.

**Remediation**: Add `DEEP_CRAWL_FILTER_PATTERN_MAX_COUNT = 50` and reject lists exceeding it.

### SEC-M07: `config://server` resource exposes internal configuration

**Location**: `server.py:3935–3956`

The `config://server` resource dumps all `ServerSettings` including limits, defaults, policies, and capabilities. This information disclosure helps an attacker tune attacks:
- Knowing `max_response_chars` helps craft payloads that bypass truncation.
- Knowing `session_ttl_seconds` helps time session-exhaustion attacks.
- Knowing `artifact_max_total_bytes` helps craft OOM attacks just under the limit.

**Risk**: Information disclosure aiding targeted attacks.

**Remediation**: Return only the subset needed for client functionality (version, tool names, output format options). Omit internal limits and policies.

---

## Low

### SEC-L01: URL credentials not stripped from diagnostic output

**Location**: `server.py:1858–1892`

The `_extract_bounded_diagnostics` function includes `redirected_url` in its output. If a page redirects to a URL containing credentials (e.g., `http://user:pass@host/`), these are exposed in the tool response to the MCP client.

**Risk**: Credential leakage via redirect URLs in diagnostic metadata.

**Remediation**: Strip userinfo from URLs before including them in diagnostics.

### SEC-L02: Subprocess calls use fixed command names (no injection)

**Location**: `server.py:300`, `server.py:4074`

Both `subprocess.run` calls use hardcoded `["crawl4ai-setup"]` with `capture_output=True` and no `shell=True`. No user input reaches the command arguments. This is secure as-is.

**Status**: No action needed. Noted for completeness.

### SEC-L03: No TLS between server and Crawl4AI browser

**Location**: Implicit (Playwright browser communication)

The Playwright browser communicates with the server process over a local WebSocket. While this is standard Playwright behavior, on shared-host deployments an attacker with local network access could intercept browser traffic.

**Risk**: Very low — requires local network access and is standard for all Playwright-based tools.

**Remediation**: Document as an accepted risk for single-tenant deployments.

### SEC-L04: Artifact TTL up to 86,400 seconds (24 hours)

**Location**: `server.py:98`

`ARTIFACT_TTL_SECONDS_MAX = 86_400` allows artifacts (including MHTML snapshots and network logs) to persist for 24 hours in memory. With `ARTIFACT_MAX_TOTAL_BYTES_MAX = 50_000_000` (50 MB), long-lived artifacts can consume significant memory.

**Risk**: Memory pressure over extended deployment periods.

**Remediation**: Consider a lower default TTL (e.g., 5 minutes) or add disk-backed artifact storage.

### SEC-L05: `_truncate` corrupts JSON envelopes

**Location**: `server.py:353–362`

While primarily a correctness bug (server audit H-01), truncation of JSON responses creates a security-adjacent issue: the MCP client receives malformed JSON that may be misinterpreted. Depending on the client's error handling, truncated JSON could lead to unexpected parsing behavior.

**Risk**: Low — client-side impact only, but unpredictable.

**Remediation**: Fix truncation to produce valid JSON (truncate individual content fields, not the envelope).

---

## SSRF Deep Dive — Vector Analysis

### Vectors tested against `_validate_url`

| Vector | Example | Result | Notes |
|--------|---------|--------|-------|
| Direct private IPv4 | `http://127.0.0.1/` | **Blocked** | Caught by `_is_disallowed_address` direct path |
| Direct private IPv6 | `http://[::1]/` | **Blocked** | `::1/128` in `_PRIVATE_NETS` |
| IPv4-mapped IPv6 | `http://[::ffff:127.0.0.1]/` | **Blocked** | `is_global=False` catches it |
| Decimal IP (127.0.0.1) | `http://2130706433/` | **Blocked** | Falls to DNS path; `getaddrinfo` resolves to `127.0.0.1`; re-checked |
| Octal IP | `http://0177.0.0.1/` | **Blocked** | Falls to DNS path; `getaddrinfo` resolves to `127.0.0.1`; re-checked |
| `localhost` hostname | `http://localhost/` | **Blocked** | String match before DNS |
| `.localhost` suffix | `http://foo.localhost/` | **Blocked** | `.endswith(".localhost")` check |
| Credentials in URL | `http://user:pass@127.0.0.1/` | **Blocked** | `urlparse.hostname` strips userinfo correctly |
| Percent-encoded dots | `http://127%2e0%2e0%2e1/` | **Passes*** | `ipaddress` rejects it, DNS likely fails → OSError → silent pass (SEC-H02). Browser may not resolve it either. |
| nip.io rebind | `http://127.0.0.1.nip.io/` | **Blocked** | DNS resolves to `127.0.0.1`; re-checked against `_PRIVATE_NETS` |
| Link-local (metadata) | DNS resolving to `169.254.169.254` | **Blocked** | `is_global=False` catches link-local |
| `fc00::/7` (ULA) | DNS resolving to `fc00::1` | **Blocked** | In `_PRIVATE_NETS` |
| DNS rebinding | TTL=0, first→public, second→private | **VULNERABLE** | TOCTOU gap (SEC-H01) |
| Deep crawl 2nd-order | Seed page links to internal URL | **VULNERABLE** | Discovered URLs not validated (SEC-H03) |
| HTTP redirect to private | Public URL 302→`http://169.254.169.254/` | **VULNERABLE** | Browser follows redirect; no post-navigation check |

\* Percent-encoded dots: The URL passes validation (OSError silent pass), but the browser also likely cannot navigate to it. Low practical risk.

### Additional SSRF vector: HTTP redirect-based bypass

**Not previously documented.** If `http://evil.com/` returns `302 Location: http://169.254.169.254/latest/meta-data/`, the browser follows the redirect. `_validate_url` only checks the initial URL. The redirected URL is logged in diagnostics but never re-validated.

**Severity**: High (subsumed into SEC-H01 risk rating, as the fix — post-navigation URL validation — addresses both DNS rebinding and redirect-based SSRF).

---

## Input Injection Audit

### `execute_js` (SEC-C01)
Arbitrary JavaScript execution — see Critical section above.

### CSS selectors (`css_selector` parameter)
**Location**: `server.py:539`, used in `CrawlerRunConfig.css_selector`

CSS selectors are passed directly to Playwright's page evaluation. Playwright treats CSS selectors as strings for `querySelector`/`querySelectorAll`. Malformed CSS selectors cause a Playwright error (caught and reported as `ToolError`), but do not enable code injection. CSS selectors cannot execute JavaScript in Playwright's API.

**Risk**: None — CSS injection is not applicable in this context.

### XPath selectors (`extraction_mode: "xpath"`)
**Location**: `server.py:1922–1960`, `_validate_xpath_schema`

XPath expressions are validated for structure (baseSelector must be a string, fields must have names) but the XPath content itself is not restricted. While XPath injection in a browser context (DOM XPath) cannot execute arbitrary code, an attacker can extract unintended content from the page DOM.

**Risk**: Low — limited to DOM content extraction, which is the tool's intended purpose.

### `wait_for` parameter
**Location**: `server.py:571`

The `wait_for` parameter accepts both CSS selectors (e.g., `.loaded`) and JavaScript expressions prefixed with `js:` (e.g., `js:() => document.readyState === "complete"`). When prefixed with `js:`, Crawl4AI evaluates the expression in the page context via `page.wait_for_function()`. This is a secondary JavaScript injection vector available on all tools (`scrape`, `crawl_url`, `scrape_many`, `deep_crawl`), not just `execute_js`.

**Risk**: Medium — functionally equivalent to `execute_js` but available on every tool. Any `wait_for` value starting with `js:` enables arbitrary page-context JavaScript. Should be gated by the same capability flag as `execute_js`, or `js:` prefix should be rejected when JS execution is disabled.

---

## Dependency Vulnerability Scan

### Pinned versions (from `uv.lock`)

| Package | Version | Role | Known Issues |
|---------|---------|------|--------------|
| crawl4ai | 0.8.0 | Core crawling engine | First stable release; no published CVEs as of audit date. Young library — limited security review history. |
| fastmcp | 3.0.2 | MCP framework | No published CVEs. HTTP transport relies on uvicorn/starlette. |
| pydantic | 2.12.5 | Data validation (via fastmcp) | No critical CVEs in this version. |
| pydantic-settings | 2.13.1 | Env-based configuration | No known CVEs. |
| patchright | 1.58.0 | Browser automation (via crawl4ai) | Fork of Playwright; inherits Playwright's security posture. Less community review than upstream Playwright. |
| uvicorn | 0.41.0 | ASGI server for HTTP transport | No critical CVEs in this version. |
| starlette | 0.52.1 | HTTP framework (via fastmcp) | Check GHSA — Starlette has had path traversal and multipart CVEs historically. |
| httpx | 0.28.1 | HTTP client (via fastmcp) | No critical CVEs in this version. |
| aiohttp | 3.11.16 | Async HTTP (transitive) | Historically frequent CVEs; check GHSA for 3.11.x advisories. |
| beautifulsoup4 | 4.13.3 | HTML parsing (via crawl4ai) | No critical CVEs. |
| authlib | 1.6.8 | Auth library (transitive) | Not directly used by server. |

### Automated scan results

**Tool**: `pip-audit 2.10.0` — scanned installed packages against OSV/PyPI advisory database.
**Date**: 2026-04-13

```
Found 1 known vulnerability in 1 package
Name Version ID            Fix Versions
---- ------- ------------- ------------
pip  25.3    CVE-2026-1703 26.0

Skipped: setuptools 80.9.0.post0 (not found on PyPI)
```

**Result**: 1 vulnerability found in `pip` (build tool only, not a runtime dependency). All runtime dependencies (`crawl4ai`, `fastmcp`, `pydantic`, `pydantic-settings`, `patchright`, `uvicorn`, `starlette`, `httpx`, `aiohttp`, `beautifulsoup4`) have **zero known CVEs** per OSV database.

**Action**: Update `pip` in the build venv. No runtime impact.

### Supply chain considerations

1. **`patchright`** (Crawl4AI's Playwright fork): Less scrutinized than upstream `playwright`. Any vulnerability in Playwright affects patchright, but patchright patches may introduce new issues.
2. **Unpinned upper bounds**: `pyproject.toml` uses `>=` without upper bounds (`crawl4ai>=0.8.0`, `fastmcp>=3.0.0`). A `uv lock` update could pull in a compromised or breaking version.
3. **No `pip audit` / `osv-scanner` in CI**: No automated vulnerability scanning is configured.

**Remediation**:
1. Pin exact versions or use compatible-release specifiers (`~=`).
2. Add `pip-audit` or `osv-scanner` to CI pipeline.
3. Monitor Crawl4AI and patchright for security advisories.

---

## Transport Security Assessment

### HTTP transport (SEC-C02 expanded)

| Aspect | Status | Risk |
|--------|--------|------|
| Authentication | **None** | Critical |
| TLS/HTTPS | **None** (plain HTTP) | Critical when network-exposed |
| Rate limiting | **None** | High |
| Request size limits | **None** (relies on uvicorn defaults) | Medium |
| CORS | Depends on uvicorn/starlette defaults | Low |
| Bind address | `127.0.0.1` (CLI default), `0.0.0.0` (Docker default) | Docker default is dangerous |

### CLI default vs Docker default mismatch

The CLI parser defaults to `--host 127.0.0.1` (safe), but the Dockerfile uses `--host 0.0.0.0` (unsafe). This creates a false sense of security — developers test locally (loopback) but deploy publicly (all interfaces).

### stdio transport

The stdio transport inherits the security of the calling process. No additional attack surface beyond the MCP protocol itself.

---

## Resource Exhaustion Vectors

| Vector | Limit | Attack | Impact |
|--------|-------|--------|--------|
| Sessions | **Unbounded** (SEC-M01) | Rapid session creation | OOM |
| Artifacts | 250 total, 50 MB | Fill quota → legitimate artifacts rejected | DoS |
| Deep crawl | 100 pages × 5 depth | Single call → 100 browser tabs | CPU/memory exhaustion |
| Concurrent crawls | 20 (hard max) | 20 simultaneous scrape_many | Browser process overload |
| Tool call rate | **Unlimited** (SEC-M02) | Rapid tool invocation | CPU/network exhaustion |
| DNS resolution | Blocking (SEC-H04) | Slow DNS hostnames | Event loop stall |
| URL filter patterns | **Unlimited count** (SEC-M06) | 10,000 regex patterns | CPU exhaustion during compilation |
| Artifact recursion | **Unlimited depth** (SEC-M04) | Nested payload → RecursionError | Server crash |

---

## Prioritized Remediation Roadmap

### Immediate (before any production deployment)
1. **SEC-C02**: Add authentication to HTTP transport.
2. **SEC-C01**: Gate `execute_js` behind a capability flag (default: off).
3. **SEC-H02**: Reject URLs on DNS failure instead of silent pass-through.

### Short-term (next release)
4. **SEC-H01/Redirect**: Add post-navigation URL validation.
5. **SEC-H03**: Apply SSRF check to deep-crawl discovered URLs.
6. **SEC-H04**: Switch to async DNS resolution.
7. **SEC-M01**: Add session count limit.
8. **SEC-M02**: Add rate limiting.

### Medium-term
9. **SEC-M03**: Add global concurrent-tab limit.
10. **SEC-M04**: Add recursion depth limit to `_sanitize_artifact_value`.
11. **SEC-M06**: Add pattern count limit.
12. **SEC-M07**: Reduce `config://server` information disclosure.
13. Pin dependency versions and add vulnerability scanning.

### Low priority
14. **SEC-L01**: Strip credentials from diagnostic URLs.
15. **SEC-L04**: Lower default artifact TTL.
16. **SEC-L05**: Fix JSON truncation (server audit H-01).
