export default {
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
}