// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import PartnerUniversities from '../components/home/PartnerUniversities';
import HeroSection from '../components/home/HeroSection';
import LMSFeatures from '../components/home/LMSFeatures';
import CourseCardList from '../components/courses/CourseCardList';

function Home() {
  return (
    <>
      <HeroSection />
      <LMSFeatures />
      <PartnerUniversities />
      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-between mt-10">
            <h2 className="text-3xl font-bold">Our Upcoming Courses</h2>
            <Link to="/courses">
              <button className="bg-[#44318D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300">
                View All Courses
              </button>
            </Link>
          </div>
          {/* Use CourseCardList to render all course cards */}
          <CourseCardList />
        </div>
      </section>
    </>
  );
}

export default Home;
