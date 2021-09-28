<template>
  <div class="menitem" :class="{ccc:true}">
    <el-submenu
      v-if="routepat.children && routepat.children.length > 0"
      :index="routepat.path"
    >
      <template slot="title">
        <i :class="routepat.meta.icon"></i>
        <span v-if='isco ? !isco : false'>{{ routepat.name }}</span>
      </template>
      <el-menu-item
        v-for="(item, index) in seroutepat"
        :key="index"
        :index="item.path"
      >
        <i :class="item.meta.icon"></i>
        <span v-if='isco ? !isco : false'>{{ item.name }}</span>
      </el-menu-item>
    </el-submenu>
    <!-- 只有一级菜单的 -->
    <el-menu-item
      v-else-if="routepat.path ? routepat.path : false"
      :index="routepat.path"
    >
      <i :class="routepat.meta.icon"></i>
      <span v-if='isco ? !isco : false' :class='{show:iscollapse}'>{{ routepat.name }}</span>
    </el-menu-item>
  </div>
</template>

<script>
import { mapState } from 'utils/map.js'
export default {
  name: "MenuItem",
  props: {
    routepat: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // iscollapse:false
    };
  },
  computed: {
    seroutepat() {
      return this.routepat.children;
    },
    ...mapState({isco:'iscollapse'})
  },
  watch:{
    iscollapse:{
      handler(nw,od){
        if(nw === od) return
        this.iscollapse = nw
        console.log(nw)
      }
    }
  }
};
</script>

<style>
.menitem i {
  /* margin:0 10px; */
}
.menitem .el-menu-item i {
  /* margin-right: 10px; */
}
</style>