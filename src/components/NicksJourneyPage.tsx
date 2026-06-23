'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import PageHero from './PageHero';
import ContentCard from './ContentCard';

function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div className="content-card h-64 flex flex-col justify-center items-center text-center border-dashed">
      <svg className="h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-gray-500 text-xs">{label}</p>
    </div>
  );
}

export default function NicksJourneyPage() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  return (
    <div className="page-shell">
      <PageHero
        title="Nick's Health Journey"
        description="My personal journey into my body, mind and spirit."
      >
        <p className="text-base text-gray-500 max-w-xl mx-auto mt-4 italic">
          &ldquo;The Spirit controls the mind, the mind controls the body&rdquo;
        </p>
      </PageHero>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding space-y-8 animate-slide-up">
          {/* Body */}
          <ContentCard>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Body</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative w-full h-64">
                {!imgErrors.body ? (
                  <Image
                    src="/photos/journey/body/farmersmarket.jpeg"
                    alt="Farmers market produce"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-lg border border-gray-200"
                    onError={() => setImgErrors((e) => ({ ...e, body: true }))}
                  />
                ) : (
                  <MediaPlaceholder label="Add nutrition photo to /public/photos/journey/body/farmersmarket.jpeg" />
                )}
              </div>
              <div className="relative">
                <video
                  src="/videos/journey/IMG_2255.mov"
                  controls
                  className="w-full h-64 object-cover rounded-lg border border-gray-200"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-lg font-semibold text-burgundy mb-2">Nutrition</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I follow a holistic whole food diet, like how our ancestors have ate.
                </p>
              </section>
              <section>
                <h3 className="text-lg font-semibold text-burgundy mb-2">Physical Activity & Exercise</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Exercise is medicine. I combine strength training, cardiovascular work, and functional movement to build a resilient, capable body that serves me in all aspects of life.
                </p>
              </section>
              <section className="md:col-span-2">
                <h3 className="text-lg font-semibold text-burgundy mb-2">Hobbies in Movement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I find that during the day I must be active too, that includes walking, playing sports and biking instead of driving.
                </p>
              </section>
            </div>
          </ContentCard>

          {/* Mind */}
          <ContentCard>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Mind</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative w-full h-64">
                {!imgErrors.mind2 ? (
                  <Image
                    src="/photos/journey/mind/mind-photo-2.jpg"
                    alt="Mind journey - plants and gardening"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-lg border border-gray-200"
                    onError={() => setImgErrors((e) => ({ ...e, mind2: true }))}
                  />
                ) : (
                  <MediaPlaceholder label="Add mind photo 2 to /public/photos/journey/mind/mind-photo-2.jpg" />
                )}
              </div>
              <div className="relative w-full h-64">
                {!imgErrors.mind1 ? (
                  <Image
                    src="/photos/journey/mind/mind-photo-1.jpg"
                    alt="Mind journey - reading and learning"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-lg border border-gray-200"
                    onError={() => setImgErrors((e) => ({ ...e, mind1: true }))}
                  />
                ) : (
                  <MediaPlaceholder label="Add mind photo 1 to /public/photos/journey/mind/mind-photo-1.jpg" />
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-lg font-semibold text-burgundy mb-2">Reading & Learning</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I&apos;m passionate about reading to truly understand the nature of things, and gain knowledge from these texts, whether they are two thousand years old or from the past year, they all have something to learn from. I am passionate to read about the stoics, and how they lived their life, and also the religious text of the Bible. I am also into reading self-help books and learning more about health and science. Books have been instrumental in shaping my understanding of what&apos;s around me, and what&apos;s in me.
                </p>
              </section>
              <section>
                <h3 className="text-lg font-semibold text-burgundy mb-2">Plants & Gardening</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Caring for my garden, from peach trees and blackberry bushes to figs, and even a few indoor plants — has become one of my favorite ways to see nature and experience the world around us. Tending to them allows you to see their growth over a long term satisfaction.
                </p>
              </section>
            </div>
          </ContentCard>

          {/* Spirit */}
          <ContentCard>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Spirit</h2>

            <div className="mb-8">
              <div className="relative max-w-md mx-auto w-full h-64">
                {!imgErrors.spirit ? (
                  <Image
                    src="/photos/journey/spirit/mural-jordan-jesus.jpg"
                    alt="Spirit journey - faith and connection with God"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover rounded-lg border border-gray-200"
                    onError={() => setImgErrors((e) => ({ ...e, spirit: true }))}
                  />
                ) : (
                  <MediaPlaceholder label="Add spirit photo to /public/photos/journey/spirit/mural-jordan-jesus.jpg" />
                )}
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-burgundy mb-4">Connection with God & Continuing Faith</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Faith has been both a source of strength and a constant challenge, requiring me to continually seek, question, and grow in my relationship with God. The spirit is what controls the mind, which in turn controls the body, having a strong foundation means being able to endure what life gives you.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                Especially in college is when I started developing my relationship with God, for he gives guidance, comfort and strength. Prayer is an aspect that is key in the relationship. God does spectacular miracles, and I firsthand witnessed many, and I continue to pray to continue my relationship with the King of all Kings.
              </p>
            </div>
          </ContentCard>
        </div>
      </section>
    </div>
  );
}
