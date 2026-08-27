import React from 'react';
import Image from 'next/image';
import AboutPage from './AboutPage';

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <h1 className="font-light text-gray-800 leading-tight mb-6">
                Health & Wellness
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                My personal journey and resources for optimal health and longevity.
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="relative w-full h-[400px] md:h-[480px] overflow-hidden rounded-xl shadow-sm border border-gray-200">
                <Image
                  src="/photos/home/hero-image.jpg"
                  alt="Health and Wellness"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutPage />
    </div>
  );
}
