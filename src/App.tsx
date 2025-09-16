import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MuscadineBanner from './components/MuscadineBanner';
import MuscadineFooter from './components/MuscadineFooter';
import MobileNav from './components/MobileNav';
import NutritionPage from './components/NutritionPage';
import PhysicalActivityPage from './components/PhysicalActivityPage';
import LifestylePage from './components/LifestylePage';
import ResourcesPage from './components/ResourcesPage';
import HealthProtocolsPage from './components/HealthProtocolsPage';
import NicksJourneyPage from './components/NicksJourneyPage';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <MuscadineBanner />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nicks-journey" element={<NicksJourneyPage />} />
            <Route path="/lifestyle" element={<LifestylePage />} />
            <Route path="/physical-activity" element={<PhysicalActivityPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/health-protocols" element={<HealthProtocolsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <MuscadineFooter />
        <MobileNav />
      </div>
    </Router>
  );
}