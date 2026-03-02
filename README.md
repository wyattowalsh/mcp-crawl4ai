<div align="center">

# Crawl4AI-MCP

<img src="assets/img/logo.png" alt="Crawl4AI-MCP Logo" width="200"/>

*A Model Context Protocol server for web crawling powered by Crawl4AI*

[![Python 3.13+](https://img.shields.io/badge/python-3.13+-blue.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-compatible-green.svg?style=for-the-badge)](https://modelcontextprotocol.ai)
[![Documentation](https://img.shields.io/badge/docs-online-brightgreen.svg?style=for-the-badge)](https://wyattowalsh.github.io/crawl4ai-mcp/)

</div>

## Overview

**Crawl4AI-MCP** is a Model Context Protocol server that gives AI systems access to the live web. Built on [FastMCP v3](https://github.com/jlowin/fastmcp) and [Crawl4AI](https://github.com/unclecode/crawl4ai), it exposes 8 tools and 2 resources through the standardized MCP interface, backed by a lifespan-managed headless Chromium browser.

**Only 2 runtime dependencies** &mdash; `fastmcp` and `crawl4ai`.

**[Documentation site &rarr;](https://wyattowalsh.github.io/crawl4ai-mcp/)**

## Features

- **Full MCP compliance** via FastMCP v3 with tool annotations
- **8 focused tools** for crawling, extraction, screenshots, and more
- **2 resources** exposing server configuration and version info
- **Headless Chromium** managed as a lifespan singleton (start once, reuse everywhere)
- **Multiple transports** &mdash; stdio (default) and HTTP
- **LLM-optimized output** &mdash; markdown, cleaned HTML, raw HTML, or plain text
- **Structured data extraction** using CSS selector schemas
- **Breadth-first deep crawling** with configurable depth and page limits

## Tools

| Tool | Description |
| :--- | :--- |
| `crawl_url` | Crawl a single web page and extract its content |
| `crawl_many` | Crawl up to 20 URLs concurrently and return all results |
| `deep_crawl` | Breadth-first recursive crawl from a seed URL |
| `extract_data` | Extract structured data from a page using a CSS selector schema |
| `take_screenshot` | Capture a full-page PNG screenshot |
| `get_links` | Extract and categorize internal/external links on a page |
| `get_page_info` | Get page metadata (title, description, language, link/media counts) |
| `execute_js` | Execute JavaScript on a rendered page and return the resulting content |

## Installation

### pip

```bash
pip install crawl4ai-mcp
crawl4ai-setup          # installs Playwright browsers
```

### uv

```bash
uv add crawl4ai-mcp
crawl4ai-setup
```

### Development

```bash
git clone https://github.com/wyattowalsh/crawl4ai-mcp.git
cd crawl4ai-mcp
uv sync --group dev
crawl4ai-setup
```

## Quick Start

### Run with stdio (default)

```bash
crawl4ai-mcp
# or
python -m crawl4ai_mcp.server
```

### Run with HTTP transport

```bash
crawl4ai-mcp --transport http --port 8000
```

### Claude Desktop configuration

Add to your Claude Desktop MCP settings (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "crawl4ai": {
      "command": "crawl4ai-mcp",
      "args": ["--transport", "stdio"]
    }
  }
}
```

### MCP Inspector

```bash
npx @modelcontextprotocol/inspector crawl4ai-mcp
```

## Architecture

Crawl4AI-MCP uses a simple, single-module design:

- **FastMCP v3** handles MCP protocol negotiation, transport, tool/resource registration, and message routing
- **Lifespan-managed AsyncWebCrawler** starts a headless Chromium browser once at server startup and shares it across all tool invocations, then shuts it down cleanly on exit
- **8 tool functions** are decorated with `@mcp.tool()` and call directly into the crawl4ai `AsyncWebCrawler` API
- **2 resource functions** are decorated with `@mcp.resource()` and return JSON

There are no intermediate manager classes or custom HTTP clients. The server delegates all crawling to crawl4ai's `AsyncWebCrawler` and all protocol handling to FastMCP.

## Testing

```bash
uv run pytest
```

## Contributing

See the [Contributing Guide](https://wyattowalsh.github.io/crawl4ai-mcp/docs/contributing) for details on setting up your development environment, coding standards, and the pull request process.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Crawl4AI-MCP** &mdash; *Connecting AI to the Live Web*

</div>
