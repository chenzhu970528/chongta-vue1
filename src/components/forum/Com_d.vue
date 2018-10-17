<template>
  <!--搜索-->
  <div class="row">
    <div class="col-lg-6">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="输入关键字搜索内容">
        <span class="input-group-btn">
        <button class="btn btn-default" type="button">
          <span class="glyphicon glyphicon-search"></span></button>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Com_d",
    data() {
      return {
        input10: ''
      }
    }
  }
</script>

<style scoped>
  .row {
    width: 400px;
    height: 40px;
    margin-bottom:10px;
    position: relative;
    left: 840px;
  }
  .form-control{
    width: 320px;

  }
</style>
