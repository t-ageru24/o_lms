import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth/loginServices.js'; // Import the auth service

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to detect if the input is an email or phone number
  const isPhoneNumber = (input) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Supports international phone numbers
    return phoneRegex.test(input);
  };

  const isEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    return emailRegex.test(input);
  };

  const handleSubmit = async (e) => {
    localStorage.setItem('role', '');
    e.preventDefault();

    let payload = {
      password: password,
    };

    // Dynamically adjust the payload based on whether the input is a phone number or an email
    if (isPhoneNumber(emailOrPhone)) {
      payload.phone = emailOrPhone;
    } else if (isEmail(emailOrPhone)) {
      payload.email = emailOrPhone;
    } else {
      setError("Please enter a valid email or phone number.");
      return;
    }

    try {
      const response = await authService.login(payload);
      // Save token and role to localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.user.role);
      navigate('/profile'); // Navigate to the profile page on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="emailOrPhone">Email or Phone</label>
          <input
            type="text"
            id="emailOrPhone"
            className="w-full p-3 border rounded-md"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#44318D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300"
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <a href="/forgot-password" className="text-[#44318D] hover:underline">
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

export default Login;
