import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/reo911gt3/retro-game-font',
  withCredentials: false,
  headers: {
    Accept: 'application/json', 'Content-Type': 'application/json',
  },
});

export default {
  getGames(perPage) {
    return apiClient.get(`/games?_limit=${perPage}`);
  },
};
