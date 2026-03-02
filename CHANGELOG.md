# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [0.2.0] - 2026-03-02

### Added

- New tools: `crawl_url`, `crawl_many`, `deep_crawl`, `extract_data`, `take_screenshot`, `get_links`, `get_page_info`, `execute_js`.
- Two MCP resources: `config://server` and `crawl4ai://version`.
- Lifespan-managed `AsyncWebCrawler` singleton for efficient browser reuse across all tool calls.
- Tool annotations (readOnlyHint, destructiveHint, idempotentHint, openWorldHint) on all tools.
- HTTP transport support via `--transport http --host <host> --port <port>`.

### Changed

- Rewrote entire server with FastMCP v3 and crawl4ai's `AsyncWebCrawler`.
- Dependencies reduced from 30+ to 2 (`fastmcp>=3.0.0`, `crawl4ai>=0.8.0`).
- Minimum Python version raised to 3.13+.

### Removed

- Custom aiohttp/BeautifulSoup implementation.
- CrawlerManager, HttpClientManager, MemoryAdaptiveConcurrencyManager, DomainAwareRateLimiter, SitemapProcessor, URLFilter.
- `core/`, `models/`, `utils/` module directories (all functionality now in `server.py`).
- Pydantic v1, raw MCP SDK, aiohttp, BeautifulSoup, HTTPX, Markdownify dependencies.
- YAML configuration file support.
- Old tool names: `batch_crawl`, `extract_structured_data`, `get_page_metadata`, `save_website`, `generate_knowledge_base`.

---

## [0.1.0] - 2025-04-07

### Added

- Initial release with custom MCP SDK implementation.
- Core tools: `crawl_url`, `deep_crawl`.
- STDIO and HTTP/SSE transport support.
- Basic configuration via `config.yaml`.
