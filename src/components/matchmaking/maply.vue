<template>
    <div>
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
        申请
      </button>
      <div class="modal fade" id="myModal" tabindex="1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">婚配申请表</h4>
            </div>
            <div class="modal-body">
              <!--<button type="button" class="close" data-dismiss="alert">&times;</button>-->
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
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "maply",
      data() {
        return {
            input10: '',
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
        };
      }
    }


</script>

<style scoped>
  /*.main{*/
    /*width: 400px;*/
    /*height: 350px;*/
    /*border: 1px solid #8c9dff;*/
    /*border-radius: 10px;*/
    /*!*background-color: #dfedff;*!*/
    /*position: relative;*/
  /*}*/
  /*form{*/
    /*width: 400px;*/
    /*margin-left: 100px;*/
  /*}*/
  /*[type="radio"]:last-child{*/
    /*margin-left: 10px;*/
  /*}*/
  /*[type="submit"]{*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 150px;*/
  /*}*/
</style>
