import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ title, description, imageUrl, courseId }) {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <img src={imageUrl} alt="Course" className="mb-4 w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={`/course/${courseId}`}>
        <button className="px-4 py-2 bg-[#44318D] text-white rounded-md">Detail</button>
      </Link>
    </div>
  );
}

export default CourseCard;
