import axios from 'axios';

// Default config:
export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes/random',
        responseType: 'json',
        timeout: 6000
    }
)