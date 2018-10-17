<!--领养-->
<template>
    <div class="right">
      <div class="route">您的当前位置：<span>我的发布</span><span>/</span><span>领养</span></div>
      <div class="inner_ado">
        <div class="card">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myado"
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
    background-color: rgba(255,255,255,0.5);
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
  .inner_ado{
    width: 83%;
    margin-left: 7%;
    position: relative;
    background-color: yellow;
    min-height: 500px;
  }
  .card{
    width: 100%;
    height: 200px;
    background-color: plum;
  }
</style>
