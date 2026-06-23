import React from 'react';
import Image from 'next/image';
import ContentCard from './ContentCard';
import PersonalDisclaimer from './PersonalDisclaimer';

const sections = [
  {
    title: 'Strength',
    body: 'Full-body days, 3–4 times a week, built around compound multi-joint lifts — low-bar back squat, deadlift, and bench press. These give me the most return for the time invested in strength.',
  },
  {
    title: 'Aerobic',
    body: 'A big part of my week. Running, cycling, or swimming, with intensity and duration scaled to what I\'m building toward. I focus on time over distance when ramping anything new up.',
  },
  {
    title: 'Mobility & Stretching',
    body: 'Daily. Five to ten minutes of stretching, yoga, or foam rolling, plus deep breathing. It\'s the part most people skip and the part that\'s kept me healthy.',
  },
  {
    title: 'Daily Walking',
    body: 'A 15–30 minute walk most days — mornings, after dinner, or walking to classes.',
  },
  {
    title: 'Recreation',
    body: 'Pickleball, soccer, basketball — something unstructured at least once a week.',
  },
  {
    title: 'Rest',
    body: 'Real rest days are part of the plan, not an afterthought. I pay attention to how sleep and food show up in my training and pull back when my body asks me to.',
  },
];

export default function PhysicalActivityPage() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <ContentCard>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How I Move</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Movement is non-negotiable for me. It&apos;s how I manage stress, stay sharp, and build the physical stamina for every day. I structure my training around the FITT principle — Frequency, Intensity, Time, and Type.
          </p>

          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-lg font-semibold text-burgundy mb-2">{section.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <PersonalDisclaimer className="mt-8" />
        </ContentCard>
      </div>

      <ContentCard className="h-fit">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Strava_Logo.svg"
              alt="Strava logo"
              width={70}
              height={24}
              className="h-6 w-auto"
            />
            <span className="text-base font-semibold text-orange-500 tracking-wide">NEST RUN CLUB</span>
          </div>
          <iframe
            frameBorder={0}
            height={160}
            scrolling="no"
            src="https://www.strava.com/clubs/1284036/latest-rides/d1fef7f441c5fc4894f0308226fa46da1465ff16?show_rides=false"
            width={300}
            className="rounded-lg border border-gray-200 max-w-full"
            title="Nest Run Club on Strava"
          />
          <a
            href="https://www.strava.com/clubs/1284036"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
          >
            View Club on Strava
          </a>
        </div>
      </ContentCard>
    </div>
  );
}
