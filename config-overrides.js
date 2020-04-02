const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
    // 根据antd实现按需打包，根据import打包（使用 babel-plugin-import）
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1a8afa' },
    })
)