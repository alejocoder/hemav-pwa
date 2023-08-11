import axios from 'axios';

const axiosEndpoint = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character',
});

export default axiosEndpoint;