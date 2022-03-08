import axios, { AxiosResponse } from "axios";

// intance create for extend different components
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1500,
});

// Call back function
const responseBody = () => (response: AxiosResponse) => response.data.data;

// get url, post url, patch url, delete url
const request = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) =>instance.post(url, body).then(responseBody),
  patch: (url: string, body: object) =>instance.patch(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export default request;