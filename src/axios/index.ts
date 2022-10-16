const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: process.env.URL_API,
  timeout: 10 * 1000,
});

axiosInstance.interceptors.request.use((config: any) => {

  // config.headers.Authorization = 'aasdasdd';
  return config;
}, (error: any) => {
  return Promise.reject(error)
});


axiosInstance.interceptors.response.use((response: any) => {

  return response?.data;
}, (error: any) => {
  return Promise.reject(error);
});

const sendGet = (url: string, params: any) => axiosInstance.get(url, { params }).then((res: any) => (res)).catch((error: any) => error);
const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance.post(url, params, { params: queryParams }).then(
    (res: any) => res.data,
    (error: any) => {
      // add for upload file
      return Promise.reject(error);
    }
  );
const sendPut = (url: string, params?: any) => axiosInstance.put(url, params).then((res: any) => res.data);
const sendPatch = (url: string, params?: any) => axiosInstance.patch(url, params).then((res: any) => res.data);
const sendDelete = (url: string, params?: any) => axiosInstance.delete(url, { params }).then((res: any) => res.data);

export { sendGet, sendDelete, sendPatch, sendPost, sendPut }

