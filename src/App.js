import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Import the Home component
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
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
            <Route path="/" element={<Home />} /> {/* Render Home component */}
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/courses" element={<CourseList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
