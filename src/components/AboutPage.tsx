import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-10">
        <h1 className="text-4xl font-bold text-stone-900 mb-8 text-center">About Health Platform</h1>
        
        <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
          <p>
            Our health platform provides comprehensive access to evidence-based health protocols and scientific research for nutrition, lifestyle optimization, and preventive care. Access our collection of peer-reviewed health protocols and research papers for evidence-based health guidance.
          </p>
          
          <p>
            Our information is continuously updated with the latest research, providing step-by-step guidance for optimizing nutrition, physical activity, sleep, and overall wellness.
          </p>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
            <p className="text-amber-800 font-medium">
              <strong>Important:</strong> These resources are for educational purposes and should not replace professional medical advice. Please consult with a physician for proper medical guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
