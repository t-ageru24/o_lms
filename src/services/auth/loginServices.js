
import axios from 'axios';
import api_url from './../api';

const API_URL = `${api_url}/login`; // Replace with your actual API URL

const login = async (payload) => {
    console.log(API_URL);
  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export default { login };
