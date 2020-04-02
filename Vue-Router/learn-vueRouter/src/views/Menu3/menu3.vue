<template>
  <div>
    <!-- <h2>menu3</h2> -->
    <!-- <el-button @click="btnClick">按钮</el-button> -->
    <!-- <menu2 $refs='slot1'>
      <span>span标签</span>
      <h3>哈哈哈</h3>
    </menu2> -->
    <!-- <menu2>
      <h3>替换插槽</h3>
    </menu2> -->
    <h3>菜单三</h3>
    <router-link to="/menu3/email">email</router-link>
    <router-link to="/menu3/profile">profile</router-link><br>
    <button @click="click">新增user组件</button>
    <router-view></router-view>
    <router-view name="user" v-show="flag"></router-view>
    <!-- <button @itemClick="Sum"></button> -->
    <news @itemClick="parentClick"></news>
  </div>
</template>
<script>
// 引入子组件news
import news from './../Menu2/news.vue'
export default {
  data () {
    return {
      msg:'hello world',
      flag: false,
      count: 0
    }
  },
  components: {
    news
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    btnClick() {
      this.$router.push({
        name:'MENU4'
      })
    },
    click() {
      this.flag = !this.flag;
    },
    parentClick(item) {
      // this.$emit('btnClick');
      // console.log(this.$emit('btnClick'))
      console.log(item)
    }
  },
}
</script>
<style scoped>

</style>