<template>
  <div class="sidebaritem">
      <el-submenu 
      v-for="item in route" 
      :key="item.path"
      v-if='item.meta.hidden && item.chidlren '
      >
          <template>
              <img src="" alt="">
              <span>{{ item.name }}</span>
          </template>
      </el-submenu>
  </div>
</template>

<script>
export default {
    name:'SidebarItem',
    props:{
        route:{
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