// 入口文件

// 需求： 在这里使用add mul 函数打印
//1. 使用Common.js模块化的规范
const { add, mul } = require ('./js/mathUtil.js'); // 引入mathUtil.js文件
console.log(add(10,20));
console.log(mul(10,20));

// 2.使用ES6的模块化规范
import { name, age, height } from './js/info'
console.log(name);
console.log(age);
console.log(height);

// webpack main.js --output-filename bundle.js --output-path . --mode development

// 或者webpack main.js -o bundle.js --mode development 


// 3.引入CSS文件
require('./css/body.css')   
// 由于webpack只能处理js文件之间的依赖   并不能将css文件图片等转化，所以引入了loader

// 4.引入less文件
require('./css/body.less')
document.writeln('hello 使用documnent.writeln')

// 5.引入vue
import Vue from 'vue'
// 使用vue
const vm = new Vue({
    el: '#app',
    data: {
        msg: 'Hello world!'
    }
})
   