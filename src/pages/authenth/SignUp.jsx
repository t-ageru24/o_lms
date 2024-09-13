import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import signUpService from './../../services/auth/signupServices';
import 'react-phone-number-input/style.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '', // Added phone to formData
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { name, email, password, phone } = formData;
      const role = "Admin"; // Set default role
      const response = await signUpService({
        name,
        email,
        password,
        phone,
        role,
      });

      console.log('Sign-up successful:', response);
      navigate('/user-profile'); // Navigate to user profile after sign-up
    } catch (error) {
      console.error('Sign-up failed:', error);
      alert('Sign-up failed. Please try again.');
    }
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
      <form
        className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg"
        onSubmit={handleSignUp}
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-md"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-md"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
          <PhoneInput
            id="phone"
            defaultCountry="US"
            value={formData.phone} // Use formData.phone
            onChange={handlePhoneChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded-md"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-3 border rounded-md"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="bg-[#44318D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300">
          Sign Up
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-700">Already have an account?</p>
        <button
          onClick={handleLogin}
          className="bg-gray-200 text-[#44318D] px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 mt-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
