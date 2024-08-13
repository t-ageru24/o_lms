import React, { useState } from 'react';

const CourseTabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="mb-8">
            <div className="flex space-x-4 border-b-2 border-gray-200">
                {React.Children.map(children, (child, index) => (
                    <span
                        className={`cursor-pointer text-lg font-semibold ${
                            activeTab === index ? 'text-[#44318D] border-b-2 border-[#44318D]' : 'text-gray-500'
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {child.props.title}
                    </span>
                ))}
            </div>
            <div className="mt-4">
                {React.Children.map(children, (child, index) =>
                    index === activeTab ? child : null
                )}
            </div>
        </div>
    );
};

export default CourseTabs;
