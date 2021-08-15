import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000
});

// const apiKey: string = 'c2be3c50e1c048a082c173084dcee2de';

const apiKey: string = '54f73b449f1e4f3cbda8effa54cfee8f';

export { axiosInstance, apiKey };