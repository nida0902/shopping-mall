<template>
  <div class="login">
    <div class="loginDiv">
      <div class="title">登录</div>
      <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password prefix-icon="el-icon-lock" placeholder="密码" />
        </el-form-item>
        <el-form-item size="small">
          <el-checkbox v-model="isRemember">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getStore, setStore, setToken } from '@/utils/tool'
import { login } from '@/api'
import router from '@/router'

export default {
  name: 'LoginVue',
  data() {
    return {
      isRemember: true,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    const userInfo = getStore('userInfo')
    if (userInfo) {
      this.loginForm.username = userInfo.username
      this.loginForm.password = userInfo.password
      this.isRemember = true
    }
  },
  methods: {
    onSubmit() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          if (this.isRemember) {
            setStore('userInfo', this.loginForm)
            login(this.loginForm).then(result => {
              // todo
              if (result.msg === 'success') {
                // todo token信息保存
                setToken('token')
                router.push('/home')
              }
            })
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login {
  height: 100%;
  width: 100%;
  background: url("~@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;

  .loginDiv {
    width: 360px;
    height: 350px;
    background-color: white;
    border-radius: 5px;

    .title {
      font-size: 22px;
      text-align: center;
      margin-top: 30px;
    }

    .el-form {
      margin: 30px;

      .el-button {
        width: 100%;
      }
    }
  }
}

</style>
