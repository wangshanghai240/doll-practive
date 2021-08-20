<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名">
        <!-- <i class="el-icon-s-custom"></i> -->
        <el-input type="text" v-model="ruleForm.username" clearable></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input
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
</style>