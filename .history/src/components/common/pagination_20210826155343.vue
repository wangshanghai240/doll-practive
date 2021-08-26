<template>
  <div class="pagination">
    <div class="total">共{{orderlist[0].totalNumber}}条</div>
    <div class="select">
      <select name="" id="">
        <option value="">10</option>
        <option value="">20</option>
        <option value="">30</option>
      </select>
    </div>
    <el-pagination 
    background 
    @size-change="sizechange"
    @current-change="currchange"
    layout="prev, pager, next" 
    :total="orderlist[0].totalNumber"
    :page-sizes="[10,20,30]"
    :page-size="10"
    :current-page="currentpage"
    >
    </el-pagination>
    <div class="forward">
      <span>前往</span>
      <el-input></el-input>
    </div>
  </div>
</template>

<script>
// import { getordermeeting } from 'network/ordermeeting/ordermeeting'
export default {
    name:'Pagination',
    props:{
      orderlist:{
        type:Array,
        default(){
          []
        }
      }
    },
    data(){
        return {
            pagesizes:[10,20,30],
            currentpage:10
        }
    },
    methods:{
      // 发送网络请求，保存数据
      sizechange(){
        
      },
      currchange(){

      }
    }
};
</script>

<style>
.pagination{
  margin:20px auto;
}
.pagination .total{
  display: inline-block;
  margin-right:10px;
}
.pagination .select{
  display: inline-block;
}
</style>