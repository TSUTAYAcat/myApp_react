import request from '../utils/request';
// 登录
const login = (values) => {
    return  request({
        method: 'get',
        url: `user/login`,
        data: {
            username: values.username,
            password: values.password
        }
    })
}
// 注册
const regist = (values) => {
    return  request({
        method: 'post',
        url: `user/register/joinUs`,
        data: {
            username: values.username,
            password: values.password
        }
    })
}

export {
    login,
    regist,
}
