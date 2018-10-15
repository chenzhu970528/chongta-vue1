<template>
    <div class="container-fluid" id="foot">
      <ul class="row">
        <li>关于我们</li>
        <li>加入我们</li>
        <li>商务合作</li>
        <li>免责声明</li>
      </ul>
      <p class="row">&copy; CopyRight 2018 宠它</p>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
  #foot{
    height: 80px;
    width: 100%;
    /*background-color: rgba(255,255,255,0.1);*/
    text-align: center;
    margin-top: 100px;
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
  }
  ul{
    list-style: none;
    color: white;
   margin-left: 38%;
  }
  ul li{
    float: left;
    padding-left: 5px;
  }
  p{
    color: white;
  }
</style>
