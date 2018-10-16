<template>
    <div class="" id="foot">
      <ul>
        <li>关于我们</li>
        <li>加入我们</li>
        <li>商务合作</li>
        <li>免责声明</li>
      </ul>
      <p>&copy; CopyRight 2018 宠它</p>
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
    margin-top: 100px
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
  }
  ul{
    list-style: none;
    padding: 0;
    color: white;
    width: 500px;
    margin: 10px auto;
  }
  ul li{
    display: inline-block;
  }
  p{
    color: white;
    width: 300px;
    margin: 10px auto;
  }
</style>
