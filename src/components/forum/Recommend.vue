<template>
  <div class="row">
    <div class="d1 col-sm-2">精品推荐</div>
    <div class="col-sm-10 col-sm-offset-1">
     <com_a class="d"></com_a>
     <com_a class="d"></com_a>
     <com_a class="d"></com_a>
    </div>
    <com_paging class="col-sm-7 col-sm-offset-4">翻页</com_paging>
  </div>
</template>

<script>
  import Com_a from './Com_a.vue'
  import Com_paging from './Com_paging.vue'

  export default {
        name: "Recommend",
      components:{
        'com_a':Com_a,
        'com_paging': Com_paging,
      }
    }
</script>

<style scoped>
  .row{
    margin-top: 40px;
    margin-bottom: 40px;
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
    margin-top: 40px;
  }

</style>

