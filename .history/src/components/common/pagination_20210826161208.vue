<template>
  <div class="pagination">
    <div class="total ccc">共 {{orderlist.length}} 条</div>
    <div class="select ccc">
      <select name="" id="">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
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
    class="el-pa ccc"
    >
    </el-pagination>
    <div class="forward ccc">
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

<style scoped>
.pagination{
  margin:20px auto;
}
.pagination .ccc{
  display: inline-block;
}
.pagination .total{
  margin-right:10px;
  color:#a5a5a5;
  font-size:14px;
}
.pagination .select{
  margin:0 6px;
}
.pagination .select select{
  outline:none;
  width:70px;
  height:30px;
  border:#a5a5a5;
}
.pagination .forward{
  width:80px;
}
.pagination .forward .el-input{
  display: inline-block;
  border:1px solid red;
}
</style>