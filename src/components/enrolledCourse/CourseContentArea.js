import React from 'react';

const CourseContentArea = () => {
    return (
        <div className="flex flex-col md:flex-row w-full p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8">
            {/* Main content area */}
            <div className="flex-1 md:mr-4">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                    Build a Quiz App with HTML, CSS, and JavaScript
                </h1>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mb-8">
                    <span className="font-semibold text-[#44318D] cursor-pointer">Lesson</span>
                    <span className="text-gray-500 cursor-pointer">Downloads</span>
                </div>
                <div className="flex justify-center mb-8">
                    <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-4">
                    <button className="bg-[#44318D] text-white py-2 px-4 rounded-lg hover:bg-[#2b246a] w-full md:w-auto">
                        Previous
                    </button>
                    <button className="bg-[#44318D] text-white py-2 px-4 rounded-lg hover:bg-[#2b246a] w-full md:w-auto">
                        Next
                    </button>
                </div>
            </div>

            {/* Sidebar for course description */}
            <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Course Description</h2>
                <p className="text-gray-700">
                    This course will guide you through the process of building a quiz application using HTML, CSS, and JavaScript. You'll learn the basics of web development, explore advanced topics, and build an interactive project step by step.
                </p>
            </div>
        </div>
    );
};

export default CourseContentArea;
