import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle, FaSearch, FaBars } from 'react-icons/fa';

function GuestHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    const handleFilter = (e) => {
        e.preventDefault();
        console.log('Filtering by category:', category);
    };

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
                    <form className="hidden md:flex items-center space-x-2 relative" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 rounded-md text-gray-700 pr-10"
                        />
                        <FaSearch className="absolute right-3 top-2.5 text-gray-500 cursor-pointer" onClick={handleSearch} />
                    </form>
                    <form className="hidden md:flex items-center space-x-2" onSubmit={handleFilter}>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 rounded-md text-gray-700">
                            <option value="">All Categories</option>
                            <option value="courses">Courses</option>
                            <option value="articles">Articles</option>
                            <option value="tutorials">Tutorials</option>
                        </select>
                    </form>
                    <nav className="hidden md:flex items-center space-x-4">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className={getLinkClass('/')} onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={getLinkClass('/about')} onClick={closeMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={getLinkClass('/contact')} onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/become-instructor" className={getLinkClass('/become-instructor')} onClick={closeMobileMenu}>
                                    Become Instructor
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className={getLinkClass('/login')} onClick={closeMobileMenu}>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup" className={getLinkClass('/signup')} onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={toggleMobileMenu} className="md:hidden text-2xl focus:outline-none">
                        <FaBars />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#44318D] p-4">
                    <form className="flex items-center space-x-2 mb-4 relative" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 rounded-md text-gray-700 pr-10"
                        />
                        <FaSearch className="absolute right-3 top-2.5 text-gray-500 cursor-pointer" onClick={handleSearch} />
                    </form>
                    <form className="flex items-center space-x-2 mb-4" onSubmit={handleFilter}>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 rounded-md text-gray-700">
                            <option value="">All Categories</option>
                            <option value="courses">Courses</option>
                            <option value="articles">Articles</option>
                            <option value="tutorials">Tutorials</option>
                        </select>
                    </form>
                    <nav className="flex flex-col space-y-4">
                        <Link to="/" className={getLinkClass('/')} onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link to="/about" className={getLinkClass('/about')} onClick={closeMobileMenu}>
                            About Us
                        </Link>
                        <Link to="/contact" className={getLinkClass('/contact')} onClick={closeMobileMenu}>
                            Contact
                        </Link>
                        <Link to="/become-instructor" className={getLinkClass('/become-instructor')} onClick={closeMobileMenu}>
                            Become Instructor
                        </Link>
                        <Link to="/login" className={getLinkClass('/login')} onClick={closeMobileMenu}>
                            Login
                        </Link>
                        <Link to="/signup" className={getLinkClass('/signup')} onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default GuestHeader;
