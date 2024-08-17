import React, { useState } from 'react';
import InputField from '../shared/InputField';
import SelectField from '../shared/SelectField';
import Button from '../shared/Button';

const InstructorRegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        educationLevel: '',
        yearsOfExperience: '',
        areaOfExpertise: '',
        bio: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form Data:', formData);
    };

    return (
        <form
            className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-bold text-center mb-6">Instructor Registration</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <SelectField
                    label="Education Level"
                    name="educationLevel"
                    options={[
                        'Bachelor\'s Degree',
                        'Master\'s Degree',
                        'Ph.D.',
                        'Other',
                    ]}
                    value={formData.educationLevel}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Years of Experience"
                    name="yearsOfExperience"
                    type="number"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Area of Expertise"
                    name="areaOfExpertise"
                    type="text"
                    value={formData.areaOfExpertise}
                    onChange={handleChange}
                    required
                />
                <div className="col-span-1 sm:col-span-2">
                    <InputField
                        label="Short Bio"
                        name="bio"
                        type="textarea"
                        value={formData.bio}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="mt-6 text-center">
                <Button type="submit" text="Register" />
            </div>
        </form>
    );
};

export default InstructorRegistrationForm;
