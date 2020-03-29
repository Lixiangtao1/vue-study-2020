const WebpackMerge = require('webpack-merge')
const base = require('./base.config')

module.exports = WebpackMerge(base,{
    devServer: {
        contentBase: './dist',  
        port:8080, 
        inline: true, 
        
    }
})