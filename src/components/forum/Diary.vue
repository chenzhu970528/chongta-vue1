<template>
  <div class="row">
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
        name: "Diary",
      components:{
        'com_a':Com_a,
        'com_paging': Com_paging,
      }
    }
</script>

<style scoped>
  .row{
    margin-top: -20px;
    margin-bottom: 20px;
  }
</style>
