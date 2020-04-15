import {INCREMENT, UPDATE, DECREMENT, INCREMENTCOUNT} from './mutation-types.js'

export default { // muatation 中必须是同步操作
  // 每个mutation都有一个事件类型和回调函数,这个回调函数就是进行状态更改的地方,并且接收state为第一个参数
  // 定义方法
  [INCREMENT] (state) {
    state.count++
  },
  [DECREMENT] (state) {
    state.count--
  },
  // 传参数 (有两种风格 payload)
  [INCREMENTCOUNT] (state,count) {
    state.count += count
    // console.log(count)
  },

  // 响应式
  [UPDATE] (state) {
    state.info.name = 'Harden'
    // 页面并不会添加address: '洛杉矶',因为此属性没有初始化,就是没有添加到响应式系统中去,虽然
    // devtool能够追踪到数据已经添加,但是页面不会显示(即没有初始化的属性就是没有添加到响应式系统)
    // state.info["address"] = '洛杉矶';
    // Vue.set(state.info, 'address', '洛杉矶')
    // delete state.info.age 此方法删除属性 也不能实现响应式
    // Vue.delete(state.info, 'age')
    // setTimeout(function () {
    //   state.info.name = 'Harden';
    // },3000)
    // 此时进行异步操作页面虽然会改变,但是devtools追踪不到数据的变化 
  },

  jia(state) {
    state.msg1 ++
  },
  jian(state) {
    state.msg1 --
  },
  todoList(state) {
    console.log(state.todoList)
    // return state.todoList
  }
}