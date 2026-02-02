import InfoPage from "../InfoPage"

export default function Privacy() {
  return (
    <InfoPage
      title="Privacy Policy"
      subtitle="Last Updated: February 2, 2026"
      content={
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Dressr ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered fashion visualization platform, including our mobile application, website, and API services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Name and email address when you create an account</li>
              <li>Profile information you choose to provide</li>
              <li>Authentication data (including Google Sign-In and Apple Sign-In credentials)</li>
              <li>Phone number (if provided)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>App usage patterns and preferences</li>
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Log data and analytics</li>
              <li>IP address and browser type</li>
              <li>Time spent on features and interactions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Product and Content Data</h3>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Product images you upload for catalog generation</li>
              <li>Model photos and garment images for virtual try-on</li>
              <li>Generated fashion imagery and outputs</li>
              <li>Style preferences and brand settings</li>
              <li>Metadata associated with your products and content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Provide and maintain our AI fashion visualization services</li>
              <li>Generate product catalog imagery and virtual try-on experiences</li>
              <li>Process and transform product photos using our AI models</li>
              <li>Personalize your experience and improve our algorithms</li>
              <li>Develop new features and enhance existing tools</li>
              <li>Communicate with you about updates, usage, and promotions</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">4. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We use the following third-party services to operate our app:
            </p>

            <h3 className="text-xl font-semibold mb-3">Google Services</h3>
            <p className="text-gray-600 mb-4">
              We use Google Sign-In for authentication and Google Analytics for usage tracking. 
              Your use of Google services is subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google's Privacy Policy</a>.
            </p>

            <h3 className="text-xl font-semibold mb-3">Apple Sign-In</h3>
            <p className="text-gray-600 mb-4">
              We offer Apple Sign-In as an authentication option. Your use of Apple Sign-In is subject to 
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple's Privacy Policy</a>.
            </p>

            <h3 className="text-xl font-semibold mb-3">Analytics and Cloud Services</h3>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li><strong>Google Analytics:</strong> For understanding app usage and improving user experience</li>
              <li><strong>Cloud Storage Providers:</strong> For securely storing your wardrobe photos and data</li>
              <li><strong>Crash Reporting Services:</strong> For identifying and fixing technical issues</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Payment Processing</h3>
            <p className="text-gray-600 mb-4">
              Subscription payments are processed through Apple App Store and Google Play Store. 
              We do not store your payment card information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Service providers who assist in operating our app</li>
              <li>Analytics partners to improve our services</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners in the event of a merger or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">6. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
              secure servers, and regular security assessments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal information for as long as your account is active or as needed to provide you services. 
              You may request deletion of your account and associated data at any time by contacting us or using the 
              account deletion feature in the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">8. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
              <li>Restrict or object to certain processing activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">9. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our app is not intended for children under 13. We do not knowingly collect personal information 
              from children under 13. If you believe we have collected information from a child under 13, 
              please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">10. International Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new policy on this page and updating the "Last Updated" date. We encourage you to review 
              this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">12. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> support@dressr.app
            </p>
          </section>

          <p className="text-gray-600 mt-8 text-sm">
            By using Dressr, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>
      }
    />
  )
}
