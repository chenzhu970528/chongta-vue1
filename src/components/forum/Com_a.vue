<template><!--图片 内容，小版块-->
  <div>
    <div class="con">
      <div class="top">
        <div><span class="left">最新</span>

          <router-link tag="span" active-class="active" role="presentation" to="/forum/lists">
            <span class="right"><a>>>更多</a></span>
          </router-link>
        </div>
      </div>

      <ul class="body">
        <li class="li1" v-for="one in ones">
          <router-link tag="a" active-class="active" role="presentation" to="/forum/details">
            <a href="">
              <img :src='one.img' alt="">
              <p class="title">{{one.title}}00</p>
            </a>
          </router-link>
          <p class="val">{{one.value}}</p>
        </li>
      </ul>

      <ul class="foot" >
        <li v-for="list in lists">
          <router-link tag="a" active-class="active" role="presentation" to="/forum/details">
            <a href="">{{list.title}}</a>
            <span class="span">{{list.time}}</span>
          </router-link>
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
        ones: [
          {title: '三只狗狗'},
          {img: require("../../assets/images/a.jpg")},
          {value: '八十多多多多多多多多多付错吧吧吧吧吧吧吧吧吧吧吧吧v'}
        ],
        lists: [
          {title: '阿诗丹顿', time: '10-27'},
          {title: '阿诗丹顿', time: '10-27'},
          {title: '阿诗丹顿', time: '10-27'},
          {title: '阿诗丹顿', time: '10-27'},
          {title: '阿诗丹顿', time: '10-27'},
          {title: '阿诗丹顿', time: '10-27'},
        ]
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #323232;
  }

  span > a {
    color: #a7a7a7;
  }

  .con {
    background: white;
    position: relative;
    width: 390px;
    height:570px;
    padding: 20px;
    display: inline-block;
    margin: 1px 0;
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
    right: 120px;
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
    font-size: 16px;
  }

  .foot {
    position: absolute;
    left: 0px;
    top: 365px;
  }

  .foot > li {
    width: 350px;
    height: 30px;
    margin: 0px 0;
  }

  .foot > li > a {
    color: #424242;
    text-decoration: none;
    display: inline-block;
    position: relative;
    left: -20px;
    width: 250px;
    height: 30px;
    font-size: 16px;
  }

  span {
    padding-left: -10px;
    position: relative;

  }

  .span {
    position: absolute;
    right: -100px;
  }

  .right {
    width: 50px;
    position: absolute;
    left: 305px;
    top: 5px;
  }

  a:hover {
    color: #80c5da;
  }
</style>
