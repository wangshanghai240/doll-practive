<template>
  <div class="pagination">
    <el-pagination
      @size-change="sizechange"
      @current-change="currtchange"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="queryinfo.page"
      :page-sizes="pagesizes"
      :page-size="queryinfo.limit" 
      :total="orderlist.length"
      class="el-pa ccc"
      :background="true"
    >
    </el-pagination>
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
      // 需要作为请求的参数
      queryinfo:{
        query:{
          end:'',
          start:'',
          name:''
        },
        // 页数
        page:1,
        // 每页多少条数据
        limit:10
      },
      pagesizes:[10,20,30,40],
      records:[]
    };
  },
  methods: {
    // page-sizes改变时的事件处理程序
    sizechange(newlimit){
      // 将回调的每页条数传递给limit
      this.queryinfo.limit = newlimit
      // 发送网路请求,获取分页数据
      getordermeeting(this.queryinfo,this.queryinfo.query).then(res =>{
        console.log(res)
        this.records = res.data.data.records
      })
      this.$emit('records',this.records)
    },
    // 当前页码发生改变时的事件处理程序
    currtchange(page){
      // 将新页码传递给page
      this.queryinfo.page = page
      getordermeeting(this.queryinfo,this.queryinfo.query).then(res =>{
        this.records = res.data.data.records
      })
      this.$emit('records',this.records)
    },
    getpagelimit(){
      this.$emit('getpagelimit',this.queryinfo)
    }
  },
};
</script>

<style scoped>
.pagination{
  margin:20px 0 10px 0;
}
</style>