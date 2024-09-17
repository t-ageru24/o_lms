// signupService.js
import axios from 'axios';
import api_url from './../api';

const API_ENDPOINT = `${api_url}/auth/register`; // Replace with your actual API URL

const signUpService = async ({ email, password, name, phone, role }) => {
    console.log(email,
        password,
        name,
        phone,
        role,);
  try {
    const response = await axios.post(API_ENDPOINT, {
      email,
      password,
      name,
      phone,
      role,
    });


    // Check if the sign-up was successful
    if (response.status === 201) {
      // Success: You can return the response or handle it as needed
      return response.data;
    } else {
      // Handle any errors from the response
      throw new Error('Error signing up. Please try again.');
    }
  } catch (error) {
    // Handle any network or server errors
    console.error('Error during sign-up:', error);
    throw error;
  }
};

export default signUpService;
