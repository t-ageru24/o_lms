import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfileBody() {
  const navigate = useNavigate();
  const enrolledCourses = [
    { id: 1, title: 'Data Analysis Fundamentals', progress: 100 },
    { id: 2, title: 'Intro to TensorFlow for Deep Learning', progress: 13 },
    { id: 3, title: 'Challenge: Programming for Data Science with Python', progress: 100 },
    { id: 4, title: 'Data Structures and Algorithms with Python', progress: 5 },
  ];

  const handleCourseClick = (id) => {
    navigate(`/enrolled-course/${id}`);
  };

  return (
    <div className="container mx-auto py-10 px-4 flex">
      {/* Main content area */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-6">Welcome Tadesse</h1>

        {/* Continue Learning Section */}
        <div className="mb-10">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-4">
                {enrolledCourses.map(course => (
                  <div
                    key={course.id}
                    className="bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200 min-w-[250px]"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    <div className="relative">
                      <img
                        src="https://via.placeholder.com/250"
                        alt={course.title}
                        className="w-full rounded-lg"
                      />
                      <div className="mt-2">
                        <p className="text-sm font-medium">{course.title}</p>
                        <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
                          <div
                            className="bg-[#44318D] h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-right text-xs text-gray-600 mt-1">{course.progress}% Complete</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-4 text-blue-600 hover:underline">View All</button>
          </div>
        </div>

        {/* Completed Programs Section */}
        <div className="mb-10">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Completed Programs</h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-4">
                <div className="bg-gray-100 p-4 rounded-lg min-w-[250px]">
                  <div className="relative">
                    <img
                      src="https://via.placeholder.com/250"
                      alt="Completed Program"
                      className="w-full rounded-lg"
                    />
                    <div className="mt-2">
                      <p className="text-sm font-medium">Data Analysis Fundamentals</p>
                      <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
                        <div className="bg-[#44318D] h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-right text-xs text-gray-600 mt-1">100% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-4 text-blue-600 hover:underline">View All</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/4 pl-4">
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Progress Summary</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">description</i>
                <span className="ml-2">Concepts Viewed</span>
              </span>
              <span>244</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">library_books</i>
                <span className="ml-2">Lessons Viewed</span>
              </span>
              <span>14</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">assessment</i>
                <span className="ml-2">Quizzes Completed</span>
              </span>
              <span>25</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">school</i>
                <span className="ml-2">Programs Completed</span>
              </span>
              <span>1</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">check_circle</i>
                <span className="ml-2">Projects Passed</span>
              </span>
              <span>0</span>
            </li>
          </ul>
        </div>

        {/* Additional Links */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">X</i>
                <span className="ml-2">Lesson Help</span>
              </span>
              {/* Replaced the <a> with <button> */}
              <button className="text-[#44318D] hover:underline" onClick={() => alert('Visit Knowledge Q&A')}>
                Visit Knowledge Q&A
              </button>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">X</i>
                <span className="ml-2">Account Help</span>
              </span>
              {/* Replaced the <a> with <button> */}
              <button className="text-[#44318D] hover:underline" onClick={() => alert('Visit Help Center')}>
                Visit Help Center
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfileBody;
