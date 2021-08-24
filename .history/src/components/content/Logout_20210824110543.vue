<template>
  <div class="logout">
    <div class="avtor">
      <img src="~assets/image/adicon/admin.gif" alt="">
      <div class="showinfo">
        <ul>
          <li @click="logout">退出登录</li>
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
}
.logout .avtor{
  position:absolute;
  top:50%;
  left:94%;
  transform:translateY(-50%)
}
.logout .avtor img{
  width:40px;
  /* 去除图片底部的留白 */
  vertical-align: middle;
  border-radius:6px;
  cursor:pointer;
}
.logout .avtor img:hover ~ .showinfo{
  display: block;
}
.logout .avtor .showinfo{
  display: none;
  width:70px;
  position: absolute;
  left:-20px;
  border-radius:4px;
  z-index: 999 !important;
  box-shadow: 0 0 2px #d0d0d0;
  background:#fff;
}
.logout .avtor .showinfo li{
  margin:4px 2px;
  padding:3px;
  font-size:14px;
}
.logout .avtor .showinfo li:hover{
  color:#f30;
}
</style>