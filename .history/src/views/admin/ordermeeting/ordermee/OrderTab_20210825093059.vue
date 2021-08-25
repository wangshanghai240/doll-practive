<template>
  <div class="ordertab">
    <el-table
      :data="tableDatas"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      :stripe="true"
      height=560px
    >
    <!-- 表头信息 -->
      <el-table-column prop="id" label="序号" width="180"> </el-table-column>
      <el-table-column prop="name" label="活动名称" width="120">
      </el-table-column>
      <el-table-column prop="start" label="开始时间" width="120">
      </el-table-column>
      <el-table-column prop="end" label="结束时间" width="120">
      </el-table-column>
      <el-table-column prop="createBy" label="创建人" width='90'> </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column align="right">
          <!-- 操作按钮 -->
        <!-- <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template> -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "OrderTab",
  props:{
    tableDatas:{
      type:Array,
      default(){
        []
      }
    }
  },
  data() {
    return {
      tableData: [],
    };
  },
  // 页面一创建调用该方法获取数据
  created() {
    
  },
  methods: {
    
  },
};
</script>

<style>
</style>