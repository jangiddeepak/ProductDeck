import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Handle sign-up logic (e.g., call an API)
    console.log('Signing up with:', { name, email, password });
    setError('');
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center">
        <Helmet>
        <title>Sign Up-productDeck</title>
        <meta name="description" content="Signup here to get offers" />
      </Helmet>
      
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-xl transform transition duration-300 hover:scale-105 hover:shadow-3xl">
        <img className="w-24 ml-auto mr-auto mb-4 mt-4" src="/logo1.png" alt="Logo" />
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Create Your Account</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name, Email, Password, Confirm Password Inputs */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-blue-500 to-teal-400 text-white py-3 px-6 rounded-lg hover:bg-gradient-to-l hover:scale-105 focus:outline-none transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">Already have an account?</span>
          <Link to="/loginpage" className="ml-2 text-blue-600 hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
