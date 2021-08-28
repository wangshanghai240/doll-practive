<template>
  <div id="app">
    <!-- <login></login> -->
    <!-- <keep-alive include="admin.vue"> -->
     <router-view></router-view> 
    <!-- </keep-alive> -->
    
  </div>
</template>

<script>
// import Login from './views/login/Login.vue'

export default {
  components: { },
  name: 'App'
}
</script>

<style>
body,html{
  margin:0;
  padding:0;
}
ul,li,a,ol{
  margin:0;
  padding:0;
  text-decoration:none;
  list-style: none;
}
</style>
