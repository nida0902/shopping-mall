<template>
  <div class="page-search">
    <my-form v-model="formData" v-bind="searchConfig">
      <template #header>
        <div class="title">检索条件</div>
      </template>
      <template #footer>
        <div class="handleBtn">
          <el-button icon="el-icon-search" size="small" @click="handleSearchClick">搜索</el-button>
          <el-button icon="el-icon-refresh" size="small" @click="handleResetClick">重置</el-button>
        </div>
      </template>
    </my-form>
  </div>

</template>

<script>
import MyForm from '@/base-ui/form'

export default {
  name: 'PageSearch',
  components: {
    MyForm
  },
  props: {
    searchConfig: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formData: {}
    }
  },
  mounted() {
    const formItems = this.searchConfig.formItems
    const formOriginData = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    this.formData = formOriginData
  },
  methods: {
    handleResetClick() {
      this.$emit('resetBtnClick')
    },
    handleSearchClick() {
      this.$emit('searchBtnClick')
    }
  }
}
</script>

<style scoped lang="less">
.page-search {
  background-color: white;
  padding: 5px;
  border-radius: 5px;
}
</style>
