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
      <el-table-column>
        <template v-slot='' slot='header'>
          <el-button type="primary" round>
            新增
          </el-button>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <!-- 操作按钮 -->
        <!-- <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template> -->
        <template v-slot="scope">
          <el-button size="mini" @click.native="handleEdit(scope.row)"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.native="deleteorder(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- dialog对话框 -->
    <el-dialog title="数据更改" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="活动名称" label-width="120" :required="true">
          <el-input
            class="name"
            autocomplete="off"
            v-model="row.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="ID" label-width="120" :required="true">
          <el-input class="name" autocomplete="off" v-model="row.id"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click.native="updatelist">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  updateOrder,
  deletordermeeting,
} from "network/ordermeeting/ordermeeting";
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
      tabrecords: [],
      // color: "red",
    };
  },
  // directives:{
  //   test:{
  //     bind(el){
  //       console.log(el)
  //       console.log()
  //       el.style.color = 'red'
  //     },
  //     inserted(){},
  //     update(){},
  //     componentUpdated(){},
  //     unbind(){}
  //   }
  // },
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
    // 修改对话框取消按钮
    cancel(){
      this.$message.info('已取消修改')
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    // 修改对话框确定按钮
    updatelist() {
      //  发送请求
      updateOrder(this.row).then((res) => {
        this.$message.success(res.data.message);
      });
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    // 删除订单按钮
    deleteorder(row) {
      // 发送删除请求,先确认是否删除
      this.$confirm("确认删除?", "警告", {
        type: "warning",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          // 点击确认之后发送删除请求
          deletordermeeting(row.id).then((res) => {
            this.$message.success(res.data.message);
            // 发射事件刷新表格数据
            this.$emit("refresh");
          });
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
  },
};
</script>

<style>
.name{
  width:40%;
}
/* 对话框 */
.el-dialog{
  width:27%;
}
/* label */
.el-form-item__label{
  width:79px;
}
</style>