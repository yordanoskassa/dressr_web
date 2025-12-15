import { Button } from "@/components/ui/button"
import { Sparkles, Play, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPage() {
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
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1">
              Products
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#demo" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1">
              Solutions
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#api" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1">
              Resources
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          
          {localStorage.getItem('access_token') ? (
            <Button className="rounded-full px-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white" asChild>
              <Link to="/dashboard">Go to app</Link>
            </Button>
          ) : (
            <Button className="rounded-full px-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white" asChild>
              <Link to="/login">Go to app</Link>
            </Button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Left Images */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="https://ext.same-assets.com/2206706892/1993143932.jpeg"
                alt="Blue blouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="https://ext.same-assets.com/2206706892/2095848760.jpeg"
                alt="Pink bag"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="https://ext.same-assets.com/2206706892/2840946787.jpeg"
                alt="Red skirt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center flex-1 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
              Create realistic images of your clothes, <span className="italic">worn by anyone</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              dressr develops in-house AI models and fashion-focused products that help brands visualize apparel for premium imagery and try-on experiences.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white shadow-lg gap-2" asChild>
                <Link to="/dashboard">
                  Get started for free
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <span className="text-sm text-gray-500">No credit card required</span>
            </div>
          </div>

          {/* Right Images */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="https://ext.same-assets.com/2206706892/3497204393.jpeg"
                alt="Model wearing blue blouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="https://ext.same-assets.com/2206706892/1753995726.jpeg"
                alt="Model with pink bag"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="https://ext.same-assets.com/2206706892/1882702108.jpeg"
                alt="Model wearing red skirt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-6">
          <Play className="w-6 h-6 text-[#1a1a1a]" />
          <span className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider">Interactive Demo</span>
        </div>
        <h2 className="text-5xl font-serif text-center mb-6">See it in action</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find out what you can do with dressr AI.
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <img
              src="/dressr.png"
              alt="dressr demo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Original Image</span>
            <Button className="rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">
              Click to preview
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-6">
          <Sparkles className="w-6 h-6 text-[#1a1a1a]" />
          <span className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider">Powerful Features</span>
        </div>
        <h2 className="text-5xl font-serif text-center mb-6">Everything you need for<br />your fashion brand</h2>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-2xl mx-auto">
          No need to compromise on your brand's high standards with consistent, studio-quality AI fashion photography.
        </p>

        {/* Feature 1 - Product to Model */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://ext.same-assets.com/2206706892/1993143932.jpeg"
              alt="Product to Model"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider">Product Photography</span>
            <h3 className="text-4xl font-serif mt-4 mb-6">Product to Model</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From flat-lay to model, your products will never look the same. Create realistic on-model photos in seconds from a single product image — no photoshoot required.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[#1a1a1a] hover:opacity-70 font-medium transition-opacity">
              Learn more
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Feature 2 - Model Swap */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider">Photo Editing</span>
            <h3 className="text-4xl font-serif mt-4 mb-6">Model Swap</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Change the model to fit your brand's audience or avoid reshoots while keeping the product, pose, lighting, and background consistent. Swap the person, and your product remains perfectly preserved.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[#1a1a1a] hover:opacity-70 font-medium transition-opacity">
              Learn more
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://ext.same-assets.com/2206706892/3497204393.jpeg"
              alt="Model Swap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature 3 - Consistent Models */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://ext.same-assets.com/2206706892/1753995726.jpeg"
              alt="Consistent Models"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider">Brand Consistency</span>
            <h3 className="text-4xl font-serif mt-4 mb-6">Consistent Models</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience dressr's best-in-class model consistency features to keep your models identical across every photoshoot. Create a recognizable face and reuse it across all your product imagery.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[#1a1a1a] hover:opacity-70 font-medium transition-opacity">
              Learn more
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
          <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
            <img
              src="https://ext.same-assets.com/2206706892/287317237.png"
              alt="dressr Banner"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="relative z-10 px-12 py-16 md:py-20">
            <h2 className="text-5xl font-serif mb-6 max-w-xl">
              Ready to take control of<br />your fashion content?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Join thousands of brands and creators using dressr AI to create premium product imagery in seconds.
            </p>
            <div className="flex flex-col items-start gap-3">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white shadow-lg gap-2" asChild>
                <Link to="/dashboard">
                  Get started for free
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <span className="text-sm text-gray-500">No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">App</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Virtual Try-On</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Product to Model</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Model Swap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Photoshoots</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Fitting Rooms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                <span className="text-white font-sign text-sm">d</span>
              </div>
              <span className="font-sign text-xl">dressr</span>
            </div>
            <p className="text-sm text-gray-500">© 2025 dressr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
