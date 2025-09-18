import React from 'react';
import AboutPage from './AboutPage';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white'>
        <div className='flex flex-col justify-center min-h-screen relative w-full pt-24'>
          <div className='relative z-10 max-w-4xl mx-auto container-padding w-full'>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className='font-light text-gray-800 leading-tight mb-8 animate-fade-in'>
                  Health & Wellness
                </h1>
                <p className='text-xl text-gray-600 leading-relaxed max-w-2xl animate-slide-up'>
                  Evidence-based health protocols, my personal journey, and comprehensive resources for optimal health and longevity.
                </p>
              </div>
              <div className="animate-slide-up">
                <div className="relative">
                  <img 
                    src="/photos/home/hero-image.jpg" 
                    alt="Health and Wellness" 
                    className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <div className="hidden bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center h-[500px] flex flex-col justify-center">
                    <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm">Add your hero image to /public/photos/home/hero-image.jpg</p>
                  </div>
                </div>
              </div>
            </div>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              href="/resources-protocols" 
              className="group block bg-white hover:bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-200">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">Resources & Protocols</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">Comprehensive health resources, evidence-based protocols, testing recommendations, and practical tools for health optimization.</p>
              <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                Explore resources & protocols →
              </div>
            </a>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8 text-center shadow-sm">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Have Questions or Suggestions?</h3>
              <p className="text-gray-600 mb-6">
                For questions, more in-depth details, or if you want to add more to our directory, I'd love to hear from you.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Get in Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 