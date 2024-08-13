import React from 'react';
import { FaBars } from 'react-icons/fa';

const MenuBar = ({ onClick }) => {
    return (
        <div className="fixed top-16 left-0 w-full bg-gray-800 text-white flex items-center p-2">
            <button
                onClick={onClick}
                className="text-2xl text-gray-500 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
                aria-label="Open menu"
            >
                <FaBars />
            </button>
            <span className="ml-4 text-xl">Menu</span>
        </div>
    );
};

export default MenuBar;
