import React from 'react';

const protocolFiles = [
  'sleep.json',
  'lifestyle.json',
  'circadian_rhythm.json',
  'sedentary_behavior.json',
  'physical_activity.json',
  'index.json',
  'sleep_duration_recommendations_hirshkowitz2015.pdf',
  'rhodes_theory_PA_interventions_2013.pdf',
  'schroer_green_exercise_2014.pdf',
  'legates_light_circadian_2014.pdf',
  'biddle_sedentary_influences_2019.pdf',
  'hallal_global_PA_levels_2012.pdf',
  'ekelund_dose_response_PA_2019.pdf',
  'owen_sedentary_behavior_2010.pdf',
  'aerobic_exercise_mental_health_2018.pdf',
  'resistance_training_older_adults_2013.pdf',
  'hiit_meta_analysis_2018.pdf',
  'paleo_review_soffman2003.pdf',
  'paleo_meta_analysis_sofi2023.pdf',
  'paleo_metabolic_boers2014.pdf',
  'paleo_physiologic_frassetto2009.pdf',
  'paleo_glucose_tolerance_lindeberg2007.pdf',
  'paleo_meal_plans_kerr2021.pdf',
  'paleo_meal_plans.pdf',
  'Reducing Exposure to Harmful Chemicals_ A Practical Guide copy.pdf',
  'Autism_Tsunami_the_Impact_of_Rising_Prevalence_on_ copy 2.pdf',
  'Stanford CA-1 tutorial textbook 7-12-2022 FINAL copy.pdf',
  'Shockwave therapy Protocol copy.pdf',
  'Buffalo Concussion Treadmill Test Protocol copy.pdf',
];

export default function ProtocolUploader() {
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-marble dark:bg-charcoal rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
      <h2 className="text-3xl font-bold text-burgundy mb-4">Settings / Protocol Uploader</h2>
      <p className="text-lg text-stone-700 dark:text-stone-200 mb-4">Upload new protocols or manage your settings here. No login required.</p>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-burgundy mb-2">Available Protocol Files</h3>
        <ul className="list-disc ml-6 space-y-2">
          {protocolFiles.map((file) => (
            <li key={file}>
              <a
                href={`/src/protocols/${encodeURIComponent(file)}`}
                className="text-burgundy hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 