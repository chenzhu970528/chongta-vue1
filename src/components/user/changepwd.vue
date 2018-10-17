<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>修改密码</span></div>
    <div class="inner">
      <h4>请输入原密码</h4>
      <el-row class="first">
        <el-col :span="12" :push="3">
          <el-input
            placeholder="请输入内容"
            v-model="inputold"
            type="password"
            size="small"
          >
          </el-input>
        </el-col>
      </el-row>
      <h4 class="sech3">修改密码</h4>
      <el-row class="first">
        <el-col :span="8" :push="2"><span>请输入新密码</span></el-col>
        <el-col :span="12" :push="3" class="inp">
          <el-input
            placeholder="请输入内容"
            v-model="inputnew"
            type="password"
            size="small"
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :push="2"><span>请再次输入新密码</span></el-col>
        <el-col :span="12" :push="3" class="inp">
          <el-input
            placeholder="请输入内容"
            v-model="inputnew2"
            type="password"
            size="small"
            @change="checkPwd"
          >
          </el-input>
          <span v-if="flag1">{{msgPassword}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :push="8">
          <input type="button" value="保存" disabled="disabled" id="item" v-bind:class="className">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "changepwd",
      data(){
        return{
          inputold:'',
          inputnew:'',
          inputnew2:'',
          msgPassword:'',
          flag1:false,
          className:'btn2'
        }
      },
      methods:{
          checkPwd:function () {
            if(this.inputnew!==this.inputnew2){
              this.flag1=true;
              this.msgPassword='与第一次不符，请重新输入！';
              $("#item").attr("disabled","true");
            }else {
              this.flag1=false;
              $("#item").removeAttr("disabled");
              this.className='btn1'
            }
          }
      }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .right{
    position: relative;
    left: 40px;
    min-height: 780px;
    background-color: rgba(255,255,255,0.7);
  }
  .route{
    position: relative;
    left: 5%;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*background-color: palevioletred;*/
    color: #747474;
  }
  .route span{
    margin-right: 10px;
    font-size: 14px;
  }
  .route span:last-child{
    color: #4e76ff;
  }
  .first{
    margin-top: 30px;
  }
  h4{
    text-align: left;
    margin-left: 1%;
    font-weight: bold;
  }
  .inner{
    width: 80%;
    position: absolute;
    left: 10%;
    top: 10%;
  }
  .sech3{
    margin-top: 30px;
  }
  span{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    /*margin-left: 30px;*/
  }
  .inp{
    height: 50px;
    line-height: 50px;
  }
  .inp span{
    text-align: center;
    display: inline-block;
    width: 200px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ffb8ad;
    color: red;
    border-radius: 6px;
    background-color: #ffd9e0;
  }
  .btn1{
    margin-top: 40px;
    height: 30px;
    width: 100%;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #5f85ff;
  }
  .btn2{
    margin-top: 40px;
    height: 30px;
    width: 100%;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #9b9b9b;
  }
</style>
