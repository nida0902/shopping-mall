<template>
  <div class="appHeader">
    <div class="title">后台管理系统</div>
    <div class="user">
      <div class="nowTime">{{ nowTime }}</div>
      <el-divider direction="vertical" />
      <div class="userInfo">
        <el-dropdown :show-timeout="0">
          <span>
            {{ userInfo.username }}<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu>
            <el-dropdown-item @click.native="logout"><i class="el-icon-switch-button" />退出账号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { getStore, removeToken, setToken } from '@/utils/tool'
import Moment from 'moment'
import { logout } from '@/api'
import router from '@/router'

export default {
  name: 'Header',
  data() {
    return {
      userInfo: '',
      nowTime: Moment().format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted() {
    this.userInfo = getStore('userInfo')
    // 当前时间动态显示
    const _this = this
    this.timer = setInterval(function() {
      _this.nowTime = Moment().format('YYYY-MM-DD HH:mm:ss')
    })
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    logout() {
      logout(this.userInfo).then(result => {
        if (result.msg === 'success') {
          // todo token信息删除
          removeToken('token')
          router.push('/login')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.appHeader {
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;
  border-color: #e7e7e7;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    color: #777777;
  }

  .user {
    display: flex;
    align-items: center;

    .nowTime {
      font-size: 14px;
    }
  }
}
</style>
