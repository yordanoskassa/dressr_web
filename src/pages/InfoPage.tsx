import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Footer } from "@/components/landing/Footer"

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

      <Footer />
    </div>
  )
}
