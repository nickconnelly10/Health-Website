import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HealthBanner from './components/HealthBanner';
import HealthFooter from './components/HealthFooter';
import MobileNav from './components/MobileNav';
import HealthyLivingPage from './components/HealthyLivingPage';
import ResourcesProtocolsPage from './components/ResourcesProtocolsPage';
import NicksJourneyPage from './components/NicksJourneyPage';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';

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
            <Route path="/resources-protocols" element={<ResourcesProtocolsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <HealthFooter />
        <MobileNav />
      </div>
    </Router>
  );
}