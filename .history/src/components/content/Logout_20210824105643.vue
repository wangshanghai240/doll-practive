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
}
.logout .avtor img:hover,.showinfo{
  display: block;
}
.logout .avtor .showinfo{
  /* display: none; */
  width:70px;
  position: absolute;
  left:-20px;
  border:1px solid red;
  z-index: 3;
}
.logout .avtor .showinfo li{
  margin:4px 2px;
  padding:3px;
}
</style>