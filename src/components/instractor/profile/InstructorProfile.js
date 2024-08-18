import React from 'react';
import { FaChalkboardTeacher, FaGraduationCap, FaStar, FaEnvelope, FaPhone } from 'react-icons/fa';

function InstructorProfile() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Instructor Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Instructor"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#44318D]">John Doe</h1>
            <p className="text-gray-500 mt-2">
              Senior Software Engineer & Instructor
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-2 mt-4">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-300" />
              <span className="text-gray-500">(4.0)</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-[#44318D]">Contact Information</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 mt-4 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <span className="text-gray-700">johndoe@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-500" />
              <span className="text-gray-700">+123 456 7890</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-[#44318D]">Biography</h2>
          <p className="text-gray-700 mt-4">
            John Doe is a seasoned software engineer with over 10 years of experience in the industry. He has worked with several top tech companies and has a passion for teaching others. John specializes in full-stack development and has a deep understanding of both front-end and back-end technologies.
          </p>
        </div>

        {/* Courses */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-[#44318D]">Courses Taught</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Course Card */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Course"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#44318D]">Introduction to React</h3>
                <p className="text-gray-600 mt-2">
                  Learn the basics of React, a popular JavaScript library for building user interfaces.
                </p>
                <button className="mt-4 w-full bg-[#44318D] text-white py-2 rounded-lg hover:bg-[#34276B] transition duration-300">
                  View Course
                </button>
              </div>
            </div>

            {/* Repeat for more courses */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Course"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#44318D]">Advanced Node.js</h3>
                <p className="text-gray-600 mt-2">
                  Dive deep into Node.js and learn advanced concepts for backend development.
                </p>
                <button className="mt-4 w-full bg-[#44318D] text-white py-2 rounded-lg hover:bg-[#34276B] transition duration-300">
                  View Course
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-[#44318D]">Student Reviews</h2>
          <div className="space-y-6 mt-4">
            {/* Review */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="text-[#44318D]" />
                <span className="text-gray-700 font-semibold">Jane Smith</span>
              </div>
              <p className="text-gray-600 mt-2">
                John is an amazing instructor! His React course helped me land my first job as a front-end developer.
              </p>
            </div>

            {/* Repeat for more reviews */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="text-[#44318D]" />
                <span className="text-gray-700 font-semibold">Michael Johnson</span>
              </div>
              <p className="text-gray-600 mt-2">
                The Advanced Node.js course was fantastic. John's teaching style is clear and concise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorProfile;
