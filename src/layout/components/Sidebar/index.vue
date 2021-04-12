<template>
  <div id="side">
    <Logo />
    <sidebar-item />
  </div>
</template>

<script>
import Logo from './Logo'
import SidebarItem from './SidebarItem'
export default {
  components: {
    Logo,
    SidebarItem
  }
}
</script>

<style lang="less" scoped>
#side{}
</style>
