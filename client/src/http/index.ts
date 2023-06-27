import axios, { InternalAxiosRequestConfig } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export const API_URl = 'http://localhost:5000/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URl,
  headers: {},
});

$api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        console.log(originalRequest);
        const response = await axios.get<AuthResponse>(`${API_URl}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log('Пользователь не авторизован');
      }
    }
    throw error;
  }
);

export default $api;
