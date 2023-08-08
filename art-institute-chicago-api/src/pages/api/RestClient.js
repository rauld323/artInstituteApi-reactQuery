import axios from 'axios';

export const restClient = axios.create({
    baseURL: 'https://api.artic.edu/api/v1/',
});

