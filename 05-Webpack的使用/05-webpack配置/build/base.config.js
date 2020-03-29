const path = require('path')   //
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') //将html文件打包到dist
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin') // 将打包的js文件压缩

module.exports = {
    entry:'./src/main.js',               //入口文件
    output: {               //打包文件（一般是一个对象）
        path: path.resolve(__dirname, '../dist'),           //绝对路径（需要引入node中的path)
        filename: 'bundle.js',
        // publicPath: 'dist/',   //涉及到url下的打包目录 会生成dist下的目录
        // publicPath: './'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                // 使用多个loader时,是从右到左加载
                use: ['style-loader','css-loader']

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
           
            },
            
            {
                test: /\.(png|jpg|gif|jpeg|psd)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: 'img/[name].[hash:8].[etc]'
                    }
                  }
                ]
            },
           
            {
                test: /\.js$/,
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
 
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // 压缩插件 uglifyjs-webpack-plugin
        // new UglifyjsWebpackPlugin()
    ],




}
 
    