import axios from 'axios';

const KEY = 'caf99dbe77bff8a2dd101ed6ffe2e03c';

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: KEY
    }
});