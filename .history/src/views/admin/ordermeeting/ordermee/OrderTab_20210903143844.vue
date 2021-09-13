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
          <el-button size="mini" @click.native="handleEdit(scope.row)">修改</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- dialog对话框 -->
    <el-dialog title="数据更改" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="活动名称" label-width="120">
          <el-input
            class="name"
            autocomplete="off"
            v-model="row.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="起止时间">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="row.end"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="updatelist">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { updateOrder } from "network/ordermeeting/ordermeeting";
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
      dialogFormVisible: false,
      // 存储当前表格行的数据
      row: {},
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
    // 点击修改按钮
    handleEdit(row) {
      console.log(row);
      this.dialogFormVisible = !this.dialogFormVisible;
      this.row = row;
    },
    // 修改对话框确定按钮
     updatelist() {
       updateOrder(this.row).then((res)=>{
        this.$message.success(res.message)
      })
        this.dialogFormVisible = !this.dialogFormVisible;
    },
  },
};
</script>

<style>
</style>