import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const MenuBar = ({ onClick, isSidebarOpen }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleIconClick = (event) => {
        event.stopPropagation(); // Prevent the body click handler from firing
        setIsMinimized(!isMinimized);
        setIsClicked(!isClicked); // Toggle clicked state
        onClick(); // Ensure the sidebar toggling logic is also executed
    };

    return (
        <div
            className={`fixed top-16 left-0 transition-all duration-300 ${isMinimized ? 'w-10 h-auto rounded-r-full' : 'w-64 h-auto'} ${isClicked ? 'bg-[#44318D]' : 'bg-gray-800'} flex items-center p-2 z-40`}
        >
            <button
                onClick={handleIconClick}  // Trigger sidebar toggle and minimize state
                className={`transition-transform duration-300 flex items-center justify-center ${isMinimized ? 'text-sm p-1 w-8 h-8' : 'text-2xl p-2 w-12 h-12'} ${isClicked ? 'bg-[#44318D]' : 'bg-gray-700'} rounded-full hover:bg-gray-600`}
                aria-label="Toggle menu"
                aria-expanded={isSidebarOpen}
            >
                <FaBars />
            </button>
            {!isMinimized && (
                <span className="ml-4 text-xl hidden md:inline transition-opacity duration-300">
                    Menu
                </span>
            )}
        </div>
    );
};

export default MenuBar;
