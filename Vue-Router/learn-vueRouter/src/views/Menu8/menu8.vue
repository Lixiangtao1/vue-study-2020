<template>
  <div class="container">
    <el-table :data="tableData" border>
      <el-table-column fixed prop="code" label="会员卡号" width="130"></el-table-column>
      <el-table-column prop="nickname" label="姓名" width="130"></el-table-column>
      <el-table-column prop="birthday" label="生日" width="130"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="140"></el-table-column>
      <el-table-column prop="superId" label="可用积分" width="130"></el-table-column>
      <el-table-column prop="summary" label="过期积分" width="130"></el-table-column>
      <el-table-column prop="status" label="是否有效" width="130"></el-table-column>
      <el-table-column fixed="right" label="操作" >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalNums"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { GetMember } from "./../Menu5_api/menu5Api.js";
export default {
  data() {
    return {
      tableData: [],
      totalNums: 0,
      pageParams: {
        page: 0,
        size: 10,
        expression: "zone eq Ryg8Y8ioyDBRDEkVo9NcTM",
        sort: "regTime, desc"
      }
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let params = this.pageParams;
      GetMember(params).then(res => {
        this.tableData = res.data.content;
        // console.log(res.data.content)
        this.tableData.forEach( item => {
          if (item.personalStatus) {
            this.status == '启用'
          }else {
            this.status == '停用'
          }
        })
        this.totalNums = res.data.totalElements;
        this.pageParams.page = res.data.number + 1;
      });
    },

    // 分页
    handleSizeChange(size) {
      // console.log(size)
      this.pageParams.size = size;
      this.pageParams.page = 0;
      this.getData(this.pageParams)
    },
    handleCurrentChange(page) {
      // console.log(page)
      this.pageParams.page = page - 1 || 0;
      this.getData(this.pageParams)
    }
  }
};
</script>
<style scoped>
</style>