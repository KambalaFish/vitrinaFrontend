import axios from 'axios';
import * as process from 'process';
import qs from 'qs';

const API_URL = process.env.API_URL;
export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  paramsSerializer: {
    serialize: (p) => qs.stringify(p, { arrayFormat: 'brackets' }),
  },
});
