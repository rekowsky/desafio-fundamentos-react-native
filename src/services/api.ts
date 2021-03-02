import axios from 'axios';
// http://localhost:3333
// http://10.0.2.2:3000 para Android simulator
const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
