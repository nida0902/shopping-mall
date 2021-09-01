<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
}

.title {
  margin: 10px 10px 15px 10px;
  border-left: 3px solid #68affc;
  padding-left: 10px;
  text-align: left;
  letter-spacing: 2px;
  color: #606060;
  font-size: 14px;
  line-height: 1em;
  font-weight: bold;
}

.el-form .el-form-item {
  margin-bottom: 10px !important;
}

</style>
