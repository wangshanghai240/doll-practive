<template>
  <div class="logout">
    <div class="avtor">
      <img src="~assets/image/adicon/admin.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
name:'Logout',
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped>
.logout{
  display: inline-block;
}
.logout .avtor{
  display: inline-block;
}
.logout .avtor img{
  display: block;
  margin:auto;
  width:40px;
  border-radius:3px;
}
</style>