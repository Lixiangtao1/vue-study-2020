const path = require('path')   //path这个包依赖于node

module.exports = {
    entry:'./src/main.js',               //入口文件
    output: {               //打包文件（一般是一个对象）
        path: path.resolve(__dirname, 'dist'),           //绝对路径（需要引入node中的path)
        filename: 'bundle.js',
        publicPath: 'dist/',   //涉及到url下的打包目录 会生成dist下的目录
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                // 使用多个loader时,是从右到左加载
                use: ['style-loader','css-loader']
                // css-loader只负责将css文件进行加载,并不能将样式添加到build.js包中
                // style-loader 能够将css文件中的样式添加到DOM中

            },
            // 配置less (先将less文件转化为css文件,再将css文件中的样式添加到DOM中)
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        // options: {
                        //     lessOptions: {
                        //     strictMath: true,
                        //     noIeCompat: true,
                        //   },
                        // },
                    }
                ]
                // 使用less文件时，不仅需要安装less-loader开发依赖,还需要安装运行时依赖less
                // 同时配置less时 需要使用到的['style-loader','css-loader','less-loader']
                // 因为less文件需要转成css文件, css文件加载到DOM上需要使用到style-loader依赖
            },
            // 配置url-loader  (图片转换)
            // file-loader(一般不需要配置) 
            {
                test: /\.(png|jpg|gif|jpeg|psd)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        // 当加载的图片大小小于limit的值,会将图片编译成base64字符串形式
                        limit: 10240,
                        // 当加载图片大小大于limit的值时,需要使用file-loader依赖进行加载(该依赖不需要配置)
                        // 添加依赖仍然加载不出图片,因为打包时将图片打包到dist文件夹中去,需要在输出文件的配置下添加路径配置
                        
                        // 配置图片文件夹并重新命名  原名称+8位哈希值+原后缀扩展名称 (.用来拼接)
                        name: 'img/[name].[hash:8].[etc]'
                    }
                  }
                ]
            },
            // 配置babel (将ES6语法转换为ES5的语法)
            {
                test: /\.js$/,
                // 排除以下两个文件夹中的js文件
                exclude: /(node_modules|bower_components)/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                            // presets: ['es2015']
                        }
                    }
                ]
            }

        ]
    }
}
    // 在packge.json 文件中script配置脚本 dev开发依赖  运行时依赖

    //