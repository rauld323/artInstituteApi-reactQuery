import axios from 'axios';

const restClient = axios.create({
    baseURL: 'https://api.artic.edu/api/v1/',
});

export default restClient;