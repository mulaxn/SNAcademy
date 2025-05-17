import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Profile() {
  const { user, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">No user information found.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Your Profile</h1>
      
      <div className="space-y-4 text-gray-800">
        <p><strong>First Name:</strong> {user.first_name || 'N/A'}</p>
        <p><strong>Last Name:</strong> {user.last_name || 'N/A'}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {user.date_of_birth && (
          <p><strong>Date of Birth:</strong> {user.date_of_birth}</p>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
