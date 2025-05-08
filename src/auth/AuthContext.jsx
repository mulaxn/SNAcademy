// src/auth/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login  = (email, pwd) => { setIsAuthenticated(true); };
  const signup = (email, pwd) => { setIsAuthenticated(true); };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
