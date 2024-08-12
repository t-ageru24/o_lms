// src/components/courses/CourseLearn.js
import React from 'react';

function CourseLearn() {
    return (
        <section>
            <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>ES6 JavaScript features like arrow functions, the spread operator, const and let, and template literal string</li>
                <li>How to use the Fetch API to load trivia questions from an API</li>
                <li>How to store high scores in Local Storage</li>
                <li>How to use Flexbox, Animations, and REM units in CSS</li>
                <li>How to create a progress bar from scratch</li>
                <li>How to create a spinning loader icon from scratch</li>
            </ul>
        </section>
    );
}

export default CourseLearn;
