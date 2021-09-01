<template>
  <div class="users">
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
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

export default {
  name: 'Users',
  components: {
    PageSearch,
    PageContent
  },
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
.users {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
