import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/'; // Replace with your API URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData: any) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId: number, userData: any) => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId: number) => {
  try {
    await api.delete(`/users/${userId}`);
  } catch (error) {
    throw error;
  }
};
