import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
Vue.use(Element)

// 在vue的原型上添加一个方法 test
Vue.prototype.test = function () {
  console.log('这是我自定义的一个全局的vue方法')
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 将store挂载到Vue的根实例中(注入到所有的子组件中,通过this.$store获取)
  render: h => h(App)
})
