import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatWindow from './components/ChatWindow';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import MuscadineBanner from './components/MuscadineBanner';
import MuscadineFooter from './components/MuscadineFooter';
import NutritionPage from './components/NutritionPage';
import PhysicalActivityPage from './components/PhysicalActivityPage';
import LifestylePage from './components/LifestylePage';
import ResourcesPage from './components/ResourcesPage';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <MuscadineBanner />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ChatWindow />} />
            <Route path="/chat" element={<ChatWindow />} />
            <Route path="/lifestyle" element={<LifestylePage />} />
            <Route path="/physical-activity" element={<PhysicalActivityPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <MuscadineFooter />
      </div>
    </Router>
  );
}