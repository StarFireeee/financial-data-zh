<template>
  <a-layout class="layout-wrapper">
    <a-layout-sider :collapsed="sidebar"><Sidebar /></a-layout-sider>
    <a-layout>
      <a-layout-content>
        <Navbar />
        <router-view :key="key" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import { Sidebar, Navbar } from './components'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    }),
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
.layout-wrapper {
  height: 100vh;
}
</style>
