<template>
  <div class="ordertab">
    <el-table
      :data="tableDatas"
      style="width: 100%"
      :stripe="true"
      height="520px"
    >
      <!-- 表头信息 -->
      <el-table-column prop="id" label="序号" width="60" type="index">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column
        prop="name"
        label="活动名称"
        width="120"
        :sortable="true"
      >
      </el-table-column>
      <el-table-column prop="start" label="开始时间" width="120">
      </el-table-column>
      <el-table-column prop="end" label="结束时间" width="120">
      </el-table-column>
      <el-table-column prop="createBy" label="创建人" width="90">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" :sortable="true">
      </el-table-column>
      <el-table-column align="right">
        <!-- 操作按钮 -->
        <!-- <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template> -->
        <template v-slot="">
          <el-button size="mini" @click="handleEdit">修改</el-button>

          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="数据更改" :visible="dialogTableVisible">
      <el-table :data="scope.row">
        <el-table-column
          property="name"
          label="活动名称"
          width="150"
        ></el-table-column>
        <el-table-column
          property="createTime"
          label="起止时间"
          width="200"
        ></el-table-column>
        <div class="tabledialog">
          <el-button size="mini" type="success">提交</el-button>
          <el-button size="mini" type="info">重置</el-button>
          <el-button size="mini" type="info" @click="dialogFormVisible = false"
            >取消</el-button
          >
        </div>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
// import {  getAllOrderMeeting } from 'network/ordermeeting/ordermeeting'
export default {
  name: "OrderTab",
  props: {
    tableDatas: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      tableData: [],
      search: "",
      dialogTableVisible: false,
    };
  },
  // 页面一创建调用该方法获取数据
  // created() {
  //   this.getorderlist();
  // },
  // beforeUpdate(){
  //   this.getsearch()
  // },
  methods: {
    handleEdit(row) {
      console.log(row);
      this.dialogTableVisible = !this.dialogTableVisible;
    },
  },
};
</script>

<style>
</style>