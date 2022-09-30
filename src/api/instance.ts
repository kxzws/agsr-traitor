import axios from 'axios';

const requestTimeout = 5000;
const axiosInst = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: requestTimeout,
  headers: {
    Authorization: `${process.env.REACT_APP_API_KEY}`,
  },
});
