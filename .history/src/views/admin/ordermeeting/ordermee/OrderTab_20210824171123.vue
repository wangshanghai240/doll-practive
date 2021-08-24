<template>
  <div class="ordertab">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="index" label="序号" width="80"> </el-table-column>
      <el-table-column prop="name" label="活动名称" width="80"> </el-table-column>
      <el-table-column prop="start" label="开始时间"> </el-table-column>
      <el-table-column prop="end" label="结束时间"> </el-table-column>
      <el-table-column prop="user" label="创建人"> </el-table-column>
      <el-table-column prop="date" label="创建时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>