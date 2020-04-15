<template>
  <div class="container">
    <h5>导航栏</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#ccc"
      active-text-color="green"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group v-for="(item, index) in routeNames" >
          <el-menu-item index="/menu1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>
<script>
import Router from "./../../router/index.js";
export default {
  data() {
    return {
      routeNames: []
    }
  },
  created() {
    this.routeNames = Router.options.routes[0].children
    console.log(this.routeNames)
  },
  methods: {
    handleOpen(){

    },
    handleClose() {

    },
  },
  
};
</script>
<style lang="scss" scoped>

</style>