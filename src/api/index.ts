import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';

// Here, we are using axios to create our connection to API

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'X-Api-key': '03cd8236dfd94364bf839b2bbdc5b5a8',
  },
});
