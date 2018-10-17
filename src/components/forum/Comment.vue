<template>
  <div>
    <ul>
      <li v-for="com in comment">
        <div class="border">
          <div class="head">
            <img :src='com.head' alt="">
            <div class="headRight">
              <p class="name">{{com.name}}</p>
              <p>{{com.time}}</p>
            </div>
          </div>
          <div class="val">
            <div class="but">
              <div>
                <p>{{com.val}}</p>
              </div>
              <div class="com1">
                <button type="button" class="btn btn-primary btn-sm active">回复</button>
              </div>
            </div>

            <!--回复-->
            <div class="com" v-for="reply in replys">
              <div class="head">
                <img :src='reply.head' alt="">
                <div class="headRight">
                  <p><span class="name">{{reply.name1}}</span> 回复<span class="name">{{reply.name2}}</span> </p>
                  <p>{{reply.time}}</p>
                </div>
              </div>
              <div class="val but">
                <p class="p">{{reply.val}}</p>
                <div class="com1">
                <button type="button" class="btn btn-primary btn-sm active">回复</button>
              </div>
              </div>
            </div>

          </div>

        </div>
      </li>
      <li></li>
    </ul>
    <button type="button" class="btn btn-primary btn-lg btn-block">加载更多</button>
    <!--评论-->

  </div>
</template>

<script>
  export default {
    name: "Comment",
    data() {
      return {
        comment:[
          {
          name: '向萨安十多个人',
          time:'2018/10/17 10:08',
          head: require('../../assets/images/a.jpg'),
            val:'说得很好！！！当迷失于都市却有着不凡身世的霸道总攻喵，遇到家境优渥又恃宠而骄的任性喵受，究竟会发生怎样的化学反应？当迷失于都市却有着不凡身世的霸道总攻喵，遇到家境优渥又恃宠而骄的任性喵受，究竟会发生怎样的化学反应？',
        },
          {
          name: '少时诵诗书所',
          time:'2018/10/17 10:09',
          head: require('../../assets/match/mao1.jpg'),
          val:'说得很好！！！当迷失于都市却有着不凡身世的霸道总攻喵当迷失于都市却有着不凡身世的霸道总攻喵'
        }
        ],
        replys:[
          {
            name1: '双方都',
            name2: '奋斗奋斗',
            time:'2018/10/17 10:08',
            head: require('../../assets/images/a.jpg'),
            val:'家境优喵受，究竟会发生怎样的化学反应？'
          },{
            name1: '滴滴滴',
            name2: '功能',
            time:'2018/10/17 10:08',
            head: require('../../assets/match/mao1.jpg'),
            val:'世的霸道总攻喵，遇到家发生怎样的化学反应？'
          },{
            name1: '的非官方',
            name2: '发的发的',
            time:'2018/10/17 10:08',
            head: require('../../assets/images/a.jpg'),
            val:'说的任性样的化学反应？'
          },
        ]

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
    margin-bottom:20px;
  }
.headRight{
  display: inline-block;
}
  .headRight>p{
    height: 15px;
  }
  .name{
    font-size:15px;
    color: #285f8f;
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: 22px;
    vertical-align: unset;
  }

  .val {
    margin-left: 50px;
    font-size:15px;
  }
.com{
  margin-bottom:-10px ;
}
.com1{
  height: 30px;
  margin-top:-10px;
}
  .btn-sm{
display: none;
}
.but:hover button{
  display: block;
}
  .border{
    border-bottom:1px dotted #ccc;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
</style>
