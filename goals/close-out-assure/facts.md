# Facts

Adopted from the recommended interview answers when work continued without a submitted Plannotator session.

- The documented checkout starts with `uv run mcp-crawl4ai` on Python 3.13.
- `uv run pytest`, `uv run ruff check`, `uv run ruff format --check`, and `uv run ty check` pass.
- A truncated scrape or crawl envelope is valid JSON and stays within the response budget.
- `timeout_ms` sets crawl4ai `page_timeout`. Viewport is applied on the browser config. Requested artifact types turn on the matching capture flags. Deep-crawl depth is read from result metadata.
- A URL that does not resolve, a non-public address, or a backslash in the URL is rejected before the fetch. Discovered deep-crawl URLs use the same check.
- The HTTP default is loopback. Docker publishes on another interface only when `--host` is passed.
- The README and agent guide describe 4 tools, 3 runtime dependencies, `uv run`, and `http://127.0.0.1:8000/mcp`.
