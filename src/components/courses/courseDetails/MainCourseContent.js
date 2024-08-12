import React from 'react';
import Requirements from './courseContentComponent/Requirements';
import Description from './courseContentComponent/Description';
import CourseContent from './courseContentComponent/CourseContent';

const MainCourseContent = () => {
    return (
        <div className="mt-10">
            <Requirements />
            <Description />
            <CourseContent />
        </div>
    );
};

export default MainCourseContent;
