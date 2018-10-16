<template>
  <div>
    <ul>
      <li>
        <div>
          <div class="head">
            <img :src='head' alt="">
            <div class="headRight">
              <p>{{name}}</p>
              <p> 2018/10/15 21:10</p>
            </div>

          </div>
          <div class="val">
            <div style="background: white">
              <p>
                说得很好！！！当迷失于都市却有着不凡身世的霸道总攻喵，遇到家境优渥又恃宠而骄的任性喵受，究竟会发生怎样的化学反应？当迷失于都市却有着不凡身世的霸道总攻喵，遇到家境优渥又恃宠而骄的任性喵受，究竟会发生怎样的化学反应？</p>

            </div>
            <button>回复</button>
            <!--回复评论-->
            <div>
              <img :src={head} alt="">
              <p><span>{{name}}</span> 回复 <span>{{name}}</span> </p>
               <p>2018/10/16 21:27</p>
              <div>

                <p>赞同赞同ヾ(❀^ω^)ノﾞ</p>
              </div>
              <button>评论回复</button>
            </div>
          </div>

        </div>
      </li>
      <li></li>
    </ul>
    <!--评论-->

  </div>
</template>

<script>
  export default {
    name: "Comment",
    data() {
      return {
        name: '向萨安十多个人',
        head: require('../../assets/images/a.jpg')
      }
    }
  }
</script>

<style scoped>
  ul {

  }

  li {

    margin-left: -40px;
    list-style: none;
  }
  .head{
    width: 754px;
    height: 50px;
    line-height: 50px;
  }
.headRight{
  display: inline-block;
}
  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    vertical-align: unset;
  }

  .val {
    margin-left: 55px;
  }
</style>
