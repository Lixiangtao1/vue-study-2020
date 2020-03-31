import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'


import LAYOUT from './../views/Layout/layout.vue'
import MENU1 from './../views/Menu1/menu1.vue'
import MENU2 from './../views/Menu2/menu2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LAYOUT',
      component: LAYOUT,
      children:[
        {
          path: '/menu1',
          name: 'MENU1',
          component: MENU1,
          meta:{name: '菜单一'}
        },
        {
          path: '/menu2',
          name: 'MENU2',
          component: MENU2,
          meta:{name: '菜单二'}
        },
      ]
    }
  ]
})
