// 入口文件

// 需求： 在这里使用add mul 函数打印
//1. 使用Common.js模块化的规范
const { add, mul } = require ('./mathUtil.js'); // 引入mathUtil.js文件
console.log(add(10,20));
console.log(mul(10,20));

// 2.使用ES6的模块化规范
import { name, age, height } from './info'
console.log(name);
console.log(age);
console.log(height);

// webpack main.js --output-filename bundle.js --output-path . --mode development

// 或者webpack main.js -o bundle.js --mode development 就可以了
