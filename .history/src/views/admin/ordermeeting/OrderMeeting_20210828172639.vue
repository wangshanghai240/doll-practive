<template>
  <div class="ordmet">
    <order-search
      ref="ordsea"
      @searchdata="searchdata"
      @resetlist="resetlist"
    ></order-search>
    <order-tab :tableDatas="orderlist" ref="ordertab"></order-tab>
    <pagination :orderlist="orderlist" ref="pagination"></pagination>
  </div>
</template>

<script>
import { getAllOrderMeeting } from "network/ordermeeting/ordermeeting";

import OrderSearch from "views/admin/ordermeeting/ordermee/OrderSearch.vue";
import OrderTab from "./ordermee/OrderTab.vue";
import Pagination from "components/common/Pagination.vue";

export default {
  components: { OrderSearch, OrderTab, Pagination },
  name: "OrderMeeting",
  data() {
    return {
      // 存储订货列表
      orderlist: [],
      // 存储从ordersearch组件传过来的搜索值
      search: "",
    };
  },
  // 组件挂载之后就获取订货数据
  created() {
    this.ordermeeting();
  },
  methods: {
    ordermeeting() {
      // 发送网络请求
      getAllOrderMeeting()
        .then((res) => {
          console.log(res);
          // 将数据保存在orderlist
          this.orderlist = res.data.data;
        })
        .catch((err) => {
          this.$message({
            type: "danger",
            message: err,
          });
        });
    },
    searchdata(search) {
      // 方式一：
      this.orderlist = this.orderlist.filter((item) => item.name.includes(search) !== -1)
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
      this.orderlist = resetlist;
    },
  },
};
</script>

<style>
</style>