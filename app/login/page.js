'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authenticateUser } from '@/app/data/mockUsers';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const user = authenticateUser(email, password);
      
      if (user) {
        // Store user session in localStorage (in real app, use proper session management)
        localStorage.setItem('currentUser', JSON.stringify(user));
        router.push('/admin/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#1C1C1C]">Login</h1>
        
        {/* Demo credentials info */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800 font-medium mb-1">Demo Credentials:</p>
          <p className="text-xs text-blue-600">Email: admin@sharmaspace.in</p>
          <p className="text-xs text-blue-600">Password: admin123</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-[#E63946] text-center mb-4 text-sm">{error}</p>}
          }
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#1C1C1C] text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1C1C1C] leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-[#1C1C1C] text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1C1C1C] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#E63946] hover:bg-[#D62828] disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-[#E63946] hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}