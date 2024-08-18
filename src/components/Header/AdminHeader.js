import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle, FaBars } from 'react-icons/fa';

function AdminHeader() {
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
                <Link to="/admin-profile" className={getLinkClass('/admin-profile')} onClick={closeMobileMenu}>
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/manage-users" className={getLinkClass('/manage-users')} onClick={closeMobileMenu}>
                  Manage Users
                </Link>
              </li>
              <li>
                <Link to="/manage-courses" className={getLinkClass('/manage-courses')} onClick={closeMobileMenu}>
                  Manage Courses
                </Link>
              </li>
            </ul>
          </nav>
          <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-300" onClick={() => navigate('/admin-profile')} />
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
            <Link to="/admin-profile" className={getLinkClass('/admin-profile')} onClick={closeMobileMenu}>
              Admin Dashboard
            </Link>
            <Link to="/manage-users" className={getLinkClass('/manage-users')} onClick={closeMobileMenu}>
              Manage Users
            </Link>
            <Link to="/manage-courses" className={getLinkClass('/manage-courses')} onClick={closeMobileMenu}>
              Manage Courses
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default AdminHeader;
