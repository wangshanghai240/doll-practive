<template>
  <div class="ordmet">
      <ordersearch></ordersearch>
      <order-tab></order-tab>
  </div>
</template>

<script>
import { getOrderMeeting } from 'network/ordermeeting'
import ordersearch from 'views/admin/ordermeeting/ordermee/Ordersearch.vue'
  import OrderTab from './ordermee/OrderTab.vue'
export default {
  components: { ordersearch,OrderTab },
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