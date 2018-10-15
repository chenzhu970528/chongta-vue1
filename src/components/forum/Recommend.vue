<template>
  <!--<div class="row">-->
  <!--<div class="d1 col-sm-1">精品推荐</div>-->
  <!--<button class="aa col-sm-1"><<</button>-->
  <!--<div class="col-sm-9">-->
  <!--<router-link tag="span" active-class="active"  role="presentation" to="/forum/recommend/1"><com_a class="d"></com_a></router-link>-->
  <!--<router-link tag="span" active-class="active"  role="presentation" to="/forum/recommend/2"><com_a class="d"></com_a></router-link>-->
  <!--<router-link tag="span" active-class="active"  role="presentation" to="/forum/recommend/3"><com_a class="d"></com_a></router-link>-->
  <!--</div>-->
  <!--<button class="bb col-sm-1">>></button>-->
  <!--<com_paging class="col-sm-7 col-sm-offset-3">翻页</com_paging>-->
  <!--</div>-->

  <div>
    <ul>
      <li>
        <img src="../../assets/images/a.jpg" alt="">
        <p ><span class="left" >荐 ❤100</span><a class="title">标题</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import Com_a from './Com_a.vue'
  import Com_paging from './Com_paging.vue'

  export default {
    name: "Recommend",
    data() {
      return {
        num: {"小可爱": 100, "卡哇伊": 201, "嘻嘻嘻": 301}
      }
    },


        methods: {
          d(index) {
            return 'id' + index;
          }
        },
        components: {
          'com_a': Com_a,
          'com_paging': Com_paging,
        }
  }
</script>

<style scoped>
  #d{
    margin-left: 0;
    margin-right: 0;
  }
  .row {
    margin-top: 80px;
    margin-bottom: 60px;
  }
ul{
  margin-left:-10px;
}
  li {
    color:white;
    position:relative;
    list-style: none;
    width: 380px;
    margin-bottom:70px ;
  }

  img {
    width: 380px;
    height: 255px;
  }
  p{
    background: #000000;
    opacity: 0.3;
    position:absolute;
    bottom:-10px;
    height: 40px;
    width: 100%;
    text-align:center;
  }
.left{
  position:absolute;
  left:0px;
  color: #c4cc26;
  font-weight:bold;
  line-height: 40px;
}
  a {
    text-align:center;
    height: 40px;
    line-height: 40px;
    width: 100%;
    text-decoration: none;
  }
  .title:hover{
    color:red;
  }

  /*.aa, .bb {*/
    /*width: 80px;*/
    /*height: 200px;*/
    /*background: white;*/
    /*margin-top: 80px;*/
  /*}*/

  /*.aa {*/
    /*margin-left: 25px;*/
    /*margin-right: 30px;*/
  /*}*/

  /*.bb {*/
    /*margin-left: -50px;*/
  /*}*/

  /*.d1 {*/
    /*background: #adadad;*/
    /*color: white;*/
    /*width: 50px;*/
    /*!*text-align: center;*!*/
    /*height: 298px;*/
    /*padding-top: 80px;*/
    /*font-size: 28px;*/
    /*font-weight: bold;*/
    /*margin-top: 40px;*/
  /*}*/

</style>

