import axios from 'axios';

const API_URL = 'http://localhost:9002/api/v1';

export const loginUser = (email, password) => {
  return axios.post(`${API_URL}/users/login`, { email, password });
};

export function isAuthenticated() {
  const isAuthStatus = localStorage.getItem('token') !== null;
  return isAuthStatus;
};