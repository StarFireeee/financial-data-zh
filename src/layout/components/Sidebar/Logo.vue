<template>
  <div class="sidebar-logo-container">
    <router-link to="/" class="sidebarRouter">
      <img :src="src" :class="!sidebar ? '' : 'img-content'" />
      <div class="sidebarTitle" v-show="!sidebar">{{ title }}</div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SidebarLogo',
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    })
  },
  data() {
    return {
      title: '星火系统',
      src: require('@/assets/logo-01.png')
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar-logo-container {
  height: 64px;
  background: #2b2f3a;
  .sidebarRouter {
    width: 100%;
    display: flex;
    img {
      height: 53px;
      margin: 5px;
    }
    .img-content {
      margin-left: 13px;
    }
    .sidebarTitle {
      color: #fff;
      font-size: 20px;
      line-height: 64px;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
