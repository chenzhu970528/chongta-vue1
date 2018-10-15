<template>
  <div>
  <div class="backImg"></div>
    <div id="content">
        <p>你的位置：宠它 > 宠宠交流</p>
     <com_notice></com_notice>
      <input type="text" placeholder="请输入搜索内容"> <button>搜索</button><button>发表</button>
      <hr>
      <recommend>精品推荐</recommend>
      <hr>
      <newest>最新</newest>
      <page>宠物日记，交流分享</page>

        <button>发帖</button>
        <com_b></com_b>
      </div>
  </div>
</template>

<script>
  import Com_b from './Com_b.vue'
  import Com_notice from './Com_notice.vue'
  import Recommend from './Recommend.vue'
  import Newest from './Newest.vue'
  import Page from './Page.vue'

    export default {
        name: "Communication",
      components: {
        'com_b': Com_b,
        'com_notice': Com_notice,
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
    width: 89.32%;
    height:3000px;
    margin:auto;
  }
  .row{
    margin-left:0;
    margin-right:0;
  }
.backImg{
  border-radius: 6px;
  width:100%;
  height: 395px;
  background: url("../../assets/images/dog.jpg") no-repeat;
  margin-bottom:30px;
}


</style>
