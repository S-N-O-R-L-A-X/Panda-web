import {httpPost} from './http.js'
export function sendCode(url,params) {
    return httpPost(url,params);
}