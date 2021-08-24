<template>
  <div class="brdcmb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/admin/dashboard'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item 
      :to="{path:item.unshift.path}" 
      v-for="item in breadcrumb" 
      :key="item.path">{{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  // 监听路由变化
  // watch:{
  //   $route:{
  //     handler(){
  //       this.getList()
  //     },
  //     immediate:true
  //   }
  // },
  // 页面挂载之后就执行该方法
  // mounted(){
  //   this.getList()
  // },
  computed:{
      breadcrumb(){
          return this.$route.matched
      }
  },
  // data(){
  //     return{
  //       navlist:[]
  //     }
  // },
  // methods:{
  //   getList(){
  //     // 将处于活跃的路由(地址)保存在navlist
  //     this.navlist = this.$route.matched.filter(item => item.name)
  //   }
  // }
};
</script>

<style scoped>
.brdcmb{
    display: inline-block;
}
</style>