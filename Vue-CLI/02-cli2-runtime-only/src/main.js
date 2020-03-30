import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// runtime-comiler运行html代码机制(编译template到页面机制)
// template ---> (parse解析) ast ---> (特定语法编译) render --->(编译成虚拟dom)virtual DOM
// ---> (渲染)DOM


// runtime-only 运行机制
// render() ---> virtual DOM ---> DOM