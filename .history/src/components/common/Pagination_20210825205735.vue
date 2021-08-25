<template>
  <div class="pagination">
    <el-pagination 
    background 
    @size-change="sizechange"
    @current-change="currchange"
    layout="prev, pager, next" 
    :total="orderlist.totalNumber"
    :page-sizes="pagesizes"
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
            total:12,
            pagesizes:[10,20,30]
        }
    },
    methods:{
      getordertotal(){
        this.total = this.orderlist.totalNumber
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