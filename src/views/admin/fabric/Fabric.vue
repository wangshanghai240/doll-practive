<template>
  <div class="fabric">
      <req-list></req-list>
      <shop-list></shop-list>
  </div>
</template>

<script>
import ShopList from './childComp/ShopList.vue'
import ReqList from './childComp/ReqList.vue'
export default {
  components: { ShopList, ReqList },
    name:'Fabric'
}
</script>

<style>

</style>