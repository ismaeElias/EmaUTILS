import axios from 'axios';

const api = axios.create({baseURL : 'https://concatenador-pex.herokuapp.com/'});

export default api;