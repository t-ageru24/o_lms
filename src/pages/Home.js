import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';

const Home = () => {
  const courses = [
    { title: 'Web Development', description: 'Learn to build websites and web apps.' },
    { title: 'Data Science', description: 'Master data analysis and machine learning.' },
    { title: 'Digital Marketing', description: 'Become a digital marketing expert.' },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <div className="container">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} description={course.description} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
