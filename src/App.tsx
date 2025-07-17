import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LoginForm, RegisterForm } from './components/AuthForm';
import ProtectedRoute from './components/ProtectedRoute';
import ChatWindow from './components/ChatWindow';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import ProtocolUploader from './components/ProtocolUploader';
import MuscadineBanner from './components/MuscadineBanner';
import MuscadineFooter from './components/MuscadineFooter';
import NutritionPage from './components/NutritionPage';
import PhysicalActivityPage from './components/PhysicalActivityPage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <MuscadineBanner />
          <main className="flex-1">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/chat" element={<ChatWindow />} />
              <Route path="/nutrition" element={<NutritionPage />} />
              <Route path="/physical-activity" element={<PhysicalActivityPage />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><ProtocolUploader /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/chat" replace />} />
            </Routes>
          </main>
          <MuscadineFooter />
        </div>
      </Router>
    </AuthProvider>
  );
}