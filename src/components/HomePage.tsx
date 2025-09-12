import React from 'react';
import AboutPage from './AboutPage';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* About Section First */}
      <AboutPage />
      
      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-10">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Health Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="/nutrition" 
              className="block bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-2xl p-6 border border-green-200 transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-3">Nutrition</h3>
              <p className="text-green-700">Evidence-based nutrition protocols and dietary guidelines for optimal health.</p>
            </a>
            
            <a 
              href="/physical-activity" 
              className="block bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-2xl p-6 border border-blue-200 transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Physical Activity</h3>
              <p className="text-blue-700">Exercise protocols and movement guidelines for maintaining physical health.</p>
            </a>
            
            <a 
              href="/lifestyle" 
              className="block bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-2xl p-6 border border-purple-200 transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Lifestyle</h3>
              <p className="text-purple-700">Lifestyle optimization strategies for overall wellness and longevity.</p>
            </a>
            
            <a 
              href="/health-protocols" 
              className="block bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-2xl p-6 border border-orange-200 transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Health Protocols</h3>
              <p className="text-orange-700">Comprehensive health protocols based on scientific research.</p>
            </a>
            
            <a 
              href="/resources" 
              className="block bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-6 border border-gray-200 transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resources</h3>
              <p className="text-gray-700">Additional health resources, tools, and educational materials.</p>
            </a>
          </div>
          
          <div className="mt-8 p-6 bg-stone-100 border border-stone-300 rounded-2xl text-stone-800 text-center">
            <p className="text-lg">
              For questions, more in-depth details, or if you want to add more to our directory, contact me at
              <a href="mailto:nickconnelly10@gmail.com" className="underline ml-1 font-semibold">nickconnelly10@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 