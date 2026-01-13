import InfoPage from "../../InfoPage"

export default function LaunchingDressr() {
  return (
    <InfoPage
      title="Launching dressr: Our Journey"
      subtitle="From hackathon project to production platform — the story of how dressr came to be."
      content={
        <article className="prose prose-gray max-w-none">
          <p className="text-sm text-gray-500 mb-6">November 2025 • 3 min read</p>
          
          <p className="text-gray-600 mb-6 text-lg">
            Every startup has an origin story. Ours began at a hackathon, fueled by too much coffee and a simple question: why is it so hard for small fashion brands to get professional product photos?
          </p>

          <h2 className="text-2xl font-serif mb-4">The Problem We Saw</h2>
          <p className="text-gray-600 mb-6">
            As students at Grand Valley State University, we noticed something while helping friends with their small clothing businesses. They had great products but terrible photos. Professional photography was out of their budget, and DIY attempts looked amateur.
          </p>
          <p className="text-gray-600 mb-6">
            Meanwhile, AI image generation was exploding. But existing tools weren't built for fashion. They couldn't handle the nuances of fabric, fit, and styling that make product photos actually sell.
          </p>

          <h2 className="text-2xl font-serif mb-4">Building the First Version</h2>
          <p className="text-gray-600 mb-6">
            We spent that first hackathon weekend building a proof of concept. Could we take a flat-lay photo of a shirt and generate a realistic on-model image? The results were rough, but promising enough to keep going.
          </p>
          <p className="text-gray-600 mb-6">
            Over the following months, we trained custom models specifically on fashion data. We learned what makes clothing look realistic: the way fabric drapes, how light interacts with different materials, the subtle details that separate professional photos from amateur ones.
          </p>

          <h2 className="text-2xl font-serif mb-4">Where We Are Now</h2>
          <p className="text-gray-600 mb-6">
            Today, dressr can generate studio-quality on-model photos from simple product images. We've built tools for model swapping, virtual try-on, and consistent model generation. Brands are using our platform to create thousands of images that would have been impossible to produce traditionally.
          </p>

          <h2 className="text-2xl font-serif mb-4">What's Next</h2>
          <p className="text-gray-600 mb-6">
            We're just getting started. Our roadmap includes better integration with e-commerce platforms, more customization options, and continued improvements to image quality.
          </p>
          <p className="text-gray-600">
            If you're a fashion brand struggling with product photography, we built dressr for you. Give it a try and let us know what you think.
          </p>
        </article>
      }
    />
  )
}
