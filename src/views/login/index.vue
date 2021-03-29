<template>
  <div class="bg-banner">
    <div class="login">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '星火系统'
    }
  }
}
</script>

<style lang="less" scoped>
.bg-banner{
  height: 100vh;
  background: url('../../assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  .login{
    height: 300px;
    width: 450px;
    padding: 0 50px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 65%;
    margin-top: -150px;
    margin-left: -150px;
  }

}
</style>
