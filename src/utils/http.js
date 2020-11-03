
import { get, post, put} from "axios";

export const httpGet = (request = {}) => {
    return new Promise((resolve, reject) => {
        get(request.url)
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
        post(request.url, request.body)
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
        put(request.url, request.body)
            .then((response = {}) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err.response)
            });
    })
}