// src/pages/CourseDetail.js
import React from 'react';
import CourseLearn from '../components/courses/courseDetails/CourseLearn';
import CourseContent from '../components/courses/courseDetails/CourseContent';
import CourseReviews from '../components/courses/courseDetails/CourseReviews';
import CourseInstructors from '../components/courses/courseDetails/CourseInstructors';
import CourseTabs from '../components/courses/courseDetails/CourseTabs';

function CourseDetail() {
    const tabs = ["What you'll learn", 'Course content', 'Reviews', 'Instructors'];

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row md:space-x-10">
                <div className="md:w-2/3">
                <div className="relative w-full pb-[70%]">
                    <iframe 
                        src="https://www.youtube.com/watch?v=EerdGm-ehJQ" 
                        title="Course Preview" 
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg">
                    </iframe>
                </div>
                </div>
                <div className="md:w-1/3">
                    <h1 className="text-4xl font-bold mb-4">Build a Quiz App with HTML, CSS, and JavaScript</h1>
                    <p className="text-xl text-gray-700 mb-6">
                        Improve your core development skills by building a Quiz App with HTML, CSS, and JavaScript.
                    </p>
                    <div className="flex items-center space-x-4">
                        <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full">5 ★</span>
                        <span className="text-gray-600">(5,000 ratings)</span>
                    </div>
                    <p className="text-xl font-bold my-4">Free</p>
                    <button className="bg-[#44318D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300">
                        Enroll now
                    </button>
                </div>
            </div>

            {/* Tab Navigation */}
            <CourseTabs tabs={tabs}>
                {/* What you'll learn */}
                <CourseLearn />

                {/* Course content */}
                <CourseContent />

                {/* Reviews */}
                <CourseReviews />

                {/* Instructors */}
                <CourseInstructors />
            </CourseTabs>
        </div>
    );
}

export default CourseDetail;
