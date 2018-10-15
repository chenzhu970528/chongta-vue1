<!--婚介中心-->
<template>
    <div class="container">
      <div class="select">选择</div>
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
    export default {
        name: "matchmain",
      components:{
        'app-header':Header,
        'match-list':matchlist,
        'change-page':changepage,
      }
    }
</script>

<style scoped>
  .container{
    background:rgba(255,255,255,0.9);
    margin-top:100px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;

  }
  .select{
    width: 700px;
    height: 500px;
    background-color: #cfc3e2;
  }
</style>
