<template>
  <div class="brdcmb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/admin/dashboard'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item 
      :to="{path:item.path}" 
      v-for="(item, index) in breadcrumb" 
      :key="index">{{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed:{
      breadcrumb(){
          return this.$route.meta.breadcrumb
      }
  },
  data(){
      return{
        //   breadcrumb:['首页','面料','订货会','商品列表','用户列表','日志列表']
      }
  }
};
</script>

<style scoped>
.brdcmb{
    display: inline-block;
}
</style>