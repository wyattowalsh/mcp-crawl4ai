"""Shared fixtures for crawl4ai-mcp tests."""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock, patch

import pytest
from fastmcp import Client

from crawl4ai_mcp.server import mcp

# ---------------------------------------------------------------------------
# Mock CrawlResult helpers
# ---------------------------------------------------------------------------


def _make_crawl_result(
    *,
    success: bool = True,
    url: str = "https://example.com",
    markdown_fit: str = "# Example Page\n\nThis is the fit markdown content.",
    markdown_raw: str = "# Example Page\n\nThis is the raw markdown content.",
    html: str = "<html><body><h1>Example</h1></body></html>",
    cleaned_html: str = "<div><h1>Example</h1></div>",
    links: dict | None = None,
    media: dict | None = None,
    metadata: dict | None = None,
    screenshot: str | None = "base64data",
    extracted_content: str | None = '[{"title": "Item"}]',
    status_code: int = 200,
    error_message: str | None = None,
    depth: int = 0,
) -> MagicMock:
    """Build a mock CrawlResult with sensible defaults."""
    result = MagicMock()
    result.success = success
    result.url = url
    result.html = html
    result.cleaned_html = cleaned_html
    result.screenshot = screenshot
    result.extracted_content = extracted_content
    result.status_code = status_code
    result.error_message = error_message
    result.depth = depth

    # MarkdownGenerationResult-like object
    md = MagicMock()
    md.fit_markdown = markdown_fit
    md.raw_markdown = markdown_raw
    result.markdown = md

    result.links = links or {
        "internal": [
            {"href": "https://example.com/about", "text": "About"},
            {"href": "https://example.com/contact", "text": "Contact"},
        ],
        "external": [
            {"href": "https://other.com", "text": "Other Site"},
        ],
    }
    result.media = media or {
        "images": [{"src": "https://example.com/img.png", "alt": "Logo"}],
        "videos": [],
        "audio": [],
    }
    result.metadata = metadata or {
        "title": "Example",
        "description": "Test page",
        "language": "en",
    }

    return result


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------


@pytest.fixture
def mock_crawl_result():
    """A successful CrawlResult mock."""
    return _make_crawl_result()


@pytest.fixture
def mock_failed_result():
    """A failed CrawlResult mock."""
    return _make_crawl_result(
        success=False,
        url="https://fail.example.com",
        error_message="Connection timeout",
        screenshot=None,
        extracted_content=None,
    )


@pytest.fixture
async def client(mock_crawl_result):
    """In-memory fastmcp Client with AsyncWebCrawler fully mocked out.

    The mock crawler's ``arun`` returns *mock_crawl_result* by default.
    ``arun_many`` returns a list containing the same result for each URL.
    The fixture yields the client **and** the mock crawler instance so tests
    can customise return values when needed.
    """
    mock_crawler = AsyncMock()
    mock_crawler.arun = AsyncMock(return_value=mock_crawl_result)
    mock_crawler.arun_many = AsyncMock(
        side_effect=lambda urls, **kw: [mock_crawl_result for _ in urls]
    )
    mock_crawler.start = AsyncMock()
    mock_crawler.close = AsyncMock()

    with patch("crawl4ai_mcp.server.AsyncWebCrawler", return_value=mock_crawler):
        async with Client(mcp) as c:
            yield c, mock_crawler
