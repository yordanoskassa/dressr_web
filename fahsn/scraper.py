"""
H&M Product Scraper - Test scrape for sweaters
"""

import json
import os
import re
import httpx
from pathlib import Path

# Create products directory
PRODUCTS_DIR = Path("products")
PRODUCTS_DIR.mkdir(exist_ok=True)

def scrape_hm_search(query: str, department: str = "ladies_all", limit: int = 10):
    """
    Scrape H&M search results for product images.
    
    Args:
        query: Search term (e.g., "sweater")
        department: "ladies_all" or "men_all"
        limit: Number of products to fetch
    """
    
    # H&M uses a JSON API endpoint for search results
    # The page loads data from this endpoint
    api_url = "https://www2.hm.com/en_us/search-results/_jcr_content/search.display.json"
    
    params = {
        "q": query,
        "department": department,
        "image": "stillLife",
        "page": 0,
        "pageSize": limit,
        "sale": "false"
    }
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.9",
    }
    
    print(f"🔍 Searching H&M for '{query}' ({department})...")
    
    try:
        response = httpx.get(api_url, params=params, headers=headers, timeout=30.0, follow_redirects=True)
        response.raise_for_status()
        data = response.json()
    except httpx.HTTPStatusError as e:
        print(f"❌ HTTP Error: {e.response.status_code}")
        print(f"   Trying alternative method...")
        return scrape_hm_html(query, department, limit)
    except json.JSONDecodeError:
        print("❌ JSON decode failed, trying HTML scrape...")
        return scrape_hm_html(query, department, limit)
    
    products = []
    
    # Parse the JSON response
    items = data.get("products", [])
    
    for i, item in enumerate(items[:limit]):
        try:
            product = {
                "id": item.get("articleCode", f"hm_{i}"),
                "name": item.get("title", "Unknown"),
                "price": item.get("price", "N/A"),
                "category": query,
                "department": "women" if "ladies" in department else "men",
                "image_url": None,
                "local_image": None
            }
            
            # Get the stillLife image
            images = item.get("images", [])
            for img in images:
                if img.get("type") == "stillLife" or "stillLife" in str(img):
                    product["image_url"] = img.get("src") or img.get("url")
                    break
            
            # Fallback to first image
            if not product["image_url"] and images:
                product["image_url"] = images[0].get("src") or images[0].get("url")
            
            if product["image_url"]:
                # Fix URL if needed
                if product["image_url"].startswith("//"):
                    product["image_url"] = "https:" + product["image_url"]
                
                products.append(product)
                
        except Exception as e:
            print(f"   ⚠️ Skipping item: {e}")
    
    return products


def scrape_hm_html(query: str, department: str = "ladies_all", limit: int = 10):
    """
    Fallback: Scrape H&M search page HTML directly.
    """
    
    url = f"https://www2.hm.com/en_us/search-results.html"
    
    params = {
        "q": query,
        "department": department,
        "image": "stillLife",
        "page": 1
    }
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    }
    
    print(f"🌐 Fetching HTML from H&M...")
    
    response = httpx.get(url, params=params, headers=headers, timeout=30.0, follow_redirects=True)
    html = response.text
    
    products = []
    
    # Extract product data from HTML using regex
    # Look for product JSON in the page
    
    # Pattern 1: Look for product articles
    article_pattern = r'data-articlecode="([^"]+)"'
    articles = re.findall(article_pattern, html)
    
    # Pattern 2: Look for image URLs
    img_pattern = r'(https://[^"]+\.hm\.com/[^"]+(?:stillLife|product)[^"]*\.(?:jpg|webp|png))'
    images = re.findall(img_pattern, html)
    
    # Pattern 3: Look for product titles
    title_pattern = r'<h2[^>]*class="[^"]*item-heading[^"]*"[^>]*>([^<]+)</h2>'
    titles = re.findall(title_pattern, html)
    
    # Pattern 4: Look for prices
    price_pattern = r'<span[^>]*class="[^"]*price[^"]*"[^>]*>\s*\$?([\d.,]+)'
    prices = re.findall(price_pattern, html)
    
    # Try to extract from JSON embedded in page
    json_pattern = r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>'
    json_matches = re.findall(json_pattern, html, re.DOTALL)
    
    for match in json_matches:
        try:
            data = json.loads(match)
            if isinstance(data, dict) and data.get("@type") == "ItemList":
                for i, item in enumerate(data.get("itemListElement", [])[:limit]):
                    product_data = item.get("item", {})
                    product = {
                        "id": f"hm_{i}",
                        "name": product_data.get("name", "Unknown"),
                        "price": product_data.get("offers", {}).get("price", "N/A"),
                        "category": query,
                        "department": "women" if "ladies" in department else "men",
                        "image_url": product_data.get("image"),
                        "local_image": None
                    }
                    if product["image_url"]:
                        products.append(product)
        except:
            pass
    
    # Fallback: match images with basic info
    if not products and images:
        seen_images = set()
        for i, img_url in enumerate(images[:limit]):
            if img_url not in seen_images:
                seen_images.add(img_url)
                products.append({
                    "id": f"hm_{i}",
                    "name": titles[i] if i < len(titles) else f"Sweater {i+1}",
                    "price": prices[i] if i < len(prices) else "N/A",
                    "category": query,
                    "department": "women" if "ladies" in department else "men",
                    "image_url": img_url,
                    "local_image": None
                })
    
    return products


def download_images(products: list):
    """Download product images to local folder."""
    
    print(f"\n📥 Downloading {len(products)} images...")
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    }
    
    for product in products:
        if not product.get("image_url"):
            continue
            
        try:
            # Download image
            response = httpx.get(product["image_url"], headers=headers, timeout=30.0, follow_redirects=True)
            response.raise_for_status()
            
            # Determine file extension
            content_type = response.headers.get("content-type", "")
            ext = ".jpg"
            if "png" in content_type:
                ext = ".png"
            elif "webp" in content_type:
                ext = ".webp"
            
            # Save image
            filename = f"{product['id']}{ext}"
            filepath = PRODUCTS_DIR / filename
            
            with open(filepath, "wb") as f:
                f.write(response.content)
            
            product["local_image"] = str(filepath)
            print(f"   ✅ {product['name'][:40]}...")
            
        except Exception as e:
            print(f"   ❌ Failed to download {product['id']}: {e}")
    
    return products


def save_catalog(products: list):
    """Save product catalog to JSON."""
    
    catalog_path = PRODUCTS_DIR / "catalog.json"
    
    with open(catalog_path, "w") as f:
        json.dump(products, f, indent=2)
    
    print(f"\n📁 Saved catalog to {catalog_path}")


def main():
    print("=" * 50)
    print("🛍️  H&M Product Scraper - Test Run")
    print("=" * 50)
    
    # Scrape sweaters
    products = scrape_hm_search(
        query="sweater",
        department="ladies_all",
        limit=10
    )
    
    if not products:
        print("\n⚠️  No products found via API, trying direct HTML...")
        products = scrape_hm_html("sweater", "ladies_all", 10)
    
    print(f"\n✅ Found {len(products)} products")
    
    if products:
        # Download images
        products = download_images(products)
        
        # Save catalog
        save_catalog(products)
        
        # Summary
        print("\n" + "=" * 50)
        print("📊 Summary:")
        print(f"   Products scraped: {len(products)}")
        print(f"   Images downloaded: {len([p for p in products if p.get('local_image')])}")
        print(f"   Catalog saved: products/catalog.json")
        print("=" * 50)
    else:
        print("\n❌ No products found. H&M might be blocking requests.")
        print("   Try running with a VPN or different network.")


if __name__ == "__main__":
    main()

