<template><!--图片 内容，小版块-->
  <div>
    <div class="con">
      <div class="top">
        <div><span class="left">最新</span>
          <span class="right">
        <router-link tag="span" active-class="active"  role="presentation" to="/forum/newests"><a href="">>>更多</a> </router-link>
        </span></div>
      </div>

      <ul class="body">
        <li class="li1">
          <a href="">
          <img src="../../assets/images/a.jpg" alt="">
          <p class="title">标题</p>
          <p class="val">内容哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或哈哈哈哈哈哈哈哈哈</p>
          </a>
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
  a{
    text-decoration: none;
    color: #323232;
  }
  span>a{
    color: #a7a7a7;
  }
  .con {
    border: 1px solid #a9a9a9;
    position: relative;
    width: 390px;
    height: 560px;
    padding: 20px;
    display: inline-block;
    margin:1px 0;
  }

  .top {
    width: 350px;
    height: 35px;
    border-bottom: 1px solid #a8a8a8;
    color: #a8a8a8;
  }

  .left {
    height: 35px;
    position: absolute;
    border-bottom: 3px solid rgba(69, 174, 203, 0.64);
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
    margin-top: 25px;
    margin-bottom: 25px;
    left: 20px;
    position: absolute;
    border-bottom: 1px dotted #a8a8a8;
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
    color: #424242;
    text-decoration: none;
    display: inline-block;
    position: relative;
    left:-20px;
    width: 250px;
    height: 30px;
  }
.foot>li>span{
  padding-left:-10px;
  position: relative;
  left:40px;

}
  .foot>li>a:hover{
   color: #80c5da;
  }
  </style>
