// 封装axios
import axios from 'axios';


export default function request(param) {
    return axios({
        method: param.method,
        url: param.url || '',
        data: param.method === 'post' ? param.data : null,
        params: param.method === 'get' ? param.data : null,
        baseURL: 'http://localhost:3000/',
        timeout: 10000,
    }).then(res => {
        console.log('初始：',res)
        if (res) {
            return res
        }
        return null
    }).catch(error => { console.log(error); return null })
}