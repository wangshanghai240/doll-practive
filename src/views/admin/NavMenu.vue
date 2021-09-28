<template>
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#1860e6"
      :router="true"
      :unique-opened="true"
      :collapse="iscollapse"
      :collapse-transition="false"
      :default-active="path"
    >
      <!-- <menu-item v-for="(item, index) in routepat" :key="index" :routepat="item"></menu-item> -->
      <slot></slot>
    </el-menu>
</template>

<script>
// import MenuItem from "./MenuItem.vue";
import { mapState } from 'utils/mapVuex.js'
export default {
  name: "Menu",
  components: {
  },
  data() {
    return {
      // 保存路由列表
      route: [],
      // 是否折叠面板
      // iscollapse:false
    };
  },
  created(){
    this.route = this.routepat
    console.log(this.route)
  },
  computed: {
    //   获取路由列表
    routepat() {
        return this.$router.options.routes[2].children
    },
    // 获取路径
    path(){
        return this.routepat.path
    },
    ...mapState(['iscollapse'])
  },
  methods:{
    
  }
}
</script>

<style>
</style>