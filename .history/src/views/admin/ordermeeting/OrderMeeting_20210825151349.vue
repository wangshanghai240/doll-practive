<template>
  <div class="ordmet">
      <ordersearch></ordersearch>
      <order-tab :tableDatas="orderlist"></order-tab>
      <pagination :orderlist='orderlist'></pagination>
  </div>
</template>

<script>
import { getAllOrderMeeting } from 'network/ordermeeting/ordermeeting'
import ordersearch from 'views/admin/ordermeeting/ordermee/Ordersearch.vue'
import OrderTab from './ordermee/OrderTab.vue'
import Pagination from 'components/common/Pagination.vue'
export default {
  components: { ordersearch,OrderTab, Pagination },
    name:'OrderMeeting',
    data(){
        return{
            orderlist:[]
        }
    },
    // 组件创建就获取订货数据
    created(){
        this.ordermeeting()
    },
    methods:{
        ordermeeting(){
            getAllOrderMeeting().then(res =>{
                console.log(res)
                this.orderlist = res.data.data
            })
        }
    }
}
</script>

<style>

</style>