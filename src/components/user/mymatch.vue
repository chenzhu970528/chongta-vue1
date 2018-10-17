<!--我的相亲角-->
<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>编辑个人资料</span></div>


  </div>
</template>

<script>
    export default {
        name: "mymatch"
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .right{
    position: relative;
    left: 40px;
    min-height: 780px;
    background-color: rgba(255,255,255,0.7);
  }
  .route{
    position: relative;
    left: 5%;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*background-color: palevioletred;*/
    color: #747474;
  }
  .route span{
    margin-right: 10px;
    font-size: 14px;
  }
  .route span:last-child{
    color: #4e76ff;
  }
</style>
