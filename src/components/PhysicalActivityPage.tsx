import React from 'react';
import Image from 'next/image';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function PhysicalActivityPage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-12 gap-6">
      {/* Main Content */}
      <div className="w-full lg:w-3/5 bg-white rounded-3xl shadow-2xl border border-stone-200 p-6">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">How I Move</h2>
        <div className="space-y-4 text-sm text-stone-800">
          <p>
            Movement is non-negotiable for me. It&apos;s how I manage stress, stay sharp, and build the physical stamina for every day. I structure my training around the FITT principle — Frequency, Intensity, Time, and Type.
          </p>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Strength</h3>
            <p>
              Full-body days, 3–4 times a week, built around compound multi-joint lifts — low-bar back squat, deadlift, and bench press. These give me the most return for the time invested in strength.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Aerobic</h3>
            <p>
              A big part of my week. Running, cycling, or swimming, with intensity and duration scaled to what I&apos;m building toward. I focus on time over distance when ramping anything new up.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Mobility &amp; Stretching</h3>
            <p>
              Daily. Five to ten minutes of stretching, yoga, or foam rolling, plus deep breathing. It&apos;s the part most people skip and the part that&apos;s kept me healthy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Daily Walking</h3>
            <p>
              A 15–30 minute walk most days — mornings, after dinner, or walking to classes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Recreation</h3>
            <p>
              Pickleball, soccer, basketball — something unstructured at least once a week.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Rest</h3>
            <p>
              Real rest days are part of the plan, not an afterthought. I pay attention to how sleep and food show up in my training and pull back when my body asks me to.
            </p>
          </section>

          <PersonalDisclaimer className="mt-6" />
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-2/5 bg-white rounded-3xl shadow-xl border border-stone-200 p-6 h-fit">
        <div className="rounded-2xl border-2 border-orange-400 bg-white shadow-lg p-2 flex flex-col items-center gap-2 w-fit mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Strava_Logo.svg" alt="Strava logo" width={70} height={24} className="h-6 w-auto" />
              <span className="text-lg font-bold text-orange-500 tracking-wide">NEST RUN CLUB</span>
            </div>
            <iframe frameBorder={0} height={160} scrolling="no" src="https://www.strava.com/clubs/1284036/latest-rides/d1fef7f441c5fc4894f0308226fa46da1465ff16?show_rides=false" width={300} className="rounded-lg border border-gray-200" title="Nest Run Club on Strava" />
            <a href="https://www.strava.com/clubs/1284036" target="_blank" rel="noopener noreferrer" className="mt-1 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded-lg shadow transition-colors text-center w-full">
              View Club on Strava
            </a>
          </div>
      </aside>
    </div>
  );
}
