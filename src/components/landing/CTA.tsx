import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-8 max-w-6xl mx-auto">
      <div className="relative bg-black rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#333,transparent_70%)]"></div>
        <div className="relative z-10 px-10 py-16 md:py-20 md:px-16">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-3 mb-5 tracking-tight max-w-md">
            Ready to transform your fashion content?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Join brands using dressr to create premium product imagery in seconds.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full px-7 h-11 text-sm font-medium bg-white hover:bg-gray-100 text-black gap-2 transition-all hover:gap-3" asChild>
              <Link to="/dashboard">
                Start for free
                <ArrowRight className="w-4 h-4" />
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
                className="h-11 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
