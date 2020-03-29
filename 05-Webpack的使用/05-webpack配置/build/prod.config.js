const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
// 合并base.config.js
const WebpackMerge = require('webpack-merge')
const base = require('./base.config')

module.exports = WebpackMerge(base,{
    plugins:[
        // 压缩插件 uglifyjs-webpack-plugin
        new UglifyjsWebpackPlugin()
    ],
    
})