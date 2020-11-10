import axios from 'axios';

const api = axios.create({baseURL : 'https://concatenador-pex.herokuapp.com/',timeout: 1000});

export default api;