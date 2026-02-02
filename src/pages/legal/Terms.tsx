import InfoPage from "../InfoPage"

export default function Terms() {
  return (
    <InfoPage
      title="Terms of Service"
      subtitle="Last Updated: February 2, 2026"
      content={
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using the Dressr mobile application or website ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App. These Terms apply to all visitors, users, and others who access or use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              Dressr is a wardrobe management and outfit recommendation application that allows users to:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Catalog and organize their clothing items</li>
              <li>Receive AI-powered outfit suggestions</li>
              <li>Plan outfits and track their wardrobe</li>
              <li>Access virtual try-on features</li>
              <li>Connect with fashion recommendations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">3. User Accounts</h2>
            <p className="text-gray-600 mb-4">
              To use certain features, you must create an account. You agree to:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Third-Party Authentication</h3>
            <p className="text-gray-600 mb-4">
              You may sign in using Google or Apple Sign-In. Your use of these services is subject to 
              their respective terms of service and privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">4. Subscription and Payments</h2>
            
            <h3 className="text-xl font-semibold mb-3">Premium Features</h3>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Some features require a paid subscription</li>
              <li>Subscription fees are billed in advance</li>
              <li>Subscriptions auto-renew unless cancelled</li>
              <li>Refunds are subject to App Store/Play Store policies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Free Trial</h3>
            <p className="text-gray-600 mb-4">
              Free trials may be offered at our discretion. You will be charged after the trial period 
              unless cancelled at least 24 hours before the end of the trial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">5. User Content</h2>
            <p className="text-gray-600 mb-4">
              By uploading content (photos, data) to Dressr, you:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Retain ownership of your content</li>
              <li>Grant us a non-exclusive, worldwide, royalty-free license to use, store, and process your content to provide our services</li>
              <li>Represent that you have the right to upload such content</li>
              <li>Agree not to upload illegal, offensive, or infringing content</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We do not claim ownership of your wardrobe photos or personal data. You may delete your 
              content at any time, which will remove it from our active systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">6. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li>Use the App for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the App's functionality</li>
              <li>Upload malicious code or content</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Upload content that violates the rights of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">7. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              The App uses third-party services including:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4 list-disc pl-5">
              <li><strong>Google Services:</strong> Subject to <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google's Terms of Service</a></li>
              <li><strong>Apple Services:</strong> Subject to <a href="https://www.apple.com/legal/internet-services/itunes/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple's Terms and Conditions</a></li>
              <li><strong>Cloud Providers:</strong> For data storage and processing</li>
              <li><strong>Analytics Providers:</strong> For app performance and usage tracking</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Your use of these third-party services is governed by their respective terms. We are not 
              responsible for the practices of these third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">8. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The App, including its design, features, and content (excluding user content), is owned by 
              Dressr and protected by intellectual property laws. You may not copy, modify, distribute, 
              sell, or lease any part of our services without permission.
            </p>
            <p className="text-gray-600 mb-4">
              Dressr, the Dressr logo, and related names and logos are trademarks of Dressr.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM 
              ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR 
              PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-600 mb-4">
              We do not warrant that the App will be uninterrupted, secure, or error-free, or that any 
              defects will be corrected. AI-generated recommendations are suggestions only and we do not 
              guarantee their accuracy or suitability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, DRESSR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP. OUR TOTAL 
              LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">11. Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify and hold harmless Dressr and its officers, directors, employees, and 
              agents from any claims, damages, or expenses arising from your use of the App or violation 
              of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">12. Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your account at any time for violation of these Terms. You may 
              delete your account at any time through the App settings or by contacting us. Upon termination, 
              your right to use the App immediately ceases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">13. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of significant 
              changes. Continued use of the App after changes constitutes acceptance of the new Terms. 
              It is your responsibility to review these Terms periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">14. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              Delaware, United States, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">15. Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              Any disputes arising from these Terms or your use of the App shall first be attempted to be 
              resolved through informal negotiation. If unresolved, disputes shall be resolved through 
              binding arbitration in accordance with the rules of the American Arbitration Association, 
              except where prohibited by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">16. Severability</h2>
            <p className="text-gray-600 mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
              shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">17. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> yordan@dressr.app
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif mb-4">18. Entire Agreement</h2>
            <p className="text-gray-600 mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you 
              and Dressr regarding the use of the App, superseding any prior agreements.
            </p>
          </section>

          <p className="text-gray-600 mt-8 text-sm">
            By using Dressr, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      }
    />
  )
}
