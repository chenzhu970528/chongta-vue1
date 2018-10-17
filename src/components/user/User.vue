<template>
  <div class="container">
    <!--<div><h4>用户id：{{userId}}</h4></div>-->
    <el-row>
      <el-col :span="8">
        <div class="top">
          <change-head></change-head>
          <span class="name">用户名</span><br/>
          <span class="name">长长的个性签名</span>
          <el-row class="intop">
            <el-col :span="7" style="background-color:rgba(255,255,255,0.4);height: 85px;">发帖数</el-col>
            <el-col :span="8" :offset="1" style="background-color:rgba(255,255,255,0.4);height: 85px;">发布数</el-col>
            <el-col :span="7" :offset="1" style="background-color:rgba(255,255,255,0.4);height: 85px;">申请数</el-col>
          </el-row>
        </div>
        <left-list></left-list>
      </el-col>
      <el-col :span="15"><router-view></router-view></el-col>
    </el-row>
    <!--<div class="top">-->
        <!--<change-head></change-head>-->
      <!--<span class="name">用户名</span>-->
    <!--</div>-->
  </div>
</template>

<script>
  import change from './changehead.vue'
  import left from './leftList.vue'
    export default {
      name: "User",
      data(){
        return {
          userId:this.$route.params.userId
        }
      },
      components:{
        'change-head':change,
        'left-list':left
      }
    }
</script>

<style scoped>
  *{
    padding: 0;
    font-family: \5FAE\8F6F\96C5\9ED1;
  }
  .container{
    /*background:rgba(255,255,255,0.9);*/
    margin-top:50px ;
    /*box-shadow:-2px 2px 10px 2px #bcbcbc;*/
    min-height: 500px;
  }
  .top{
    /*width: 100%;*/
    height: 400px;
    background:rgba(255,255,255,0.5);
    /*position: relative;*/
    vertical-align: middle;
    text-align: center;
    background: url("../../assets/user/user_bg2.jpg") ;
    position: relative;
  }
  .intop{
    position: relative;
    bottom: -100px;
  }
  .intop el-col{
    font-weight: bold;
  }
  /*.top ul{*/
    /*height: 80px;*/
    /*list-style: none;*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 10px;*/
  /*}*/
  /*.top ul li{*/
    /*float: left;*/
    /*height: 80px;*/
    /*line-height: 50px;*/
    /*background-color: rgba(255,255,255,0.5);*/
    /*width: 120px;*/
    /*margin-right: 5px;*/
  /*}*/
  .name{
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    /*background-color: orangered;*/
    margin-top: 20px;
  }
</style>
