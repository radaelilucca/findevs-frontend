import axios from 'axios';


const api = axios.create({
  baseURL: 'https://findev-omniweek.herokuapp.com/',
});

export default api;
