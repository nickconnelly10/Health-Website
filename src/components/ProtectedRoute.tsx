import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuth = !!localStorage.getItem('token');
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
} 