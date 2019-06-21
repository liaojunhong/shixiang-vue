import axios from 'axios';
import Config from '../utils/config';

const service = axios.create({
    baseURL: Config.baseURL,
    timeout: 5000
})

service.interceptors.request.use(config => {
    console.log(config)
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
});


service.interceptors.response.user(response => {
    console.log(response)
    return response
}, err => {
    console.log(err)
    return err
})

export function fetch(requestUrl, method, param) {
    return service({
        url: requestUrl,
        method: method,
        param: param || {}
    })
}

