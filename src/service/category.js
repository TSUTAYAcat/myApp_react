import request from '../utils/request';
// 获取分类列表
const getCategoryList = (values) => {
    return  request({
        method: 'get',
        url: `api/category/list`,
        data: {
            level: values.level,
            parent_id: values.parent_id
        }
    })
}

export {
    getCategoryList 
}