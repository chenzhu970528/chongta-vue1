<template>
  <div>
  <!--<div class="backImg"></div>-->
    <div id="content">
        <p>你的位置：宠它 > 宠宠交流</p>
      <!--<router-link tag="p" active-class="active"  role="presentation" to="/forum/notice"><notice class="aa"></notice></router-link>-->
      <div class="a"><input type="text" placeholder="请输入搜索内容"> <button>搜索</button><button><i class="el-icon-edit"></i></button>
     </div>
      <hr>
      <div>

      <recommend>精品推荐</recommend>
      <!--<hr>-->
        <div class="row body" >
          <newest class="col-sm-4">最新</newest>
          <newest class="col-sm-4">宠物日记</newest>
        </div>

      <!--<page>宠物日记，交流分享</page>-->
      </div>
      <!--<button><i class="el-icon-edit"></i></button>-->
        <!--<com_b></com_b>-->
      </div>
  </div>
</template>

<script>
  import Com_b from './Com_b.vue'
  import Notice from './Notice.vue'
  import Recommend from './Recommend.vue'
  import Newest from './Newest.vue'
  import Page from './Page.vue'

    export default {
        name: "Communication",
      components: {
        'com_b': Com_b,
        'notice': Notice,
        'recommend': Recommend,
        'newest': Newest,
        'page': Page,
      },
    }
</script>

<style scoped>
  body{margin: 0;padding:0}
  #content{
    background: #e4e4e4;
    width: 1240px;
    height:3000px;
    margin:auto;

  }
  .body{
    padding:0 10px;
  }
  .row{
    margin-left:0;
  margin-right:0;
  }
  .a{
    display: inline-block;
    margin-left: 700px;
  }
  .aa{
    background: white;
    width: 500px;
    height: 100px;
  }
.backImg{
  border-radius: 6px;
  width:100%;
  height: 395px;
  background: url("../../assets/images/dog.jpg") no-repeat;
  margin-bottom:30px;
}


</style>
