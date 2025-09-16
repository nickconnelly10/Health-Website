import React from 'react';

export default function ResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Health Resources</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Resources for lifestyle, nutrition, and physical activity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Lifestyle Section */}
        <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-6 h-fit">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">L</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2">Lifestyle</h2>
            <p className="text-sm text-stone-600">Wellness and daily living</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Ray Peat Research</h3>
              <p className="text-sm text-stone-600 mb-3">
                Dr. Ray Peat's research on nutrition, hormones, and aging. Explores environmental influences on health and therapeutic uses of progesterone, thyroid hormone, and coconut oil.
              </p>
              <a 
                href="https://www.raypeat.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit RayPeat.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Andrew Huberman</h3>
              <p className="text-sm text-stone-600 mb-3">
                Dr. Andrew Huberman is a Stanford neuroscientist. His research focuses on neural regeneration, neuroplasticity, and brain states. Shares science-based tools for optimizing sleep, stress, learning, and performance.
              </p>
              <a 
                href="https://hubermanlab.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit HubermanLab.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Nutrition Section */}
        <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-6 h-fit">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">N</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2">Nutrition</h2>
            <p className="text-sm text-stone-600">Nutrition guidance</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Functional Medicine</h3>
              <p className="text-sm text-stone-600 mb-3">
                Chris Kresser's functional medicine approach emphasizes whole foods and personalized nutrition. Research-based methods for optimizing health through dietary interventions and lifestyle modifications.
              </p>
              <a 
                href="https://chriskresser.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit ChrisKresser.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Gary Brecka</h3>
              <p className="text-sm text-stone-600 mb-3">
                Gary Brecka is a human biologist specializing in genetic testing and health optimization. Focuses on methylation, detoxification pathways, and genetic insights for targeted health protocols.
              </p>
              <a 
                href="https://www.garybrecka.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit GaryBrecka.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>


          </div>
        </div>

        {/* Physical Activity Section */}
        <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-6 h-fit">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">P</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2">Physical Activity</h2>
            <p className="text-sm text-stone-600">Exercise and recovery</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Sports Injury Clinic</h3>
              <p className="text-sm text-stone-600 mb-3">
                Comprehensive database for body injuries and healing. Provides self-recovery information, rehabilitation exercises, and advice for sports injuries.
              </p>
              <a 
                href="https://www.sportsinjuryclinic.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Sports Injury Clinic
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>


      </div>

      {/* Health Protocol Database promo removed by request */}
    </div>
  );
} 