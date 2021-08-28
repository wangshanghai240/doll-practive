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
        limit:10
      },
      pagesizes:[5,10,20,30,40],
      pagesize:10
    };
  },
  methods: {
    // page-sizes改变时的事件处理程序
    sizechange(newlimit){
      // 将回调的每页条数传递给limit
      this.queryinfo.limit = newlimit
      // 发送网路请求
      getordermeeting(this.queryinfo).then(res =>{
        console.log(res)
      })
      
    },
    // 当前页码发生改变时的事件处理程序
    currtchange(page){
      // 将新页码传递给page
      this.queryinfo.page = page
      getordermeeting(this.queryinfo).then(res =>{
        console.log(res)
      })
    }
  },
};
</script>

<style scoped>
.pagination{
  margin:20px 0 10px 0;
}
</style>