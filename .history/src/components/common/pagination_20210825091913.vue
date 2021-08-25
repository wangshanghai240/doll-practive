<template>
  <div class="pagination">
    <el-pagination 
    background 
    layout="prev, pager, next" 
    :total="total"
    :page-sizes="pagesizes"
    :page-size="size"
    :page-count="orderlist.totalNumber"
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
            total:'',
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