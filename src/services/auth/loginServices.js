import axios from 'axios';
import api_url from './../api';

const API_URL = `${api_url}/auth/login/email`; // Replace with your actual API URL

const login = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload, { timeout: 5000 }); // 5-second timeout
    return response.data;
  } catch (error) {
    // Improve error handling to handle potential network errors or undefined response data
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else if (error.request) {
      throw new Error(`No response from server. Please try again later. ${error.message}`);
    } else {
      throw new Error('Error in login request. Please check your input.');
    }
  }
};

// Assign the object to a variable before exporting
const authService = { login };

export default authService;
