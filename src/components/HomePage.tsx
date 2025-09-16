import React from 'react';
import AboutPage from './AboutPage';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white'>
        <div className='flex flex-col justify-center min-h-screen relative w-full pt-20'>
          <div className='relative z-10 max-w-4xl mx-auto container-padding w-full'>
            <h1 className='font-light text-gray-800 leading-tight mb-8 animate-fade-in'>
              Health & Wellness Platform
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed max-w-2xl animate-slide-up'>
              Evidence-based health protocols, personal wellness journeys, and comprehensive resources for optimal health and longevity.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutPage />
      
      {/* Personal Journey Section */}
      <section className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding'>
          <div className='text-center mb-16 animate-fade-in'>
            <h2 className='font-light text-gray-800 leading-tight mb-8'>
              My Personal Health Journey
            </h2>
          </div>
          
          <div className='prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 animate-fade-in'>
            <p className='text-lg'>
              My journey into health optimization began during my time in medical school, where I witnessed firsthand the disconnect between traditional medical approaches and the power of preventive care and lifestyle optimization.
            </p>
            
            <p className='text-lg'>
              Through extensive research, personal experimentation, and working with leading experts in the field, I've developed a comprehensive approach to health that combines cutting-edge science with practical, actionable protocols.
            </p>
            
            <p className='text-lg'>
              This platform represents years of research, personal testing, and collaboration with health professionals. Every protocol, supplement recommendation, and lifestyle modification has been carefully vetted through scientific literature and real-world application.
            </p>

            <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400 mt-8'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>Key Areas of Focus</h3>
              <div className='grid md:grid-cols-2 gap-4'>
                <ul className='space-y-2 text-gray-700'>
                  <li>• Metabolic optimization</li>
                  <li>• Sleep quality enhancement</li>
                  <li>• Stress management protocols</li>
                  <li>• Immune system support</li>
                </ul>
                <ul className='space-y-2 text-gray-700'>
                  <li>• Cardiovascular health</li>
                  <li>• Cognitive performance</li>
                  <li>• Longevity biomarkers</li>
                  <li>• Exercise optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className='section-padding bg-gray-50'>
        <div className="max-w-6xl mx-auto container-padding">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Health Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="/nutrition" 
              className="group block bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-2xl p-6 border border-green-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                  <svg className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-900 transition-colors duration-300">Nutrition</h3>
              <p className="text-green-700 group-hover:text-green-800 transition-colors duration-300">Evidence-based nutrition protocols and dietary guidelines for optimal health.</p>
              <div className="mt-3 text-xs text-green-500 group-hover:text-green-600 transition-colors duration-300">
                Explore protocols →
              </div>
            </a>
            
            <a 
              href="/physical-activity" 
              className="group block bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-2xl p-6 border border-blue-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-900 transition-colors duration-300">Physical Activity</h3>
              <p className="text-blue-700 group-hover:text-blue-800 transition-colors duration-300">Exercise protocols and movement guidelines for maintaining physical health.</p>
              <div className="mt-3 text-xs text-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                View exercises →
              </div>
            </a>
            
            <a 
              href="/lifestyle" 
              className="group block bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-2xl p-6 border border-purple-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                  <svg className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3 group-hover:text-purple-900 transition-colors duration-300">Lifestyle</h3>
              <p className="text-purple-700 group-hover:text-purple-800 transition-colors duration-300">Lifestyle optimization strategies for overall wellness and longevity.</p>
              <div className="mt-3 text-xs text-purple-500 group-hover:text-purple-600 transition-colors duration-300">
                Optimize habits →
              </div>
            </a>
            
            <a 
              href="/health-protocols" 
              className="group block bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-2xl p-6 border border-orange-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                  <svg className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3 group-hover:text-orange-900 transition-colors duration-300">Health Protocols</h3>
              <p className="text-orange-700 group-hover:text-orange-800 transition-colors duration-300">Comprehensive health protocols based on scientific research.</p>
              <div className="mt-3 text-xs text-orange-500 group-hover:text-orange-600 transition-colors duration-300">
                View protocols →
              </div>
            </a>
            
            <a 
              href="/resources" 
              className="group block bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">Resources</h3>
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Additional health resources, tools, and educational materials.</p>
              <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                Browse resources →
              </div>
            </a>
          </div>
          
          <div className="mt-8 p-6 bg-gray-100 border border-gray-300 rounded-2xl text-gray-800 text-center">
            <p className="text-lg">
              For questions, more in-depth details, or if you want to add more to our directory, contact me at
              <a href="mailto:nickconnelly10@gmail.com" className="underline ml-1 font-semibold">nickconnelly10@gmail.com</a>.
            </p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
} 