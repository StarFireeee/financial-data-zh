<template>
  <div class="sidebar-logo-container">
    <router-link to='/' class="sidebarRouter">
      <img :src="src" class="sidebarlogo">
      <div class="sidebarTitle">{{title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  data() {
    return {
      title: '星火系统',
      src: require('@/assets/logo-01.png')
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar-logo-container{
  height: 64px;
  background: #108ee9;
  .sidebarRouter{
    width: 100%;
    display: flex;
    img{
      height: 53px;
      margin: 5px;
    }
    .sidebarTitle{
      color: rgb(255, 195, 83);
      font-size: 20px;
      line-height: 64px;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
