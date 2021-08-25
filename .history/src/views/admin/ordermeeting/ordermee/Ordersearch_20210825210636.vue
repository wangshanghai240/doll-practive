<template>
  <div class="ordersearch">
    <el-input
      class='ordsea'
      placeholder="请输入活动名称"
      prefix-icon="el-icon-search"
      v-model='search'
      clearable
    >
    </el-input>
    <div class="btn">
      <el-button type="primary" @click="searchinfo">搜索</el-button>
      <el-button type="warning" @click="orderlist">重置</el-button>
    </div>
  </div>
</template>

<script>
import { getordermeeting } from 'network/ordermeeting/ordermeeting'
export default {
    name:'Ordersearch',
    data(){
      return {
        search:''
      }
    },
    methods:{
      searchinfo(){
        // 发送网路请求获取数据
        getordermeeting(this.search).then(res =>{
          console.log(res)
        })
      }
    }
};
</script>

<style scoped>
 .ordersearch{
   width:100%;
 }
 .ordersearch .ordsea{
   display: inline-block;
   width:200px;
   margin:0 20px 20px 10px;
 }
 .ordersearch .btn{
   display: inline-block;
 }
</style>