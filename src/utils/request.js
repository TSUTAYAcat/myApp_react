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
        if (res && res.data && res.data.success) {
            return res.data.data
        }
        return null
    }).catch(error => { console.log(error); return { success: false } })
}