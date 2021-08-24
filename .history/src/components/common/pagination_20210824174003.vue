<template>
  <div class="pagination">
    <el-pagination background layout="prev, pager, next" :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
    name:'Pagination',
    data(){
        return {
            total:''
        }
    }
};
</script>

<style>
</style>