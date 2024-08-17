import React from 'react';

const SelectField = ({ label, name, options, value, onChange, required }) => {
    return (
        <div className="flex flex-col">
            <label className="text-gray-700 mb-2" htmlFor={name}>
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={required}
            >
                <option value="" disabled>
                    Select an option
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
