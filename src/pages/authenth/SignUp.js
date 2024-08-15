import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import styles

function SignUp() {
  const [phone, setPhone] = useState(''); // State for phone number
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate a sign-up process
    navigate('/user-profile'); // Navigate to user profile after sign-up
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
      <form 
        className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg"
        onSubmit={handleSignUp} // Call handleSignUp when form is submitted
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-3 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-3 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
          <PhoneInput
            id="phone"
            defaultCountry="US" // Set default country code if needed
            value={phone} // Bind the value to state
            onChange={setPhone} // Update state when value changes
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input type="password" id="password" className="w-full p-3 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" className="w-full p-3 border rounded-md" required />
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
