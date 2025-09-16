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
            My personal journey into health optimization, from medical school insights to evidence-based protocols.
          </p>
        </div>
        
        {/* Journey Timeline */}
        <div className="space-y-12 animate-slide-up">
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

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Current Focus</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Today, I continue to research and implement the latest findings in health optimization. My current focus areas include longevity biomarkers, cognitive enhancement, and the intersection of technology and health.
              </p>
              <p>
                This platform represents years of research, personal testing, and collaboration with health professionals. Every protocol, supplement recommendation, and lifestyle modification has been carefully vetted through scientific literature and real-world application.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">My Mission</h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              To bridge the gap between cutting-edge health research and practical, actionable protocols that people can implement in their daily lives. I believe that everyone deserves access to evidence-based health optimization strategies that can transform their quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
