<template>
  <div class="ordersearch">
    <el-input
      class="ordsea"
      placeholder="请输入活动名称"
      prefix-icon="el-icon-search"
      v-model="search"
      clearable
    >
    </el-input>
    <div class="btn">
      <el-button type="primary" @click="searchinfo">搜索</el-button>
      <el-button type="warning" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script>
import { getAllOrderMeeting } from 'network/ordermeeting/ordermeeting'

export default {
  name: "OrderSearch",
  // props: {
  //   ordersearch: {
  //     type: Array,
  //     default() {
  //       return [];
  //     },
  //   },
  // },
  data() {
    return {
      search: "",
      resetlist:[]
    };
  },
  methods: {
    // 查询事件监听处理
    searchinfo() {
      this.$emit('searchdata',this.search)
    },
    reset(){
      getAllOrderMeeting().then(res =>{
        this.resetlist = res.data.data
      })
      this.search = ''
      this.$emit('resetlist',this.resetlist)
    }
  },
};
</script>

<style scoped>
.ordersearch {
  width: 100%;
}
.ordersearch .ordsea {
  display: inline-block;
  width: 200px;
  margin: 0 20px 20px 10px;
}
.ordersearch .btn {
  display: inline-block;
}
</style>