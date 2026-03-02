"""Crawl4AI MCP Server — Model Context Protocol server for web crawling."""

from importlib.metadata import PackageNotFoundError, version

try:
    __version__ = version("mcp-crawl4ai")
except PackageNotFoundError:
    __version__ = "0.0.0"

__all__ = ["__version__"]
