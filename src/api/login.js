import {httpGet} from './http.js'

export function login(url,params) {
    return httpGet(url,params);
}