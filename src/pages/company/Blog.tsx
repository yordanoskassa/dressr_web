import InfoPage from "../InfoPage"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function Blog() {
  return (
    <InfoPage
      title="Blog"
      subtitle="Insights on AI, fashion tech, and building dressr."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">Latest Posts</h2>
          
          <div className="space-y-8">
            <Link to="/company/blog/future-fashion-photography" className="block border-b pb-6 group">
              <p className="text-sm text-gray-500 mb-2">January 2026 • 5 min read</p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">The Future of Fashion Photography</h3>
              <p className="text-gray-600 mb-3">
                How AI is transforming the way brands create product imagery, from flat-lays to full photoshoots.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1a1a1a] group-hover:gap-2 transition-all">
                Read more <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link to="/company/blog/reducing-returns" className="block border-b pb-6 group">
              <p className="text-sm text-gray-500 mb-2">December 2025 • 4 min read</p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Reducing Returns with Virtual Try-On</h3>
              <p className="text-gray-600 mb-3">
                Why letting customers see how clothes fit before buying leads to happier customers and fewer returns.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1a1a1a] group-hover:gap-2 transition-all">
                Read more <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link to="/company/blog/launching-dressr" className="block group">
              <p className="text-sm text-gray-500 mb-2">November 2025 • 3 min read</p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Launching dressr: Our Journey</h3>
              <p className="text-gray-600 mb-3">
                From hackathon project to production platform — the story of how dressr came to be.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1a1a1a] group-hover:gap-2 transition-all">
                Read more <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      }
    />
  )
}
