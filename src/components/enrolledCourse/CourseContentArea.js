import React from 'react';

const CourseContentArea = () => {
    return (
        <div className="ml-0 md:ml-1/4 w-full md:w-3/4 p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Build a Quiz App with HTML, CSS, and JavaScript
            </h1>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mb-8">
                <span className="font-semibold text-[#44318D] cursor-pointer">Lesson</span>
                <span className="text-gray-500 cursor-pointer">Downloads</span>
            </div>
            <div className="relative mb-8 w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
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
    );
};

export default CourseContentArea;
