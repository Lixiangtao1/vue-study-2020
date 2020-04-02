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
    <router-view></router-view>
    <!-- router-view (渲染组件) -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello world'
    }
  },
  methods: {
    btnClick(){
      alert('这是插槽')
      // this.msg = '哈哈哈';
      this.$router.push({
        name:'MENU3',
        params: {
          
        }
      })

    }
  },
}
</script>
<style scoped>

</style>