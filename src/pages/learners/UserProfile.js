import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();
  const enrolledCourses = [
    { id: 1, title: 'Data Analysis Fundamentals', progress: 3 },
    { id: 2, title: 'Intro to TensorFlow for Deep Learning', progress: 13 },
    { id: 3, title: 'Challenge: Programming for Data Science with Python', progress: 100 },
    { id: 4, title: 'Data Structures and Algorithms with Python', progress: 5 },
  ];

  const handleCourseClick = (id) => {
    navigate(`/enrolled-course/${id}`);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Continue Learning Section */}
        <div className="md:col-span-2 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Welcome Abebe</h2>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Continue Learning</h3>
            <button className="bg-[#44318D] text-white px-3 py-1 rounded-lg hover:bg-[#2b246a] transition duration-300">View All</button>
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {enrolledCourses.map(course => (
                <div 
                  key={course.id}
                  className="min-w-[250px] bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <div className="relative">
                    <img
                      src="https://via.placeholder.com/250"
                      alt={course.title}
                      className="w-full rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-2 rounded-b-lg">
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
        </div>

        {/* Progress Summary Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Progress Summary</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">description</i>
                <span className="ml-2">Concepts Viewed</span>
              </span>
              <span>242</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">library_books</i>
                <span className="ml-2">Lessons Viewed</span>
              </span>
              <span>12</span>
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
              <span>0</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">check_circle</i>
                <span className="ml-2">Projects Passed</span>
              </span>
              <span>0</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">help</i>
                <span className="ml-2">Lesson Help</span>
              </span>
              <a href="#" className="text-[#44318D] hover:underline">Visit Knowledge Q&A</a>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center">
                <i className="material-icons text-[#44318D]">account_circle</i>
                <span className="ml-2">Account Help</span>
              </span>
              <a href="#" className="text-[#44318D] hover:underline">Visit Help Center</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
