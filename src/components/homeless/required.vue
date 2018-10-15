<template>
  <div>
    <el-button type="text" @click="open">寻宠发布必读</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('救助和领养，不仅仅是一时的不忍和爱心，真的是一件需要我们花时\n' +
          '间，花精力、花金钱的事情。同时，它们的命运也在您的一念之间。如 \n' +
          '果您现在还没有能力做救助人，那么从宣传“领养代替购买、文明养宠，不 \n' +
          '遗弃、不伤害”开始，让周围的人正确的对待身边的动物', '寻宠发布必读', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>

<style scoped>
  div{
    display: inline-block;
  }

</style>
