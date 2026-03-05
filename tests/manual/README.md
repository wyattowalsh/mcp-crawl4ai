# Manual / Live Tests

These tests require a running browser (Playwright/Chromium) and network access.

## Prerequisites

```bash
uv sync
crawl4ai-setup   # install browser
```

## Run

```bash
uv run python tests/manual/test_live.py
```

## What it exercises

| Component | Test |
|-----------|------|
| `scrape` | Single-target canonical envelope crawl |
| `crawl` | Multi-target list traversal envelope |
| `config://server` | Server config resource |
| `crawl4ai://version` | Version resource |
| `summarize_page` | Prompt template |

## Expected

All calls return without errors and produce non-empty outputs.
