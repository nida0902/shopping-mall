<template>
  <div class="goods">
    <page-search
      :search-config="searchConfig"
      @resetBtnClick="resetBtnClick"
      @searchBtnClick="searchBtnClick"
    />
    <page-content
      :content-config="contentConfig"
    />
  </div>
</template>

<script>
import PageSearch from '@/components/page-search/src/page-search'
import PageContent from '@/components/page-content/src/page-content'
import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

export default {
  name: 'Goods',
  components: { PageContent, PageSearch },
  data() {
    return {
      searchConfig,
      contentConfig
    }
  },
  methods: {
    resetBtnClick() {

    },
    searchBtnClick() {

    }
  }
}
</script>

<style scoped lang="less">
.goods {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
