<!--婚介详情-->
<template>
  <div>
    <div class="container">
      <current-way></current-way>
      <h2>标题</h2>

      <div class="row">
        <div class="col-xs-10 col-xs-offset-1 cent">
          <sowing-map></sowing-map>
          <match-message></match-message>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1 cent msg">
        寄语

        </div>
      </div>

      <br>
      <br>
      <br>

      <form action="">
        <p>宠物类型：
          <el-input
            placeholder="猫"
            v-model="input10"
            clearable>
          </el-input>
        </p>
        <p>
          爱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：
          <el-input
            placeholder="请输入内容"
            v-model="input10"
            clearable>
          </el-input>
        </p>
        <!--<div>-->
        <div class="block">
          <span class="demonstration">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日：</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <!--</div>-->
        <p>
          年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：
          <el-input
            placeholder="请输入内容"
            v-model="input10"
            clearable>
          </el-input>
        </p>
        <p>体检报告：</p>
        <p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</p>
        <p>性&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：
          <input type="radio"> 男<input type="radio" > 女
        </p>
        <p>交&nbsp;&nbsp;配&nbsp;&nbsp;史：
          <input type="radio">有<input type="radio" >无
        </p>
        <input type="submit" value="提交">
      </form>

    </div>
    <!--<div>-->
      <!--<foot></foot>-->
    <!--</div>-->
  </div>

</template>

<script>
  import currentway from './currentway'
  import sowingmap from './sowingmap.vue'
  import  matchmsg from './matchmeg.vue'
    export default {
      name: "matchDel",
      components: {
        'current-way': currentway,
        'sowing-map': sowingmap,
        'match-message': matchmsg
      },
      data() {
        return {
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
          input10: '',
        };
      }

    };
</script>

<style scoped>
  .container{
    background:rgba(255,255,255,0.9);
    margin-top:100px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
  }
  .cent{
    background-color: orange;
  }
  .msg{
    margin-top: 10px;
  }
  el-input{
    display: inline-block;
    width: 50px;
  }
</style>
