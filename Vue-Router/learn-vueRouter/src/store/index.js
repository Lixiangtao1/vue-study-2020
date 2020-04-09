import Vue from 'vue'
import Vuex from 'vuex'

// 抽离各模块
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
import modules from './modules.js'

Vue.use(Vuex)
// vuex的状态存储是响应式的
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
})
export default store