//封装一个全局跳转路由的方法
// import Vue from 'vue'
const plugin = {}
plugin.install =function (Vue) {
  Vue.prototype.$goPath = function (id, path) {
    if(!id) { // 当id不传时
      this.$router.path({
        path: path
      })
    }
  
    if(id) { //id存在
      this.$router.path({
        path: path,
        query: {
          id: id
        }
      })
    }
  }
} 