import React from 'react';
import ContentCard from './ContentCard';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto container-padding animate-slide-up">
        <ContentCard>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About Health & Wellness</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              This site shares my personal approach to nutrition, movement, and daily habits — along with resources I use for my own health. It is not medical advice or a substitute for care from a licensed clinician.
            </p>
            <PersonalDisclaimer />
          </div>
        </ContentCard>
      </div>
    </section>
  );
}
