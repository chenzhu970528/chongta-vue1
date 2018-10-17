<template>
  <div class="left">
    <el-menu
      default-active="2"
      text-color="#686868"
      background-color="rgba(255,255,255,0.5)"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/personal">个人资料</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/update">编辑个人资料</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/changepwd">修改密码</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <span slot="title">我的发布</span>
        <el-menu-item-group>
          <el-menu-item index="2-1"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/myado">领养</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/mylost">寻宠启示</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/myhomls">流浪小宠</router-link></el-menu-item>
          <el-menu-item index="2-4"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/mymatch">相亲角</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <span slot="title">我的帖子</span>
      </el-submenu>
      <el-submenu index="4">
        <span slot="title">消息中心</span>
        <el-menu-item-group>
          <el-menu-item index="4-1"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/sys">系统消息</router-link></el-menu-item>
          <el-menu-item index="4-2"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/myaply">我的申请</router-link></el-menu-item>
          <el-menu-item index="4-3"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/aplyme">申请我的</router-link></el-menu-item>
          <el-menu-item index="4-4"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/mycom">我的评论</router-link></el-menu-item>
          <el-menu-item index="4-5"><router-link tag="li" active-class="active"  role="presentation" to="/user/15/comme">评论我的</router-link></el-menu-item>
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
