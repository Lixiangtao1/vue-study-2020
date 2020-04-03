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
    <router-link :to="{path:'/menu3/email',query:{name:'zhangsan',age:18,heoght:1.88}}" @click="btnClick">email</router-link>
    <router-link to="/menu3/profile">profile</router-link><br>
    <button @click="click">新增user组件</button>
    <router-view></router-view>
    <router-view name="user" v-show="flag"></router-view>
    <!-- <button @itemClick="Sum"></button> -->
    <news @itemClick="parentClick"></news>
    <!-- <button @click="changePage(item)">跳转到menu4</button> -->
    <ul>
      <li v-for="(item,index) in list" @click="changePage(item,index)">跳转到menu4</li>
    </ul>
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
      count: 0,
      list: [
        {name:'张三',id:'0001'},
        {name:'李四',id:'0002'},
        {name:'小明',id:'0003'},
        {name:'小红',id:'0004'},
      ]
    }
  },
  components: {
    news
  },
  created() {
    console.log(this.$$router)
  },
  methods: {
    btnClick() {
      
      
    },
    click() {
      this.flag = !this.flag;
    },
    parentClick(item) {
      // this.$emit('btnClick');
      // console.log(this.$emit('btnClick'))
      console.log(item)
    },
    changePage(item,index) {
      this.$router.push({
        name: 'MENU4',
        params: {
          // 路由带参数方式
          // row: this.msg
          row: item.name
        },
        query:{
          view: item.id
        }
      })
    }
  },
}
</script>
<style scoped>

</style>