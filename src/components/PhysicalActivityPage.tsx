import React from 'react';

export default function PhysicalActivityPage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-12 gap-6">
      {/* Main Content */}
      <div className="w-full lg:w-3/5 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-6 font-roman">
        <h2 className="text-2xl font-bold text-burgundy mb-4 font-roman">Exercise for Every Body</h2>
        <p className="mb-4 text-base text-stone-700 font-semibold">
          CDC guidelines: 150 minutes moderate or 75 minutes vigorous aerobic activity weekly, plus muscle-strengthening 2+ days.
        </p>
        
        <ul className="space-y-4 text-sm text-stone-800">
          <li>
            <span className="font-bold">Daily Movement</span><br />
            Walk 15–30 minutes daily. Integrate movement into life—mornings, after dinner, walking to work, etc.
          </li>
          
          <li>
            <span className="font-bold">Strength Training (2–4×/week)</span>
            <ul className="ml-5 list-disc">
              <li><span className="font-semibold">Weight-bearing:</span> Try splits like chest/triceps, back/biceps, legs, or glutes. Mix with plyometrics, HIIT, high repetition, supersets, or full-body workouts. Aim for 1 hour per session, 3–4 days per week.</li>
              <li><span className="font-semibold">Non-weight-bearing:</span> Bodyweight exercises like incline push-ups, chair air squats, ab workouts. Do before bed nightly for 20 minutes.</li>
            </ul>
          </li>
          
          <li>
            <span className="font-bold">Aerobic Activity (2–4×/week)</span>
            <ul className="ml-5 list-disc">
              <li>Running, cycling, swimming, or water aerobics.</li>
              <li>Sprinting: Excellent for body mechanics, energy, muscle development. Build running endurance and mobility first to avoid injury.</li>
              <li><span className="font-semibold">Getting Started:</span> Begin with walking, focus on time not distance. Start with 10 minutes and gradually increase. Be consistent.</li>
            </ul>
          </li>
          
          <li>
            <span className="font-bold">Mobility (Daily or 3×/week)</span><br />
            5–10 minutes stretching or yoga. Include deep-breathing exercises and foam rolling.
          </li>
          
          <li>
            <span className="font-bold">Recreational & Functional (1–2×/week)</span><br />
            Enjoy recreational movement like dancing, obstacle courses, primal movement, or sports like soccer, pickleball.
          </li>
          
          <li>
            <span className="font-bold">Routine</span><br />
            Schedule workouts and be consistent. Aim for 3–4 times per week strength training for 30 minutes to 1 hour each session. Get at least 1 hour aerobic activity weekly.
          </li>
          
          <li>
            <span className="font-bold">Rest & Tracking</span><br />
            Take rest days, eat well, and live a balanced lifestyle.
          </li>
        </ul>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-2/5 bg-marble rounded-3xl shadow-xl border-2 border-burgundy p-6 font-roman h-fit">
        <h3 className="text-xl font-bold text-burgundy mb-4">Quick Tips</h3>
        <ul className="space-y-3 text-sm text-stone-800">
          <li><span className="font-semibold">Start Small:</span> Begin with 5-10 minutes daily and build gradually</li>
          <li><span className="font-semibold">Consistency First:</span> Focus on showing up regularly over intensity</li>
          <li><span className="font-semibold">Listen to Your Body:</span> Pay attention to signals and adjust accordingly</li>
          <li><span className="font-semibold">Find What You Enjoy:</span> Choose activities that bring you joy</li>
          <li><span className="font-semibold">Build Gradually:</span> Increase intensity and duration over time</li>
          <li><span className="font-semibold">Rest is Important:</span> Include recovery days in your routine</li>
        </ul>
        <div className="mt-6">
          <h4 className="text-lg font-bold text-burgundy mb-2">Track Your Progress</h4>
          <p className="text-sm text-stone-800 mb-2">
            Start simple—download Strava to track runs or workouts. Follow our Strava club @ NEST Run Club.
          </p>
          <div className="rounded-2xl border-2 border-orange-400 bg-white shadow-lg p-2 flex flex-col items-center gap-2 w-fit mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Strava_Logo.svg" alt="Strava logo" className="h-6 w-auto" />
              <span className="text-lg font-bold text-orange-500 tracking-wide">NEST RUN CLUB</span>
            </div>
            <iframe allowTransparency={true} frameBorder='0' height='160' scrolling='no' src='https://www.strava.com/clubs/1284036/latest-rides/d1fef7f441c5fc4894f0308226fa46da1465ff16?show_rides=false' width='320' className="rounded-lg border border-stone-200"></iframe>
            <a href="https://www.strava.com/clubs/1284036" target="_blank" rel="noopener noreferrer" className="mt-1 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded-lg shadow transition-colors text-center w-full">
              View Club on Strava
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
