const path = require('path')   //path这个包依赖于node

module.exports = {
    entry:'./src/main.js',               //入口文件
    output: {               //打包文件（一般是一个对象）
        path: path.resolve(__dirname, 'dist'),           //绝对路径（需要引入node中的path)
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                // 使用多个loader时,是从右到左加载
                use: ['style-loader','css-loader']
                // css-loader只负责将css文件进行加载,并不能将样式添加到build.js包中
                // style-loader 能够将css文件中的样式添加到DOM中

            }
        ]
    }
}