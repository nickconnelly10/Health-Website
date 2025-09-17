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
            My personal journey into my mind, body and spirit.
          </p>
        </div>
        
        {/* Three Pillars of Health */}
        <div className="space-y-16 animate-slide-up">
          {/* Body Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Body</h2>
            
            {/* Photo Placeholders */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-sm">Photo Placeholder 1</p>
              </div>
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-sm">Photo Placeholder 2</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nutrition</h3>
                <p className="text-gray-600 leading-relaxed">
                  My approach to nutrition focuses on whole, nutrient-dense foods that fuel optimal performance and recovery. I prioritize quality proteins, healthy fats, and a variety of colorful vegetables while maintaining flexibility in my eating patterns.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Physical Activity & Exercise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Movement is medicine. I combine strength training, cardiovascular work, and functional movement to build a resilient, capable body that serves me in all aspects of life.
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Hobbies in Movement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Beyond structured exercise, I find joy in activities that keep me moving - whether it's hiking in nature, playing sports, or simply taking long walks. These activities not only support physical health but also mental well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Mind Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Mind</h2>
            
            {/* Photo Placeholder */}
            <div className="mb-8">
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center max-w-md mx-auto">
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-sm">Photo Placeholder</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Reading & Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous learning keeps the mind sharp and curious. I'm passionate about reading across disciplines - from health and science to philosophy and personal development. Books have been instrumental in shaping my understanding of optimal living.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Plants & Gardening</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tending to plants and gardening provides a unique form of mindfulness and connection to nature. There's something deeply therapeutic about nurturing growth and witnessing the natural cycles of life firsthand.
                </p>
              </div>
            </div>
          </div>

          {/* Spirit Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Spirit</h2>
            
            {/* Photo Placeholder */}
            <div className="mb-8">
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center max-w-md mx-auto">
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-sm">Photo Placeholder</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Connection with God & Continuing Faith</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                My spiritual journey is deeply personal and ever-evolving. Faith has been both a source of strength and a constant challenge, requiring me to continually seek, question, and grow in my relationship with God. This spiritual foundation influences how I approach health, relationships, and purpose in life.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The intersection of faith and health has taught me that true wellness encompasses more than physical and mental aspects - it requires nurturing the soul and maintaining a connection to something greater than ourselves.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-12 animate-slide-up mt-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Beginning</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                My journey into health optimization began during my time in medical school, where I witnessed firsthand the disconnect between traditional medical approaches and the power of preventive care and lifestyle optimization.
              </p>
              <p>
                While studying conventional medicine, I became increasingly aware of how much of our health outcomes are determined by lifestyle factors rather than just medical interventions. This realization sparked a deep interest in understanding how we can optimize our health through evidence-based lifestyle modifications.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research & Experimentation</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Through extensive research, personal experimentation, and working with leading experts in the field, I've developed a comprehensive approach to health that combines cutting-edge science with practical, actionable protocols.
              </p>
              <p>
                I've spent countless hours studying the latest research in longevity, metabolic health, sleep optimization, and exercise science. Every protocol I recommend has been personally tested and refined through real-world application.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Areas of Focus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Metabolic Health</h3>
                <p className="text-gray-600 mb-4">
                  Optimizing blood sugar regulation, insulin sensitivity, and metabolic flexibility through targeted nutrition and exercise protocols.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Intermittent fasting protocols</li>
                  <li>• Low-carb and ketogenic approaches</li>
                  <li>• Blood glucose monitoring</li>
                  <li>• Metabolic flexibility training</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Sleep Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Creating the perfect sleep environment and routine for optimal recovery and cognitive performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sleep hygiene protocols</li>
                  <li>• Circadian rhythm optimization</li>
                  <li>• Sleep tracking and analysis</li>
                  <li>• Recovery enhancement strategies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Stress Management</h3>
                <p className="text-gray-600 mb-4">
                  Building resilience and managing stress through mindfulness, breathing techniques, and lifestyle design.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Meditation and mindfulness</li>
                  <li>• Breathing exercises</li>
                  <li>• Stress tracking and management</li>
                  <li>• Work-life balance optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise & Movement</h3>
                <p className="text-gray-600 mb-4">
                  Designing exercise protocols that maximize health benefits while minimizing injury risk and time investment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• High-intensity interval training</li>
                  <li>• Strength training protocols</li>
                  <li>• Movement quality and mobility</li>
                  <li>• Recovery and regeneration</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
