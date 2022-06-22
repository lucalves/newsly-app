import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';

// Here, we are using axios to create our connection to API

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'X-Api-key': '<YOUR API KEY>',
  },
});
