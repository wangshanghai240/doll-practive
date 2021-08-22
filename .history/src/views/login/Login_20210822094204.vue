<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="formrule"
      ref="ruleForm"
      label-width="24%"
      class="demo-ruleForm"
    >
      <el-form-item class="logins">
        <h1>乔顿后台管理系统</h1>
      </el-form-item>

      <el-form-item label="用户名" class="item" prop="username">
        <!-- <i class="el-icon-s-custom"></i> -->
        <el-input
          class="ccc"
          type="text"
          v-model="ruleForm.username"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" class="item" prop="pwd">
        <el-input
          class="ccc"
          type="password"
          v-model="ruleForm.pwd"
          clearable
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item class="logins">
        <el-button type="primary" @click="loginhome" :class="{ bgc: isactive }"
          >登录</el-button
        >
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
      isactive: false,
    };
  },
  methods: {
    // 事件监听相关
    loginhome() {
      if (this.ruleForm) {
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
      } else {
        this.$message.error("请输入正确的用户名或密码");
      }
      this.isactive = !this.isactive;
    },
  },
};
</script>

<style scoped>
.login {
  position: relative;
}
.demo-ruleForm {
  position: absolute;
  width: 33%;
  box-shadow: 0 0 4px 4px #e7e6e6;
  border-radius: 4px;
  background: #fafafa;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-ruleForm .item {
  margin: 30px 3px;
}
.item .ccc {
  width: 80%;
  margin: 0 10px 0 0;
}
.demo-ruleForm .logins {
  text-align: center;
  margin-left: -100px;
}
.demo-ruleForm .logins .bgc {
  background: rgb(82, 224, 117);
}
</style>