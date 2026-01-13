import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function LandingPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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
          
          <div className="hidden md:flex items-center gap-6">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors py-2">
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl  border border-gray-100 py-2 min-w-[180px]">
                  <a 
                    href="https://apps.apple.com/us/app/dressr-virtual-fittting-room/id6744236444" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    iOS App
                  </a>
                  <Link 
                    to="/login" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Web App
                  </Link>
                </div>
              )}
            </div>

            {/* Shopify App */}
            <a 
              href="https://apps.shopify.com/search?q=dressr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Shopify App
            </a>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors py-2">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl  border border-gray-100 py-2 min-w-[200px]">
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors cursor-default">
                    For Brands
                  </span>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors cursor-default">
                    For Consumers
                  </span>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors cursor-default">
                    API Integration Guide
                  </span>
                </div>
              )}
            </div>

            {/* API */}
            <span className="text-gray-400 cursor-not-allowed">API</span>
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
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white ">
              <img
                src="https://ext.same-assets.com/2206706892/1993143932.jpeg"
                alt="Blue blouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white ">
              <img
                src="https://ext.same-assets.com/2206706892/2095848760.jpeg"
                alt="Pink bag"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white ">
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
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white  gap-2" asChild>
                <Link to="/dashboard">
                  Get started for free
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <span className="text-sm text-gray-500">No credit card required</span>
              
              <a 
                href="https://apps.apple.com/us/app/dressr-virtual-fittting-room/id6744236444" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 transition-opacity hover:opacity-80"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white ">
              <img
                src="https://ext.same-assets.com/2206706892/3497204393.jpeg"
                alt="Model wearing blue blouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white ">
              <img
                src="https://ext.same-assets.com/2206706892/1753995726.jpeg"
                alt="Model with pink bag"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-56 rounded-2xl overflow-hidden bg-white ">
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
        <h2 className="text-5xl font-serif text-center mb-6">See it in action</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find out what you can do with dressr AI.
        </p>

        <div className="bg-white rounded-3xl  p-8 md:p-12 max-w-4xl mx-auto">
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
        <h2 className="text-5xl font-serif text-center mb-6">Everything you need for<br />your fashion brand</h2>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-2xl mx-auto">
          No need to compromise on your brand's high standards with consistent, studio-quality AI fashion photography.
        </p>

        {/* Feature 1 - Product to Model */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="rounded-3xl overflow-hidden ">
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
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden ">
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Reimagining fashion commerce with AI</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                dressr is building the future of fashion visualization. We develop proprietary AI models specifically trained for fashion, enabling brands to create premium product imagery and offer personalized try-on experiences at scale.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to make high-quality product visualization accessible to every fashion brand while helping shoppers make confident purchasing decisions through personalized experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">AI Photography</span>
                <span className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">Virtual Try-On</span>
                <span className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">E-commerce Integration</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Why We're Building This</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Democratize Fashion Content</h4>
                    <p className="text-gray-600 text-sm">Small brands deserve the same quality imagery as luxury houses</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reduce Fashion Waste</h4>
                    <p className="text-gray-600 text-sm">Better visualization means fewer returns and less environmental impact</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Personalize Shopping</h4>
                    <p className="text-gray-600 text-sm">Every shopper should see how clothes look on someone like them</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            The people behind dressr, building the future of fashion visualization.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Yordanos Kassa */}
            <div className="bg-white rounded-2xl p-8  ">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full mb-6 overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQHF1lBT65n3CQ/profile-displayphoto-crop_800_800/B56ZetVvfkHQAQ-/0/1750959849139?e=1769040000&v=beta&t=gPsd34AwPZ0Ql3_8erAKsg-4lwiBv6sqm-rmvHkZG-k" 
                    alt="Yordanos Kassa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Yordanos Kassa</h3>
                <p className="text-gray-500 mb-4">Co-Founder</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  CIS Student at GVSU. Developer at Vetr Health. Builds AI solutions for healthcare and accessibility.
                </p>
                <a 
                  href="https://www.linkedin.com/in/yordanos-kassa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0A66C2] hover:text-[#004182] font-medium transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Yeasrif Rahman */}
            <div className="bg-white rounded-2xl p-8  ">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full mb-6 overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGg28gMaT1Psw/profile-displayphoto-crop_800_800/B4DZr1powYJMAI-/0/1765057924567?e=1769040000&v=beta&t=mJk0joYvf19VwSK2S2YCCBrKDrNnD-lY9AICmDE5tBA" 
                    alt="Yeasrif Rahman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Yeasrif Rahman</h3>
                <p className="text-gray-500 mb-4">Co-Founder</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  CS Student at GVSU. AI & Robotics Developer. Founder of Green Pioneers.
                </p>
                <a 
                  href="https://www.linkedin.com/in/yeasrif-rahman/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0A66C2] hover:text-[#004182] font-medium transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Company LinkedIn */}
          <div className="mt-12 text-center">
            <a 
              href="https://www.linkedin.com/company/dressrai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Follow dressr on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative bg-gray-100 rounded-3xl overflow-hidden">
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
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white  gap-2" asChild>
                <Link to="/dashboard">
                  Get started for free
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <a 
                href="https://apps.apple.com/us/app/dressr-virtual-fittting-room/id6744236444" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-12"
                />
              </a>
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
