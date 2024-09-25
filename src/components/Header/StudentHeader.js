import React, { useState } from 'react'; // Ensure useState is imported
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle, FaBars } from 'react-icons/fa';

function StudentHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State for profile dropdown
    const [searchQuery, setSearchQuery] = useState(''); // State for search input

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(prevState => !prevState);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const closeProfileMenu = () => {
        setIsProfileMenuOpen(false);
    };

    const getLinkClass = (path) => {
        return location.pathname === path
            ? 'text-[#44318D] font-bold'
            : 'text-white hover:text-[#44318D] transition duration-300';
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <header className="bg-[#44318D] text-white fixed top-0 left-0 w-full z-50 shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    {/* LMS Logo */}
                    <div className="text-2xl font-bold">
                        <Link to="/">LMS</Link>
                    </div>
                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-4">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className={getLinkClass('/')} onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className={getLinkClass('/courses')} onClick={closeMobileMenu}>
                                    My Courses
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex items-center">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="px-4 py-2 rounded-md text-black focus:outline-none"
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-[#44318D]">
                            🔍
                        </button>
                    </form>
                </div>

                {/* Profile and Mobile Menu Button */}
                <div className="flex items-center space-x-4 relative">
                    {/* Profile Icon */}
                    <FaUserCircle
                        className="text-2xl cursor-pointer hover:text-gray-300"
                        onClick={toggleProfileMenu}
                    />

                    {/* Profile Dropdown Menu */}
                    {isProfileMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={closeProfileMenu}>
                                Profile
                            </Link>
                            <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100" onClick={closeProfileMenu}>
                                Settings
                            </Link>
                            <button
                                className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                                onClick={() => {
                                    closeProfileMenu();
                                    navigate('/logout');
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMobileMenu} className="md:hidden text-2xl focus:outline-none">
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#44318D] p-4">
                    <nav className="flex flex-col space-y-4">
                        <Link to="/" className={getLinkClass('/')} onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link to="/courses" className={getLinkClass('/courses')} onClick={closeMobileMenu}>
                            My Courses
                        </Link>
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="px-4 py-2 mt-2 rounded-md text-black focus:outline-none"
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-[#44318D]">
                                🔍
                            </button>
                        </form>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default StudentHeader;
