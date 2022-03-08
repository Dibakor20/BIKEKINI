import axios, { AxiosResponse } from "axios";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

// intance create for extend different components
const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 15000,
});

// Call back function
const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) =>
    instance.post(url, body).then(responseBody),
  patch: (url: string, body: object) =>
    instance.patch(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export default request;