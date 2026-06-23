'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import AboutPage from './AboutPage';

export default function HomePage() {
  const [heroError, setHeroError] = useState(false);

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
              <div className="relative w-full h-[400px] md:h-[480px]">
                {!heroError ? (
                  <Image
                    src="/photos/home/hero-image.jpg"
                    alt="Health and Wellness"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl shadow-sm border border-gray-200"
                    onError={() => setHeroError(true)}
                  />
                ) : (
                  <div className="content-card h-full flex flex-col justify-center items-center text-center border-dashed">
                    <svg className="h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm">Add your hero image to /public/photos/home/hero-image.jpg</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutPage />
    </div>
  );
}
