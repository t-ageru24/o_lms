import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-[#44318D] text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            LMS
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="bg-white text-[#44318D] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
