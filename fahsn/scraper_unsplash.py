"""
Fashion Image Scraper using Unsplash API
Free, legal, and high-quality images for demo purposes.
"""

import json
import asyncio
from pathlib import Path
import httpx

# Create products directory
PRODUCTS_DIR = Path("products")
PRODUCTS_DIR.mkdir(exist_ok=True)

# Unsplash API - Free tier (50 requests/hour)
# No API key needed for demo - we'll use their source URL
UNSPLASH_SOURCE = "https://source.unsplash.com"


async def fetch_fashion_images(categories: list[dict], images_per_category: int = 5):
    """
    Fetch fashion images from Unsplash.
    
    Categories should be: [{"name": "sweater", "query": "sweater fashion", "department": "women"}, ...]
    """
    
    print("=" * 50)
    print("🛍️  Fashion Image Fetcher (Unsplash)")
    print("=" * 50)
    
    products = []
    product_id = 0
    
    async with httpx.AsyncClient(timeout=30.0, follow_redirects=True) as client:
        for cat in categories:
            query = cat["query"]
            name = cat["name"]
            department = cat.get("department", "women")
            
            print(f"\n📦 Fetching '{name}' images...")
            
            for i in range(images_per_category):
                try:
                    # Unsplash source gives random image for query
                    # Add random param to get different images
                    url = f"https://source.unsplash.com/800x1000/?{query.replace(' ', ',')}&sig={product_id}"
                    
                    response = await client.get(url)
                    
                    if response.status_code == 200:
                        # Save image
                        filename = f"product_{product_id}.jpg"
                        filepath = PRODUCTS_DIR / filename
                        
                        with open(filepath, "wb") as f:
                            f.write(response.content)
                        
                        product = {
                            "id": f"prod_{product_id}",
                            "name": f"{name.title()} Style {i+1}",
                            "price": f"${29.99 + (product_id * 5):.2f}",
                            "category": name,
                            "department": department,
                            "image_url": str(response.url),
                            "local_image": str(filepath)
                        }
                        
                        products.append(product)
                        print(f"   ✅ {product['name']}")
                        product_id += 1
                        
                        # Small delay to avoid rate limits
                        await asyncio.sleep(0.5)
                    
                except Exception as e:
                    print(f"   ❌ Error: {e}")
    
    return products


def save_catalog(products: list):
    """Save catalog to JSON."""
    
    catalog = {
        "products": products,
        "total": len(products),
        "categories": list(set(p["category"] for p in products))
    }
    
    catalog_path = PRODUCTS_DIR / "catalog.json"
    with open(catalog_path, "w") as f:
        json.dump(catalog, f, indent=2)
    
    print(f"\n📁 Saved catalog: {catalog_path}")


async def main():
    # Define fashion categories to fetch
    categories = [
        {"name": "sweater", "query": "sweater fashion clothing", "department": "women"},
        {"name": "shirt", "query": "shirt fashion clothing", "department": "women"},
        {"name": "dress", "query": "dress fashion", "department": "women"},
        {"name": "jacket", "query": "jacket fashion clothing", "department": "unisex"},
        {"name": "blouse", "query": "blouse fashion", "department": "women"},
    ]
    
    # Fetch images (2 per category for quick test = 10 total)
    products = await fetch_fashion_images(categories, images_per_category=2)
    
    print(f"\n✅ Total products: {len(products)}")
    
    if products:
        save_catalog(products)
        
        print("\n" + "=" * 50)
        print("📊 Summary:")
        print(f"   Products: {len(products)}")
        print(f"   Categories: {len(categories)}")
        print(f"   Location: products/")
        print("=" * 50)


if __name__ == "__main__":
    asyncio.run(main())

