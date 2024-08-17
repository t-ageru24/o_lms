import React from 'react';

const InputField = ({ label, name, type, value, onChange, required }) => {
    return (
        <div className="flex flex-col">
            <label className="text-gray-700 mb-2" htmlFor={name}>
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            {type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required={required}
                ></textarea>
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={required}
                />
            )}
        </div>
    );
};

export default InputField;
