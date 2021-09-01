<template>
  <div class="my-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ contentConfig.title }}</div>
        <div class="handler">
          <slot name="headerHandler" />
        </div>
      </slot>
    </div>
    <el-table border size="small" :data="dataList">
      <template v-for="propItem in contentConfig.propList">
        <el-table-column :key="propItem.prop" v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    contentConfig: {
      type: Object,
      require: true
    },
    dataList: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped lang="less">
.my-table {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
