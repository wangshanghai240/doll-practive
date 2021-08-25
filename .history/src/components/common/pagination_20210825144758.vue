<template>
  <div class="pagination">
    <el-pagination 
    background 
    layout="prev, pager, next" 
    :total="orderlist.totalNumber"
    :page-sizes="pagesizes"
    :current-page="currentPage"
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
            total:0,
            pagesizes:[10,20,30]
        }
    },
    methods:{
      getordertotal(){
        this.total = this.orderlist.totalNumber
      }
    }
};
</script>

<style>
</style>