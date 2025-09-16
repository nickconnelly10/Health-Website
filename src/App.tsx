import React from 'react';

// TEMPORARY WIP PAGE - TO REVERT TO FULL SITE:
// 1. Uncomment the imports below and the full App component
// 2. Comment out or delete the WIP component below
// 3. Save and deploy

/*
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HealthBanner from './components/HealthBanner';
import HealthFooter from './components/HealthFooter';
import MobileNav from './components/MobileNav';
import HealthyLivingPage from './components/HealthyLivingPage';
import ResourcesPage from './components/ResourcesPage';
import HealthProtocolsPage from './components/HealthProtocolsPage';
import NicksJourneyPage from './components/NicksJourneyPage';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <HealthBanner />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nicks-journey" element={<NicksJourneyPage />} />
            <Route path="/healthy-living" element={<HealthyLivingPage />} />
            <Route path="/lifestyle" element={<Navigate to="/healthy-living" replace />} />
            <Route path="/nutrition" element={<Navigate to="/healthy-living" replace />} />
            <Route path="/physical-activity" element={<Navigate to="/healthy-living" replace />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/health-protocols" element={<HealthProtocolsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <HealthFooter />
        <MobileNav />
      </div>
    </Router>
  );
}
*/

// WORK IN PROGRESS PAGE
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          Work in Progress
        </h1>
        <p className="text-lg text-gray-600">
          This health platform is currently under development.
        </p>
      </div>
    </div>
  );
}