<template>
    <div class="right" >
      <h5>基本信息</h5>
      <el-row>
        <el-col :span="6" :offset="5">登录名</el-col>
        <el-col :span="8">我的shoujihao</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="5">昵称</el-col>
        <el-col :span="8">我的shoujihao</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="5">真实姓名</el-col>
        <el-col :span="8">我的shoujihao</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="5">所在地</el-col>
        <el-col :span="8">我的shoujihao</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="5">性别</el-col>
        <el-col :span="8">我的shoujihao</el-col>
      </el-row>
      <h5>联系方式</h5>
      <el-row>
        <el-col :span="6" :offset="5">邮箱</el-col>
        <el-col :span="8">我的shoujihao</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="5">手机</el-col>
        <el-col :span="8">我的shoujihao</el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "personal",
      data() {
        return {
          activeName: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    };
</script>

<style scoped>
  .right{
    position: relative;
    left: 40px;
    height: 1000px;
    background-color: rgba(255,255,255,0.7);
    text-align: center;
  }


</style>
