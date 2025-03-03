import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseLearn from '../components/courses/courseDetails/CourseLearn';
import CourseContent from '../components/courses/courseDetails/MainCourseContent';
import CourseReviews from '../components/courses/courseDetails/CourseReviews';
import CourseInstructors from '../components/courses/courseDetails/CourseInstructors';
import CourseTabs from '../components/courses/courseDetails/CourseTabs';

function CourseDetail() {
  const navigate = useNavigate();
  const tabs = ["What you'll learn", 'Course content', 'Reviews', 'Instructors'];
  const isAuthenticated = false; // Replace with actual authentication logic

  const handleEnrollNow = () => {
    if (isAuthenticated) {
      navigate('/enrolled-course/1'); // Example course ID
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
        {/* Video section */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Course Preview" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg">
            </iframe>
          </div>
        </div>

        {/* Course details section */}
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Build a Quiz App with HTML, CSS, and JavaScript</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6">
            Improve your core development skills by building a Quiz App with HTML, CSS, and JavaScript.
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full">5 ★</span>
            <span className="text-gray-600">(5,000 ratings)</span>
          </div>
          <p className="text-lg md:text-xl font-bold my-4">Free</p>
          <button
            onClick={handleEnrollNow}
            className="bg-[#44318D] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300">
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
