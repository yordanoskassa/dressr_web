"""
H&M Product Scraper using Playwright (browser automation)
Bypasses anti-bot protection by using a real browser.
"""

import json
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright
import httpx

# Create products directory
PRODUCTS_DIR = Path("products")
PRODUCTS_DIR.mkdir(exist_ok=True)


async def scrape_hm_products(query: str = "sweater", department: str = "ladies_all", limit: int = 10):
    """
    Scrape H&M search results using a real browser.
    """
    
    url = f"https://www2.hm.com/en_us/search-results.html?q={query}&department={department}&image=stillLife"
    
    print("=" * 50)
    print("🛍️  H&M Product Scraper (Browser Mode)")
    print("=" * 50)
    print(f"\n🔍 Searching for '{query}' ({department})...")
    print(f"   URL: {url}\n")
    
    products = []
    
    async with async_playwright() as p:
        # Launch browser
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1920, "height": 1080},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = await context.new_page()
        
        # Go to search page
        print("🌐 Loading page...")
        await page.goto(url, wait_until="networkidle", timeout=60000)
        
        # Wait for products to load
        await page.wait_for_timeout(3000)
        
        # Scroll to load more products
        print("📜 Scrolling to load products...")
        for _ in range(3):
            await page.evaluate("window.scrollBy(0, 1000)")
            await page.wait_for_timeout(1000)
        
        # Extract product data
        print("📦 Extracting product data...")
        
        # Get all product articles
        product_elements = await page.query_selector_all('article.hm-product-item, li.product-item, article[data-articlecode]')
        
        if not product_elements:
            # Try alternative selectors
            product_elements = await page.query_selector_all('[class*="product"]')
        
        print(f"   Found {len(product_elements)} product elements")
        
        for i, element in enumerate(product_elements[:limit]):
            try:
                product = {"id": f"hm_{i}", "category": query}
                
                # Try to get article code
                article_code = await element.get_attribute("data-articlecode")
                if article_code:
                    product["id"] = article_code
                
                # Get product name
                name_el = await element.query_selector('h2, .item-heading, [class*="name"], [class*="title"]')
                if name_el:
                    product["name"] = await name_el.inner_text()
                else:
                    product["name"] = f"Sweater {i+1}"
                
                # Get price
                price_el = await element.query_selector('[class*="price"], .item-price')
                if price_el:
                    product["price"] = await price_el.inner_text()
                else:
                    product["price"] = "N/A"
                
                # Get image URL
                img_el = await element.query_selector('img')
                if img_el:
                    img_url = await img_el.get_attribute("src") or await img_el.get_attribute("data-src")
                    if img_url:
                        if img_url.startswith("//"):
                            img_url = "https:" + img_url
                        # Get higher resolution version
                        img_url = img_url.replace("_280.", "_640.").replace("_560.", "_640.")
                        product["image_url"] = img_url
                
                product["department"] = "women" if "ladies" in department else "men"
                product["local_image"] = None
                
                if product.get("image_url"):
                    products.append(product)
                    print(f"   ✅ {product['name'][:40]}...")
                    
            except Exception as e:
                print(f"   ⚠️ Error extracting product {i}: {e}")
        
        # If no products found via elements, try getting from page data
        if not products:
            print("\n🔄 Trying to extract from page data...")
            
            # Try to get product data from window object or script tags
            page_content = await page.content()
            
            # Look for image URLs in the page
            import re
            img_pattern = r'(https://image\.hm\.com/[^"\']+\.(?:jpg|png|webp))'
            found_images = list(set(re.findall(img_pattern, page_content)))
            
            for i, img_url in enumerate(found_images[:limit]):
                products.append({
                    "id": f"hm_{i}",
                    "name": f"Sweater {i+1}",
                    "price": "N/A",
                    "category": query,
                    "department": "women" if "ladies" in department else "men",
                    "image_url": img_url,
                    "local_image": None
                })
                print(f"   ✅ Found image {i+1}")
        
        await browser.close()
    
    return products


async def download_images(products: list):
    """Download product images."""
    
    print(f"\n📥 Downloading {len(products)} images...")
    
    async with httpx.AsyncClient(timeout=30.0, follow_redirects=True) as client:
        for product in products:
            if not product.get("image_url"):
                continue
            
            try:
                response = await client.get(product["image_url"])
                response.raise_for_status()
                
                # Determine extension
                content_type = response.headers.get("content-type", "")
                ext = ".jpg"
                if "png" in content_type:
                    ext = ".png"
                elif "webp" in content_type:
                    ext = ".webp"
                
                # Save file
                filename = f"{product['id']}{ext}"
                filepath = PRODUCTS_DIR / filename
                
                with open(filepath, "wb") as f:
                    f.write(response.content)
                
                product["local_image"] = str(filepath)
                print(f"   ✅ Downloaded: {filename}")
                
            except Exception as e:
                print(f"   ❌ Failed: {product['id']} - {e}")
    
    return products


def save_catalog(products: list):
    """Save catalog to JSON."""
    
    catalog = {
        "products": products,
        "total": len(products)
    }
    
    catalog_path = PRODUCTS_DIR / "catalog.json"
    with open(catalog_path, "w") as f:
        json.dump(catalog, f, indent=2)
    
    print(f"\n📁 Saved catalog to {catalog_path}")


async def main():
    # Scrape products
    products = await scrape_hm_products(
        query="sweater",
        department="ladies_all", 
        limit=10
    )
    
    print(f"\n✅ Found {len(products)} products")
    
    if products:
        # Download images
        products = await download_images(products)
        
        # Save catalog
        save_catalog(products)
        
        # Summary
        downloaded = len([p for p in products if p.get("local_image")])
        print("\n" + "=" * 50)
        print("📊 Summary:")
        print(f"   Products found: {len(products)}")
        print(f"   Images downloaded: {downloaded}")
        print(f"   Location: products/")
        print("=" * 50)
    else:
        print("\n❌ No products found.")


if __name__ == "__main__":
    asyncio.run(main())

