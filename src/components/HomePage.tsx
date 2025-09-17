import React from 'react';
import AboutPage from './AboutPage';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white'>
        <div className='flex flex-col justify-center min-h-screen relative w-full pt-24'>
          <div className='relative z-10 max-w-4xl mx-auto container-padding w-full'>
            <h1 className='font-light text-gray-800 leading-tight mb-8 animate-fade-in'>
              Health & Wellness
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed max-w-2xl animate-slide-up'>
              Evidence-based health protocols, personal wellness journeys, and comprehensive resources for optimal health and longevity.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutPage />
      
      {/* Health Resources Overview */}
      <section className='section-padding bg-gray-50'>
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive health resources organized by category. Each section contains evidence-based protocols, detailed guides, and practical tools for optimizing your health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="/nicks-journey" 
              className="group block bg-white hover:bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-200">
                  <svg className="w-6 h-6 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">Nick's Journey</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">My personal health journey, research insights, and the evolution of my health optimization approach.</p>
              <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                Read my story →
              </div>
            </a>
            
            <a 
              href="/healthy-living" 
              className="group block bg-white hover:bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-200">
                  <svg className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">Healthy Living</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">Comprehensive lifestyle optimization including nutrition protocols, physical activity guidelines, and daily wellness routines for optimal health and longevity.</p>
              <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                Explore healthy living →
              </div>
            </a>
            
            <a 
              href="/health-protocols" 
              className="group block bg-white hover:bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-200">
                  <svg className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">Health Protocols</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">Comprehensive health protocols, testing recommendations, and evidence-based health optimization strategies.</p>
              <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                View protocols →
              </div>
            </a>
            
            <a 
              href="/resources" 
              className="group block bg-white hover:bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-200">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">Resources</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">Additional health resources, tools, educational materials, and recommended reading for health optimization.</p>
              <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                Browse resources →
              </div>
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-white border border-gray-200 rounded-lg text-center">
            <p className="text-gray-700">
              For questions, more in-depth details, or if you want to add more to our directory, contact me at
              <a href="mailto:nickconnelly10@gmail.com" className="underline ml-1 font-semibold text-gray-900 hover:text-gray-700">nickconnelly10@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 