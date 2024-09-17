import React from 'react';
import { useNavigate } from 'react-router-dom';

function PasswordResetConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Password Reset</h2>
      <p className="text-gray-700 mb-4">
        A password reset link has been sent to your email address. Please check your inbox and follow the instructions to reset your password.
      </p>
      <button 
        onClick={() => navigate('/login')} 
        className="bg-[#44318D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300"
      >
        Please check Your Email!
      </button>
    </div>
  );
}

export default PasswordResetConfirmation;
