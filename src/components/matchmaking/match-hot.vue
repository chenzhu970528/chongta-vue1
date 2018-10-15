<template>
    <div class="col-xs-4 hot">
      <h3>最受欢迎小可爱</h3>
      <hr>
      <hot-list></hot-list>
    </div>
</template>

<script>
  import hotlist from './hotlist.vue'
    export default {
        name: "match-hot",
      components:{
          'hot-list':hotlist
      }
    }
</script>

<style scoped>
  .hot{
    /*width: 300px;*/
    height: 500px;
    background-color: #ff8670;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  div h3{
    padding-top: 7px;
  }
</style>
