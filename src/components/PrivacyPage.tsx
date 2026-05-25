import React from 'react';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-10">
          <h1 className="text-4xl font-bold text-stone-900 mb-2 text-center">Privacy Policy</h1>
          <p className="text-sm text-stone-500 text-center mb-8">Last updated: May 2026</p>

          <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
            <p>
              This privacy policy describes how Nicholas Connelly collects and uses information when
              you visit this health and wellness website.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900">Information We Collect</h2>
            <p>
              This site uses Vercel Analytics to collect anonymous usage data such as page views,
              referrer, and general device information. No personally identifiable information is
              collected through analytics.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900">How We Use Information</h2>
            <p>
              Anonymous analytics help me understand how visitors use the site so I can improve
              content and performance. I do not sell or share your data with third parties for
              marketing purposes.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900">External Links</h2>
            <p>
              This site links to external resources and websites. I am not responsible for the
              privacy practices of those third-party sites.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900">Changes</h2>
            <p>
              I may update this privacy policy from time to time. Changes will be posted on this
              page with an updated effective date.
            </p>

            <PersonalDisclaimer className="p-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
