<template>
    <div>

      <el-row>
        <el-col :span="7" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 3 : 0">
          <router-link tag="div" to="/adoption/details/7"><a>
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/homeless/u=1177403016,309772193&fm=26&gp=0.jpg" class="image">
            <div style="padding: 14px;">
              <span>可爱小猫求领养</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
              </div>
            </div>
          </el-card>
          </a></router-link>
        </el-col>
      </el-row>

      <button style="margin: 20px auto" type="button" class="btn btn-default btn-lg btn-block">加载更多</button>
    </div>
</template>

<script>
    export default {
        name: "AdoptionList",
      data() {
        return {
          currentDate: new Date()
        };
      }
    }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  .el-col{
    margin-left:25px;
    margin-top: 25px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }


  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
