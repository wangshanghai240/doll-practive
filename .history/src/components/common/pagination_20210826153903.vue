<template>
  <div class="pagination">
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
</style>