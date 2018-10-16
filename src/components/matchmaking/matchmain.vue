<!--婚介中心-->
<template>
    <div class="cont container">
      <div class="row">
        <div class="col-xs-7">选择</div>
      </div>
      <router-link to="/matchmaking/mpublish"><button>我要发布</button></router-link>
      <match-list></match-list>
      <change-page></change-page>
      <br>
      <br>
      <br>

    </div>

</template>
<script>
  import Header from '../Header.vue'
  import  matchlist from './matchlist.vue'
  import changepage from './changepage.vue'
  // import  matchhot from './match-hot.vue'
    export default {
        name: "matchmain",
      components:{
        'app-header':Header,
        'match-list':matchlist,
        'change-page':changepage,
        // 'match-hot':matchhot
      }
    }
</script>

<style scoped>
  .cont{
    width: 1240px;
    background:rgba(255,255,255,0.9);
    margin-top:100px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    position: relative;
  }
  .col-xs-7{
    /*width: 700px;*/
    height: 500px;
    background-color: #cfc3e2;
    margin-top: 10px;
  }
  button{
    border: none;
    background-color: #7197ff;
    color: whitesmoke;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
</style>
