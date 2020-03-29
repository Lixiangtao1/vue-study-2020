const path = require('path')   //
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') //将html文件打包到dist
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin') // 将打包的js文件压缩

module.exports = {
    entry:'./src/main.js',               //入口文件
    output: {               //打包文件（一般是一个对象）
        path: path.resolve(__dirname, 'dist'),           //绝对路径（需要引入node中的path)
        filename: 'bundle.js',
        // publicPath: 'dist/',   //涉及到url下的打包目录 会生成dist下的目录
        publicPath: './'
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
            },
            
            //配置vue-loader
            // You may need an appropriate loader to handle this file type.打包报错（vue-loader版本过高）
            // 在开发依赖中有去更改vue-loader版本问题
            {
                test: /\.vue$/,
                use:[
                    {
                        loader:'vue-loader'
                    }
                ]
            } 

        ]
    },
    // 配置vue 解决runtimme-only问题
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // 为什么会有这个配置？ (否则会有报错 提示默认选择了runtime-only)  
    // (vue 在最终发布打包构建了两类版本  一种是runtime-only:代码中不能有template 此方式不能编译有任何template 
    //  另一种是runtime-complier:代码中可以有template complier可以编译template )
    // 原因： 解决默认使用  runtime-only(vue.runtime.esm.js)      使用带有complier的构建版本js文件(vue.esm.js)


    // 对index.html文件打包到dist (此处的template会找到同级文件的html中的body中的#app  会在dist中自动生成)
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // 压缩插件 uglifyjs-webpack-plugin
        new UglifyjsWebpackPlugin()
    ],

    // 搭建本地服务器 (webpack-dev-serve) 配置webpack-dev-server
    devServer: {
        contentBase: './dist',  //为哪一个文件夹提供本地服务,默认是根文件夹，这里是./dist
        port:8080, //端口号,默认(不写)是80端口
        inline: true, //页面实时刷新
        // historyApiFallback: 在SPA页面中,依赖HTML5的history模式
    }


}
 
    