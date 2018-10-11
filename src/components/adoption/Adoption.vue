<template>
    <div class="container">
      <h2>领养中心</h2>
      <sildes-show></sildes-show>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
</template>

<script>
  import Slideshow from '../adoption/AdoptionSlideshow.vue'
    export default {
        name: "Adoption",
      components:{
        'sildes-show':Slideshow
      }
    }
</script>

<style scoped>
  .container{
    background:rgba(255,255,255,0.9);
    margin-top:100px;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
  }
</style>
