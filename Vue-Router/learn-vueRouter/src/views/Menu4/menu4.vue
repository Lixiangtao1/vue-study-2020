<template>
  <div>
    <el-table
      :header-cell-style="{background:'#eee'}"
      :data="Data"
      style="width: 100%">
      <el-table-column
        prop="reportType"
        label="报表名称"
        :formatter="formatName"
      >
      </el-table-column>
      <el-table-column
        prop="calculateStart"
        label="计算开始时间"
        :formatter="formatTime">
      </el-table-column>
      <el-table-column
        prop="calculateEnd"
        label="计算结束时间"
        :formatter="formatTime">
      </el-table-column>      
      <el-table-column
        prop="conditions"
        label="筛选条件">
          <template slot-scope="scope">
            <el-button type="text" @click="dialog(scope.row)">筛选条件</el-button>
          </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="计算状态"
        :formatter="formatStatus">
      </el-table-column>
      <el-table-column
        width="150">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="计算" placement="top-start">
            <i class="iconfont icon-kaishi1" @click="calculate(scope.row)"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="下载" placement="top-start">
            <el-button @click="exportData(scope.row)" :disabled="(scope.row.status !== 1)" icon="el-icon-download" class="el-button--set"></el-button>
          </el-tooltip>
          
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹框 -->
    <el-dialog
      title="筛选条件"
      :visible.sync="centerDialogVisible"
      width="20%"
      center
      scope="scope">
      <el-date-picker
          v-model="search.startDate"
          type="date"
          placeholder="开始日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          style="width: 200px">
      </el-date-picker>
      <br><br>
      <el-date-picker
        v-model="search.endDate"
        type="date"
        placeholder="结束日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        style="width: 200px">
      </el-date-picker>
      <br><br>
      <el-select
        v-show="show.showStatus"
        clearable
        placeholder="请选择"
        style="width: 100%;"
        v-model="search.status">
        <el-option label="启用" value="Y"></el-option>
        <el-option label="停用" value="N"></el-option>
      </el-select>
      <el-select
        v-show="show.showStatus2"
        clearable
        placeholder="请选择"
        style="width: 100%;"
        v-model="search.status">
        <el-option label="启用" value="1"></el-option>
        <el-option label="停用" value="0"></el-option>
      </el-select>
      <el-input v-show="show.showName" v-model="search.name" placeholder="请输入商品名称"></el-input>
      <el-input v-show="show.showLevel" v-model="search.level" placeholder="请输入会员等级"></el-input>
      <el-input v-show="show.showMobile" v-model="search.mobile" placeholder="请输入手机号"></el-input>
      <el-input v-show="show.showProvince" v-model="search.province" placeholder="请输入省份"></el-input>
      <el-input v-show="show.showType" v-model="search.type" placeholder="请输入积分类型"></el-input>
      <el-input v-show="show.showChannel" v-model="search.channel" placeholder="请输入渠道"></el-input>
      <el-input v-show="show.showChannel2" v-model="search.channel" placeholder="请输入渠道"></el-input>
      <br><br>
      <el-input v-show="show.showChannelSec" v-model="search.channelSec" placeholder="请输入二级渠道"></el-input>
      <el-input v-show="show.showReson" v-model="search.exceptionReson" placeholder="请输入异常原因"></el-input>
      <el-input v-show="show.showCity" v-model="search.city" placeholder="请输入城市"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleOk">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分页 -->
    <div class="change_page">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="pageParams.page"
        :page-size="pageParams.size"
        :page-sizes="[7]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="20">
      </el-pagination>
    </div>
  </div>
</template>
<script>
// import { ReportList, ReportCalculate } from '../../api/downloadResult_api'
import moment from 'moment'
export default {
  data() {
    return {
      Data:[],
      tableData: [
        {reportType:'WeChatFollowerBindingReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:1,fileUrl: ''},
        {reportType:'CouponDistributionReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'EvenReservationReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:2,fileUrl: ''},
        {reportType:'MemberRegistrationReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:1,fileUrl: ''},
        {reportType:'MemberTierReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'MemberLifecycleReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'PointsCollectionRedemptionReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'PointsRedemptionRateReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:1,fileUrl: ''},
        {reportType:'PointsDistributionReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'ScanUsersReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'ScanByChannelReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'ScanByProductReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:2,fileUrl: ''},
        {reportType:'ScanByAreaReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:1,fileUrl: ''},
        {reportType:'ExceptionReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:1,fileUrl: ''},
        {reportType:'ProductSalesReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'WeShopPerformanceByMemberTierReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:0,fileUrl: ''},
        {reportType:'WeShopPerformanceByMemberTypeReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:-1,fileUrl: ''},
        {reportType:'MPTrafficeReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:1,fileUrl: ''},
        {reportType:'LuckDrawReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:2,fileUrl: ''},
        {reportType:'MGMReport',calculateStart:'2020-04-01',calculateEnd:'2020-04-10',status:1,fileUrl: ''},],
      search: {
        startDate: '',
        endDate: '',
        status: '',
        city: '',
        name: '',
        mobile: '',
        type: '',
        exceptionReson: '',
        channel: '',
        province: '',
        level: '',
        channelSec: ''
      },
      pageParams:{
        page: 1,
        size: 7,
      },
      totalNum: 20,
      centerDialogVisible: false,
      show:{
        showStatus: false,
        showStatus2: false,
        showCity: false,
        showType: false,
        showChannel: false,
        showChannel2: false,
        showReson: false,
        showName: false,
        showProvince: false,
        showMobile: false,
        showLevel: false,
        showChannelSec: false
      }
    }
  },
  created() {
    this.getData(),
    console.log(this.$route)
  },
  methods: {
    getData () {
      this.Data = this.tableData.slice(0,7);
    },
    // 下载
    exportData (row) {
      // console.log(row.fileUrl)
      // if (row.fileUrl !== '' && row.fileUrl !== null) 
      // return  window.open('http://52.83.192.181/' + row.fileUrl);
      return  window.open('https://www.baidu.com');

    },

    //生成 
    calculate (row) {
      this.handleOk()
      let conditions = {
        reportType: row.reportType,
        ...this.search
      }
      console.log(conditions);
      let params = JSON.stringify(conditions);
      let data = {
        userName: window.localStorage.userName,
        conditions: params
      }
      // ReportCalculate(data).then(res => {
      //   // 清空弹框
      //   // for(let item in this.search){
      //   //   this.search[item] = '';
      //   // }
      //   this.pageParams.page = this.pageParams.page -1 || 0;
      //   this.getData(this.pageParams)
      // })

    },
    // 打开弹框
    dialog (row) {
      this.centerDialogVisible = true;

      if (row.reportType == 'ScanByProductReport' || row.reportType == 'ProductSalesReport') {
        this.show.showName = true;
      }else {
        this.show.showName = false;
      }
      if (row.reportType == 'CouponDistributionReport') {
        this.show.showStatus = true;
      }else {
        this.show.showStatus = false;
      }
      if (row.reportType == 'EvenReservationReport') {
        this.show.showStatus2 = true;
        this.show.showCity = true;
      }else {
        this.show.showStatus2 = false;
        this.show.showCity = false;
      }
      if (row.reportType == 'MemberRegistrationReport') {
        this.show.showChannel = true;
        this.show.showChannelSec = true;
      }else {
        this.show.showChannel = false;
        this.show.showChannelSec = false;
      }
      if (row.reportType == 'PointsCollectionRedemptionReport') {
        this.show.showType = true;
      }else {
        this.show.showType = false;
      }
      if (row.reportType == 'ScanByAreaReport') {
        this.show.showProvince = true;
      }else {
        this.show.showProvince = false;
      }
      if (row.reportType == 'ExceptionReport') {
        this.show.showReson = true;
        this.show.showMobile = true
      }else {
        this.show.showReson = false;
        this.show.showMobile = false
      }
      if (row.reportType == 'PointsRedemptionRateReport') {
        this.show.showLevel = true;
      }else {
        this.show.showLevel = false;
      }
      if (row.reportType == 'ScanByChannelReport') {
        this.show.showChannel2 = true;
      }else {
        this.show.showChannel2 = false;
      }

      // this.getData()
      console.log(row)
      if (row.conditions) {
        this.search = JSON.parse(row.conditions)
      }
     
    },
    // 取消
    handleClose() {
      this.centerDialogVisible = false;
      // 清空弹框
      for(let item in this.search){
        this.search[item] = ''
      }

    },
    // 确认
    handleOk (){
      this.centerDialogVisible = false
    },
    // 格式化时间
    formatTime(row, cell, cellVal) {
      if (cellVal !== '' && cellVal !== null) 
      return moment(cellVal).format('YYYY-MM-DD HH:mm:ss');
    },
    // 格式化状态
    formatStatus(row, cell, cellValue) {
      let maps = new Map();
      maps.set(-1,'初始状态');
      maps.set(0, '生成中');
      maps.set(1, '成功');
      maps.set(2, '失败');
      return maps.get(cellValue) ? maps.get(cellValue) : '--';
    },
    // 分页
    handleCurrentChange(page){
      console.log(page)
      if (page == 1) {
        this.Data = this.tableData.slice(0,7);
      }else
      if (page == 2) {
        this.Data = this.tableData.slice(7,14);
      } else
      if (page == 3) {
        this.Data = this.tableData.slice(14,20);
      }
    },
    // 报表名称
    formatName (row, cell, cellVal) {
      if(cellVal == 'WeChatFollowerBindingReport'){
          return "公众号粉丝绑定统计"
      }else if (cellVal == 'CouponDistributionReport') {
          return "小程序优惠券统计"
      }else if (cellVal == 'EvenReservationReport') {
          return "活动预约券统计"
      }else if (cellVal == 'MemberRegistrationReport') {
          return "入会渠道分析"
      }else if (cellVal == 'MemberTierReport') {
          return "会员总量分析"
      }else if (cellVal == 'MemberLifecycleReport') {
          return "会员活跃度分析"
      }else if (cellVal == 'PointsCollectionRedemptionReport') {
          return "积分获取&兑换概况"
      }else if (cellVal == 'PointsRedemptionRateReport') {
          return "积分兑换率统计"
      }else if (cellVal == 'PointsDistributionReport') {
          return "积分余额分布报表"
      }else if (cellVal == 'ScanUsersReport') {
          return "扫码用户分析"
      }else if (cellVal == 'ScanByChannelReport') {
          return "扫码情况分析_By渠道"
      }else if (cellVal == 'ScanByProductReport') {
          return "扫码情况分析_By商品"
      }else if (cellVal == 'ScanByAreaReport') {
          return "扫码情况分析_By地域"
      }else if (cellVal == 'ExceptionReport') {
          return "异常报表"
      }else if (cellVal == 'ProductSalesReport') {
          return "商品销售分析"
      }else if (cellVal == 'WeShopPerformanceByMemberTierReport') {
          return "商城业绩表现_By等级"
      }else if (cellVal == 'WeShopPerformanceByMemberTypeReport') {
          return "商城业绩表现_By类型"
      }else if (cellVal == 'MPTrafficeReport') {
          return "小程序流量分析"
      }else if (cellVal == 'LuckDrawReport') {
          return "抽奖报表"
      }else if (cellVal == 'MGMReport') {
          return "一起赢好礼"
      }
    },

  },
  
}

</script>

<style lang="scss" scoped>

</style>