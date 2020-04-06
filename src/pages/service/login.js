import request from '../../utils/request';

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

export {
    login,
}
