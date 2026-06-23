import React from 'react';
import PageHero from './PageHero';
import ContentCard from './ContentCard';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function TermsPage() {
  return (
    <div className="page-shell">
      <PageHero title="Terms of Service" description="Last updated: May 2026" />

      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding animate-slide-up">
          <ContentCard>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                By using this website, you agree to these terms. This site is a personal health and
                wellness platform operated by Nicholas Connelly.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Use of Content</h2>
                <p>
                  All content on this site reflects my personal experiences, research, and lifestyle
                  choices. You may read and share links to this site for personal, non-commercial use.
                  Do not reproduce, republish, or distribute content without permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">No Professional Relationship</h2>
                <p>
                  Using this site does not create a doctor-patient, nutritionist-client, or any other
                  professional relationship. Nothing here substitutes for advice from a qualified
                  healthcare provider.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
                <p>
                  This site is provided &quot;as is.&quot; I am not liable for any decisions you make
                  based on information found here. You use this site at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Changes</h2>
                <p>
                  I may update these terms at any time. Continued use of the site after changes means
                  you accept the updated terms.
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
