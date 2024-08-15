import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();
  const enrolledCourses = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
    { id: 3, title: 'Course 3' },
  ];

  const handleCourseClick = (id) => {
    navigate(`/enrolled-course/${id}`);
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Abebe</h2>
            <p className="text-gray-600 mb-2">Email: abebe@gmail.com</p>
            <p className="text-gray-600 mb-4">Member since: August 2024</p>
            <button className="bg-[#44318D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Enrolled Courses</h3>
          <ul className="space-y-4">
            {enrolledCourses.map(course => (
              <li
                key={course.id}
                className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={() => handleCourseClick(course.id)}
              >
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
