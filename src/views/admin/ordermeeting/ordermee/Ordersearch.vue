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
      <!-- upload -->
      <el-upload
        class="upload-demo"
        action
        :http-request="upload"
        :limit="10"
        :file-list="filelist"
      >
        <el-button size="small" type="primary">商品上传</el-button>
        <el-progress 
        :percentage="progress" 
        status='success' 
        v-show='show'>
        </el-progress>
      </el-upload>
      
    </div>
  </div>
</template>

<script>
import { getordermeeting } from "network/ordermeeting/ordermeeting";
import { exportexcel, uploaddata } from "network/ordershop/ordershop";
import { formatTime } from "utils/time";

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
      resetlist: [],
      queryinfo: {},
      // 是否显示上传进度条
      show:false,
      progress:0,
      // 模拟数据
      ordershopdata: {
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
        page: 1,
      },
      uploadexcels: {
        sourceId: "1435798985192374274",
        sourceType: "1",
      },
      // 文件列表
      filelist: [],
    };
  },
  methods: {
    // 查询事件监听处理
    searchinfo() {
      // 如果search为空
      if (this.search == "") {
        this.$message.error("请先输入活动名称");
      }
      // search不为空
      else {
        // 发射事件并将search传递出去
        this.$emit("searchdata", this.search);
      }
    },
    // 重置按钮事件
    async reset() {
      // 点击重置获取page,limit订货list
      // 将父组件传递过来的queryinfos存储在queryinfo
      this.queryinfo = this.queryinfos;
      // 发起网络请求
      await getordermeeting(this.queryinfo, this.queryinfo.query).then(
        (res) => {
          this.resetlist = res.data.data.records;
          this.search = "";
          this.$emit("resetlist", this.resetlist);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    // getorderlist(){
    //   this.$emit('getorderlist')
    // }
    // 导出excel,练习使用
    async exportexcel() {
      await exportexcel(this.ordershopdata).then((res) => {
        console.log(res);
        // 创建blob对象并设置文件MIME类型
        const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
        console.log(blob);
        // 创建对象url就不用读取文件内容到JavaScript就可以使用文件
        const blobUrl = window.URL.createObjectURL(blob);
        // 创建一个a标签
        const link = document.createElement("a");
        link.href = blobUrl;
        // 自定义文件名(年月日形式)
        link.download = formatTime();
        // 下载文件
        link.click();
        // 使用完数据最好释放与之关联的内存
        window.URL.revokeObjectURL(blobUrl);
      });
    },
    // 上传商品，练习使用
    async upload(params) {
      // params就是包含我们上传的参数
      console.log(params);
      console.log(params.file);
      this.show = !this.show
      let files = params.file,
          config = {
            onUploadProgress: (progressevent) => {
              this.progress = Math.floor(progressevent.loaded / progressevent.total * 100) + '%';
            },
          },
      
      // 创建formdata对象,方便我们将文件转化为formdata格式(二进制)
      formdata = new FormData();
      // 将我们要上传的文件添加进formdata对象实例中
      formdata.append("file", files);
      // 获取formdata对象中的数据
      console.log(formdata.get("file"));
      // 发起网络请求
      await uploaddata(formdata, this.uploadexcels, config).then((value) => {
        this.$message.success(value.data.message);
        // 清空保存上传文件的列表
        this.filelist = [];
        this.show = !this.show
      });
    },
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
.ordersearch .btn,
.ordersearch .btn .upload-demo {
  display: inline-block;
  margin-left: 10px;
}
</style>