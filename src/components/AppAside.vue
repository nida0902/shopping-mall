<template>
  <div class="appAside">
    <el-menu class="el-menu--horizontal-demo" :default-active="this.$route.path" router>
      <el-menu-item index="/home/goods">
        <i class="el-icon-menu" />
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/home/column">
        <i class="el-icon-document" />
        <span slot="title">栏目管理</span>
      </el-menu-item>
      <el-menu-item index="/home/users">
        <i class="el-icon-user" />
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/home/manage">
        <i class="el-icon-setting" />
        <span slot="title">系统配置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'AppAside'
}
</script>

<style scoped lang="less">
.appAside {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
