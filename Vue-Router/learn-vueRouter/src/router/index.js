import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import LAYOUT from './../views/Layout/layout.vue'
// import MENU1 from './../views/Menu1/menu1.vue'
// import MENU2 from './../views/Menu2/menu2.vue'
// import MESSAGE from './../views/Menu2/message.vue'
// import NEWS from './../views/Menu2/news.vue'
// import MENU3 from './../views/Menu3/menu3.vue'
// import MENU4 from './../views/Menu4/menu4.vue'

// 重构懒加载模式 (ES6中懒加载写法,会对打包的文件进行分模块打包(通过路由来匹配))
// 打包后的文件一般分为三类vender(第三方插件的打包)  (自己业务逻辑的代码) 还有就是一些底层的支撑(解析js语法处理js的)
const LAYOUT = () => import('./../views/Layout/layout.vue')
const MENU1 = () => import('./../views/Menu1/menu1.vue')

const MENU2 = () => import('./../views/Menu2/menu2.vue')
const MESSAGE = () => import('./../views/Menu2/message.vue')
const NEWS = () => import('./../views/Menu2/news.vue')

const MENU3 = () => import('./../views/Menu3/menu3.vue')
const MENU3_EMAIL = () => import('./../views/Menu3/menu3_email.vue') 
const MENU3_PROFILE = () => import('./../views/Menu3/menu3_profile.vue') 
const MENU3_USER = () => import('./../views/Menu3/menu3_user.vue') 

const MENU4 = () => import('./../views/Menu4/menu4.vue')

Vue.use(Router)
// Router插件

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LAYOUT',
      component: LAYOUT,
      redirect: '/menu1',
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
          meta:{name: '菜单二'},
          redirect:'/menu2/message',
          children: [
            // 注意: 如果子组件是嵌入某组件中,并不产生跳转,此时path的路径问题注意要不要加/
            {
              path: 'message',
              component: MESSAGE
            },
            {
              path: 'news',
              component: NEWS
            }
          ]
        },
        {
          path: '/menu3',
          name: 'MENU3',
          component: MENU3,
          meta: {name: '菜单三'},
          // menu3实现嵌套视图
          redirect: '/menu3/email',
          children: [
            {
              path: 'email',
              // component: MENU3_EMAIL
              components: {
                default: MENU3_EMAIL
                // default: NEWS
              }
            },
            {
              path: 'profile',
              // 此路径下有两个组件 默认显示一个
              components:{
                default: MENU3_PROFILE,
                user: MENU3_USER
              } 
            }
          ]
        },
        {
          path: '/menu4',
          name: 'MENU4',
          component: MENU4,
          meta: {name: '菜单四'}
        }
      ]
    }
  ],
  // mode:'history' //默认为hash模式
})
