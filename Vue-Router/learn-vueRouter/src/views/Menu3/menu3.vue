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
    <hello-world>
      <h3>你好</h3>
    </hello-world>
  </div>
</template>
<script>
// 引入子组件
import menu2 from './../Menu2/menu2.vue'
import HelloWorld from './../../components/HelloWorld.vue'
export default {
  data () {
    return {
      msg:'hello world'
    }
  },
  components:{
    menu2,
    HelloWorld
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
      this.msg = '哈哈'
    }
  },
}
</script>
<style scoped>

</style>