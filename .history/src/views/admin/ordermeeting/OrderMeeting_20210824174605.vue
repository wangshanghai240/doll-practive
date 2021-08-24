<template>
  <div class="ordmet">
      <ordersearch></ordersearch>
      <order-tab></order-tab>
      <pagination></pagination>
  </div>
</template>

<script>
import { getOrderMeeting } from 'network/ordermeeting/ordermeeting'
import ordersearch from 'views/admin/ordermeeting/ordermee/Ordersearch.vue'
import OrderTab from './ordermee/OrderTab.vue'
import Pagination from 'components/common/Pagination.vue'
export default {
  components: { ordersearch,OrderTab, Pagination },
    name:'OrderMeeting',
    data(){
        return{

        }
    },
    created(){
        this.ordermeeting()
    },
    methods:{
        ordermeeting(){
            getOrderMeeting().then(res =>{
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>