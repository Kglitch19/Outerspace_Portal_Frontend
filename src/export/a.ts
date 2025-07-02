import axios from 'axios';

const apiConfig = axios.create({
  baseURL: 'https://localhost:8080/api',
});

// Add request interceptor
apiConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
apiConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Clear stored data on unauthorized
      localStorage.removeItem('accessToken');
      localStorage.removeItem('adminData');
      window.location.href = '/'; 
    }
    return Promise.reject(error);
  }
);

export default apiConfig; 