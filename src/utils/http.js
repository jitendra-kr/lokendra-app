import axios from 'axios';
import Config from '../config/env';

const instance = axios.create({
        baseURL: Config.getData().default.baseUrl,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('auth')}`
        }
});

export const httpGet = (request = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(request.url)
            .then((response = {}) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err.response)
            });
    })
}

export const httpPost = (request = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(request.url, request.body)
            .then((response = {}) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err.response)
            });
    })
}

export const httpPut = (request = {}) => {
    return new Promise((resolve, reject) => {
        instance.put(request.url, request.body)
            .then((response = {}) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err.response)
            });
    })
}