import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle, FaBars } from 'react-icons/fa';

function InstructorHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-[#44318D] font-bold'
      : 'text-white hover:text-[#44318D] transition duration-300';
  };

  return (
    <header className="bg-[#44318D] text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link to="/">LMS</Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className={getLinkClass('/')} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/instructor-profile" className={getLinkClass('/instructor-profile')} onClick={closeMobileMenu}>
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/instructor-courses" className={getLinkClass('/instructor-courses')} onClick={closeMobileMenu}>
                  My Courses
                </Link>
              </li>
              <li>
                <Link to="/create-course" className={getLinkClass('/create-course')} onClick={closeMobileMenu}>
                  Create Course
                </Link>
              </li>
            </ul>
          </nav>
          <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-300" onClick={() => navigate('/instructor-profile')} />
          <button onClick={toggleMobileMenu} className="md:hidden text-2xl focus:outline-none">
            <FaBars />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#44318D] p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className={getLinkClass('/')} onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/instructor-profile" className={getLinkClass('/instructor-profile')} onClick={closeMobileMenu}>
              My Profile
            </Link>
            <Link to="/instructor-courses" className={getLinkClass('/instructor-courses')} onClick={closeMobileMenu}>
              My Courses
            </Link>
            <Link to="/create-course" className={getLinkClass('/create-course')} onClick={closeMobileMenu}>
              Create Course
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default InstructorHeader;
