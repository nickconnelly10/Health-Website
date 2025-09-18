import React from 'react';

export default function NicksJourneyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Nick's Health Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My personal journey into my body, mind and spirit.
          </p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mt-4 italic">
            "The Spirit controls the mind, the mind controls the body"
          </p>
        </div>
        
        {/* Three Pillars of Health */}
        <div className="space-y-16 animate-slide-up">
          {/* Body Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Body</h2>
            
            {/* Body Media - Video and Nutrition Photo */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative">
                <video 
                  src="/videos/journey/IMG_2255.mov" 
                  controls 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="relative">
                <img 
                  src="/photos/journey/body/nutrition-photo.jpg" 
                  alt="Nutrition - whole food diet" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <div className="hidden bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center h-64 flex flex-col justify-center">
                  <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-xs">Add nutrition photo to /public/photos/journey/body/nutrition-photo.jpg</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nutrition</h3>
                <p className="text-gray-600 leading-relaxed">
                  I follow a holistic whole food diet, like how our ancestors have ate.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Physical Activity & Exercise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exercise is medicine. I combine strength training, cardiovascular work, and functional movement to build a resilient, capable body that serves me in all aspects of life.
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Hobbies in Movement</h3>
                <p className="text-gray-600 leading-relaxed">
                  I find that during the day I must be active too, that includes walking, playing sports and biking instead of driving.
                </p>
              </div>
            </div>

          </div>

          {/* Mind Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Mind</h2>
            
            {/* Mind Photos */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative">
                <img 
                  src="/photos/journey/mind/mind-photo-2.jpg" 
                  alt="Mind journey - plants and gardening" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <div className="hidden bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center h-64 flex flex-col justify-center">
                  <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-xs">Add mind photo 2 to /public/photos/journey/mind/mind-photo-2.jpg</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/photos/journey/mind/mind-photo-1.jpg" 
                  alt="Mind journey - reading and learning" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <div className="hidden bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center h-64 flex flex-col justify-center">
                  <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-xs">Add mind photo 1 to /public/photos/journey/mind/mind-photo-1.jpg</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Reading & Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm passionate about reading to truly understand the nature of things, and gain knowledge from these texts, whether they are two thousand years old or from the past year, they all have something to learn from. I am passionate to read about the stoics, and how they lived their life, and also the religious text of the Bible. I am also into reading self-help books and learning more about health and science. Books have been instrumental in shaping my understanding of what's around me, and what's in me.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Plants & Gardening</h3>
                <p className="text-gray-600 leading-relaxed">
                  Caring for my garden, from peach trees and blackberry bushes to figs, and even a few indoor plants — has become one of my favorite ways to see nature and experience the world around us. Tending to them allows you to see their growth over a long term satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Spirit Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Spirit</h2>
            
            {/* Spirit Photo */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <img 
                  src="/photos/journey/spirit/mural-jordan-jesus.jpg" 
                  alt="Spirit journey - faith and connection with God" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <div className="hidden bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center h-64 flex flex-col justify-center">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Add spirit photo to /public/photos/journey/spirit/mural-jordan-jesus.jpg</p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Connection with God & Continuing Faith</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Faith has been both a source of strength and a constant challenge, requiring me to continually seek, question, and grow in my relationship with God. The spirit is what controls the mind, which in turn controls the body, having a strong foundation means being able to endure what life gives you.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Especially in college is when I started developing my relationship with God, for he gives guidance, comfort and strength. Prayer is an aspect that is key in the relationship. God does spectacular miracles, and I firsthand witnessed many, and I continue to pray to continue my relationship with the King of all Kings.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-12 animate-slide-up mt-16">


        </div>
      </div>
    </div>
  );
}
