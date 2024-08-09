import React from 'react';
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate, FaUserGraduate } from 'react-icons/fa';

function LMSFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our LMS?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <FaChalkboardTeacher className="text-[#44318D] text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry experts who are passionate about teaching.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLaptopCode className="text-[#44318D] text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
            <p className="text-gray-600">Get practical experience with projects and real-world scenarios.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCertificate className="text-[#44318D] text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certified Courses</h3>
            <p className="text-gray-600">Earn recognized certifications to boost your career prospects.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserGraduate className="text-[#44318D] text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student Success</h3>
            <p className="text-gray-600">Join a community of learners and achieve your educational goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LMSFeatures;
