<template>
  <el-container class="my-container">
    <!--  测导航-->
    <el-aside :width="isOpen?'200px' : '64px'" class="my-aside">
<!--      logo图-->
      <div class="logo" :class="{myLogo: !isOpen}"></div>
<!--      测导航栏------------------------------------------>
 <!-- :collapse="isCollapse" -->
      <el-menu
        default-active="/"
        class="el-menu-vertical-demo el-menu"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="!isOpen"
        :collapse-transition="false"
       router
      >
       <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
       <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
       <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
      <!--    测导航栏结束----------------------------------->

    </el-aside>

    <el-container>
<!--      头-->
      <el-header class="my-header">
        <span @click="toggleAside" class="el-icon-s-fold myspan"></span>
        <span class="myspan">江苏传智播客</span>

        <!--    下拉菜单-->
        <el-dropdown class="my-dropdown">
<!--          用户信息-->
           <span class="el-dropdown-link">
            <img class="avatar" src="../../assets/images/avatar.jpg" alt="">
            <span class="name"> 用户名称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
<!--  下拉详情-->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-header>
<!--      体-->
      <el-main>
      <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 数据在data中声明
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleAside () {
      // 切换左菜单
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped lang="less">

  .my-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /*侧边栏样式*/
    .my-aside {
      background-color: #002033;
    }
    /*头部样式*/
    .my-header {
      border: 1px solid #ddd;
      line-height: 60px;}

      .myspan {
        font-size: 24px;
      }
    .my-dropdown {
      float: right;

      .avatar {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
    /*头部样式结束*/

    /*测导航栏*/
    .logo{
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/images/logo_admin.png) no-repeat
        center / 140px auto;
    }
    .myLogo{
      // 写在logo样式后将来覆盖logo的样式
      background-image: url(../../assets/images/logo_admin_01.png);
      background-size: 36px auto;

    }
    .el-menu {
      border-right: 0;
    }
    /*测导航栏结束*/

  }

</style>
