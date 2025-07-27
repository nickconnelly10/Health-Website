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
                 Dr. Ray Peat holds a Ph.D. in Biology from the University of Oregon, specializing in physiology. His research focuses on aging, nutrition, and hormones, examining health problems such as infertility, epilepsy, dementia, diabetes, premenstrual syndrome, arthritis, and menopause.
               </p>
               <p className="text-sm text-stone-600 mb-3">
                 His approach prioritizes environmental influences on development, regenerative processes, and evolutionary perspectives. Peat's work emphasizes that degenerative processes are often caused by defects in our environment rather than inherent biological flaws.
               </p>
               <p className="text-sm text-stone-600 mb-3">
                 Key areas of his research include the therapeutic uses of progesterone, pregnenolone, thyroid hormone, and coconut oil. His foundational idea is that energy and structure are interdependent at every level of biological organization.
               </p>
               <p className="text-sm text-stone-600 italic mb-3">
                 "The key idea was that energy and structure are interdependent, at every level." - Ray Peat
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

        {/* Health Protocol Database Section */}
        <div className="bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-8 font-roman">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h2 className="text-2xl font-bold text-burgundy mb-2">Health Protocol Database</h2>
            <p className="text-stone-600">Scientific literature repository powering our AI health advisor</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-burgundy mb-2">Scientific Literature Repository</h3>
              <p className="text-sm text-stone-600 mb-3">
                Our comprehensive database of peer-reviewed scientific literature, research papers, and clinical studies serves as the foundation for our AI health advisor's decision-making process.
              </p>
              <p className="text-sm text-stone-600 mb-3">
                The AI system analyzes this curated collection of evidence-based research to provide informed health recommendations, ensuring that all advice is grounded in current scientific understanding rather than anecdotal evidence.
              </p>
              <p className="text-sm text-stone-600 mb-3">
                This repository includes studies on nutrition, exercise physiology, mental health, preventive medicine, and emerging health technologies, continuously updated to reflect the latest research findings.
              </p>
              <p className="text-sm text-stone-600 italic mb-3">
                "The AI reads and processes this scientific literature to make evidence-based health decisions and recommendations."
              </p>
              <a 
                href="https://github.com/nickmuscadine/health-protocols" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Health Protocols Repository
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