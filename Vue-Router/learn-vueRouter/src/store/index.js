import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT, UPDATE} from './mutation-types'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {name: '张三', id: '0001',age:12},
      {name: '哈哈', id: '0002',age:23},
      {name: 'hello world', id: '0003',age: 34}
    ],
    info:{
      name: 'James',
      age: 35,
      height: 2.03
    }
  },


  mutations: { // muatation 中必须是同步操作
    // 每个mutation都有一个事件类型和回调函数,这个回调函数就是进行状态更改的地方,并且接收state为第一个参数
    // 定义方法
    [INCREMENT](state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    // 传参数 (有两种风格 payload)
    incrementCount (state,count) {
      state.count += count
      // console.log(count)
    },

    // 响应式
    [UPDATE] (state) {
      // state.info.name = 'Harden'
      // 页面并不会添加address: '洛杉矶',因为此属性没有初始化,就是没有添加到响应式系统中去,虽然
      // devtool能够追踪到数据已经添加,但是页面不会显示(即没有初始化的属性就是没有添加到响应式系统)
      // state.info["address"] = '洛杉矶';
      // Vue.set(state.info, 'address', '洛杉矶')
      // delete state.info.age 此方法删除属性 也不能实现响应式
      // Vue.delete(state.info, 'age')
      setTimeout(function () {
        state.info.name = 'Harden';
      },3000)
      // 此时进行异步操作页面虽然会改变,但是devtools追踪不到数据的变化 
    }
  },

  getters: {
    // 可以认为是store的计算属性 getter的返回值会根据依赖缓存,只有依赖值发生改变才会被重新计算
    // doneTodos: state => {
    //   return state.todos
    // }
    // state作为getters的第一个参数
    more: function (state) {
      return state.todos.filter( res => res.age > 20)
    },
    // getters的基本使用  state中count状态的平方
    powerCount: function(state) {
      return state.count * state.count;
    },
    // 第二个参数可以使getters
    moreAgestu: function (state, getters) {
      return getters.more.length
    },
    // 可以返回一个函数
    moreAgestu2: function (state) {
      return function (age){
        return state.todos.filter(res => {
          return res.age > age
        })
      }
    } 
  },


  actions: {
    // actions类似于mutations (用来代替mutations进行异步操作)
  },


  modules: {

  }
})
export default store