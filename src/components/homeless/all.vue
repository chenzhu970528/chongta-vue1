<template>
  <div style="margin-top: 30px" class="col-xs-12">
    <div class="left" style="width: 250px;height: 300px;float: left">
      <img src="../../assets/homeless/u=1177403016,309772193&fm=26&gp=0.jpg" alt="">
    </div>
    <div class="right" style="height: 200px">
      <div class="top" style="margin-left: 200px">
        <div style="margin-left: 80px;width: 150px;height: 30px;border: 1px solid gainsboro;text-align: center;">标题  &nbsp;时间    &nbsp;地点</div>
        <div style="margin-left: 80px;width: 450px;height: 150px;border: 2px solid cadetblue;">文字介绍</div>
        <br>
        <div style="margin-left: 80px;width: 450px"><comment></comment></div>
        <div style="margin-left: 480px"><button>评论</button></div>
      </div>

      </div>
  </div>
</template>

<script>
  import comment from './comment'
    export default {
      components: {
        'comment': comment
      }
    }
</script>

<style scoped>
.left img{
  height: 300px;
  width: 250px;
}
  /*.comment{*/
    /*width: 50px;*/
    /*height: 50px;*/
    /*border: 2px solid red;*/
    /*margin-left: 150px;*/
  /*}*/
</style>
