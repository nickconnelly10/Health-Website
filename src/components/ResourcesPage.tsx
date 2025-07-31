import React from 'react';

export default function ResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-burgundy mb-4 font-roman">Health Resources</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Resources for lifestyle, nutrition, and physical activity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Lifestyle Section */}
        <div className="bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-6 font-roman h-fit">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🧘</span>
            </div>
            <h2 className="text-xl font-bold text-burgundy mb-2">Lifestyle</h2>
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
        <div className="bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-6 font-roman h-fit">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🥗</span>
            </div>
            <h2 className="text-xl font-bold text-burgundy mb-2">Nutrition</h2>
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
        <div className="bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-6 font-roman h-fit">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💪</span>
            </div>
            <h2 className="text-xl font-bold text-burgundy mb-2">Physical Activity</h2>
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

      {/* Health Protocol Database Section - Full Width */}
      <div className="mt-12 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-8 font-roman">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">📚</span>
          </div>
          <h2 className="text-2xl font-bold text-burgundy mb-2">Health Protocol Database</h2>
          <p className="text-stone-600">Scientific literature repository</p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
            <h3 className="font-semibold text-burgundy mb-2">Scientific Literature Repository</h3>
            <p className="text-sm text-stone-600 mb-3">
              Database of peer-reviewed scientific literature. Analyzes evidence-based research to provide informed health recommendations.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/nickconnelly10/health.muscadine.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="/health-protocols" 
                className="inline-flex items-center text-sm text-green-600 hover:text-green-800 font-medium"
              >
                📚 Browse All Protocols
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 