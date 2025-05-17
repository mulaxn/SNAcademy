// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth }  from '../auth/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated 
    ? children 
    : <Navigate to="/login" replace />;
}
