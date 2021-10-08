<template>
  <div class="ordmet">
    <order-search
      ref="ordsea"
      @searchdata="searchdata"
      @resetlist="resetlist"
      :queryinfos="queryinfo"
    ></order-search>
    <order-tab
      :tableDatas="orderlist"
      ref="ordertab"
      @refresh="refreshtable"
    ></order-tab>
    <pagination
      :orderlist="paginationlength"
      ref="pagination"
      @records="records"
      @getpagelimit="getpagelimit"
    ></pagination>
  </div>
</template>

<script>
import {
  getordermeeting,
  getAllOrderMeeting,
} from "network/ordermeeting/ordermeeting";
import { queryinfo } from "mixins/queryinfo";

import OrderSearch from "views/admin/ordermeeting/ordermee/OrderSearch.vue";
import OrderTab from "./ordermee/OrderTab.vue";
import Pagination from "components/common/Pagination.vue";

export default {
  components: { OrderSearch, OrderTab, Pagination },
  mixins: [queryinfo],
  name: "OrderMeeting",
  data() {
    return {
      // 存储订货列表
      orderlist: [],
      // 存储模糊查询结果
      list: [],
      // 存储从ordersearch组件传过来的搜索值
      search: "",
      // 请求参数字段
      // queryinfo:{},
      // 存储所有订货会数据的长度
      paginationlength: 0,
    };
  },
  // 组件挂载之后就获取订货数据
  mounted() {
    this.ordermeeting();
  },
  methods: {
    async ordermeeting() {
      // 发送网络请求获取所有订货list
      getAllOrderMeeting()
        .then((res) => {
          console.log(res);
          // 将数据长度保存在paginationlength
          this.paginationlength = res.data.data.length;
        })
        .catch((err) => {
          this.$message({
            type: "danger",
            message: err,
          });
        });
      // 对订货列表查询
      await getordermeeting(this.queryinfo, this.queryinfo.query).then(
        (res) => {
          this.orderlist = res.data.data.records;
        },
        (err) => {
          this.$message.warning(err.data.message);
        }
      );
    },
    // 模糊查询功能
    searchdata(search) {
      console.log(this.orderlist)
      // this.orderlist.map((item)=>{
      //   if(item.name.indexOf(search) != -1){
      //     this.orderlist = [item]
      //   }
      // })
      // 方式一：
      let neworderlist = this.orderlist.map((item) => {
        // 将搜索匹配到的所有结果
        if (item.name.indexOf(search) > -1) {
          // push到list中
          this.list.push(item);
        }
        // this.orderlist = this.list;
        
      });
      this.orderlist = neworderlist
      this.list = []
      console.log(this.orderlist);
      if (this.orderlist.length !== 0) {
        this.$message.success("查询成功");
      } else {
        this.$message.warning("数据不存在，请重试");
      }

      // this.search = ''
      // 方式二
      // let length = this.orderlist.length;
      // 遍历orderlist
      // for (let i = 0; i < length; i++) {
      //   // 查找search和数组orderlist中name相同
      //   if (this.orderlist[i].name === search) {
      //     // this.orderlist = []
      //     // 将查找到的数据重新赋值给orderlist
      //     this.orderlist = [this.orderlist[i]];
      //     this.$message({
      //       type: "success",
      //       message: "查询成功",
      //     });
      //   }
      // }
    },
    // 点击重置按钮获取所有数据
    resetlist(resetlist) {
      this.orderlist = [];
      this.orderlist = resetlist;
      console.log(this.orderlist)
    },
    // ccc() {
    //   this.
    // },
    records(records) {
      this.orderlist = records;
    },
    // 传递分页中的请求参数queryinfo
    getpagelimit(queryinfo) {
      this.queryinfo = queryinfo;
    },
    // 删除表格信息刷新表格
    async refreshtable() {
      await getordermeeting(this.queryinfo, this.queryinfo.queryinfo).then(
        (res) => {
          this.orderlist = res.data.data.records;
          // 删除数据之后order总数发生变化
          this.ordermeeting();
        }
      );
    },
  },
};
</script>

<style>
</style>