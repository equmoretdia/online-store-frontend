import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

const $host = axios.create({
  baseURL: BASE_URL,
});

const $authHost = axios.create({ baseURL: BASE_URL });

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
