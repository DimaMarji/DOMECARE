import axios, { AxiosRequestConfig } from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();  // Initialize cookies

// Base URL from environment variables
const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

// Base Axios instance with default configurations
const axiosInstance = axios.create({
    baseURL: baseUrl, // Base URL for all requests
    headers: {
        'Content-Type': 'application/json', // Default content type
    },
});

// Interceptor to attach token from cookies to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = cookies.get('token');  // Get token from cookies
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
        }
        return config;
    },
    (error) => {
        // Handle errors before they are sent
        return Promise.reject(error);
    }
);

// Interceptor for handling responses and errors globally
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Global error handling (e.g., handling 401 or 500 status codes)
        if (error.response?.status === 401) {
            // Handle unauthorized errors (e.g., redirect to login)
            console.error('Unauthorized! Redirect to login.');
        }
        return Promise.reject(error);
    }
);

// GET request
export const axiosGet = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
        const response = await axiosInstance.get<T>(url, config);
        return response.data;
    } catch (error) {
        console.error('GET request failed:', error);
        throw error;
    }
};

// POST request
export const axiosPost = async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
        const response = await axiosInstance.post<T>(url, data, config);
        return response.data;
    } catch (error) {
        console.error('POST request failed:', error);
        throw error;
    }
};

// PUT request
export const axiosPut = async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
        const response = await axiosInstance.put<T>(url, data, config);
        return response.data;
    } catch (error) {
        console.error('PUT request failed:', error);
        throw error;
    }
};

// DELETE request
export const axiosDelete = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
        const response = await axiosInstance.delete<T>(url, config);
        return response.data;
    } catch (error) {
        console.error('DELETE request failed:', error);
        throw error;
    }
};
