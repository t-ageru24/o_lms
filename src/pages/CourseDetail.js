import React from 'react';
import CourseDescription from '../components/courses/CourseDescription';
import CourseReview from '../components/courses/CourseReview';

function CourseDetail() {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <CourseDescription />
        <div className="text-center mt-10">
          <button className="bg-[#44318D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300">
            Enroll Now
          </button>
        </div>
        <CourseReview />
      </div>
    </div>
  );
}

export default CourseDetail;
