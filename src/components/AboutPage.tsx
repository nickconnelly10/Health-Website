import React from 'react';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-10">
        <h1 className="text-4xl font-bold text-stone-900 mb-8 text-center">About Health & Wellness</h1>
        
        <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
          <p>
            This health platform provides comprehensive access to evidence-based scientific research for nutrition, lifestyle optimization, and preventive care. Access our collection of resources for evidence-based health guidance.
          </p>
          
          <PersonalDisclaimer className="p-6" />
        </div>
      </div>
    </div>
  );
}
