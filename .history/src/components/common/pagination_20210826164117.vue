<template>
  <div class="pagination">
    <div class="total ccc">共 {{orderlist.length}} 条</div>
    <div class="select ccc">
      <select name="" id="">
        <option value="10">10条/页</option>
        <option value="20">20条/页</option>
        <option value="30">30条/页</option>
      </select>
    </div>
    <el-pagination 
    background 
    @size-change="sizechange"
    @current-change="currchange"
    layout="prev, pager, next" 
    :total="orderlist.length"
    class="el-pa ccc"
    >
    </el-pagination>
    <div class="forward ccc">
      <span>前往</span>
      <el-input class="input"></el-input>
      <span>页</span>
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
  text-align: center;
  /* 弹性盒子 */
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-color:#a5a5a5;
}
.pagination .select option{
  padding:4px;
}
.pagination .select select{
  outline:none;
  width:70px;
  height:20px;
  margin:8px 3px;
  border-color:#707070;
}
/* 前往页 */
.pagination .forward{
  width:130px;
}
.pagination .forward span{
  /* display: block; */
  margin-right:10px;
}
.pagination .forward .input{
  display: inline-block;
  width:50px;
}
.pagination .forward .el-input__inner{
  height:28px;
}
</style>