<template>
    <div>
     <div id="backImg"></div>
      <p>精品推荐</p>
      <div id="">内容</div>
      <button>发帖</button>
      <publish></publish>
    </div>
</template>

<script>
  import Publish from './Publish.vue'
    export default {
        name: "Communication",
      components: {
        'publish': Publish
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
