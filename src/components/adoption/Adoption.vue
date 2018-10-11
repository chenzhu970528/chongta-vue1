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
    background:rgba(255,255,255,0.7);
    margin-top:30px;
    box-shadow:-5px 5px  2px 2px #aaa;
  }
</style>
