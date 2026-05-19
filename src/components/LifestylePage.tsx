import React from 'react';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function LifestylePage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-12 gap-6">
      {/* Main Content */}
      <div className="w-full lg:w-3/5 bg-white rounded-3xl shadow-2xl border border-stone-200 p-6">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">How I Live</h2>
        <div className="space-y-4 text-sm text-stone-800">
          <p>
            The habits below are the ones I&apos;ve built for myself. They keep me grounded, focused, and ready for the demands of everyday life.
          </p>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Morning Light</h3>
            <p>
              I try to get outside shortly after waking — a quick walk, breakfast on the patio, or just reading by a sunny window. It&apos;s how I start the day clear-headed.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Nutrition</h3>
            <p>
              Covered on the Nutrition tab — a whole-foods approach with a daily eating window that works for me.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Movement</h3>
            <p>
              Covered on the Physical Activity tab — I follow the CDC&apos;s general guidance on weekly activity such as lifting or running and build in daily walks.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Connection</h3>
            <p>
              I make space for at least one real interaction a day — a walk with a friend, a call home, a shared meal. It matters more than people give it credit for.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Focused Work</h3>
            <p>
              I work in deep blocks with short breaks in between — usually a walk, water, or some stretching. It&apos;s what keeps me sharp through long study sessions.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Environment</h3>
            <p>
              I lean toward non-toxic personal-care and cleaning products, store food in glass or stainless steel, and choose natural fabrics where I can.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Evening Wind-Down</h3>
            <p>
              I stop eating a couple of hours before bed, dim the lights, and put my phone away well before sleep. Journaling, reading, or a few minutes of stretching closes the day out. High quaility sleep is essential for a healthy life.
            </p>
          </section>

          <PersonalDisclaimer className="mt-6" />
        </div>
      </div>
      {/* Sidebar */}
      <aside className="w-full lg:w-2/5 bg-white rounded-3xl shadow-xl border border-stone-200 p-6 h-fit">
        <p className="italic text-stone-700 mb-4 text-sm">"Very little is needed to make a happy life; it is all within yourself, in your way of thinking."<br /><span className="block mt-2 text-right text-xs text-stone-500">—Marcus Aurelius</span></p>
        <h3 className="text-xl font-bold text-burgundy mb-4">Life Balance</h3>
        <ul className="space-y-2 text-sm text-stone-800">
          <li>Physical</li>
          <li>Mental/Emotional</li>
          <li>Spiritual/Purpose</li>
          <li>Career</li>
          <li>Financial</li>
          <li>Environment</li>
          <li>Family/Social</li>
        </ul>
        <p className="text-sm text-stone-700 mt-4">
          Take time weekly to reflect on your thoughts—away from distractions. Think, walk, or write to identify which life areas you may be under-giving to during this season.
        </p>
      </aside>
    </div>
  );
} 