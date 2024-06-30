// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      throw new Error(error.response.data);
    } else if (error.request) {
      // Request made but no response received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request
      throw new Error('Error in request setup');
    }
  }
};

export const signup = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      throw new Error(error.response.data);
    } else if (error.request) {
      // Request made but no response received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request
      throw new Error('Error in request setup');
    }
  }
};

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      throw new Error(error.response.data);
    } else if (error.request) {
      // Request made but no response received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request
      throw new Error('Error in request setup');
    }
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/update`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      throw new Error(error.response.data);
    } else if (error.request) {
      // Request made but no response received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request
      throw new Error('Error in request setup');
    }
  }
};
