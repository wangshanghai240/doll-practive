/* eslint-disable vue/no-parsing-error */
<template>
  <div class="admin">
    <el-container>
      <!-- 头部 -->
      <el-header class="header">
        <!-- logo组件 -->
        <logo></logo>
        <!-- <bread-crumb></bread-crumb> -->
        <logout></logout>
      </el-header>
      <!-- 面包屑 -->
      <bread-crumb class="breadcrumb"></bread-crumb>
      <!-- 布局容器 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="iscollapse ? '64px' : '200px'">
          <!-- 折叠按钮 -->
          <div class="toggle" @click="togglecollapse">
            <span>|||</span>
          </div>
          <!-- 导航菜单 -->
          <el-menu
            class="el-menu-vertical-demo"
            active-text-color="#1860e6"
            :router="true"
            :unique-opened="true"
            :collapse="iscollapse"
            :collapse-transition="false"
          >
          <!-- 一级菜单 -->
          <el-submenu v-for="item in router" :key="item.path">
            <template>
              <img src="" alt="">
              <span>{{item.name}}</span>
            </template>
            <el-menu-item :index="item.path">
              <span>{{item.children.name}}</span>
            </el-menu-item>
          </el-submenu>
            <!-- <el-menu-item index="/admin/dashboard">
              <img src="~assets/image/navmenu/home-ff.svg" alt="" />
              <span>首页</span>
            </el-menu-item>-->
            
            <!-- <el-submenu index="/admin/dashboard">
              <template slot="title">
                <img src="~assets/image/navmenu/mianliao.svg" alt="" />
                <span>面料</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/admin/fabric/reqlist">
                  <img src="~assets/image/navmenu/xuqiuqingdan.svg" alt="" />
                  <span>需求清单</span>
                </el-menu-item>
                <el-menu-item index="/admin/fabric/shoplist">
                  <img src="~assets/image/navmenu/caigouliebiao.svg" alt="" />
                  <span>采购列表</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu> -->
            <!-- 订货会 -->
            <!-- <el-menu-item index="/admin/ordermeeting">
              <img src="~assets/image/navmenu/dinghuohui.svg" alt="" />
              <span slot="title">订货会</span>
            </el-menu-item> -->
            <!-- 商品列表 -->
            <!-- <el-menu-item index="/admin/ordershop">
              <img src="~assets/image/navmenu/shangpinliebiao.svg" alt="" />
              <span slot="title">商品列表</span>
            </el-menu-item> -->
            <!-- 用户列表 -->
            <!-- <el-menu-item index="/admin/user">
              <img src="~assets/image/navmenu/xingzhuang1.svg" alt="" />
              <span slot="title">用户列表</span>
            </el-menu-item> -->
            <!-- 日志列表 -->
            <!-- <el-menu-item index="/admin/syslog">
              <img src="~assets/image/navmenu/rizhiliebiao.svg" alt="" />
              <span slot="title">日志列表</span>
            </el-menu-item>  -->
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 渲染路由匹配到的组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Logo from "components/content/Logo.vue";
import BreadCrumb from "components/content/BreadCrumb.vue";
import Logout from "components/content/Logout.vue";

import { getuserinfo } from 'network/user/user'
export default {
  components: {
    Logo,
    BreadCrumb,
    Logout,
  },
  name: "Admin",
  data() {
    return {
      iscollapse: false,
      currentindex: 0,
    };
  },
  created(){
    this.getuserinfo()
  },
  computed: {
    router(){
      return this.$route.matched
    }
  },
  methods: {
    togglecollapse() {
      this.iscollapse = !this.iscollapse;
    },
    getuserinfo(){
      getuserinfo().then(res =>{
        console.log(res)
      })
    }
  },
};
</script>

<style>
.el-menu-vertical-demo {
  background: #fff;
  color: rgb(0, 0, 0);
  border: none;
}
.el-menu-vertical-demo img {
  vertical-align: center;
  width: 20px;
  margin-right: 12px;
}
.admin .header {
  position: relative;
  margin: 0 0 4px 0;
  box-shadow: 0 2px 2px #e0e0e0;
}
.breadcrumb {
  padding: 8px 0;
  margin: 2px 20px;
}
.toggle {
  height: 22px;
  text-align: center;
  background: #f0f0f0;
  cursor: pointer;
}
.toggle span {
  color: #c2c2c2;
  line-height: 22px;
}
.el-menu-item img {
  width: 20px;
}
.isactive {
  color: #1860e6;
}
</style>