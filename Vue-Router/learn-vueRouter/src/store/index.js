import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {name: '张三', id: '0001'},
      {name: '哈哈', id: '0002'},
      {name: 'hello world', id: '0003'}
    ]
  },
  mutations: {
    // 每个mutation都有一个事件类型和回调函数,这个回调函数就是进行状态更改的地方,并且接收state为第一个参数
    increment(state) {
      state.count++
    }

  },
  getters: {
    // 可以认为是store的计算属性 getter的返回值会根据依赖缓存,只有依赖值发生改变才会被重新计算
    // doneTodos: state => {
    //   return state.todos
    // }
    // state作为getters的第一个参数
    doneTodos: function (state) {
      return state.todos
    }
  },
  actions: {

  },
  modules: {

  }
})
export default store