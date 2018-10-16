<template>
  <div>
  <cat></cat>
  <div class="container">
    <ol class="breadcrumb">
      您当前位置为：
      <li><a href="/matchmaking">流浪精灵</a></li>
      <!--<li><a href="#">详情</a></li>-->
      <li class="active">详情</li>
    </ol>

    <div class="row">
      <div class="col-xs-8 top_1" >
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;救助和领养，不仅仅是一时的不忍和爱心，真的是一件需要我们花时<br>
          间，花精力、花金钱的事情。同时，它们的命运也在您的一念之间。如 <br>
          果您现在还没有能力做救助人，那么从宣传“领养代替购买、文明养宠，不 <br>
          遗弃、不伤害”开始，让周围的人正确的对待身边的动物
        </p>
      </div>
      <div class="col-xs-4" style="margin-top: 35px">
        <img src="../../assets/homeless/2..jpg" class="img-responsive" alt="Responsive image">
      </div>
    </div>
    <!--发布按钮-->
    <ul class="nav navbar-nav" style="margin-top: -40px">
      <router-link  tag="li" active-class="active" role="presentation" to="/homeless/publish" style="float: left" exact><el-row><el-button type="primary" plain style="font-size: 25px">我要发布</el-button></el-row></router-link>
      <router-link  tag="li" active-class="active"  role="presentation" to="/homeless/wantadopt" style="float: right"><el-row><el-button type="primary" plain style="font-size: 25px">我要领养</el-button></el-row></router-link>
    </ul>
    <br> <br> <br> <br> <br>
    <fenlei></fenlei>
    <!--<div class="row">-->
      <!--<div class="col-xs-8 top_1" >-->

      <!--</div>-->
    <!--</div>-->
    <!--<div class="col-xs-4 li_right" ><hot></hot></div>-->




  </div>
  </div>
</template>

<script>
  import fenlei from './fenlei'
  import cat from './cat'
  export default {
    name: "Homeless",
    methods:{
      toHome(){
        this.$router.push({path:'/'})
      }
    },
    components:{
      'fenlei':fenlei,
      // 'hot':hot,
      'cat':cat
    }
  }


</script>

<style scoped>
  .container{
    background:rgba(255,255,255,0.9);
    margin-top:50px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    width: 1240px;
  }
  img{
    height: 300px;
    width: 300px;
  }

  .row{
    /*background-color: burlywood;*/
    position: relative;
  }
  .top_1{
    font-size: 20px;
    margin-top: 10%;
  }
  .top_1 p{
    height: 112px;
  }
  .li_right{
    position: relative;
    margin-left: 280px;
    margin-top: -20px;
    width: 350px;
  }

  ul{
    width: 500px;
    /*background-color: aqua;*/
    position: relative;
    left: 100px;
  }
  .breadcrumb{
    background-color: rgba(255,255,255,0.9);
  }
</style>
