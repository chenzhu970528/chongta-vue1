<template><!--图片 内容，小版块-->
  <!--<div id="d1">-->
  <!--<img src="../../assets/images/a.jpg" alt="" class="img">-->
  <!--<h4><span v-for="plate in plates" class="s1">#{{plate}}</span>-->
  <!--<span v-for="sum in sums" class="s2"> ❤{{sum}}</span></h4>-->
  <!--<p v-for="title in titles" class="s3">{{title}}</p>-->

  <!--<p v-for="content in contents">{{content}}...</p>-->
  <!--</div>-->

  <div>
    <div class="con">
      <div class="top">
        <div><span class="left">最新</span><span class="right"> >>更多</span></div>
      </div>

      <ul class="body">
        <li class="li1">
          <img src="../../assets/images/a.jpg" alt="">
          <p class="title">标题</p>
          <p class="val">内容哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或哈哈哈哈哈哈哈哈哈</p>
        </li>
      </ul>

      <ul class="foot">
        <li>
          <a href="">表题标题</a><span>10-15</span>
        </li>
        <li>
          <a href="">表题标题</a><span>10-15</span>
        </li>
        <li>
          <a href="">表题标题</a><span>10-15</span>
        </li>
        <li>
          <a href="">表题标题</a><span>10-15</span>
        </li>
        <li>
          <a href="">表题标题</a><span>10-15</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Com_a",
    data() {
      return {
        plates: ['交流分享'],
        titles: ['啦啦啦啦啦啦 '],
        sums: [1],
        contents: ['阿达撒睡得晚若多所所所所所所所所']
      }
    }
  }
</script>

<style scoped>
  .con {
    border: 1px solid #929292;
    position: relative;
    width: 390px;
    height: 560px;
    padding: 20px;
    display: inline-block;
  }

  .top {
    width: 350px;
    height: 35px;
    border-bottom: 1px solid #929292;
  }

  .left {
    height: 35px;
    position: absolute;
    border-bottom: 3px solid rgba(22, 41, 145, 0.64);
    left: 20px;
    font-size: 20px;
  }

  .right {
    position: absolute;
    right: 20px;
    line-height: 20px;
  }

  .body {
    width: 350px;
    height: 270px;
    margin-top: 20px;
    margin-bottom: 20px;
    left: 20px;
    position: absolute;
    border-bottom: 1px dotted #959595
  }

  .li1 {
    position: absolute;
    left: 0px;

  }

  img {
    width: 350px;
    height: 200px;
  }

  li {
    list-style: none;
  }

  .c3 > li {
    position: absolute;
  }

  .title {
    color: white;
    background: #000000;
    opacity: 0.6;
    position: relative;
    bottom: 30px;
    height: 30px;
    line-height: 30px;
    width: 350px;
    text-align: center;
  }

  .val {
    width: 355px;
    height: 45px;
    position: relative;
    top: -25px;
    font-size: 15px;
  }

  .foot {
    position: absolute;
    left:0px;
    top: 365px;
  }
.foot>li{
  width: 350px;
  height: 30px;
  margin:0px 0;
}
  .foot>li>a{
    color:black;
    text-decoration: none;
    display: inline-block;
    position: relative;
    left:-20px;
    width: 250px;
    height: 30px;
  }
.foot>span{
  margin-left:50px;
  position: relative;
  left:40px;

}
  /*li, li > a {*/
    /*position: absolute;*/
    /*width: 275px;*/
    /*text-decoration: none;*/
    /*height: 25px;*/
    /*line-height: 25px;*/
    /*left: 0px;*/
  /*}*/

  /*li > span {*/
    /*position: absolute;*/
    /*right: -40px;*/
  /*}*/

  /*.s1 {*/
  /*font-size: 18px;*/
  /*color: rgba(220, 128, 24, 0.87);*/
  /*}*/

  /*.s2 {*/
  /*text-align: right;*/
  /*}*/

  /*.s3 {*/
  /*font-size: 20px;*/
  /*}*/

  /*div {*/
  /*background: white;*/
  /*}*/

  /*#d1 {*/
  /*width: 235px;*/
  /*height: 300px;*/
  /*display: inline-block;*/
  /*margin: 40px 18px;*/
  /*}*/

  /*h4 {*/
  /*width: 235px;*/
  /*height: 35px;*/
  /*line-height: 35px*/
  /*}*/

  /*.img {*/
  /*width: 235px;*/
  /*height: 150px;*/
  /*}*/

  /*#d1:hover {*/
  /*!*opacity:0.9;*!*/
  /*background: #f4f4f4;;*/
  /*}*/
</style>
