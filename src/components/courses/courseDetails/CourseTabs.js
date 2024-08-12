// src/components/courses/CourseTabs.js
import React, { useState } from 'react';

function CourseTabs({ tabs, children }) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div>
            <div className="flex border-b">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-[#44318D] text-[#44318D]' : 'text-gray-600'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="mt-6">
                {children.map((child, index) => (
                    <div key={index} style={{ display: activeTab === tabs[index] ? 'block' : 'none' }}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseTabs;
