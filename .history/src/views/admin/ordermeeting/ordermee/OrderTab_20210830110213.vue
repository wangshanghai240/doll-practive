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
        <template v-slot="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog>
      <el-form
        :model="editForm"
        :rules="editFormRules"
        ref="editFormRef"
        label-width="70px"
      >
        <el-form-item label="活动名称">
          <el-input required></el-input>
        </el-form-item>
        <el-form-item label="起止时间">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo">确 定</el-button>
      </span>
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
      iscenterDialogVisible: false,
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
      this.iscenterDialogVisible = !this.iscenterDialogVisible
    },
  },
};
</script>

<style>
</style>