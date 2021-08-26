<template>
  <div class="pagination">
    <el-pagination 
    background 
    @size-change="sizechange"
    @current-change="currchange"
    layout="prev, pager, next" 
    :total="item.totalNumber"
    :page-sizes="pagesizes"
    v-for="(item,index) in orderlist"
    :key="index"
    >
    </el-pagination>
  </div>
</template>

<script>
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
            orderlists:[],
            pagesizes:[10,20,30]
        }
    },
    methods:{
      // 发送网络请求，保存数据
      getordertotal(){
        this.total = this.orderlist
      },
      sizechange(){

      },
      currchange(){

      }
    }
};
</script>

<style>
</style>