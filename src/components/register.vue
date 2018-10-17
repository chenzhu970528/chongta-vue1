<template>
  <div class="jumbotron">
  <div class="container">
    <el-row class="contain">
      <el-col :span="24">
        <el-card shadow="always">

        </el-card>
      </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>
.container{
  background: url('../assets/homeless/bg1.jpg');
  height: 100%;width: 100%;
  position: absolute;
  left: 0px;
  top: 70px;
}
  .contain{
    width: 800px;
    margin: 200px auto;

  }

</style>
