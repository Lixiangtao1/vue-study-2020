<template>
  <div id="app">
    <!-- 如果想要排除某个组件使用keep-alive缓存功能  只需在keep-alive添加属性exclude -->
    <!-- <keep-alive :include="keepAlive"> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Router from './router/index.js'

export default {
  name: 'App',
  // computed: {
  //   keepAlive() {
  //     return this.$router.meta.keeplive
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
