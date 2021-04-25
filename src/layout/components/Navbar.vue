<template>
  <div class="navbar">
    <a-button @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    collapsed() {
      return this.$store.getters.sidebar
    }
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('app/toggleSidebar')
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  height: 50px;
  line-height: 50px;
  button {
    margin: 9px;
    background: #001529;
    color: #fff;
  }
  /deep/.ant-breadcrumb {
    margin-left: 20px;
    height: 50px;
    line-height: 50px;
  }
}
</style>
