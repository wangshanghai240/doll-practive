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
      <el-button type="warning" @click="exportexcel">导出</el-button>
    </div>
  </div>
</template>

<script>
import { getordermeeting } from 'network/ordermeeting/ordermeeting'
import { exportexcel } from 'network/ordershop/ordershop'

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
      queryinfo:{},
      // 模拟数据
      ordershopdata:{
        bomUpdate: "",
        craftStatus: "",
        detailsImport: "",
        dlmc: "",
        dqzt: "",
        fabricDemand: "",
        ghsdm: "",
        ingredientsDemand: "",
        isNumberChange: "",
        limit: 10,
        lx: "",
        orderNumber: "",
        page: 1,
        sourceId: "",
        sourceType: "",
        spdm: "",
        state: ""
      }
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
    async reset(){
      // 点击重置获取page,limit订货list
      // 将父组件传递过来的queryinfos存储在queryinfo
      this.queryinfo = this.queryinfos
      // 发起网络请求
      await getordermeeting(this.queryinfo,this.queryinfo.query).then(res =>{
        this.resetlist = res.data.data.records
        this.search = ''
        this.$emit('resetlist',this.resetlist)
      },err=>{
        console.log(err)
      })
    },
    // getorderlist(){
    //   this.$emit('getorderlist')
    // }
    // 导出excel,练习使用
    async exportexcel(){
      await exportexcel(this.ordershopdata).then(res=>{
        console.log(res)
        const {data,headers} = res
        const fileName = headers['content-disposition'].replace(/\w+;filename=(.*)/, '$1')
        const blob = new Blob([data],{type:'application/vnd.ms-excel'})
        const blobUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = blobUrl
        link.download = decodeURI(fileName)
        link.click()
        window.URL.revokeObjectURL(blobUrl)
      })
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