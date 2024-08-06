import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Online Learning Platform</h1>
      </div>
      <div className="header-right">
        <button>Category</button>
        <input type="text" placeholder="Search for courses" />
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <button>🌐</button> {/* Language choice icon */}
      </div>
    </header>
  );
};

export default Header;
