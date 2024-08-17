import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/authenth/Login';
import SignUp from './pages/authenth/SignUp';
import CourseCardList from './components/courses/CourseCardList';
import EnrolledCourse from './pages/EnrolledCourse';
import UserProfile from './pages/UserProfile';
import ForgotPassword from './pages/authenth/ForgotPassword';
import PasswordResetConfirmation from './pages/authenth/PasswordResetConfirmation';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <div className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/courses" element={<CourseCardList />} />
            <Route path="/enrolled-course/:id" element={<EnrolledCourse />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/password-reset-confirmation" element={<PasswordResetConfirmation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
