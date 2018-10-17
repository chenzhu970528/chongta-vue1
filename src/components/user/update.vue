<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>编辑个人资料</span></div>
    <div class="inright">
      <form action="" id="update"></form>
      <h3>基本信息</h3>
      <el-row class="first">
        <el-col :span="7" :push="2"><span >登录名</span></el-col>
        <el-col :span="12" :push="2"><span class="det">我的shoujihao</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>昵称</span></el-col>
        <el-col :span="12" :push="2" class="iptext"><input type="text" placeholder=" 请输入内容" form="update"></el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>生日</span></el-col>
        <el-col :span="12" :push="2">
            <el-date-picker
              v-model="birth"
              type="date"
              size="small"
              placeholder="选择日期">
            </el-date-picker>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>真实姓名</span></el-col>
        <el-col :span="12" :push="2"><span class="det">我的shoujihao</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>所在地</span></el-col>
        <el-col :span="12" :push="2">
          <el-cascader
            :options="options2"
            size="small"
            @active-item-change="handleItemChange"
            :props="props"
          ></el-cascader>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>性别</span></el-col>
        <el-col :span="12" :push="2" class="iptext"><input type="radio" value="男">男 <input type="radio" name="fem">女</el-col>
      </el-row>
      <h3 class="sech3">联系方式</h3>
      <el-row class="first">
        <el-col :span="7" :push="2"><span >邮箱</span></el-col>
        <el-col :span="12" :push="2" class="iptext">
          <input type="email" placeholder=" 请输入邮箱" form="update" @change="checkemail" v-model="email">
          <span class="errormsg" v-if="flag">{{msgmail}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>手机</span></el-col>
        <el-col :span="12" :push="2"><span class="det">我的shoujihao</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :push="8"><input type="button" value="保存"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "update",
      data() {
        return {
          options2: [{
            label: '江苏',
            cities: []
          }, {
            label: '浙江',
            cities: []
          }],
          props: {
            value: 'label',
            children: 'cities'
          },
          msgmail:'',
          email:'',
          birth:'',
          flag:false
        };
      },

      methods: {
        handleItemChange(val) {
          console.log('active item:', val);
          setTimeout(_ => {
            if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
              this.options2[0].cities = [{
                label: '南京'
              }];
            } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
              this.options2[1].cities = [{
                label: '杭州'
              }];
            }
          }, 300);
        },
        checkemail:function(){
          var regEmail=/^[1-9a-zA-Z_]\w*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
          if(this.email==''){
            this.msgmail="请输入邮箱";
          }else if(!regEmail.test(this.email)){
            this.flag =true
            this.msgmail="邮箱格式不正确";
          }else this.flag=false
        },
      }
    };
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .right{
    position: relative;
    left: 40px;
    background-color: rgba(255,255,255,0.7);
    min-height: 780px;
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
  h3{
    text-align: left;
    margin-left: 1%;
    /*margin-top: 30px;*/
    font-weight: bold;
  }
  .sech3{
    margin-top: 30px;
  }
  .inright{
    width: 80%;
    /*background-color: palevioletred;*/
    position: absolute;
    top: 10%;
    left: 10%;
  }
  span{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*margin-left: 30px;*/
  }
  span.det{
    font-size: 13px;
    margin-left: 0;
  }
  .first{
    margin-top: 30px;
  }
  .iptext{
    /*height: 50px;*/
    line-height: 50px;
    margin-left: 10px;
  }
  [type="text"],[type="email"]{
    height: 30px;
    border: 1px solid #cecece;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.8);
    color: grey;
    margin-left: -12px;
  }
  [type="radio"]{
    margin-right: 10px;
  }
  [name="fem"]{
    margin-left: 5px;
  }
  [type="button"]{
    margin-top: 30px;
    height: 30px;
    width: 100%;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #5f85ff;
  }
  .errormsg{
    /*display: none;*/
    /*background-color: blue;*/
    margin-top: -50px;
    display: inline-block;
    width: 120px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ffb8ad;
    color: red;
    border-radius: 7px;
    text-align: center;
    background-color: #ffd9e0;
  }
</style>
