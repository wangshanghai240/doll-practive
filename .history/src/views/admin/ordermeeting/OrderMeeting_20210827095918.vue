<template>
  <div class="ordmet">
    <order-search :ordersearch="orderlist" ref="ordsea"></order-search>
    <order-tab :tableDatas="orderlist" ref='ordertab'></order-tab>
    <pagination :orderlist="orderlist"></pagination>
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
      orderlist: [],
    };
  },
  // 组件创建就获取订货数据
  created() {
    this.ordermeeting();
  },
  methods: {
    ordermeeting() {
      getAllOrderMeeting().then((res) => {
        console.log(res);
        this.orderlist = res.data.data;
      });
    },
  },
};
</script>

<style>
</style>