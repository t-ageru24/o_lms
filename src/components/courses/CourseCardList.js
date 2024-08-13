import React from 'react';
import CourseCard from './CourseCard';

function CourseCardList() {
  const courses = [
    {
      id: 1,
      title: "Course Title 1",
      description: "Brief description of the course.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Course Title 2",
      description: "Brief description of the course.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Course Title 3",
      description: "Brief description of the course.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Course Title 4",
      description: "Brief description of the course.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Course Title 5",
      description: "Brief description of the course.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Course Title 6",
      description: "Brief description of the course.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">All Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              courseId={course.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseCardList;
