// 封装axios
import axios from 'axios';


export default function request(param) {
    return axios({
        method: param.method,
        url: param.url || '',
        data: param.method === 'post' ? param.data : null,
        params: param.method === 'get' ? param.data : null,
        baseURL: 'http://144.34.190.73:3000/',
        timeout: 10000,
    }).then(res => {
        return res
    }).catch(error => { console.log(error); return { success: false } })
}