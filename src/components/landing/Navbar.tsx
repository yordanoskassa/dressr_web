import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white font-sign text-base">d</span>
          </div>
          <span className="font-sign text-xl tracking-tight">dressr</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="https://apps.apple.com/us/app/dressr-virtual-fittting-room/id6744236444" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium px-3 py-2.5 rounded-full hover:bg-gray-100/80"
          >
            iOS App
          </a>

          <Link 
            to="/login" 
            className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium px-3 py-2.5 rounded-full hover:bg-gray-100/80"
          >
            Web App
          </Link>

          <a 
            href="https://apps.shopify.com/search?q=dressr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium px-3 py-2.5 rounded-full hover:bg-gray-100/80"
          >
            Shopify
          </a>

          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('solutions')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium px-3 py-2.5 rounded-full hover:bg-gray-100/80">
              Solutions
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {openDropdown === 'solutions' && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-gray-100 py-1.5 min-w-[180px] shadow-lg shadow-gray-100/50">
                <span className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors text-sm cursor-default">
                  For Brands
                </span>
                <span className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors text-sm cursor-default">
                  For Consumers
                </span>
              </div>
            )}
          </div>

          <span className="text-gray-300 text-sm font-medium cursor-not-allowed">API</span>
        </div>
        
        {localStorage.getItem('access_token') ? (
          <Button className="rounded-full px-5 h-9 bg-black hover:bg-gray-800 text-white text-sm font-medium transition-all hover:shadow-md" asChild>
            <Link to="/dashboard">Open App</Link>
          </Button>
        ) : (
          <Button className="rounded-full px-5 h-9 bg-black hover:bg-gray-800 text-white text-sm font-medium transition-all hover:shadow-md" asChild>
            <Link to="/login">Get Started</Link>
          </Button>
        )}
      </div>
    </nav>
  )
}
