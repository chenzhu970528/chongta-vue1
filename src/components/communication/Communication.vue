<template>
    <div>
     <div id="backImg"></div>
      <p>精品推荐</p>
      <det_a></det_a>
      <button>发帖</button>
      <publish></publish>
    </div>
</template>

<script>
  import Publish from './Com_son_b.vue'
  import Det_a from './Com_son_a.vue'
    export default {
        name: "Communication",
      components: {
        'publish': Publish,
        'det_a':Det_a,
      }
    }
</script>

<style scoped>
  body{margin: 0;padding:0}
#backImg{
  width:100%;
  height: 395px;
  background: url("../../assets/images/dog.jpg") no-repeat;
}
</style>
