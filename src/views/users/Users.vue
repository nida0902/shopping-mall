<template>
  <div class="users">
    <page-search
      :search-config="searchConfig"
      @resetBtnClick="resetBtnClick"
      @searchBtnClick="searchBtnClick"
    />
  </div>
</template>

<script>
import PageSearch from '@/components/page-search'

import { searchConfig } from './config/search.config'

export default {
  name: 'Users',
  components: {
    PageSearch
  },
  data() {
    return {
      searchConfig
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

<style scoped>

</style>
