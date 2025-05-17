// src/pages/Login.jsx
import { useState }    from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth }     from '../auth/AuthContext';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const { login }               = useAuth();
  const nav                      = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();
    await login(email, password);
    nav('/'); 
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Sign In</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don’t have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
      </p>
    </div>
  );
}
