<template>
  <div id="content">
    <div class="left"> <!--详细内容     -->
       <div class="val">      <!--帖子的内容-->
        <div><h2>{{values[0].title}}..</h2></div>
        <div class="headpic">

          <img class='headimg' :src='values[0].headPic' alt="">
          <span class="name">{{values[0].name}}</span>

          <span>{{values[0].time}}</span>
          <span class="r">❤{{values[0].num1}} {{values[0].num2}}回复</span>

        </div>

        <div class="img">
          <p>{{values[0].val}}</p>
          <img v-for="img in values[0].imgs" :src='img' alt="">
        </div>
         <p>今天是个哈皮日</p>
      </div>
      <!--评论区域-->

      <div class="com">
        <comment></comment>
      </div>

    </div>
    <div class="right">
      <hot></hot>
      <like></like>
    </div>
  </div>
</template>

<script>
  import Comment from './Comment'
  import Hot from './Hot'
  import Like from './Like'

  export default {
    name: "Details",
    components: {
      'comment': Comment,
      'hot': Hot,
      'like': Like,
    },
    data() {
      return {
        values: [{
          title: '很长的标题',
          name: '小肥猪',
          headPic: require("../../assets/images/a.jpg"),
          val: '不知道泥萌有没有看英国BBC电视台的“宠物岛”（Pet island）系列纪录片的第四集。里面有一位英国绅士就是将自家的英国古代牧羊犬梳落的毛发收集起来，屯了六年，足足一大包，然后请当地专门提供狗宠物毛发编制服务的裁缝阿姨，先将狗狗的毛发用专门将纤维卷成线的机器，把狗狗的毛发卷成毛线，然后用这些狗狗毛发造成的毛线来编织成大件毛衣！ ',
          imgs: [require("../../assets/match/mao1.jpg"), require("../../assets/images/a.jpg")],
          time: '2018/10/16 18:35',
          num1: 23,
          num2: 44,
        }]
      }
    }
  }
</script>

<style scoped>
  #content {
    box-shadow: -2px 2px 10px 2px #bcbcbc;
    background: rgba(255, 255, 255, 0.9);
    width: 1240px;
    margin: auto;
    position: relative;
    padding-bottom:300px;
  }
h2{
  height: 50px;
  line-height: 50px;
}
  .left {
    display: inline-block;
    width: 800px;
    /*height: 1700px;*/

    border:1px solid #989898;
    margin:25px 0 0 25px;
    padding:22px;
  }
  .headpic{
    width: 740px;
    height: 90px;
    line-height: 70px;
  }
  .name{
    font-size:18px;
  }
.r{
  float:right;
}
  .headimg {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
.img{
  width: 754px;
  /*text-align: center;*/
  display:block;
  font-size:18px;

}
.img>img{
  margin:auto;
  max-width:754px;
}
.val{
  border-bottom: 1px dotted #ddd;
  padding-bottom: 60px;
}
.com{
  padding:60px 0 ;
}
  .right {
    position: absolute;
    top: 24px;
    right: 25px;
    width: 360px;
  }

</style>
