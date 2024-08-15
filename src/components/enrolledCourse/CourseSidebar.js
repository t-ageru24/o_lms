import React from 'react';
import { FaDownload, FaCheckCircle } from 'react-icons/fa';

const chapters = [
    {
        title: 'Chapter 1: Introduction',
        lessons: [
            { title: 'Lesson 1.1: Getting Started', progress: 100, completed: true },
            { title: 'Lesson 1.2: Basics', progress: 100, completed: true },
        ],
    },
    {
        title: 'Chapter 2: Advanced Topics',
        lessons: [
            { title: 'Lesson 2.1: Deep Dive', progress: 20, completed: false },
            { title: 'Lesson 2.2: Expert Tips', progress: 0, completed: false },
        ],
    },
];

const CircularProgress = ({ progress }) => (
    <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-gray-600 relative">
        <div
            className="absolute w-full h-full rounded-full border-4 border-green-500"
            style={{ borderColor: 'transparent', background: `conic-gradient(green ${progress * 3.6}deg, transparent 0deg)` }}
        ></div>
        <span className="z-10 text-xs">{progress}%</span>
    </div>
);

const CourseSidebar = ({ isOpen, onClick }) => {
    const [collapsedChapters, setCollapsedChapters] = React.useState([]);

    const toggleChapter = (index) => {
        setCollapsedChapters((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    // Calculate overall progress
    const calculateProgress = () => {
        let totalLessons = 0;
        let completedLessons = 0;
        
        chapters.forEach((chapter) => {
            chapter.lessons.forEach((lesson) => {
                totalLessons++;
                if (lesson.completed) {
                    completedLessons++;
                }
            });
        });
        
        return (completedLessons / totalLessons) * 100;
    };

    const handleLessonClick = (lessonTitle) => {
        alert(`Clicked on ${lessonTitle}`);
    };

    return (
        <div
            className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gray-800 text-white transition-transform duration-300 ${
                isOpen ? 'w-64' : 'w-0'
            } overflow-hidden`}
        >
            <div className="flex flex-col h-full mt-8">
                <div className="flex flex-col items-start p-4 mb-4">
                    {isOpen && (
                        <>
                            <div className="mb-6 mt-6">
                                <CircularProgress progress={calculateProgress()} />
                            </div>
                            <div className="text-xl font-semibold mt-4">Course Sidebar</div>
                        </>
                    )}
                </div>
                <div className="px-4 flex-1 overflow-y-auto">
                    {chapters.map((chapter, index) => (
                        <div key={index} className="mb-6">
                            <h3
                                className="text-lg font-bold mb-2 cursor-pointer flex items-center"
                                onClick={() => toggleChapter(index)}
                            >
                                {collapsedChapters.includes(index) ? '▶' : '▼'} {chapter.title}
                            </h3>
                            {!collapsedChapters.includes(index) && (
                                <ul>
                                    {chapter.lessons.map((lesson, idx) => (
                                        <li key={idx} className="flex items-center mb-2 cursor-pointer" onClick={() => handleLessonClick(lesson.title)}>
                                            {lesson.completed ? (
                                                <FaCheckCircle className="text-green-500 mr-2" />
                                            ) : (
                                                <div className="w-4 h-4 mr-2"></div>
                                            )}
                                            <div className="flex-1">
                                                <span className="text-sm">{lesson.title}</span>
                                            </div>
                                            <div className="w-16 h-2 bg-gray-600 rounded relative">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-green-500 rounded"
                                                    style={{ width: `${lesson.progress}%` }}
                                                ></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                {isOpen && (
                    <button
                        onClick={() => alert('Download clicked')}
                        className="absolute bottom-4 left-4 flex items-center text-blue-400 hover:underline"
                    >
                        <FaDownload className="mr-2" />
                        Download
                    </button>
                )}
            </div>
        </div>
    );
};

export default CourseSidebar;
