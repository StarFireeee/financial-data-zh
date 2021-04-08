<template>
  <div class="sidebar-logo-container">
    <router-link to='/'>
      <img :src="src" class="sidebarlogo">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  data() {
    return {
      title: '星火系统',
      src: require('@/assets/logo-02.png')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
