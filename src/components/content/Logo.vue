<template>
  <div class="logo">
      <span>JODOLL</span>
  </div>
</template>

<script>
export default {
    name:'Logo'
}
</script>

<style scoped>
.logo{
    display:inline-block;
}
.logo span{
    /* 垂直居中 */
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    font-size:30px;
    font-weight: 700;
    color:#f50;
}
</style>