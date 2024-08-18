import React from 'react';

const InstructorProfile = () => {
    // Replace with actual data fetching or props passing
    const instructorData = {
        name: 'John Doe',
        bio: 'Experienced software engineer with a passion for teaching.',
        education: "Master's Degree in Computer Science",
        expertise: 'Web Development, React, Node.js',
        yearsOfExperience: 10,
        courses: [
            { id: 1, title: 'React for Beginners', students: 150 },
            { id: 2, title: 'Advanced Node.js', students: 200 },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-center mb-4">Instructor Profile</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/3">
                        {/* Profile Picture */}
                        <div className="w-48 h-48 rounded-full bg-gray-300 mx-auto md:mx-0" />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-2xl font-semibold">{instructorData.name}</h2>
                        <p className="text-gray-700 mt-2">{instructorData.bio}</p>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Education</h3>
                            <p className="text-gray-600">{instructorData.education}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Expertise</h3>
                            <p className="text-gray-600">{instructorData.expertise}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Experience</h3>
                            <p className="text-gray-600">{instructorData.yearsOfExperience} years</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Courses</h3>
                    <ul>
                        {instructorData.courses.map((course) => (
                            <li
                                key={course.id}
                                className="bg-gray-100 p-4 mb-2 rounded-lg flex justify-between items-center"
                            >
                                <span>{course.title}</span>
                                <span>{course.students} students</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfile;
