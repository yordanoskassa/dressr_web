import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

interface InfoPageProps {
  title: string
  subtitle: string
  content: React.ReactNode
}

export default function InfoPage({ title, subtitle, content }: InfoPageProps) {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fafafa]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
              <span className="text-white font-sign text-lg">d</span>
            </div>
            <span className="font-sign text-2xl">dressr</span>
          </Link>
          
          <Button className="rounded-full px-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white" asChild>
            <Link to="/dashboard">Go to app</Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">{title}</h1>
        <p className="text-xl text-gray-600">{subtitle}</p>
      </section>

      {/* Content */}
      <section className="pb-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          {content}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6 max-w-4xl mx-auto">
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Try dressr for free and transform your fashion content.</p>
          <Button size="lg" className="rounded-full px-8 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white gap-2" asChild>
            <Link to="/dashboard">
              Get started
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/dashboard" className="hover:text-gray-900 transition-colors">App</Link></li>
                <li><Link to="/resources/api-docs" className="hover:text-gray-900 transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/tools/virtual-try-on" className="hover:text-gray-900 transition-colors">Virtual Try-On</Link></li>
                <li><Link to="/tools/product-to-model" className="hover:text-gray-900 transition-colors">Product to Model</Link></li>
                <li><Link to="/tools/model-swap" className="hover:text-gray-900 transition-colors">Model Swap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/solutions/photoshoots" className="hover:text-gray-900 transition-colors">Photoshoots</Link></li>
                <li><Link to="/solutions/fitting-rooms" className="hover:text-gray-900 transition-colors">Fitting Rooms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/resources/api-docs" className="hover:text-gray-900 transition-colors">API Docs</Link></li>
                <li><Link to="/resources/help-center" className="hover:text-gray-900 transition-colors">Help Center</Link></li>
                <li><Link to="/resources/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/company/about" className="hover:text-gray-900 transition-colors">About</Link></li>
                <li><Link to="/company/blog" className="hover:text-gray-900 transition-colors">Blog</Link></li>
                <li><Link to="/company/careers" className="hover:text-gray-900 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="https://www.instagram.com/dressrdotapp/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/dressrai/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                <span className="text-white font-sign text-sm">d</span>
              </div>
              <span className="font-sign text-xl">dressr</span>
            </Link>
            <p className="text-sm text-gray-500">© 2025 dressr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
