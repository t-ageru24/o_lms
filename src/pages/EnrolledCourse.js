import React, { useState } from 'react';
import CourseSidebar from '../components/enrolledCourse/CourseSidebar';
import CourseContentArea from '../components/enrolledCourse/CourseContentArea';
import CourseTabs from '../components/enrolledCourse/CourseTabs';
import MenuBar from '../components/enrolledCourse/MenuBar';

const EnrolledCourse = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Start with sidebar closed on smaller screens

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative flex pt-1.5">
            {/* Sidebar */}
            <CourseSidebar isOpen={isSidebarOpen} />

            {/* MenuBar */}
            <MenuBar onClick={toggleSidebar} />

            {/* Content Area */}
            <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 md:ml-64`}>
                {/* Adjust margin-left based on sidebar state, full width on small screens */}
                <CourseTabs>
                    <CourseContentArea />
                    {/* Add more tabs here as needed */}
                </CourseTabs>
            </div>
        </div>
    );
};

export default EnrolledCourse;
