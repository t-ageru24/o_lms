import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';

const About = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '6rem', textAlign: 'center' }}>
        <h2>About Us</h2>
        <p>We are an online learning platform offering a variety of courses to help you develop new skills and advance your career.</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
