<template>
    <div>
      <sildes-show></sildes-show>
      <div class="cont container">
        <!--小喵-->
        <div class="main">
          <span class="stand"></span>
          <div class="cat">
            <div class="body"></div>
            <div class="head">
              <div class="ear"></div>
              <div class="ear"></div>
            </div>
            <div class="face">
              <div class="nose"></div>
              <div class="whisker-container">
                <div class="whisker"></div>
                <div class="whisker"></div>
              </div>
              <div class="whisker-container">
                <div class="whisker"></div>
                <div class="whisker"></div>
              </div>
            </div>
            <div class="tail-container">
              <div class="tail">
                <div class="tail">
                  <div class="tail">
                    <div class="tail">
                      <div class="tail">
                        <div class="tail">
                          <div class="tail"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--小喵-->
        <div class="title">
          <img src="../../assets/adoption/take.png" width="50" alt="">
          <span class="text-primary">萌宠分类</span>
        </div>
        <div class="row">
          <div class="col-sm-8" >
            <ado-sizer></ado-sizer>
            <div class="title">
              <img src="../../assets/adoption/iconHome.png" width="50" alt="">
              <span class="text-primary">领养信息</span>
            </div>
              <ado-list></ado-list>
          </div>
          <div class="col-sm-4">
            <!--求抱走-->
            <div class="issue">
              <img src="../../assets/adoption/a051a6562121e26.png" alt="">
            </div>
            <!--二维码-->
            <div class="qrCord">
              <router-link tag="div" to="/adoption/issue/7"><a>求抱走</a></router-link>
              <img src="../../assets/adoption/0974a659d83ad4c85bf93dd1c987cae2.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // 头部轮播图
  import Slideshow from '../adoption/AdoptionSlideshow.vue'
  //宠物筛选器
  import Sizer from '../adoption/AdoptionSizer'
  // 宠物列表
  import List from '../adoption/AdoptionList'
    export default {
        name: "Adoption",
      components:{
        'sildes-show':Slideshow,
        'ado-sizer': Sizer,
        'ado-list':List
      }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .cont{
    width: 1240px;
    position: relative;
    background:rgba(255,255,255,0.9);
    margin-top:100px;
    margin-bottom: 50px;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    min-height: 700px;
  }

  .issue img{
    margin-left: 55px;
    width: 300px;
    position: relative;
  }
  .qrCord div{
    position: absolute;
    font-size: 38px;
    left: 140px;
    top:141px;
    z-index:1
  }
  .qrCord img{
    width: 400px;
    position: relative;
    top:-150px;
  }
  .title{
    margin-top: 20px;
    height: 50px;
    position: relative;
  }
  .title span{
    font-size: 28px;
    font-weight: 700;
    position: absolute;
    left: 65px;
    top: 12px;
  }

  /*小猫*/
  @keyframes tail {
    6.6666666667% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(10deg);
    }
    16.6666666667% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(30deg);
    }
    26.6666666667% {
      transform: rotate(-2deg);
    }
    46.6666666667% {
      transform: rotate(10deg);
    }
    53.3333333333% {
      transform: rotate(-5deg);
    }
    56.6666666667% {
      transform: rotate(10deg);
    }
  }
  @keyframes body {
    6.6666666667% {
      transform: scaleY(1);
    }
    10% {
      transform: scaleY(1.15);
    }
    16.6666666667% {
      transform: scaleY(1);
    }
    20% {
      transform: scaleY(1.25);
    }
    26.6666666667% {
      transform: scaleY(1);
    }
    46.6666666667% {
      transform: scaleY(1.15);
    }
    53.3333333333% {
      transform: scaleY(1);
    }
    56.6666666667% {
      transform: scaleY(1.15);
    }
  }
  @keyframes left-whisker {
    6.6666666667% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(0deg);
    }
    16.6666666667% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(0deg);
    }
    26.6666666667% {
      transform: rotate(0deg);
    }
    46.6666666667% {
      transform: rotate(10deg);
    }
    53.3333333333% {
      transform: rotate(-5deg);
    }
    56.6666666667% {
      transform: rotate(10deg);
    }
  }
  @keyframes right-whisker {
    6.6666666667% {
      transform: rotate(180deg);
    }
    10% {
      transform: rotate(190deg);
    }
    16.6666666667% {
      transform: rotate(180deg);
    }
    20% {
      transform: rotate(175deg);
    }
    26.6666666667% {
      transform: rotate(190deg);
    }
    46.6666666667% {
      transform: rotate(180deg);
    }
    53.3333333333% {
      transform: rotate(185deg);
    }
    56.6666666667% {
      transform: rotate(175deg);
    }
  }
  @keyframes left-ear {
    0% {
      transform: rotate(-20deg);
    }
    6.6666666667% {
      transform: rotate(-6deg);
    }
    13.3333333333% {
      transform: rotate(-15deg);
    }
    26.6666666667% {
      transform: rotate(-15deg);
    }
    33.3333333333% {
      transform: rotate(-30deg);
    }
    40% {
      transform: rotate(-30deg);
    }
    46.6666666667% {
      transform: rotate(0deg);
    }
    53.3333333333% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-15deg);
    }
    80% {
      transform: rotate(-15deg);
    }
    93.3333333333% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotateZ(-6deg);
    }
  }
  @keyframes right-ear {
    0% {
      transform: rotateZ(-16deg);
    }
    6.6666666667% {
      transform: rotateZ(-16deg);
    }
    13.3333333333% {
      transform: rotateZ(-19deg);
    }
    26.6666666667% {
      transform: rotateZ(-19deg);
    }
    33.3333333333% {
      transform: rotateZ(-30deg);
    }
    36.6666666667% {
      transform: rotateZ(-19deg);
    }
    37.3333333333% {
      transform: rotateZ(-30deg);
    }
    38% {
      transform: rotateZ(-19deg);
    }
    40% {
      transform: rotateZ(-19deg);
    }
    40.6666666667% {
      transform: rotateZ(-30deg);
    }
    41.3333333333% {
      transform: rotateZ(-19deg);
    }
    46.6666666667% {
      transform: rotateZ(-9deg);
    }
    53.3333333333% {
      transform: rotateZ(-9deg);
    }
    60% {
      transform: rotateZ(-19deg);
    }
    60.6666666667% {
      transform: rotateZ(-30deg);
    }
    61.3333333333% {
      transform: rotateZ(-19deg);
    }
    62.6666666667% {
      transform: rotateZ(-19deg);
    }
    63.3333333333% {
      transform: rotateZ(-30deg);
    }
    64% {
      transform: rotateZ(-19deg);
    }
    80% {
      transform: rotateZ(-19deg);
    }
    93.3333333333% {
      transform: rotateZ(-16deg);
    }
    100% {
      transform: rotateZ(-16deg);
    }
  }
  .main {
    height: 400px;
    width: 400px;
    position: absolute;
    top: -230px;
    left: 70%;
  }
  .main .stand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    height: 20px;
    width: 200px;
    border-radius: 20px;
    background-color: #80b5d0;
    z-index: 2;
  }
  .main .stand::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);
    height: 10px;
    width: 50px;
    border-radius: 20px;
    background-color: #597d9d;
  }
  .main .cat {
    width: 110px;
    height: 50px;
    position: absolute;
    top: calc(50% - 50px);
    right: 130px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }
  .main .cat .body {
    width: 110px;
    height: 50px;
    background-color: #999;
    position: absolute;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    animation: body 12s none infinite;
  }
  .main .cat .head {
    content: "";
    width: 70px;
    height: 35px;
    background-color: #999;
    position: absolute;
    top: calc(50% - 10px);
    left: -40px;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
  }

  .tail-container {
    position: absolute;
    right: 0;
    bottom: -13px;
    z-index: 3;
  }

  .tail {
    position: absolute;
    height: 30px;
    width: 14px;
    bottom: -10px;
    right: 0;
    border-bottom-right-radius: 5px;
    background: #999;
    z-index: 0;
  }
  .tail > .tail {
    animation: tail 12s none infinite;
    height: 100%;
    width: 14px;
    transform-origin: left;
    border-bottom-left-radius: 20px 20px;
    border-bottom-right-radius: 20px 20px;
    border-top-right-radius: 40px;
  }

  .ear {
    position: absolute;
    left: 4px;
    top: -4px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 20px solid #999;
    transform: rotate(-30deg);
    animation: left-ear 12s both infinite;
  }
  .ear + .ear {
    animation: right-ear 12s both infinite;
    top: -12px;
    left: 30px;
  }

  .nose {
    position: absolute;
    bottom: 10px;
    left: -10px;
    background-color: #fd6e72;
    height: 5px;
    width: 5px;
    border-radius: 50%;
  }

  .whisker-container {
    position: absolute;
    bottom: 5px;
    left: -36px;
    width: 20px;
    height: 10px;
    transform-origin: right;
    animation: left-whisker 12s both infinite;
  }
  .whisker-container:nth-child(2) {
    left: -20px;
    bottom: 12px;
    transform-origin: right;
    transform: rotate(180deg);
    animation: right-whisker 12s both infinite;
  }

  .whisker {
    position: absolute;
    top: 0;
    width: 100%;
    border: 1px solid #fdf9de;
    transform-origin: 100% 0;
    transform: rotate(10deg);
  }
  .whisker:last-child {
    top: 0;
    transform: rotate(-20deg);
  }
</style>
