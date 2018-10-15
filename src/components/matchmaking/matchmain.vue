<!--婚介中心-->
<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-7">选择</div>
        <match-hot></match-hot>
      </div>


      <router-link><button>我要发布</button></router-link>
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
  import  matchhot from './match-hot.vue'
    export default {
        name: "matchmain",
      components:{
        'app-header':Header,
        'match-list':matchlist,
        'change-page':changepage,
        'match-hot':matchhot
      }
    }
</script>

<style scoped>
  .container{
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
</style>
