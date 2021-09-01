<template>
  <div class="page-content">
    <my-table
      :content-config="contentConfig"
      :data-list="dataList"
    >
      <template #headerHandler>
        <el-button
          type="primary"
          size="small"
          @click="handleNewClick"
        >
          添加
        </el-button>
      </template>

      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit"
            size="small"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            icon="el-icon-delete"
            size="small"
            type="text"
            @click="handleDeleteClick(scope.row)"
          >
            删除
          </el-button>
        </div>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from '@/base-ui/table'

export default {
  name: 'PageContent',
  components: {
    MyTable
  },
  props: {
    contentConfig: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      dataList: [
        { date: '2021-09-02', name: 'Linda', auth: '管理员' }
      ]
    }
  },
  methods: {
    handleNewClick: () => {
      console.log('new')
    },
    handleDeleteClick: () => {
      console.log('delete')
    },
    handleEditClick: () => {
      console.log('edit')
    }
  }
}
</script>

<style scoped lang="less">
.page-content {
  background-color: white;
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  flex: 1;
}
</style>
