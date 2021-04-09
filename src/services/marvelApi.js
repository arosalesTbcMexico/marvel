import axios from 'axios'

const marvelApi = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

marvelApi.defaults.params = {
    apikey: '785cc7620b4069f1090cf1d78eecc1f8',
    hash: '9ea2c6d8b69126a8bc87e76a26eaa6d9',
    ts: 1
}

marvelApi.interceptors.request.use(async config => {
    return config;
}, function(error) {
    return Promise.reject(error)
});

export default marvelApi;