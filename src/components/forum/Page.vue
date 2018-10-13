<template>
  <div class="row">
    <ul class="list-group">
    <router-link class="d1 col-sm-1 " tag="li" active-class="active"  role="presentation" to="/forum/diary"><a>领养日记</a></router-link>
    <router-link class="d1 d col-sm-1 " tag="li" active-class="active"  role="presentation" to="/forum/share"><a>交流分享</a></router-link>
 </ul>
    <share></share>
    <router-view></router-view>

 </div>
</template>

<script>
  import Com_a from './Com_a.vue'
  import Com_paging from './Com_paging.vue'
  import share from './Share.vue'
  export default {
    name: "Page" ,
    components:{
      'com_a':Com_a,
      'com_paging': Com_paging,
      'share': share,
    }
  }
</script>

<style scoped>


  .d1{
    margin-top: 40px;
    display: table-row;
    background: #adadad;
    width: 50px;
    height: 200px;
    padding-top:30px;
    font-size:28px;
    font-weight: bold;
  }
  .d{
   margin-top:230px;
   margin-left:-50px;
    height: 490px;
  }
  a{
    text-decoration: none;
    color:white;
  }
</style>
