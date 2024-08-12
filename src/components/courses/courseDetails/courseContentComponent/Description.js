// src/components/courses/courseDetails/courseContentComponents/Description.js
import React, { useState } from 'react';

const Description = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Description</h3>
            <p className={`text-gray-700 ${isExpanded ? '' : 'line-clamp-3'}`}>
                Want to improve your core Web Development skills? Want to improve your knowledge of <strong>HTML, CSS, and JavaScript</strong>? In this course, you're going to learn how to build a Quiz application without the assistance of libraries or frameworks. Here are some of the topics we will cover!
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                    <li>Save high scores in Local Storage</li>
                    <li>Create a progress bar</li>
                    <li>Create a spinning loader icon</li>
                    <li>Dynamically generate HTML in JavaScript</li>
                    <li>Fetch trivia questions from Open Trivia DB API</li>
                </ul>
            </p>
            <button
                onClick={toggleDescription}
                className="text-purple-600 hover:underline mt-2"
            >
                {isExpanded ? 'Show less' : 'Show more'}
            </button>
        </div>
    );
};

export default Description;
