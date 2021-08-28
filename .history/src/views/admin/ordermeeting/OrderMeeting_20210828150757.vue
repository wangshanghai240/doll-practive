<template>
  <div class="ordmet">
    <order-search ref="ordsea" @searchdata='searchdata'></order-search>
    <order-tab :tableDatas="orderlist" ref="ordertab"></order-tab>
    <pagination :orderlist='orderlist' ref='pagination'></pagination>
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
      search:''
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
    searchdata(search){
      let length = this.orderlist.length 
      for(let i = 0;i < length; i++){
        if(this.orderlist[i].name === search){
          // this.orderlist = []
          this.orderlist = this.orderlist[i]
        }
      }
      console.log(search)
      // this.refs.ordertab.search = search
    }
  },
};
</script>

<style>
</style>