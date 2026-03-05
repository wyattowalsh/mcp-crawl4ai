# AGENTS.md -- crawl4ai-mcp

AI agent instructions for this project.

## Stack

- **Runtime**: Python 3.13+
- **Server framework**: FastMCP v3 (`fastmcp>=3.0.0`)
- **Crawler**: crawl4ai (`crawl4ai>=0.8.0`) -- `AsyncWebCrawler` with Playwright/Chromium
- **Package manager**: `uv` (always use `uv run` / `uv add` / `uv sync`)
- **Test runner**: pytest with pytest-asyncio (`asyncio_mode = "auto"`)
- **Linter**: ruff
- **Type checker**: ty

## Key Files

| File | Purpose |
|------|---------|
| `crawl4ai_mcp/server.py` | **All** server logic -- 11 tools, 2 resources, 3 prompts, lifespan, auto-setup |
| `crawl4ai_mcp/__init__.py` | Package version via `importlib.metadata` |
| `pyproject.toml` | Project config, dependencies, tool config |
| `tests/conftest.py` | Test fixtures (mock crawler, client) |
| `tests/test_server.py` | 100+ tests -- all in-memory, no browser |
| `tests/manual/` | Manual live test scripts (require browser) |
| `crawl4ai_mcp/py.typed` | PEP 561 typed package marker |
| `.github/workflows/ci.yml` | GitHub Actions CI (test + lint + typecheck + Codecov) |
| `.github/workflows/release.yml` | Release workflow (build + PyPI publish + GitHub Release) |
| `.github/dependabot.yml` | Dependabot for pip + GitHub Actions |
| `.github/assets/img/` | Logo, icon, favicon images |
| `Dockerfile` | Container build for HTTP transport deployment |
| `.pre-commit-config.yaml` | Pre-commit hooks (ruff + pre-commit-hooks) |

## Commands

```bash
# Install
uv sync

# Install browser (first time -- or use crawl4ai-mcp --setup)
crawl4ai-mcp --setup

# Run (stdio -- default for Claude Desktop / MCP clients)
crawl4ai-mcp

# Run (HTTP -- defaults to 127.0.0.1; set --host explicitly for external exposure)
crawl4ai-mcp --transport http --port 8000

# Tests
uv run pytest

# Tests with coverage
uv run pytest --cov=crawl4ai_mcp

# Lint
uv run ruff check crawl4ai_mcp/

# Type check
uv run ty check crawl4ai_mcp/
```

## CI / Pre-commit

```bash
# Install pre-commit hooks
uv run pre-commit install

# Run pre-commit manually
uv run pre-commit run --all-files

# Build Docker image
docker build -t crawl4ai-mcp .

# Run via Docker (HTTP transport)
docker run -p 8000:8000 crawl4ai-mcp
```

## Architecture

```
FastMCP("crawl4ai")
  |-- lifespan: crawler_lifespan
  |     \-- AsyncWebCrawler singleton (headless Chromium)
  |-- 4 tools (all via ctx.lifespan_context["crawler"])
  |-- 2 resources (config://server, crawl4ai://version)
  \-- 3 prompts (summarize_page, build_extraction_schema, compare_pages)
```

## Tool Inventory

| Tool | Purpose |
|------|---------|
| `scrape` | Canonical single/batch scrape with shared option groups + JSON envelope |
| `crawl` | Canonical list/deep traversal crawl with shared option groups + JSON envelope |
| `close_session` | Close and cleanup a session-aware crawl state |
| `get_artifact` | Retrieve session-scoped captured artifact metadata/content |

## Prompt Inventory

| Prompt | Purpose |
|--------|---------|
| `summarize_page` | Crawl a URL and summarize its content |
| `build_extraction_schema` | Build a CSS schema for use with scrape |
| `compare_pages` | Crawl and compare two pages |

## MCP Server Rules (CRITICAL)

1. **No `print()` or stdout writes** -- stdout is the MCP transport
2. **`ToolError` for expected failures** -- always visible to clients
3. **`Annotated[type, Field(description=...)]`** on every tool parameter
4. **Verbose docstrings** -- 3-5 sentences: WHAT, WHEN, WHEN NOT, RETURNS
5. **`annotations` dict on every tool** -- at minimum `readOnlyHint` and `openWorldHint`
6. **`ctx: Context | None = None`** -- every tool testable without MCP runtime
7. **Truncate responses** -- 25K chars default, 5K per batch item

## Testing

Tests use `fastmcp.Client(mcp)` for in-memory testing -- no browser or network required.
The conftest patches `AsyncWebCrawler` with `AsyncMock`. All tests should pass in <60s.
PyPI package name: `mcp-crawl4ai` (CLI command: `crawl4ai-mcp`).
Coverage threshold: 90% (currently ~98%). Markers: `unit`, `smoke`, `integration`, `e2e`.

## What NOT to Do

- Do not add dependencies without `uv add`
- Do not write to stdout (`print()`) in any tool or resource
- Do not create new files in `crawl4ai_mcp/` -- keep all logic in `server.py`
- Do not use `asyncio.run()` inside tools -- the server handles the event loop
- Do not hardcode URLs or test against live websites
