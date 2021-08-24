<template>
  <div class="ordmet">
      <ordersearch></ordersearch>
  </div>
</template>

<script>
import { getOrderMeeting } from 'network/ordermeeting'
import ordersearch from 'views/admin/ordermeeting/ordermee/Ordersearch.vue'
export default {
  components: { ordersearch },
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