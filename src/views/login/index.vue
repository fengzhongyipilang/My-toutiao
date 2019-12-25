<template>
  <div class="container">
    <el-card class="my-card">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <img src="../../assets/images/logo_index.png" alt />
        <!-- 表单 -->
        <!-- -----------------手机号表单------------------ -->
        <el-form-item prop="mobile">
        <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
        <!-- -----------------验证码表单----------------- -->
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code" placeholder="请输入验证码"
            style="width:238px; margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <!-- -------------复选框表单---------------------- -->
        <el-form>
          <el-checkbox :value="true">I agree</el-checkbox>
        </el-form>
        <!-- -----------------登录--------------------- -->
        <el-form>
          <el-button @click="login()" type="primary" style="width:100%">登录</el-button>
        </el-form>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkMobile = (rule, value, callback) => {
      // 是否合法手机号 自己的校验逻辑
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机格式不对'))
      }
      callback()
    }

    return {
      // 容器
      loginForm: {
        // 声明mobile
        mobile: '',
        code: ''
      },
      loginRules: {
        // 给字段添加校验规则（多个）
        mobile: [
          { required: true, message: ' 请输入手机号', trigger: 'blur' },
          // 自定义校验规则
          { validate: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: ' 请输入手机号', trigger: 'blur' },
          { len: 6, message: '验证码长度为6位', trigger: 'blur' }

        ]
      }
    }
  },
  methods: {
    // 生命周期钩子函数（当组件渲染完毕后执行）
    login () {
      // 调用 validate 对整体表进行校验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 校验成功  调用登录接口
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
            .then(res => {
              // 成功 跳转
              // 注意 登录 不够完善
              this.$router.push('/')
            })
            .catch(() => {
              // 失败 提示
              this.$message.error('手机号或验证码错误')
            })
        }
      })
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
  background: url(../../assets/images/login.gif) no-repeat center / cover;
}

.my-card {
  width: 400px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  background: rgba(0, 0, 0, .2);

  img {
    display: block;
    width: 200px;
    margin: 0 auto 20px;
  }
}
</style>
