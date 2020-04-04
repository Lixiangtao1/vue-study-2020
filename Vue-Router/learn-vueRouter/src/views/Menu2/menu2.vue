<template>
  <div>
    <!-- <h2>menu2</h2> -->
    <!-- <el-input v-model="msg" placeholder="请输入内容" width="80"></el-input> -->
    <!-- 在子组件中定义一个插槽 -->
    <!-- <slot name="slot1">
      <el-button @click="btnClick">按钮</el-button>
    </slot> -->
    <!-- <slot>
      <h3>我是默认的插槽</h3>
    </slot> -->
    <h3>菜单二</h3>
    <router-link to="/menu2/message">消息</router-link>
    <router-link to="/menu2/news">新闻</router-link>
    <!-- <router-view></router-view> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- router-view (渲染组件) -->
    <!-- keep-alive 是vue的一个组件  router-view是vue-router的一个组件 -->
    <!-- keep-alive 可以使被包含的组件保留状态 或者避免被重新渲染 -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello world',
      path: '/menu2/news'
    }
  },
  created() {
    console.log('menu2  created');
    // this.$router.push(this.path)
  },
  methods: {
    btnClick(){
      // alert('这是插槽')
      // // this.msg = '哈哈哈';
      // this.$router.push({
      //   name:'MENU3',
      //   params: {
          
      //   }
      // })

    }
  },
  // mounted() {
  //   // console.log('menu2  mounted')
  
  // },
  destroyed() {
    console.log('menu2  destroyed')
    // 销毁的钩子函数, 当此组件结束时调用
  },
  activated() {
    // console.log('haah')
    // console.log(this.path)
    this.$router.push(this.path)
  },
  // deactivated() {
    // 这两个函数只有在使用keep-alive时才会被调用
  // },
  beforeRouteLeave (to, from, next) {
    // console.log(this.$route.path)
    this.path = this.$route.path;
    next()
  }
}
</script>
<style scoped>

</style>