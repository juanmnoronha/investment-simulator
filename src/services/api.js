import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mathjs.org/v4',
});

export default api;
