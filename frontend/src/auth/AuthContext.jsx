import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            mutation {
              login(email: "${email}", password: "${password}") {
                token
                user {
                  id
                  email
                  first_name
                  last_name
                  dob
                }
              }
            }
          `
        })
      });

      const data = await res.json();
      if (data.errors) {
        alert("Login failed: " + data.errors[0].message);
        return;
      }

      const { token, user } = data.data.login;
      localStorage.setItem("token", token);
      setUser(user);
      setIsAuthenticated(true);
    } catch (err) {
      alert("An error occurred while logging in.");
    }
  };

  const signup = async (email, password, first_name, last_name, dob) => {
    try {
      const res = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            mutation {
              signup(
                email: "${email}", 
                password: "${password}", 
                first_name: "${first_name}", 
                last_name: "${last_name}", 
                dob: "${dob}"
              ) {
                token
                user {
                  id
                  email
                  first_name
                  last_name
                  dob
                }
              }
            }
          `
        })
      });

      const data = await res.json();
      if (data.errors) {
        alert("Signup failed: " + data.errors[0].message);
        return;
      }

      const { token, user } = data.data.signup;
      localStorage.setItem("token", token);
      setUser(user);
      setIsAuthenticated(true);
    } catch (err) {
      alert("An error occurred while signing up.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        login,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
