<template>
  <div>
   <el-button type="text" style="height: 70px" @click="dialogVisible = true">登录</el-button>
    <el-dialog title="请登录" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="demo-input-suffix">
        手机号：
        <el-input
          placeholder="请输入手机号！"
          prefix-icon="el-icon-search"
          v-model="username">
        </el-input>
      </div>
      <div class="demo-input-suffix" style="margin-top: 20px">
        密码：
        <el-input
          type="password"
          placeholder="请输入密码！"
          prefix-icon="el-icon-search"
          v-model="password">
        </el-input>
      </div>
       <el-footer style="margin-top: 20px">
         <el-button type="primary" @click="login">登录</el-button>
         <el-button type="primary">注册</el-button>
       </el-footer>
    </el-dialog>

  </div>
</template>
<script>
    export default {
        name: "Login",
      data() {
        return {
          username: '',
         password: '',
          dialogVisible: false
        }
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        login() {
          if(this.username=="小锤锤"&&this.password=="888"){
            alert('登录成功')
          }else {
            alert("密码或用户名错误，请重新输入！")
            this.username = '';
            this.password = '';
          }
        }
      },
    }
</script>

<style scoped>

</style>
