<template>
    <div>
     <h2>大图</h2>
      <div>内容</div>
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

</style>
