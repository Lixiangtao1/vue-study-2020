import Vue from 'vue'
import App from './App.vue'

// 终端提示(构建)信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// render函数的回调函数的参数是一个函数createElement() 
// 三个参数1.html标签 2.给标签添加属性3.标签内容


// new Vue({
//   el:'#app',
//   render: function (h) {
//     return h(App);
//   }
// })
// vue实例挂载到dom两种方式 1.el:'#app'  2.$mount('#app')