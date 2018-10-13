<template>
  <div class="row">
    <div class="d1 col-sm-1"></div>

    <div class="c1">
      <com_a></com_a>
      <com_a></com_a>
      <com_a></com_a>
      <com_a></com_a>
    </div>
    <div class="">
      <com_a></com_a>
      <com_a></com_a>
      <com_a></com_a>
      <com_a></com_a>
    </div>
    <com_paging class="col-sm-7 col-sm-offset-4">翻页</com_paging>
  </div>
</template>

<script>
  import Com_a from './Com_a.vue'
  import Com_paging from './Com_paging.vue'
  export default {
    name: "Share" ,
    components:{
      'com_a':Com_a,
      'com_paging': Com_paging,
    }
  }
</script>

<style scoped>

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
    margin-top: 80px;
  }
</style>
