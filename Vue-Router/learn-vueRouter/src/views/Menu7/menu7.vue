<template>
  <div>
    <h2>This is Menu7</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  created(){
    console.log('menu7 --- created')
  },
  methods: {
    btnClick () {
      // 挂载到vue 原型上的方法,其组件中也可以使用

      // 即：所有的组件都继承自vue的原型
      console.log(this.$route);
      console.log(this.$router);
      this.test();
      // $router 与 $route 的区别
      // 1.$router 是挂载到vue上的全局的,指向的就是main.js中引入的router,也就是路由中export出的
      // 2.$router 是vue-Router的全局对象,通过Vue.use(Router)和Vue创建的一个实例对象,包含了所有的路由 和
      // 许多关键的对象和属性

      // $route 其实就是当前 活跃的路由的信息 每一个路由都会有一个路由对象包含了path,query,params,name

      // 几个重要的钩子函数
      // 1.created: (创建组件之后就会回调的)
      // 2. mounted；(是在template被编译(挂载到dom上时)的时候进行回调的)
      // 3. updted: (页面刷新的是时候才会进行回调)
    }
  },
  destroyed() {
    console.log('menu7----destroyed')
  },
}
</script>
<style lang="scss" scoped>

</style>