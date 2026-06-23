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
              This health platform provides comprehensive access to evidence-based scientific research for nutrition, lifestyle optimization, and preventive care. Access our collection of resources for evidence-based health guidance.
            </p>
            <PersonalDisclaimer />
          </div>
        </ContentCard>
      </div>
    </section>
  );
}
