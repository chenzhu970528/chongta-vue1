<template>
    <div>
      <ul class="title">
        <li><img src="" alt=""></li>
        <li>主人</li>
        <li>昵称</li>
        <li>追求者</li>
      </ul>
      <hr>
      <ul>
        <li>tupian</li>
        <li>小二</li>
        <li>小小二</li>
        <li>20</li>
      </ul>
      <ul>
        <li>tupian</li>
        <li>小二</li>
        <li>小小二</li>
        <li>20</li>
      </ul>
      <ul>
        <li>tupian</li>
        <li>小二</li>
        <li>小小二</li>
        <li>20</li>
      </ul>
      <ul>
        <li>tupian</li>
        <li>小二</li>
        <li>小小二</li>
        <li>20</li>
      </ul>
      <ul>
        <li>tupian</li>
        <li>小二</li>
        <li>小小二</li>
        <li>20</li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: "hotlist"
    }
</script>

<style scoped>
  div ul{
    list-style: none;
    padding-top: 5px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
  hr{
    border: 1px solid palevioletred;
  }
  ul li{
    float: left;
    padding-right: 10px;
    width: 25%;
    color: #7197ff;
    /*background-color: white;*/
  }
  .title li{
    font-weight: bold;
  }
</style>
