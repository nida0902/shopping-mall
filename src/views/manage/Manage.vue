<template>
  <div class="manage">
    <div class="rotationChart">
      <div class="header">
        <div class="title">轮播图设置</div>
        <el-button type="primary" size="mini">保存</el-button>
      </div>
      <div class="upload">
        <el-upload
          class="upload-demo"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>
    <div class="columnConfig">
      <div class="title">栏目配置</div>
    </div>
    <div class="advertisingConfig">
      <div class="title">广告位配置</div>
    </div>
  </div>
</template>

<script>
import image from '@/assets/images/image.jpg'
import image1 from '@/assets/images/image1.jpg'

export default {
  name: 'Manage',
  data() {
    return {
      fileList: [
        { name: 'image.jpeg', url: image },
        { name: 'image1.jpeg', url: image1 }
      ]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<style scoped lang="less">
.manage {
  .rotationChart {
    background-color: white;
    border-radius: 5px;
    padding: 5px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .upload {
      margin-left: 20px;
      margin-bottom: 10px;
    }
  }

  .columnConfig {
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
  }
  .advertisingConfig {
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
  }
}
</style>
