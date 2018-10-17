<template>
  <div>

    <div id="content">
      <p>你的位置：宠它 > 宠宠交流</p>
      <div>
        <recommend>精品推荐</recommend>

      </div>
      <com_d></com_d>
      <div>
        <div class="left">
          <div class="row body">
            <newest class="col-sm-6">最新</newest>
            <diary class="col-sm-6">宠物日记</diary>
          </div>
          <div class="row body">
            <share class="col-sm-6">日常交流</share>
            <newest class="col-sm-6">宠物日记</newest>
          </div>
        </div>
        <div class="right">
          <hot></hot>
          <like></like>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Com_b from './Com_b.vue'
  import Com_d from './Com_d.vue'
  import Recommend from './Recommend.vue'
  import Newest from './Newest.vue'
  import Hot from './Hot'
  import Like from './Like'
  import Share from './Share'
  import Diary from './Diary'


  export default {
    name: "Communication",
    components: {
      'com_b': Com_b,
      'com_d': Com_d,
      'recommend': Recommend,
      'newest': Newest,
      'share':Share,
      'diary':Diary,
      'hot': Hot,
      'like': Like,
    },
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0
  }

  #content {
    box-shadow: -2px 2px 10px 2px #bcbcbc;
    background: rgba(255, 255, 255, 0.9);
    width: 1240px;
    height: 2000px;
    margin: auto;
    position: relative;
  }

  .body {
    padding: 0 10px;
    margin: 10px 0;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .left {
    display: inline-block;
    width: 830px;
  }

  .right {
    display: inline-block;
    right: 60px;
    position: absolute;
    width: 360px;
    margin-top: 10px;
    margin-right: -35px;
  }


</style>
