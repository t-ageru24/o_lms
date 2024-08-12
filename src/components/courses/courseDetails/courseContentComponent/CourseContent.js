// src/components/courses/courseDetails/courseContentComponents/CourseContent.js
import React, { useState } from 'react';

const CourseContent = () => {
    const [watchedLectures, setWatchedLectures] = useState([]);
    const [expandedSection, setExpandedSection] = useState(null);

    const handleLectureClick = (lectureIndex) => {
        setWatchedLectures((prev) =>
            prev.includes(lectureIndex) ? prev : [...prev, lectureIndex]
        );
    };

    const isLectureWatched = (lectureIndex) => watchedLectures.includes(lectureIndex);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const sections = [
        {
            title: 'Introduction',
            lectures: [
                { title: 'Introduction and Resources', duration: '02:13' },
                { title: 'Create and Style the Home Page', duration: '14:57' },
                { title: 'Create and Style the Game Page', duration: '06:51' },
                { title: 'Display Hard Coded Questions and Answers', duration: '17:37' },
            ],
        },
        {
            title: 'Next Section',
            lectures: [
                { title: 'Next Section - Part 1', duration: '08:00' },
                { title: 'Next Section - Part 2', duration: '12:34' },
            ],
        },
        {
            title: 'Third Section',
            lectures: [
                { title: 'Third Section - Part 1', duration: '09:45' },
                { title: 'Third Section - Part 2', duration: '11:20' },
            ],
        },
    ];

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Course content</h2>
            <p className="text-gray-700 mb-4">3 sections • X lectures • Xh Xm total length</p>
            <div className="border rounded-lg">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <div
                            className="p-4 cursor-pointer font-bold text-lg border-b"
                            onClick={() => toggleSection(sectionIndex)}
                        >
                            {section.title}
                        </div>
                        {expandedSection === sectionIndex && (
                            <ul className="px-4">
                                {section.lectures.map((lecture, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer py-2 flex justify-between items-center ${
                                            isLectureWatched(`${sectionIndex}-${index}`)
                                                ? 'text-gray-400 line-through'
                                                : ''
                                        }`}
                                        onClick={() => handleLectureClick(`${sectionIndex}-${index}`)}
                                    >
                                        <span>{lecture.title}</span>
                                        <span className="text-gray-500">{lecture.duration}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseContent;
