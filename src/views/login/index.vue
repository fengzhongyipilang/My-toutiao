<template>
  <div class="container">
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 表单 -->
      <!-- 手机号表单 -->
      <el-from-item>
        <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
      </el-from-item>
      <!-- 验证码表单 -->
      <el-from-item>
        <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:238px;margin-right:10px"></el-input>
        <el-button>发送验证码</el-button>
      </el-from-item>
      <!-- 复选框表单 -->
      <el-form>
        <el-checkbox :value="true">I agree</el-checkbox>
      </el-form>
      <!-- 登录 -->
      <el-form>
        <el-button type="primary" style="width:100%">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  /*// 背景图定位 / 背景图尺寸 contain 等比缩放完整在容器内显示  cover  等比缩放完全铺面容器*/
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
}

.my-card {
  width: 400px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);

  img {
    display: block;
    width: 200px;
    margin: 0 auto;
  }
}
</style>
