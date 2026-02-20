import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 mb-10">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-sign text-sm">d</span>
          </div>
          <span className="font-sign text-xl">dressr</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-14">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">App</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/tools/virtual-try-on" className="text-sm text-gray-600 hover:text-black transition-colors">Virtual Try-On</Link></li>
              <li><Link to="/tools/product-to-model" className="text-sm text-gray-600 hover:text-black transition-colors">Product to Model</Link></li>
              <li><Link to="/tools/model-swap" className="text-sm text-gray-600 hover:text-black transition-colors">Model Swap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/solutions/photoshoots" className="text-sm text-gray-600 hover:text-black transition-colors">Photoshoots</Link></li>
              <li><Link to="/solutions/fitting-rooms" className="text-sm text-gray-600 hover:text-black transition-colors">Fitting Rooms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/resources/api-docs" className="text-sm text-gray-600 hover:text-black transition-colors">API Docs</Link></li>
              <li><Link to="/resources/help-center" className="text-sm text-gray-600 hover:text-black transition-colors">Help Center</Link></li>
              <li><Link to="/resources/pricing" className="text-sm text-gray-600 hover:text-black transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/company/about" className="text-sm text-gray-600 hover:text-black transition-colors">About</Link></li>
              <li><Link to="/company/blog" className="text-sm text-gray-600 hover:text-black transition-colors">Blog</Link></li>
              <li><Link to="/company/careers" className="text-sm text-gray-600 hover:text-black transition-colors">Careers</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
          <p className="text-s text-gray-400">© 2025 dressr. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/dressrdotapp/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-logo-facebook-2-svgrepo-com.svg" alt="Instagram" className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com/company/dressrai/" target="_blank" rel="noopener noreferrer">
              <img src="/icons8-linkedin.svg" alt="LinkedIn" className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
