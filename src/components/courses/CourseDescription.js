import React from 'react';

function CourseDescription() {
  return (
    <section className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Course Title</h2>
      <p className="text-gray-700 mb-6">
        This course provides a comprehensive guide to understanding the fundamentals of [Subject]. 
        It is designed for beginners and covers a wide range of topics including [Topic 1], [Topic 2], 
        and [Topic 3]. By the end of this course, you will have a solid foundation in [Subject] and 
        be prepared to advance to more complex concepts.
      </p>
      <h3 className="text-2xl font-semibold mb-4">What You Will Learn</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Introduction to [Subject]</li>
        <li>Understanding [Key Concept]</li>
        <li>Practical applications of [Topic]</li>
        <li>Hands-on projects and assignments</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-4">Course Requirements</h3>
      <p className="text-gray-700 mb-6">
        There are no prerequisites for this course. A willingness to learn and a passion for [Subject] 
        is all you need to succeed.
      </p>
    </section>
  );
}

export default CourseDescription;
