<template>
    <!--搜索-->
  <div class="row">
    <div class="col-lg-6">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for...">
        <span class="input-group-btn">
        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search
"></span></button>
      </span>
      </div><!-- /input-group -->
    </div><!-- /.col-lg-6 -->
  </div>
</template>

<script>
    export default {
        name: "Com_d",
      data() {
        return {
          input10: ''
        }
      }
    }
</script>

<style scoped>
.row{
  width: 400px;
  height: 40px;
  margin-bottom:80px;
}
</style>
