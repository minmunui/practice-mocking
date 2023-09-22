import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

// 아래는 일반적인 axios 인스턴스 설정
instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    },
);