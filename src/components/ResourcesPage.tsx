import React from 'react';

export default function ResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-burgundy mb-4 font-roman">Health Resources</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Curated resources for lifestyle, nutrition, and physical activity to support your health journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lifestyle Section */}
        <div className="bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-8 font-roman">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🧘</span>
            </div>
            <h2 className="text-2xl font-bold text-burgundy mb-2">Lifestyle</h2>
            <p className="text-stone-600">Resources for holistic wellness and daily living</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Ray Peat Research</h3>
              <p className="text-sm text-stone-600 mb-3">
                Dr. Ray Peat's research on aging, nutrition, and hormones. His work focuses on environmental influences on development, regenerative processes, and evolutionary perspectives in health.
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
          </div>
        </div>

        {/* Nutrition Section */}
        <div className="bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-8 font-roman">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🥗</span>
            </div>
            <h2 className="text-2xl font-bold text-burgundy mb-2">Nutrition</h2>
            <p className="text-stone-600">Evidence-based nutrition guidance and resources</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Functional Medicine</h3>
              <p className="text-sm text-stone-600 mb-3">
                Chris Kresser's functional medicine approach to nutrition, focusing on whole foods and personalized health strategies.
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
          </div>
        </div>

        {/* Physical Activity Section */}
        <div className="bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-8 font-roman">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💪</span>
            </div>
            <h2 className="text-2xl font-bold text-burgundy mb-2">Physical Activity</h2>
            <p className="text-stone-600">Exercise science and injury recovery resources</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Injury Self-Recovery Resource</h3>
              <p className="text-sm text-stone-600 mb-3">
                Sports Injury Clinic - A comprehensive database for all parts of the body's injuries and ways to heal. Provides information for self-recovery, rehabilitation exercises, and advice for anyone dealing with sports injuries.
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

      {/* Additional Information Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-burgundy mb-4 text-center font-roman">About Ray Peat Research</h2>
        <div className="max-w-4xl mx-auto text-stone-700 space-y-4">
          <p>
            Dr. Ray Peat holds a Ph.D. in Biology from the University of Oregon, specializing in physiology. His research focuses on aging, nutrition, and hormones, examining health problems such as infertility, epilepsy, dementia, diabetes, premenstrual syndrome, arthritis, and menopause.
          </p>
          <p>
            His approach prioritizes environmental influences on development, regenerative processes, and evolutionary perspectives. Peat's work emphasizes that degenerative processes are often caused by defects in our environment rather than inherent biological flaws.
          </p>
          <p>
            Key areas of his research include the therapeutic uses of progesterone, pregnenolone, thyroid hormone, and coconut oil. His foundational idea is that energy and structure are interdependent at every level of biological organization.
          </p>
          <p className="text-sm text-stone-600 italic">
            "The key idea was that energy and structure are interdependent, at every level." - Ray Peat
          </p>
        </div>
      </div>
    </div>
  );
} 