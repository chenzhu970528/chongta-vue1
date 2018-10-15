<template>
  <div class="row">
    <div class="d1 col-sm-2">最新</div>
    <div class="d2">
      <com_a></com_a>
      <com_a></com_a>
      <com_a></com_a>
      <com_a></com_a>
    </div>
  </div>
</template>

<script>
  import Com_a from './Com_a.vue'
  import Com_paging from './Com_paging.vue'
    export default {
        name: "Newest" ,
      components:{
        'com_a':Com_a,
        'com_paging': Com_paging,
      }
    }
</script>

<style scoped>
  .row{
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .d1{
    background: #adadad;
    color:white;
    width: 50px;
    /*text-align: center;*/
    height: 298px;
    padding-top:80px;
    font-size:28px;
    font-weight: bold;
    margin-right:20px;
    margin-top: 40px;
  }
  .d2{

  }
</style>
