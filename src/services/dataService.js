import axios from 'axios';

const API_URL = 'https://aleho.sytes.net/api';

export const savePersonData = (data) => {
  return axios.post(`${API_URL}/savePersonas`, data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const saveVehicleData = (data) => {
  return axios.post(`${API_URL}/saveVehiculos`, data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
};

