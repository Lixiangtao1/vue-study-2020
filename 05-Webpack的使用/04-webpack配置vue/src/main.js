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



// 为了在项目中使用vue.js 必须要引入vue
// 5.引入vue
import Vue from 'vue'
// 使用vue (在此处的vue实例中去编写代码复杂繁琐,因此将vue代码抽离出来)
// 1.定义一个APP组件 再将其挂在到vue实例中去
// const App = {
//     template: `
//         <div>
//             <h2>{{msg}}</h2>
//             <button @click="btnClick">按钮</button>
//         </div>
//     `,
//     data () {
//         return {
//             msg: 'Hello world!'
//         }
//     },
//     methods: {
//         btnClick () {
//             this.msg = 'hahahah';
//         } 
//     }
// }

// 2.再次对App组件进行抽取 
// 引入抽取的App的组件文件
// import App from './vue/App.js'

// 使用vue文件 (注意使用vue文件 webpack打包并不能识别vue文件 所以要引入vue-loader和 vue-template-complier配置)
import App from './vue/App.vue'

new Vue({
    el: '#app',
    //将组件在body中编译(因为template中的代码最终会放在html中的div#app中进行编译) 
    template: '<App/>',
    components:{
        App
        // 将App组件挂在到vue实例
    }
})
// 注意： 当el 和 template 同时存在时, vue会自动处理将template 模板中的代码放在div#app 中去执行
   