<template>
    <a-layout class='layout-wrapper'>
      <a-layout-sider><Sidebar /></a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
</template>

<script>
import { Sidebar } from './components'
export default {
  name: 'Layout',
  components: {
    Sidebar
  }
}
</script>

<style lang="less" scoped>
.layout-wrapper{
  height: 100vh;
}

</style>
