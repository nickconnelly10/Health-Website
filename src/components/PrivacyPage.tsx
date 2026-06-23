import React from 'react';
import PageHero from './PageHero';
import ContentCard from './ContentCard';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <PageHero title="Privacy Policy" description="Last updated: May 2026" />

      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding animate-slide-up">
          <ContentCard>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                This privacy policy describes how Nicholas Connelly collects and uses information when
                you visit this health and wellness website.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
                <p>
                  This site uses Vercel Analytics to collect anonymous usage data such as page views,
                  referrer, and general device information. No personally identifiable information is
                  collected through analytics.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Use Information</h2>
                <p>
                  Anonymous analytics help me understand how visitors use the site so I can improve
                  content and performance. I do not sell or share your data with third parties for
                  marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">External Links</h2>
                <p>
                  This site links to external resources and websites. I am not responsible for the
                  privacy practices of those third-party sites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Changes</h2>
                <p>
                  I may update this privacy policy from time to time. Changes will be posted on this
                  page with an updated effective date.
                </p>
              </section>

              <PersonalDisclaimer />
            </div>
          </ContentCard>
        </div>
      </section>
    </div>
  );
}
