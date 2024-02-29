import axios from 'axios';
import {BASE_API_URL, F_TOKEN_B} from 'src/config/app.config';
import {hashHmacSHA256, hashMd5} from 'src/utils/crypt';

const BASE_PREFIX = '';
const client = axios.create({
  timeout: 1000000,
  baseURL: BASE_API_URL + BASE_PREFIX,
});

client.interceptors.request.use(
  request => {
    const {data} = request;
    request.headers['Request-Type'] = 'Self-App';
    request.headers['Self-Request-Signature'] = hashMd5(
      hashHmacSHA256(JSON.stringify(data), F_TOKEN_B),
    );
    return request;
  },
  error => Promise.reject(error),
);

client.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export default client;
