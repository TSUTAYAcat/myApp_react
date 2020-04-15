export default [
    { title: '首页', link: '/admin/home', children: [] },
    {
        title: '商品', link: '/admin/product', children: [
            { title: '商品', link: '/admin/product', children: [] },
            { title: '分类', link: '/admin/category', children: [] },
        ]
    },
    { title: '用户管理', link: '/admin/user', children: [] },
    { title: '角色管理', link: '/admin/role', children: [] },
    {
        title: '图形图标', link: '/admin/bar', children: [
            { title: 'Bar', link: '/admin/bar', children: [] },
            { title: 'Line', link: '/admin/line', children: [] },
            { title: 'Pie', link: '/admin/pie', children: [] },
        ]
    },
]