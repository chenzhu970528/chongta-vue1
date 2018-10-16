<template>
  <el-input
    type="textarea"
    autosize
    placeholder="请输入内容"
    v-model="textarea2">
  </el-input>
</template>

<script>
    export default {
        name: "comment",
        data() {
          return {
            textarea2: '',
        }
      }
    }
</script>

<style scoped>

</style>
