<template>
  <div class="ordersearch">
    <el-input
      class='ordsea'
      placeholder="请输入搜索内容"
      prefix-icon="el-icon-search"
    >
    </el-input>
    <el-button type="primary">搜索</el-button>
    <el-button type="warning">重置</el-button>
  </div>
</template>

<script>
export default {
    name:'Ordersearch'
};
</script>

<style>
 .ordersearch{
   width:100px;
 }
 .ordsea{}
</style>