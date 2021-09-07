<template>
  <div class="menuitem">
      <el-menu-item v-for="item in menuitemroute" :key="item.path" :index='item.path'>
          <span>{{ item.name }}</span>
      </el-menu-item>
  </div>
</template>

<script>
export default {
    name:'MenuItem',
    props:{
        menuitemroute:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>

</style>