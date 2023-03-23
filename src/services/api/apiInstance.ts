import axios from 'axios';
import * as process from 'process';

const API_URL = process.env.API_URL;
export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
