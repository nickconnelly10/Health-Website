import React from 'react';

export default function PhysicalActivityPage() {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-12 gap-8">
      {/* Main Content */}
      <div className="w-full md:w-1/2 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
        <h2 className="text-3xl font-bold text-burgundy mb-4 font-roman">Exercise for Every Body</h2>
        <p className="mb-6 text-lg text-stone-700 font-semibold">
          CDC guidelines recommend adults get at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, plus muscle-strengthening activities on two or more days.
        </p>
        
        <ul className="space-y-5 text-base text-stone-800">
          <li>
            <span className="font-bold">Daily Movement</span><br />
            Walk 15–30 minutes every day. Integrate movement into your life—mornings, after dinner, walking to class or work, etc.
          </li>
          
          <li>
            <span className="font-bold">Strength Training (2–4×/week)</span>
            <ul className="ml-5 list-disc">
              <li><span className="font-semibold">Weight-bearing:</span> If you're on a weekly schedule, try splits like chest/triceps, back/biceps, legs, or glutes. Mix it up with plyometrics, HIIT, high repetition, supersets, or full-body workouts. Be consistent—aim for up to 1 hour per session, 3–4 days per week.</li>
              <li><span className="font-semibold">Non-weight-bearing:</span> Use bodyweight exercises like incline push-ups, chair air squats, and ab workouts. I recommend doing this before bed every night for around 20 minutes—push-ups, air squats, and a small ab workout.</li>
            </ul>
          </li>
          
          <li>
            <span className="font-bold">Aerobic Activity (2–4×/week)</span>
            <ul className="ml-5 list-disc">
              <li>Running, cycling, swimming, or water aerobics.</li>
              <li><span className="font-semibold">Sprinting:</span> Excellent for body mechanics, energy, and muscle development. I highly recommend it, but caution against sprinting without proper training—build running endurance and mobility first to avoid injury.</li>
              <li><span className="font-semibold">Getting Started:</span> Begin with walking, then focus on time rather than distance. Start with 10 minutes and gradually increase. Be consistent and you'll see results. I run 3 times per week for 30 minutes each.</li>
            </ul>
          </li>
          
          <li>
            <span className="font-bold">Mobility (Daily or 3×/week)</span><br />
            5–10 minutes of stretching or yoga. Include deep-breathing exercises and foam rolling.
          </li>
          
          <li>
            <span className="font-bold">Recreational & Functional (1–2×/week)</span><br />
            Dancing, obstacle courses, or primal movement. Even playing sports like soccer or pickleball is great.
          </li>
          
          <li>
            <span className="font-bold">Routine</span><br />
            Schedule your workouts and be consistent. Aim for 3–4 times per week in weight-bearing or non-weight-bearing strength training for 30 minutes to 1 hour each session. Try to get at least 1 hour of aerobic activity per week through running, walking, biking, or sprinting.
          </li>
          
          <li>
            <span className="font-bold">Rest & Tracking</span><br />
            Remember to take rest days, eat well, and live a balanced lifestyle.
          </li>
        </ul>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-1/2 bg-marble rounded-3xl shadow-xl border-2 border-burgundy p-8 font-roman h-fit">
        <h3 className="text-2xl font-bold text-burgundy mb-4">Quick Tips</h3>
        <ul className="space-y-3 text-base text-stone-800">
          <li><span className="font-semibold">Start Small:</span> Begin with 5-10 minutes daily and build gradually</li>
          <li><span className="font-semibold">Consistency First:</span> Focus on showing up regularly over intensity</li>
          <li><span className="font-semibold">Listen to Your Body:</span> Pay attention to signals and adjust accordingly</li>
          <li><span className="font-semibold">Celebrate Progress:</span> Acknowledge small victories along the way</li>
          <li><span className="font-semibold">Find What You Enjoy:</span> Choose activities that bring you joy</li>
          <li><span className="font-semibold">Build Gradually:</span> Increase intensity and duration over time</li>
          <li><span className="font-semibold">Rest is Important:</span> Include recovery days in your routine</li>
          <li><span className="font-semibold">Track Your Progress:</span> Keep a simple log of your workouts</li>
        </ul>
      </aside>
    </div>
  );
}
