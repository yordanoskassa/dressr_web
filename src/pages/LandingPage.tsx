import {
  Navbar,
  Hero,
  AppShowcase,
  Features,
  About,
  Founder,
  CTA,
  Footer
} from "@/components/landing"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AppShowcase />
      <Features />
      <About />
      <Founder />
      <CTA />
      <Footer />
    </div>
  )
}
