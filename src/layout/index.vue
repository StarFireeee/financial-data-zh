<template>
  <a-layout class="layout-wrapper">
    <a-layout-sider :collapsed="sidebar"><Sidebar /></a-layout-sider>
    <a-layout>
      <a-layout-content>title</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import { Sidebar } from './components'
export default {
  name: 'Layout',
  components: {
    Sidebar
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    })
  }
}
</script>

<style lang="less" scoped>
.layout-wrapper {
  height: 100vh;
}
</style>
