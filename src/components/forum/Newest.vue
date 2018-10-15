<template>
  <div>
   <com_a></com_a>
  </div>
</template>

<script>
  import Com_a from './Com_a.vue'
    export default {
        name: "Newest" ,
      components:{
        'com_a':Com_a,
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
