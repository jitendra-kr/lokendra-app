
import { get, post} from "axios";

export const httpGet = (request = {}) => {
    return new Promise((resolve, reject) => {
        get(request.url)
            .then((response = {}) => {
                console.log(response)
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