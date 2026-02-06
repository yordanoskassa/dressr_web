import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-28 pb-24 px-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between gap-12">
        {/* Left Images */}
        <div className="hidden lg:flex flex-col gap-3">
          <div className="w-40 h-52 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://ext.same-assets.com/2206706892/1993143932.jpeg"
              alt="Blue blouse"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-52 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://ext.same-assets.com/2206706892/2095848760.jpeg"
              alt="Pink bag"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-52 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://ext.same-assets.com/2206706892/2840946787.jpeg"
              alt="Red skirt"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center flex-1 max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6 tracking-tight">
            Visualize clothes on <span className="italic">anyone</span>
          </h1>
          <p className="text-base text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            AI-powered fashion visualization for brands. Create premium product imagery and try-on experiences in seconds.
          </p>
          <div className="flex flex-col items-center gap-5">
            <Button size="lg" className="rounded-full px-7 h-12 text-sm font-medium bg-black hover:bg-gray-800 text-white gap-2 transition-all hover:shadow-lg hover:gap-3" asChild>
              <Link to="/dashboard">
                Start for free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <span className="text-xs text-gray-400">No credit card required</span>
          </div>
        </div>

        {/* Right Images */}
        <div className="hidden lg:flex flex-col gap-3">
          <div className="w-40 h-52 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://ext.same-assets.com/2206706892/3497204393.jpeg"
              alt="Model wearing blue blouse"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-52 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://ext.same-assets.com/2206706892/1753995726.jpeg"
              alt="Model with pink bag"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-52 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://ext.same-assets.com/2206706892/1882702108.jpeg"
              alt="Model wearing red skirt"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
