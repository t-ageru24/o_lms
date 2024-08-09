import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LMSFeatures from './components/LMSFeatures';
import CourseCardList from './components/courses/CourseCardList'; // Import CourseCardList
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/authenth/Login';
import SignUp from './pages/authenth/SignUp';
import CourseList from './pages/CourseList';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <div className="flex-grow mt-16"> {/* Adjust margin-top for fixed header */}
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <LMSFeatures />
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
            }/>
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/courses" element={<CourseList />} /> {/* Route for CourseList */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
