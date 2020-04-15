import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
Vue.use(Element)
// 当vue检测到vue-ruter插件时会自动的使用该插件(隐式使用)  其他插件则需要显式的去使用

import myplugin from './../src/components/myPlugin.js'
// Vue.use(myplugin)


// 在vue的原型上添加一个方法 test
Vue.prototype.test = function () {
  console.log('这是我自定义的一个全局的vue方法')
}
// 定义一个全局的混入对象
// Vue.mixin({
//   data() {
//     return {
//       msg10: 'this is global mixin'
//     }
//   },
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // mixins:[mixin],
  el: '#app',
  myplugin,
  router,
  store,  // 将store挂载到Vue的根实例中(注入到所有的子组件中,通过this.$store获取)
  render: h => h(App)
})
