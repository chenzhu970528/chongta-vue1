<template>
  <div class="row" style="height: 20px">
    <div class="col-xs-5">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first"><all></all></el-tab-pane>
        <el-tab-pane label="寻找中" name="second"><looking></looking></el-tab-pane>
        <el-tab-pane label="已找到" name="third"><looked></looked></el-tab-pane>
      </el-tabs>
    </div>
    <div class="col-xs-4">
    <span>公告：
      <required></required>
      <!--<a href="">寻宠发布必读</a>-->
      |意见发聩 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-badge :value="12" class="item">
          <el-button size="small" style="margin-top: -15px">全部消息</el-button>
      </el-badge>
    </span>
  </div>

  </div>
</template>

<script>
  import required from './required'
  import all from './all'
  import looking from './looking'
  import looked from './looked'
    export default {
      components: {
        'required': required,
        'all':all,
        'looking': looking,
        'looked':looked
      },
      data() {
        return {
          activeName2: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
        }
</script>

<style scoped>

</style>
