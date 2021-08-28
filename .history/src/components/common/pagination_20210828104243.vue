<template>
  <div class="pagination">
    <!-- <div class="total ccc">共 {{ orderlist.length }} 条</div>
    <div class="select ccc">
      <select name="" id="">
        <option value="10">10条/页</option>
        <option value="20">20条/页</option>
        <option value="30">30条/页</option>
      </select>
    </div> -->
    <el-pagination
      @size-change="sizechange"
      @current-change="currtchange"
      layout="total, sizes, prev, pager, next, jumper"
      current-page="queryinfo.page"
      :page-sizes="pagesizes"
      :page-size="queryinfo.limit" 
      :total="orderlist.length"
      class="el-pa ccc"
      :background="true"
    >
    </el-pagination>
    <!-- <div class="forward ccc">
      <span>前往</span>
      <el-input class="input"></el-input>
      <span>页</span>
    </div> -->
  </div>
</template>

<script>
import { getordermeeting } from 'network/ordermeeting/ordermeeting'
export default {
  name: "Pagination",
  // 接收来自父组件的值
  props: {
    orderlist: {
      type: Array,
      default() {
        []
      },
    },
  },
  data() {
    return {
      queryinfo:{
        // 页数
        page:1,
        // 每页多少条数据
        limit:10,
        
      },
      pagesizes:[5,10,20,30,40],
      pagesize:10
    };
  },
  methods: {
    // 发送网络请求，保存数据
    sizechange(){
      getordermeeting(this.queryinfo.page,this.queryinfo.limit).then(res =>{
        console.log(res)
      })
      
    },
    currtchange(){}
  },
};
</script>

<style scoped>
.pagination{
  margin:20px 0 10px 0;
}
</style>