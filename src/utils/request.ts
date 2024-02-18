import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 创建一个 Axios 实例
const axiosInstance = axios.create({
    baseURL: '/', // 设置基础 URL
    timeout: 5000 // 设置请求超时时间
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 在请求发送之前做一些处理，例如添加请求头等
        console.log('请求拦截器生效：请求发送之前的处理');
        return config;
    },
    (error: AxiosError) => {
        // 对请求错误做些什么
        console.error('请求拦截器错误:', error);
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        console.log('响应拦截器生效：收到响应后的处理');
        return response;
    },
    (error: AxiosError) => {
        // 对响应错误做点什么
        console.error('响应拦截器错误:', error);
        return Promise.reject(error);
    }
);

// 导出 Axios 实例，以便其他模块使用
export default axiosInstance;
