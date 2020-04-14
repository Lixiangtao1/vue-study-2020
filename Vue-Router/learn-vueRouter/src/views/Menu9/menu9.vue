<template>
  <div class="container">
    <el-button type="primary" @click="AddGroup">Add Group</el-button>
    <div class="group" v-for="(a,index) in group" :key="a._id">
      <div class="row">
        <div style="float:left">Group&nbsp;&nbsp;</div>
        <div class="fr">
          <el-button @click="deleteItemGroup" type="danger" style="height:5px;line-height:2px;">删除</el-button>
        </div>
        <div class="fr" style="float:right">
          <div>Rule Type:
            <el-select clearable v-model="a.ruleType" placeholder="please select">
              <el-option value="1" label="haaha"></el-option>
              <el-option value="2" label="zhangsna"></el-option>
              <el-option value="3" label="lisi"></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <!-- targetSize -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      group:[
        initGroup()
      ]
    }
  },
  methods: {
    AddGroup() {

    },
    deleteItemGroup() {

    }
  },
};
function initGroup() {
  return {
    _id: Math.random() + '',
    ruleType: ''

  }
}
</script>
<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    /* background-color: burlywood; */
    .group{
      position: relative;
      width: 80%;
      height: 80%;
      border: 2px solid #ccc;
      margin: 20px;
    }
    .fr{
      float: left;

    }
  }
</style>