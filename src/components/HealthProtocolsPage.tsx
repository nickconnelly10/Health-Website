import React, { useState } from 'react';

interface Protocol {
  id: string;
  title: string;
  category: string;
  abstract: string;
  filename: string;
  year?: string;
  authors?: string;
}

const protocols: Protocol[] = [
  {
    id: 'aerobic-exercise-mental-health',
    title: 'Aerobic Exercise & Mental Health',
    category: 'Physical Activity & Exercise',
    abstract: 'Research on the benefits of aerobic exercise for mental health outcomes. Examines the relationship between physical activity and psychological well-being, including depression and anxiety management.',
    filename: 'aerobic_exercise_mental_health_2018.pdf',
    year: '2018'
  },
  {
    id: 'autism-prevalence-impact',
    title: 'Autism Prevalence Impact',
    category: 'Mental Health & Special Populations',
    abstract: 'Research on the rising prevalence of autism spectrum disorders and their impact on healthcare systems and society. Analyzes trends and implications for diagnosis and treatment.',
    filename: 'Autism_Tsunami_the_Impact_of_Rising_Prevalence_on_ copy 2.pdf'
  },
  {
    id: 'buffalo-concussion-test',
    title: 'Buffalo Concussion Treadmill Test Protocol',
    category: 'Medical Protocols',
    abstract: 'Clinical protocol for assessing concussion recovery using treadmill testing. Provides standardized procedures for evaluating exercise tolerance and return-to-play decisions.',
    filename: 'Buffalo Concussion Treadmill Test Protocol copy.pdf'
  },
  {
    id: 'circadian-rhythm-light',
    title: 'Light & Circadian Rhythm',
    category: 'Sleep & Circadian Rhythm',
    abstract: 'Research on the effects of light exposure on circadian rhythms and sleep patterns. Examines how artificial and natural light influence biological timing and health outcomes.',
    filename: 'legates_light_circadian_2014.pdf',
    year: '2014',
    authors: 'Legates et al.'
  },
  {
    id: 'dose-response-physical-activity',
    title: 'Dose Response Physical Activity',
    category: 'Physical Activity & Exercise',
    abstract: 'Ekelund et al. research on physical activity guidelines and dose-response relationships. Establishes evidence-based recommendations for optimal activity levels across different populations.',
    filename: 'ekelund_dose_response_PA_2019.pdf',
    year: '2019',
    authors: 'Ekelund et al.'
  },
  {
    id: 'global-physical-activity',
    title: 'Global Physical Activity Levels',
    category: 'Physical Activity & Exercise',
    abstract: 'Hallal et al. study on worldwide physical activity patterns and trends. Provides comprehensive data on global activity levels and regional variations in exercise participation.',
    filename: 'hallal_global_PA_levels_2012.pdf',
    year: '2012',
    authors: 'Hallal et al.'
  },
  {
    id: 'hiit-meta-analysis',
    title: 'HIIT Meta Analysis',
    category: 'Physical Activity & Exercise',
    abstract: 'High-intensity interval training research and meta-analysis. Evaluates the effectiveness of HIIT protocols for fitness, weight loss, and cardiovascular health improvements.',
    filename: 'hiit_meta_analysis_2018.pdf',
    year: '2018'
  },
  {
    id: 'paleo-glucose-tolerance',
    title: 'Paleo Diet - Glucose Tolerance',
    category: 'Nutrition & Diet',
    abstract: 'Lindeberg 2007 study on the metabolic effects of paleo diet on glucose tolerance. Examines how ancestral nutrition patterns affect blood sugar regulation and metabolic health.',
    filename: 'paleo_glucose_tolerance_lindeberg2007.pdf',
    year: '2007',
    authors: 'Lindeberg'
  },
  {
    id: 'paleo-meal-plans',
    title: 'Paleo Diet - Meal Plans',
    category: 'Nutrition & Diet',
    abstract: 'Kerr 2021 practical implementation of paleo diet meal planning. Provides structured meal plans and nutritional guidelines for paleo lifestyle adoption.',
    filename: 'paleo_meal_plans_kerr2021.pdf',
    year: '2021',
    authors: 'Kerr'
  },
  {
    id: 'paleo-meta-analysis',
    title: 'Paleo Diet - Meta Analysis',
    category: 'Nutrition & Diet',
    abstract: 'Sofi 2023 systematic review of paleo diet research. Comprehensive meta-analysis evaluating the health effects and clinical outcomes of paleo nutrition patterns.',
    filename: 'paleo_meta_analysis_sofi2023.pdf',
    year: '2023',
    authors: 'Sofi'
  },
  {
    id: 'paleo-metabolic-effects',
    title: 'Paleo Diet - Metabolic Effects',
    category: 'Nutrition & Diet',
    abstract: 'Boers 2014 research on the physiological impacts of paleo diet. Examines metabolic changes, inflammation markers, and cardiovascular risk factors.',
    filename: 'paleo_metabolic_boers2014.pdf',
    year: '2014',
    authors: 'Boers'
  },
  {
    id: 'paleo-physiologic-effects',
    title: 'Paleo Diet - Physiologic Effects',
    category: 'Nutrition & Diet',
    abstract: 'Frassetto 2009 study on biological responses to paleo nutrition. Analyzes physiological adaptations and health outcomes from ancestral dietary patterns.',
    filename: 'paleo_physiologic_frassetto2009.pdf',
    year: '2009',
    authors: 'Frassetto'
  },
  {
    id: 'paleo-review',
    title: 'Paleo Diet - Review',
    category: 'Nutrition & Diet',
    abstract: 'Soffman 2003 comprehensive overview of paleo diet research. Systematic review of evidence supporting ancestral nutrition approaches and their health implications.',
    filename: 'paleo_review_soffman2003.pdf',
    year: '2003',
    authors: 'Soffman'
  },
  {
    id: 'resistance-training-older-adults',
    title: 'Resistance Training for Older Adults',
    category: 'Physical Activity & Exercise',
    abstract: 'Strength training protocols specifically designed for older adult populations. Focuses on safety, effectiveness, and functional improvements for aging individuals.',
    filename: 'resistance_training_older_adults_2013.pdf',
    year: '2013'
  },
  {
    id: 'rhodes-physical-activity-theory',
    title: 'Theory of Physical Activity Interventions',
    category: 'Physical Activity & Exercise',
    abstract: 'Rhodes et al. research on intervention design for physical activity promotion. Theoretical framework for developing effective exercise behavior change programs.',
    filename: 'rhodes_theory_PA_interventions_2013.pdf',
    year: '2013',
    authors: 'Rhodes et al.'
  },
  {
    id: 'schroer-green-exercise',
    title: 'Green Exercise',
    category: 'Mental Health & Special Populations',
    abstract: 'Schroer 2014 research on nature-based physical activity. Examines the additional benefits of exercising in natural environments for mental and physical health.',
    filename: 'schroer_green_exercise_2014.pdf',
    year: '2014',
    authors: 'Schroer'
  },
  {
    id: 'sedentary-behavior-influences',
    title: 'Sedentary Behavior Influences',
    category: 'Sedentary Behavior',
    abstract: 'Biddle 2019 study on factors influencing sedentary lifestyle patterns. Identifies determinants of physical inactivity and strategies for behavior modification.',
    filename: 'biddle_sedentary_influences_2019.pdf',
    year: '2019',
    authors: 'Biddle'
  },
  {
    id: 'sedentary-behavior-research',
    title: 'Sedentary Behavior Research',
    category: 'Sedentary Behavior',
    abstract: 'Owen 2010 research on the health impacts of sedentary behavior. Comprehensive analysis of how prolonged sitting affects metabolic health and disease risk.',
    filename: 'owen_sedentary_behavior_2010.pdf',
    year: '2010',
    authors: 'Owen'
  },
  {
    id: 'shockwave-therapy',
    title: 'Shockwave Therapy Protocol',
    category: 'Medical Protocols',
    abstract: 'Clinical protocol for shockwave therapy interventions. Guidelines for therapeutic applications in musculoskeletal conditions and tissue regeneration.',
    filename: 'Shockwave therapy Protocol copy.pdf'
  },
  {
    id: 'sleep-duration-recommendations',
    title: 'Sleep Duration Recommendations',
    category: 'Sleep & Circadian Rhythm',
    abstract: 'Hirshkowitz 2015 evidence-based sleep guidelines. Comprehensive recommendations for optimal sleep duration across different age groups and populations.',
    filename: 'sleep_duration_recommendations_hirshkowitz2015.pdf',
    year: '2015',
    authors: 'Hirshkowitz'
  },
  {
    id: 'stanford-ca1-tutorial',
    title: 'Stanford CA-1 Tutorial Textbook',
    category: 'Medical Protocols',
    abstract: 'Medical education resource for clinical anesthesia training. Comprehensive textbook covering fundamental principles and practical applications in anesthesiology.',
    filename: 'Stanford CA-1 tutorial textbook 7-12-2022 FINAL copy.pdf',
    year: '2022'
  },
  {
    id: 'harmful-chemicals-guide',
    title: 'Reducing Exposure to Harmful Chemicals',
    category: 'Environmental Health',
    abstract: 'Practical guide for minimizing exposure to environmental toxins and harmful chemicals. Evidence-based strategies for creating healthier living and working environments.',
    filename: 'Reducing Exposure to Harmful Chemicals_ A Practical Guide copy.pdf'
  }
];

const categories = [
  'All Protocols',
  'Physical Activity & Exercise',
  'Nutrition & Diet',
  'Sleep & Circadian Rhythm',
  'Sedentary Behavior',
  'Mental Health & Special Populations',
  'Medical Protocols',
  'Environmental Health'
];

export default function HealthProtocolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Protocols');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProtocols = protocols.filter(protocol => {
    const matchesCategory = selectedCategory === 'All Protocols' || protocol.category === selectedCategory;
    const matchesSearch = protocol.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         protocol.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         protocol.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (protocol: Protocol) => {
    const url = `https://github.com/nickconnelly10/Health-protocols/raw/master/${encodeURIComponent(protocol.filename)}`;
    window.open(url, '_blank');
  };

  const handleRead = (protocol: Protocol) => {
    // Map protocols to their actual online sources
    const onlineSources: { [key: string]: string } = {
      'aerobic-exercise-mental-health': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6172294/',
      'autism-prevalence-impact': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8061188/',
      'buffalo-concussion-test': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3445087/',
      'circadian-rhythm-light': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4254760/',
      'dose-response-physical-activity': 'https://www.bmj.com/content/366/bmj.l4570',
      'global-physical-activity': 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(12)61031-9/fulltext',
      'hiit-meta-analysis': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6763680/',
      'paleo-glucose-tolerance': 'https://www.diabetologia-journal.org/article/S0012-186X(07)00193-3/fulltext',
      'paleo-meal-plans': 'https://www.mdpi.com/2072-6643/13/4/1110',
      'paleo-meta-analysis': 'https://www.mdpi.com/2072-6643/15/4/1034',
      'paleo-metabolic-effects': 'https://www.europeanreview.org/article/8014',
      'paleo-physiologic-effects': 'https://www.europeanreview.org/article/1514',
      'paleo-review': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1117476/',
      'resistance-training-older-adults': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3781903/',
      'rhodes-physical-activity-theory': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3781903/',
      'schroer-green-exercise': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4204431/',
      'sedentary-behavior-influences': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6375552/',
      'sedentary-behavior-research': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2996155/',
      'sleep-duration-recommendations': 'https://www.sleephealthjournal.org/article/S2352-7218(15)00015-7/fulltext'
    };

    const onlineUrl = onlineSources[protocol.id];
    if (onlineUrl) {
      window.open(onlineUrl, '_blank');
    } else {
      // Fallback to GitHub for protocols without online sources
      const url = `https://github.com/nickconnelly10/Health-protocols/blob/master/${encodeURIComponent(protocol.filename)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 py-8">


        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search protocols..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <p className="text-sm text-gray-600">
            Showing {filteredProtocols.length} of {protocols.length} protocols
          </p>
        </div>

        {/* Protocols Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProtocols.map(protocol => (
            <div key={protocol.id} className="rounded-xl border shadow-sm bg-white border-gray-200">
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {protocol.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {protocol.title}
                </h3>

                {/* Metadata */}
                {(protocol.year || protocol.authors) && (
                  <div className="text-sm mb-3 text-gray-600">
                    {protocol.year && <span>{protocol.year}</span>}
                    {protocol.year && protocol.authors && <span> • </span>}
                    {protocol.authors && <span>{protocol.authors}</span>}
                  </div>
                )}

                {/* Abstract */}
                <p className="text-sm mb-4 leading-relaxed text-gray-600">
                  {protocol.abstract}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleRead(protocol)}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    Read Online
                  </button>
                  <button
                    onClick={() => handleDownload(protocol)}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProtocols.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            <p className="text-lg">No protocols found matching your search criteria.</p>
            <p className="text-sm mt-2">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            All protocols are peer-reviewed research papers and evidence-based health guidelines.
          </p>
          <p className="text-xs mt-2">
            For health guidance purposes only. Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </div>
  );
} 