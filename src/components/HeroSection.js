import React from 'react';

function HeroSection() {
  return (
    <section className="bg-[#44318D] text-white text-center py-20 mt-0"> {/* Ensure no margin-top */}
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Learning Platform</h1>
        <p className="text-xl mb-8">Explore our courses and enhance your skills</p>
        <button className="bg-white text-[#44318D] px-6 py-2 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
