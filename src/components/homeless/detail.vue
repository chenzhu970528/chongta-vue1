<template>
<div class="container">
  <el-row>
    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/homeless/u=1177403016,309772193&fm=26&gp=0.jpg" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">详细信息</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date()
      };
    }
  }
</script>

<style scoped>
.container {
background: rgba(255, 255, 255, 0.9);
margin-top: 50px;
box-shadow: -2px 2px 10px 2px #bcbcbc;
min-height: 500px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
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
