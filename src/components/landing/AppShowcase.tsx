import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function AppShowcase() {
  const screenshots = [
    { src: "/app-screenshots/shop.png", title: "Browse & Shop", desc: "Discover trending items from your favorite brands" },
    { src: "/app-screenshots/garment.png", title: "Select Garment", desc: "Choose any clothing item you want to try" },
    { src: "/app-screenshots/select.png", title: "Pick Your Photo", desc: "Use your own photo or choose a model" },
    { src: "/app-screenshots/loading.png", title: "AI Processing", desc: "Our AI creates your virtual try-on in seconds" },
    { src: "/app-screenshots/result-1.png", title: "See Results", desc: "View realistic visualization on your body" },
    { src: "/app-screenshots/result-2.png", title: "Save & Share", desc: "Save your looks and share with friends" },
  ]

  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, screenshots.length])

  const goTo = (index: number) => {
    setCurrent(index)
    setIsAutoPlaying(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setIsAutoPlaying(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % screenshots.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 px-8 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 tracking-tight">Try on your phone</h2>
        <p className="text-gray-500 text-center mb-16 max-w-sm mx-auto text-sm">
          Virtual try-on anywhere, anytime.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Main Screenshot */}
          <div className="relative flex-shrink-0">
            <div className="w-56 md:w-64 rounded-[32px] overflow-hidden border-[3px] border-gray-900 bg-white shadow-2xl">
              <img
                src={screenshots[current].src}
                alt={screenshots[current].title}
                className="w-full h-auto transition-opacity duration-300"
              />
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Step {current + 1} of {screenshots.length}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif mt-2 mb-3 tracking-tight">
                {screenshots[current].title}
              </h3>
              <p className="text-gray-500 max-w-sm">
                {screenshots[current].desc}
              </p>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-2 justify-center md:justify-start mb-8">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "w-8 bg-gray-900" 
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* iOS Button */}
            <a 
              href="https://apps.apple.com/us/app/dressr-virtual-fittting-room/id6744236444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all hover:scale-105 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <span className="block text-[10px] text-gray-400 leading-none">Download on the</span>
                <span className="block text-sm font-medium leading-tight">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
