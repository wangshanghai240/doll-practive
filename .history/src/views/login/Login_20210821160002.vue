<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="formrule"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" class="item">
        <!-- <i class="el-icon-s-custom"></i> -->
        <el-input class="ccc" type="text" v-model="ruleForm.username" clearable></el-input>
      </el-form-item>

      <el-form-item label="密码" class="item">
        <el-input
        class="ccc"
          type="password"
          v-model="ruleForm.pwd"
          clearable
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="loginhome">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导入登录请求
import { login } from "network/login";

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        pwd: "",
      },
      // 表单验证规则
      formrule: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 12, message: "用户名长度在6-12", trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "密码长度为6-12", trigger: "blur" },
        ],
      },
      // isabled: false,
      token: "",
    };
  },
  methods: {
    // 事件监听相关
    loginhome() {
      // 发送网络请求
      login(this.ruleForm.username, this.ruleForm.pwd).then((res) => {
        // 获取token
        this.token = res.data.data.access_token;
        this.$message.success("登录成功");
        // 将token存储在sessionStorage中
        sessionStorage.setItem("token", this.token);
        // 将token提交到store
        this.$store.commit("setToken", this.token);
        console.log(res);
        // 如果有token，说明登陆了就跳转到admin
        if (this.token) {
          console.log(this.token);
          this.$router.replace({
            path: "/admin",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.login{
  position:relative;
}
.demo-ruleForm{
  position:absolute;
  width:40%;
  box-shadow: 0 0 4px 4px #e7e6e6;
  border-radius:4px;
  top:50vh;
  left:50%;
  transform:translate(-50%,-50%);
}
.demo-ruleForm .item{
  margin:20px 3px;
}
.item .ccc{
  width:80%;
  margin:0 10px 0 0 ;
}
</style>