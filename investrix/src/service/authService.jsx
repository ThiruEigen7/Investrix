import axios from 'axios';

const API_URL = 'http://localhost:3002/api/auth';

export const handleSignUp = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/register`, { username, password });
    return res.data;
  } catch (error) {
    throw error.response ? error.response.data : "Network error";
  }
};

export const handleLogin = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { username, password });
    return res.data;
  } catch (error) {
    throw error.response ? error.response.data : "Network error";
  }
};
