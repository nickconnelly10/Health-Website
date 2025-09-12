import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-10">
        <h1 className="text-4xl font-bold text-stone-900 mb-8 text-center">About Health Platform</h1>
        
        <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
          <p>
            Our dedicated health platform provides comprehensive access to evidence-based health protocols and scientific research. 
            This platform serves as your gateway to detailed resources on nutrition, lifestyle optimization, and preventive care.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <p className="text-blue-800 font-medium">
              <strong>Health Protocol Database:</strong> Access our comprehensive collection of peer-reviewed health protocols and research papers for evidence-based health guidance.
            </p>
          </div>
          
          <p>
            Our health information is continuously updated with the latest research and provides step-by-step guidance for optimizing nutrition, 
            physical activity, sleep, and overall wellness through evidence-based protocols.
          </p>
          
          <p>
            Whether you're looking to improve your nutrition, enhance your physical activity routine, or optimize your lifestyle choices, 
            our platform provides the tools and knowledge you need to make informed decisions about your health.
          </p>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
            <p className="text-amber-800 font-medium">
              <strong>Important:</strong> These resources are for educational purposes and should not replace professional medical advice. 
              Please consult with a physician for proper medical guidance and treatment.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://github.com/nickconnelly10/Health-protocols"
            className="inline-block bg-stone-600 hover:bg-stone-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Protocol Repository
          </a>
        </div>
      </div>
    </div>
  );
}
