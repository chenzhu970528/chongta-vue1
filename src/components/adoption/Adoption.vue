<template>
    <div>
      <h2>领养中心</h2>
      <sildes-show></sildes-show>
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

</style>
