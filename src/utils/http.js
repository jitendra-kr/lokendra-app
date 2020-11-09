import axios from 'axios';


function headersConfig () {
    return {
        headers: { Authorization:  `Bearer ${localStorage.getItem('auth')} `}
    }
}


export const httpGet = (request = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(request.url, headersConfig())
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
        axios.post(request.url, request.body,  headersConfig())
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
        axios.put(request.url, request.body,  headersConfig())
            .then((response = {}) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err.response)
            });
    })
}

export const httpDelete = (request = {}) => {
    return new Promise((resolve, reject) => {
        axios.delete(request.url, headersConfig())
            .then((response = {}) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err.response)
            });
    })
}