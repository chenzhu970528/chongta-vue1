<template>
  <!--日记-->
  <div>
    <com_a></com_a>
  </div>
</template>

<script>
  import Com_a from './Com_a.vue'
    export default {
        name: "Diary",
      components:{
        'com_a':Com_a,
      }
    }
</script>

<style scoped>
  .row{
    margin-top: -20px;
    margin-bottom: 20px;
  }
</style>
