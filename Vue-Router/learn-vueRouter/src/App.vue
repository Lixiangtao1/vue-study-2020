<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <h2>{{msg}}</h2> -->
    <router-view/>
  </div>
</template>

<script>
import Router from './router/index.js'

export default {
  name: 'App',
  data() {
    return {
      msg: 'hello'
    }
  },
  methods: {
    
  },
  mounted () {
    console.log(Router.options.routes[0]);
  }
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
