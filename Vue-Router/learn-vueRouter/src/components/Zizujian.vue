<template>
  <div>
    <h2>menu2</h2>
    <el-button @click="btnClick">按钮</el-button>
    <el-input v-model="msg" placeholder="请输入内容" width="80"></el-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg1: 'hello world'
    }
  },
  methods: {
    btnClick(){
      this.msg = '哈哈哈';
    }
  },
}
</script>
<style scoped>

</style>