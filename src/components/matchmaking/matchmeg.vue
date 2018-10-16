<template>
    <div class="col-xs-6 col-md-6 col-md-offset-0 col-lg-6 col-lg-offset-1">
      宠物信息等
      <m-aply></m-aply>
    </div>
    
</template>

<script>
  import maply from './maply.vue'

  export default {
        name: "matchmeg",
        components:{
          'm-aply': maply,

        }
    }
</script>

<style scoped>
  .col-xs-6{
    background-color: yellow;
    /*height: 100px;*/
  }

</style>
