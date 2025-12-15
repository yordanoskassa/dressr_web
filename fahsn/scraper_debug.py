"""
Debug scraper - capture what H&M page looks like
"""

import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

async def debug_hm():
    url = "https://www2.hm.com/en_us/search-results.html?q=sweater&department=ladies_all&image=stillLife"
    
    print("🔍 Debugging H&M page...")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1920, "height": 1080},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
        )
        page = await context.new_page()
        
        # Navigate
        await page.goto(url, wait_until="networkidle", timeout=60000)
        await page.wait_for_timeout(5000)
        
        # Scroll a bit
        await page.evaluate("window.scrollBy(0, 500)")
        await page.wait_for_timeout(2000)
        
        # Take screenshot
        await page.screenshot(path="debug_screenshot.png", full_page=True)
        print("📸 Saved screenshot: debug_screenshot.png")
        
        # Save HTML
        html = await page.content()
        with open("debug_page.html", "w") as f:
            f.write(html)
        print("📄 Saved HTML: debug_page.html")
        
        # Print page title and URL
        title = await page.title()
        print(f"📌 Page title: {title}")
        print(f"📌 Current URL: {page.url}")
        
        # Check for common selectors
        selectors_to_check = [
            "article",
            "[class*='product']",
            "[class*='item']",
            "img",
            "[data-articlecode]",
            ".hm-product-item",
            "li.product-item"
        ]
        
        print("\n🔎 Selector check:")
        for sel in selectors_to_check:
            elements = await page.query_selector_all(sel)
            print(f"   {sel}: {len(elements)} elements")
        
        # Get all image sources
        images = await page.query_selector_all("img")
        print(f"\n🖼️ Found {len(images)} images. First 5 sources:")
        for i, img in enumerate(images[:5]):
            src = await img.get_attribute("src")
            print(f"   {i+1}. {src[:100] if src else 'None'}...")
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(debug_hm())

