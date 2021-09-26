<template>
  <div class="menitem">
    <slot name='submenu'></slot>
    <slot name='menuitem'></slot>
  </div>
</template>

<script>
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
      secroute: this.routepat,
    };
  },
  computed: {
    seroutepat() {
      return this.secroute.children;
    },
  },
};
</script>

<style>
.menitem i{
    /* margin:0 10px; */

}
.menitem .el-menu-item i{
    margin-right:10px;
}
</style>