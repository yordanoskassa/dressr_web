import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/landing/Footer"

export default function Download() {
  const navigate = useNavigate()
  const [showAndroidMessage, setShowAndroidMessage] = useState(false)

  const handleAndroidClick = () => {
    setShowAndroidMessage(true)
    setTimeout(() => {
      setShowAndroidMessage(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fafafa]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
              <span className="text-white font-sign text-lg">d</span>
            </div>
            <span className="font-sign text-2xl">dressr</span>
          </Link>
          
          <Button variant="ghost" className="rounded-full" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 pt-28 pb-16">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">Download dressr</h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Get the dressr app on your favorite platform
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* iOS App Card */}
            <a 
              href="https://apps.apple.com/us/app/dressr-virtual-fittting-room/id6744236444"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">iOS App</h3>
                  <p className="text-gray-500 text-sm mb-4">Available on iPhone & iPad</p>
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-10 mx-auto"
                  />
                </div>
              </div>
            </a>

            {/* Android App Card */}
            <button
              onClick={handleAndroidClick}
              className="group w-full p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3DDC84] to-[#2DB86D] rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Android App</h3>
                  <p className="text-gray-500 text-sm mb-4">Available on Google Play</p>
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
              {showAndroidMessage && (
                <div className="absolute inset-0 bg-white/98 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-gray-900 font-semibold text-lg mb-1">Android app not ready yet</p>
                    <p className="text-gray-500 text-sm">Stay tuned for updates</p>
                  </div>
                </div>
              )}
            </button>

            {/* Shopify App Card */}
            <a
              href="https://apps.shopify.com/search?q=dressr"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#95BF47] to-[#7FA639] rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <ShoppingBag className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Shopify App</h3>
                  <p className="text-gray-500 text-sm">Integrate with your store</p>
                </div>
              </div>
            </a>

            {/* Web App Card */}
            <button
              onClick={() => navigate('/')}
              className="group w-full p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl border border-gray-800 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-[#1a1a1a] font-sign text-3xl">d</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-white">Web App</h3>
                  <p className="text-gray-300 text-sm">Use directly in your browser</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
