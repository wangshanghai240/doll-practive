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
      <el-button type="warning">重置</el-button>
    </div>
  </div>
</template>

<script>
// import { getAllOrderMeeting } from "network/ordermeeting/ordermeeting";

export default {
  name: "Ordersearch",
  props: {
    ordersearch: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      search: "",
      // 存储符合search的订货信息
      table: {},
      // 存储有name属性的订货信息
      cc: [],
    };
  },
  methods: {
    // 查询事件监听处理
    searchinfo() {
      this.cc = this.ordersearch
      console.log(this.cc.length)
      // 遍历出符合search的订货信息
      for (let i = 0; i < this.cc.length; i++) {
        if (this.cc[i].name === this.search) {
          this.tbale = this.cc[i];
        } else {
          this.$messge({
            type: "warning",
            message: "您查询的活动不存在",
          });
        }
      }
      console.log(this.table);
    },
    // 重置
    // orderlist() {
    //   // 清空查询信息
    //   this.search = "";
    //   // 网路请求
    //   getAllOrderMeeting().then((res) => {
    //     // 将请求到的订货信息填充表格
    //     this.$refs.ordertab.tableDatas = res.data.data;
    //   });
    // },
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