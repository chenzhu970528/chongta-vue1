<!--婚介列表-->
<template>
  <div class="row">
      <div class="col-xs-10 col-xs-offset-1 list">
        <router-link to="/matchmaking/matchDel">
          <!--<img src="../../assets/mao1.jpg" class="img-responsive" alt="Responsive image">-->
          <img src="../../assets/mao1.jpg" alt="..." class="img-rounded col-xs-3">
        </router-link>
        <div class="col-xs-8 msg">
          <div>宠物基本信息</div>
          <div>主人寄语（相亲广告）</div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "matchlist",

    }
</script>

<style scoped>
  .row{
    margin-top: 80px;
    /*position: relative;*/
  }
  .list{
    border: 1px solid #b8bee2;
    border-radius:10px;
    position: relative;
    /*background-color: orange;*/
  }
  .msg{
    position: absolute;
    right: 0px;
    margin-top: 20px;
  }
  .msg div:first-child{
    background-color: #ff93a8;
  }
  .msg div:last-child{
    background-color: #ffde96;
  }
  /*img{*/
    /*background-color: orange;*/
    /*!*position: absolute;*!*/
    /*!*left: 0;*!*/
  /*}*/
</style>
