import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-ecoleta.vercel.app/'
});

export default api;
