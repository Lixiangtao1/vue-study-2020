const path = require('path')   //path这个包依赖于node

module.exports = {
    entry:'./src/main.js',               //入口文件
    output: {               //打包文件（一般是一个对象）
        path: path.resolve(__dirname, 'dist'),           //绝对路径（需要引入node中的path)
        filename: 'bundle.js'
    },
}