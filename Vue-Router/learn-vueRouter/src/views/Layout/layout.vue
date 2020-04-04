<template>
  <div class="layout_wrapper">
    <div class="box top_banner">
      <span style="color:orange">Hello World!</span>
    </div>
    <div class="box main_wrapper">
      <div class="box left_nav">
        <!-- el-menu中的router属性: 是否使用vue-router模式,默认为false, 当为true时,index为路由的path来进行跳转 -->
        <el-menu
            class="el-menu-vertical-demo"
            background-color="black"
            text-color="rgb(130,130,130)"
            router
            unique-opened
          >
              <template v-for="(item,index) in routeNames">
                  <el-menu-item :key="index" >
                    <!-- router-link属性： tag属性(更改渲染成何种标签)  replace(更改成replaceState)阻止返回模式
                      router-link-active属性 点击切换才会有的属性   -->
                    
                    <router-link class="itemTitle" tag="div" :to="item.path" style="color:black">
                      <i class="el-icon-document"></i>
                      <span style="color:orange;font-size:20px;">{{item.meta.name}}</span>
                    </router-link>
                  </el-menu-item>
                  <!-- <el-submenu :key="index">
                      <template slot="title">
                          <i class="el-icon-document"></i>
                          <span>{{item.meta.name}}</span>
                      </template>
                      <el-menu-item :key="index"  v-for="(childItem) in item.children" >
                          {{childItem.meta.name}}
                      </el-menu-item>
                  </el-submenu> -->
              </template>
        </el-menu>
        <!-- <el-menu
          class="el-menu-vertical-demo"
          background-color="black"
          text-color="orange"
          router
          unique-opened
        > -->
          <!-- <div>
            <el-submenu :index="item.path" v-for="(item, index) in routeNames" :key="index">
              <template slot="title">
                <i class="el-icon-location" style="color: #E1CDA4;"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item :index="childItem.path" v-for="(childrenItem,ind) in item.children" :key="index + ind">{{childItem.name}}</el-menu-item>
            <el-submenu>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group index="/menu1">
                <el-menu-item index="/menu1">选项1</el-menu-item>
                <el-menu-item index="/menu2">选项2</el-menu-item>
                <el-menu-item index="/menu3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="/menu4">
                <template slot="title">选项4</template>
                <el-menu-item index="menu4">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
              </template>
              <el-menu-item index="/menu5">选项5</el-menu-item>
              <el-menu-item index="/menu6">选项6</el-menu-item>
              <el-menu-item index="/menu7">选项7</el-menu-item>
            </el-submenu>
          </div>

          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu> -->
      </div>
      <div class="box right_content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Router from "./../../router/index.js";
export default {
  data() {
    return {
      routeNames: []
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
    // this.$router   vue-Router（源码中）在所有的组件都加了$router属性  所以可以使用this.$router获取
    // this.$router.push('/home') 使用的其实是pushState()   可以返回
    // this.$router.replace('/home')  使用的是replaceState() 没有返回
    // pushState 和 replaceState的区别
    // HTML5 history模式 和 hash 模式
  },
  mounted() {
    // console.log(Router)
    // console.log(Router.options)
    // console.log(Router.options.routes[0].children);
    this.routeNames = Router.options.routes[0].children;
    // console.log("------------------");
    // console.log(this.routeNames);
    // console.log(this.$route);
    // console.log(this.$route.matched)
  }
};
</script>
<style lang="scss" scoped>
.top_banner {
  height: 64px;
  line-height: 64px;
  background-color: black;
  // border: 2px solid #ccc;
  width: 100%;
  position: absolute;
  top: 0;
  // padding-left: 20px;
  // z-index: 1;
  // box-sizing: border-box;
  // box-shadow: 0px 2px 10px #eee;
  // -webkit-box-shadow: 0px 2px 10px #eee;
  // -moz-box-shadow: 0px 2px 10px #eee;
}
.main_wrapper {
  position: absolute;
  top: 64px;
  bottom: 0;
  width: 100%;
  z-index: 0;
}
.layout_wrapper {
  width: 100%;
  height: 100%;
  background-color: black;
  .box {
    float: left;
  }
  .left_nav {
    width: 15%;
    height: 100%;
    background: black;
    // border-right: 1px solid #f5f5f5;
    // -webkit-box-sizing: border-box;
    // -moz-box-sizing: border-box;
    // box-sizing: border-box;
    // box-shadow: 2px 0px 10px #eee;
    // -webkit-box-shadow: 2px 0px 10px #eee;
    // -moz-box-shadow: 2px 0px 10px #eee;
    // .logo{
    //   height: 70px;
    //   width: 100%;
    //   line-height: 70px;
    //   text-align: center;
    //   // border-bottom: 1px solid #eee;
    //   .icon-liebiao{
    //     color: rgb(102,102,102);
    //     font-size: 22px;
    //     cursor: pointer;
    //   }
    // }
  }
  .right_content {
    // width: calc(100% - 180px);
    width: 85%;
    height: 100%;
    padding: 20px 20px 25px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  // .box_logout{
  //   float: right;
  //   width: 200px;
  //   height: 64px;
  //   line-height: 64px;
  //   .iconfont{
  //     font-size: 24px;
  //     cursor: pointer;
  //   }
  // }
}
</style>