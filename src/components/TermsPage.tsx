import React from 'react';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-10">
          <h1 className="text-4xl font-bold text-stone-900 mb-2 text-center">Terms of Service</h1>
          <p className="text-sm text-stone-500 text-center mb-8">Last updated: May 2026</p>

          <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
            <p>
              By using this website, you agree to these terms. This site is a personal health and
              wellness platform operated by Nicholas Connelly.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900">Use of Content</h2>
            <p>
              All content on this site reflects my personal experiences, research, and lifestyle
              choices. You may read and share links to this site for personal, non-commercial use.
              Do not reproduce, republish, or distribute content without permission.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900">No Professional Relationship</h2>
            <p>
              Using this site does not create a doctor-patient, nutritionist-client, or any other
              professional relationship. Nothing here substitutes for advice from a qualified
              healthcare provider.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900">Limitation of Liability</h2>
            <p>
              This site is provided &quot;as is.&quot; I am not liable for any decisions you make
              based on information found here. You use this site at your own risk.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900">Changes</h2>
            <p>
              I may update these terms at any time. Continued use of the site after changes means
              you accept the updated terms.
            </p>

            <PersonalDisclaimer className="p-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
