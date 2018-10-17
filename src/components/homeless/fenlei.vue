<template>
  <div style="height: 20px">
    <div class="col-xs-8">
      <div style="font-size: 18px">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <!--<div style="background-color: yellow;height: 300px;width: 700px"></div>-->
            <all></all>
          </el-tab-pane>
          <el-tab-pane label="寻找中" name="second" ><div ><looking></looking></div></el-tab-pane>
          <el-tab-pane label="已找到" name="third"><looked></looked></el-tab-pane>
        </el-tabs>
      </div>
      <div class="test">
        <span>公告：
          <required></required>|意见发聩 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-badge :value="12" class="item">
          <el-button size="small" style="margin-top: -15px;margin-left: 75px">全部消息</el-button>
      </el-badge>
        </span>
      </div>
    </div>
    <hot></hot>
    <!--<reward></reward>-->
  </div>
</template>

<script>
  import required from './required'
  import all from './all'
  import looking from './looking'
  import looked from './looked'
  import hot from './hot'
  // import reward from './reward'

    export default {
      components: {
        'required': required,
        'all':all,
        'looking': looking,
        'looked':looked,
        'hot':hot,
        // 'reward':reward
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
  .test{
    position: absolute;
    top: -10px;
    right: 50px;
  }

</style>
