import axios from 'axios';

const requestTimeout = 5000;
const authInstance = axios.create({
  // baseURL: `${process.env.REACT_APP_API_URL}`,
  baseURL: `https://reqres.in/api/`,
  timeout: requestTimeout,
});

export default authInstance;
