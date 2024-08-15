import React, { useState } from 'react';
import CourseSidebar from '../components/enrolledCourse/CourseSidebar';
import CourseContentArea from '../components/enrolledCourse/CourseContentArea';
import CourseTabs from '../components/enrolledCourse/CourseTabs';
import MenuBar from '../components/enrolledCourse/MenuBar';

const EnrolledCourse = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Initialize as true to make it visible by default

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* MenuBar */}
            <MenuBar onClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />

            <div className="relative flex flex-1">
                {/* Sidebar */}
                <CourseSidebar
                    isOpen={isSidebarOpen}
                    onClick={toggleSidebar}
                    className={`transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'} z-10`} // Ensure z-index stacking
                />

                <div
                    className={`flex-1 transition-all duration-300 ${
                        isSidebarOpen ? 'ml-64' : 'ml-0'
                    }`}
                >
                    <CourseTabs>
                        {/* Add more tabs here as needed */}
                        <CourseContentArea />
                    </CourseTabs>
                </div>
            </div>
        </div>
    );
};

export default EnrolledCourse;
