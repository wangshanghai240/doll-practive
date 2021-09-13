<template>
  <div class="ordersearch">
    <el-input
      class="ordsea"
      placeholder="请输入活动名称"
      prefix-icon="el-icon-search"
      v-model="search"
      clearable
      @clear="getorderlist"
    >
    </el-input>
    <div class="btn">
      <el-button type="primary" @click="searchinfo">搜索</el-button>
      <el-button type="warning" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script>
import { getordermeeting } from 'network/ordermeeting/ordermeeting'

export default {
  name: "OrderSearch",
  props: {
    queryinfos: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      search: "",
      resetlist:[],
      queryinfo:{}
    };
  },
  methods: {
    // 查询事件监听处理
    searchinfo() {
      // 如果search为空
      if(this.search == ''){
        this.$message.error('请先输入活动名称')
      }
      // search不为空
      else{
        // 发射事件并将search传递出去
        this.$emit('searchdata',this.search)
      }
    },
    // 重置按钮事件
    reset(){
      // 点击重置获取page,limit订货list
      console.log(this.queryinfos)
      this.queryinfo = this.queryinfos
      getordermeeting(this.queryinfo,this.queryinfo.query).then(res =>{
        this.resetlist = res.data.data
        this.search = ''
        this.$emit('resetlist',this.resetlist)
      })
      
    },
    getorderlist(){
      this.$emit('getorderlist')
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