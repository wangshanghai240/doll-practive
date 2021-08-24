<template>
  <div class="logout">
    <div class="avtor">
      <img src="~assets/image/adicon/admin.gif" alt="">
      <div class="showinfo">
        <ul>
          <li>退出登录</li>
          <li>个人中心</li>
        </ul>
      </div>
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
  position:relative;
}
.logout .avtor{
  position:absolute;
  top:50%;
  transform:translateY(-50%)
}
.logout .avtor img{
  width:40px;
  border-radius:3px;
}
</style>