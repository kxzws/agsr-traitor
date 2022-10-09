import axios from 'axios';

const requestTimeout = 5000;

export const authInstance = axios.create({
  // baseURL: `${process.env.REACT_APP_API_URL}`,
  baseURL: `http://localhost:3001/`,
  timeout: requestTimeout,
});

export const tableDataInstance = axios.create({
  // baseURL: `${process.env.REACT_APP_API_URL}`,
  baseURL: `http://localhost:3001/`,
  timeout: requestTimeout,
});
