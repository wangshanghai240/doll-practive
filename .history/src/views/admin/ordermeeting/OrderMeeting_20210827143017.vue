<template>
  <div class="ordmet">
    <order-search :orderDatas="orderlist"></order-search>
    <order-tab :orderDatas="orderlist"></order-tab>
    <!-- <pagination :orderlist="orderlist"></pagination> -->
  </div>
</template>

<script>
import { getAllOrderMeeting } from "network/ordermeeting/ordermeeting";

import OrderSearch from "views/admin/ordermeeting/ordermee/OrderSearch.vue";
import OrderTab from "./ordermee/OrderTab.vue";
// import Pagination from "components/common/Pagination.vue";

export default {
  components: { OrderSearch, OrderTab },
  name: "OrderMeeting",
  data() {
    return {
      orderlist: [],
    };
  },
  // 组件挂载之后就获取订货数据
  created() {
    this.ordermeeting()
  },
  methods: {
    ordermeeting() {
        // 发送网络请求
      getAllOrderMeeting().then((res) => {
        console.log(res);
        // 将数据保存在orderlist
        this.orderlist = res.data.data;
      }).catch(err =>{
          this.$message({
              type:'danger',
              message:err
          })
      });
    },
  },
};
</script>

<style>
</style>