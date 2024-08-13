import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const CollapsingIcon = ({ isOpen, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`absolute top-2 right-2 text-2xl text-gray-500 bg-gray-800 p-2 rounded-full transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {isOpen ? <FaTimes /> : <FaBars />}
        </button>
    );
};

export default CollapsingIcon;
