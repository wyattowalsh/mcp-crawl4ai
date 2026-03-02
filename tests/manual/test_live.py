"""Manual live test — requires crawl4ai-setup (browser installed).

Run: uv run python tests/manual/test_live.py
"""

from __future__ import annotations

import asyncio
import json

from fastmcp import Client

from crawl4ai_mcp.server import mcp


async def main() -> None:
    async with Client(mcp) as c:
        # ── Discovery ──────────────────────────────────────────────
        tools = await c.list_tools()
        resources = await c.list_resources()
        prompts = await c.list_prompts()
        print(f"Tools ({len(tools)}): {sorted(t.name for t in tools)}")
        print(f"Resources ({len(resources)}): {sorted(str(r.uri) for r in resources)}")
        print(f"Prompts ({len(prompts)}): {sorted(p.name for p in prompts)}")
        print()

        # ── Resources ──────────────────────────────────────────────
        config = await c.read_resource("config://server")
        print(f"config://server → {config[0].text[:200]}")
        version = await c.read_resource("crawl4ai://version")
        print(f"crawl4ai://version → {version[0].text}")
        print()

        # ── crawl_url ──────────────────────────────────────────────
        result = await c.call_tool("crawl_url", {"url": "https://example.com"})
        text = result.content[0].text
        print(f"crawl_url → {len(text)} chars, starts: {text[:120]}...")
        print()

        # ── get_page_info ──────────────────────────────────────────
        result = await c.call_tool("get_page_info", {"url": "https://example.com"})
        data = json.loads(result.content[0].text)
        print(f"get_page_info → title={data.get('title')!r}, lang={data.get('language')!r}")
        print()

        # ── get_links ──────────────────────────────────────────────
        result = await c.call_tool("get_links", {"url": "https://example.com"})
        data = json.loads(result.content[0].text)
        print(f"get_links → internal={data['total_internal']}, external={data['total_external']}")
        print()

        # ── crawl_many ─────────────────────────────────────────────
        result = await c.call_tool(
            "crawl_many",
            {"urls": ["https://example.com", "https://httpbin.org/get"]},
        )
        data = json.loads(result.content[0].text)
        print(f"crawl_many → {len(data)} results")
        for item in data:
            print(
                f"  {item['url']}: success={item['success']}, content={len(item.get('content', ''))} chars"
            )
        print()

        # ── take_screenshot ────────────────────────────────────────
        result = await c.call_tool("take_screenshot", {"url": "https://example.com"})
        data = json.loads(result.content[0].text)
        print(f"take_screenshot → base64 length={len(data['screenshot_base64'])}")
        print()

        # ── Prompts ────────────────────────────────────────────────
        prompt = await c.get_prompt("summarize_page", {"url": "https://example.com"})
        print(f"summarize_page prompt → {prompt.messages[0].content.text}")

        prompt = await c.get_prompt(
            "build_extraction_schema",
            {"url": "https://example.com", "data_type": "products"},
        )
        print(f"build_extraction_schema prompt → {prompt.messages[0].content.text}")

        prompt = await c.get_prompt(
            "compare_pages",
            {"url1": "https://a.com", "url2": "https://b.com"},
        )
        print(f"compare_pages prompt → {prompt.messages[0].content.text}")

    print("\n✅ All live tests passed!")


if __name__ == "__main__":
    asyncio.run(main())
