# Plan

Pin Python 3.13 in `.python-version` and CI. Keep truncation inside a valid JSON document. Map live-tool options onto the crawl4ai fields that actually run the browser. Fail closed in `_validate_url` and apply that check to discovered URLs. Make the image command keep the loopback default unless `--host` is appended. Correct the instructions that described a different server.

Verify with `uv run pytest`, `uv run ruff check`, `uv run ruff format --check`, and `uv run ty check` on Python 3.13, then start stdio and HTTP long enough to see the process stay up.
