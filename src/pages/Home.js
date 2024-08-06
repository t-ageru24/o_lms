import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import Sections from '../components/Sections';
import Footer from '../components/Footer';
import '../styles/global.css';

const Home = () => {
  const courses = [
    { title: 'Web Development', description: 'Learn to build websites and web apps.' },
    { title: 'Pre-Course', description: 'Make your grade the best from the beginning' },
    { title: 'Remedial', description: 'Become a successful student' },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <div className="container course-container">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} description={course.description} />
        ))}
      </div>
      <Sections />
      <Footer />
    </>
  );
};

export default Home;
