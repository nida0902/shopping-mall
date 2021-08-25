<template>
  <div class="home">
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'Home',
  components: {
    AppHeader
  }
}
</script>

<style scoped>

</style>
