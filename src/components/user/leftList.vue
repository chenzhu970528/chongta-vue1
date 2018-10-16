<template>
  <div class="left">
    <!--<div class="listbg"></div>-->
    <!--<el-tabs :tab-position="tabPosition">-->
      <!--<el-tab-pane label="个人资料">-->
        <!--<personal></personal>-->
      <!--</el-tab-pane>-->
      <!--<el-tab-pane label="我的发布">-->
        <!--<my-publish></my-publish>-->
      <!--</el-tab-pane>-->
      <!--<el-tab-pane label="我的帖子">-->
        <!--<forum></forum>-->
      <!--</el-tab-pane>-->
      <!--<el-tab-pane label="消息中心">-->
        <!--<message></message>-->
      <!--</el-tab-pane>-->
    <!--</el-tabs>-->
    <!--<el-row>-->
      <!--<el-col :span="10">-->
        <!--<el-row class="tac">-->
          <!--<el-col :span="5">-->
            <el-menu
              default-active="2"
              text-color="#686868"
              background-color="rgba(255,255,255,0.5)"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <span><router-link active-class="active"  role="presentation" to="/user/45/personal" exact><a
                    href="">个人资料</a></router-link></span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">编辑个人资料</el-menu-item>
                  <el-menu-item index="1-2">修改密码</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <span slot="title">我的发布</span>
                <el-menu-item-group>
                  <el-menu-item index="2-1">我的领养</el-menu-item>
                  <el-menu-item index="2-2">我的寻宠启示</el-menu-item>
                  <el-menu-item index="2-1">我的招领启事</el-menu-item>
                  <el-menu-item index="2-2">我的相亲角</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <span slot="title">我的帖子</span>
              </el-submenu>
              <el-submenu index="4">
                <span slot="title">消息中心</span>
                <el-menu-item-group>
                  <el-menu-item index="4-1">系统消息</el-menu-item>
                  <el-menu-item index="4-2">我的申请</el-menu-item>
                  <el-menu-item index="4-1">申请我的</el-menu-item>
                  <el-menu-item index="4-2">我的评论</el-menu-item>
                  <el-menu-item index="4-2">评论我的</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  // import personal from './personal.vue'
  // import forum from './forum.vue'
  // import message from './message.vue'
  // import mypublish from './mypublish.vue'
    export default {
      name: "leftList",
      components:{
        // 'personal':personal,
        // 'forum':forum,
        // 'message':message,
        // 'my-publish':mypublish
      },
      data() {
        return {
          tabPosition: 'left',
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      computed:mapGetters([
        'UserId'
      ])
    };
</script>

<style scoped>
  .left{
    position: relative;
    top: 40px;
    /*left: 40px;*/
    /*background-color: rgba(255,255,255,0.5);*/
  }
  .listbg{
    width: 200px;
    height: 200px;

    position: relative;
    z-index: -1;
  }

</style>
