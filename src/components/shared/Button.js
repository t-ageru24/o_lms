import React from 'react';

const Button = ({ type, text }) => {
    return (
        <button
            type={type}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
            {text}
        </button>
    );
};

export default Button;
