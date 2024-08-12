// src/components/courses/CourseContent.js
import React from 'react';

function CourseContent() {
    return (
        <section>
            <h2 className="text-xl font-bold mb-4">Course content</h2>
            <div className="border rounded-lg">
                <div className="p-4">
                    <h3 className="font-semibold">Introduction</h3>
                    <ul className="list-inside space-y-2">
                        <li>Introduction and Resources - 02:13</li>
                        <li>Create and Style the Home Page - 14:57</li>
                        <li>Create and Style the Game Page - 06:51</li>
                        <li>Display Hard Coded Questions and Answers - 17:37</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default CourseContent;
