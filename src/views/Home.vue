<template>
  <div class="home">
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <app-aside />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppAside from '@/components/AppAside'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppAside
  }
}
</script>

<style scoped lang="less">
.home {
  height: 100%;
  .el-container{
    height: 100%;
  }
}
</style>
