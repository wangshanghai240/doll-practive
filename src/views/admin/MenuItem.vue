<template>
<!-- 拥有二级菜单的 -->
  <div class="menitem" :class="{ccc:true}">
    <el-submenu
      v-if="routepat.children && routepat.children.length > 0"
      :index="routepat.path"
    >
      <template slot="title">
        <i :class="routepat.meta.icon"></i>
        <span v-show='!iscollapse'>{{ routepat.name }}</span>
      </template>
      <el-menu-item
        v-for="(item, index) in seroutepat"
        :key="index"
        :index="item.path"
      >
        <i :class="item.meta.icon"></i>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-submenu>
    <!-- 只有一级菜单的 -->
    <el-menu-item
      v-else-if="routepat.path ? routepat.path : false"
      :index="routepat.path"
    >
      <i :class="routepat.meta.icon"></i>
      <span v-show='!iscollapse' :class='{show:iscollapse}'>{{ routepat.name }}</span>
    </el-menu-item>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'utils/mapVuex.js'
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
    // 数组形式
    ...mapState(['iscollapse']),
    // 对象形式
    ...mapState({
      iscollapse:'iscollapse'
    }),
    seroutepat() {
          return this.routepat.children;
        }
  },
  watch:{
    iscollapse:{
      handler(nw,od){
        if(nw === od) return
        this.iscollapse = nw
        console.log(nw)
      }
    }
  },
  methods:{
    // 对象形式
    ...mapMutations({
      settoken:'setToken',
      deltoken:'delToken'
    }),
    // 数组形式
    ...mapMutations(['setToken','delToken']),
    // 在方法中使用vuex中的方法
    // clickhere(id){
      // 因为上面已经将vuex中的方法映射到methods中
      // 因此可以在开发者定义的方法中直接使用，其中的参数就是负载
      // 相当于this.$store.commit('setToken',id)
      // this.setToken(id)
    }
};
</script>

<style>
</style>