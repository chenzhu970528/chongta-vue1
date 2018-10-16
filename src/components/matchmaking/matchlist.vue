<!--婚介列表-->
<template>
  <div class="row">
      <div class="col-xs-8 list">
        <router-link to="/matchmaking/matchDel">
          <!--<img src="../../assets/mao1.jpg" class="img-responsive" alt="Responsive image">-->
          <img src="../../assets/match/mao1.jpg" alt="..." class="img-rounded col-xs-3">
        </router-link>
        <div class="col-xs-8 msg">
          <div>宠物基本信息</div>
          <div>主人寄语（相亲广告）</div>
        </div>
      </div>
    <match-hot></match-hot>

  </div>
</template>

<script>
  import  matchhot from './match-hot.vue'
  export default {
        name: "matchlist",
    components:{
      'match-hot':matchhot
    }

    }
</script>

<style scoped>
  .row{
    /*background-color: orange;*/
    margin-top: 80px;
    /*position: relative;*/
  }
  .list{
    border: 1px solid #b8bee2;
    border-radius:10px;
    position: relative;
    margin-left: 5%;
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
