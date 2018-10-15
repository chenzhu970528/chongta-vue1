<template>
  <div class="row" style="height: 20px">
    <div class="col-xs-5">
    <el-row>
      <el-button type="info" plain>全部</el-button>
      <el-button type="info" plain>寻找中</el-button>
      <el-button type="info" plain>已找到</el-button>
    </el-row>
    </div>
    <div class="col-xs-4">
    <span>公告：<a href="">寻宠发布必读</a>|意见发聩 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-badge :value="12" class="item">
  <el-button size="small">全部消息</el-button>
</el-badge></span>
  </div>
  </div>
</template>

<script>
    export default {
        name: "fenlei"
    }
</script>

<style scoped>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
