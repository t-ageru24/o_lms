import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  const isAuthenticated = false; // Replace with actual authentication logic

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      navigate('/signup'); // Navigate to SignUp page for new users
    }
  };

  return (
    <section className="bg-[#44318D] text-white text-center py-20 mt-0"> {/* Ensure no margin-top */}
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Learning Platform</h1>
        <p className="text-xl mb-8">Explore our courses and enhance your skills</p>
        {!isAuthenticated && (
          <button 
            onClick={handleGetStarted} 
            className="bg-white text-[#44318D] px-6 py-2 rounded-lg font-semibold"
          >
            Get Started
          </button>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
