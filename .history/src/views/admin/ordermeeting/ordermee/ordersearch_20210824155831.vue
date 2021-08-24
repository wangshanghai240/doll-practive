<template>
  <div class="ordersearch">
    <el-input
      class='ordsea'
      placeholder="请输入搜索内容"
      prefix-icon="el-icon-search"
    >
    </el-input>
    <div class="btn">
      <el-button type="primary">搜索</el-button>
      <el-button type="warning">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
    name:'Ordersearch'
};
</script>

<style>
 .ordersearch{
   width:50%;
 }
 .ordersearch .ordsea{
   display: inline-block;
   width:150px;
   margin:0 20px 20px 10px;
 }
 .ordersearch .btn{
   display: inline-block;
 }
</style>