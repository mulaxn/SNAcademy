// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Signup() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const { signup } = useAuth();
  const nav = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirm_password) {
      alert('Passwords do not match');
      return;
    }

    await signup(form.email, form.password, form.first_name, form.last_name, form.dob);
    nav('/');
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            name="first_name"
            className="w-full border px-3 py-2 rounded"
            value={form.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            name="last_name"
            className="w-full border px-3 py-2 rounded"
            value={form.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="w-full border px-3 py-2 rounded"
            value={form.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2 rounded"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            className="w-full border px-3 py-2 rounded"
            value={form.confirm_password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login" className="text-blue-600">Sign in</Link>
      </p>
    </div>
  );
}
