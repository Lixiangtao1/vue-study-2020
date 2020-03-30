// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App }, //此处的template 会替换el:'#app'的内容
  // template: '<App/>'  //使用render函数同样可以替换template方式

  render: function (createElement) {
    // createElement参数是个函数 有三个参数(1.html标签 2.属性 3.内容(数组))
    // return createElement('h2',
    // {calss: 'box'}, 
    // ['Hello world', createElement('button', ['按钮'])])

    // createElement()函数还可以直接传入一个组件对象
    // return createElement(CMP)
    return createElement(App) // App组件会被编译成一个对象 此时的template会由vue-tempalte-compiler编译
  }
})

// runtime-comiler运行html代码机制(编译template到页面机制)
// template ---> (parse解析) ast ---> (特定语法编译) render --->(编译成虚拟dom)virtual DOM
// ---> (渲染)DOM


// runtime-only 运行机制
// render() ---> virtual DOM ---> DOM