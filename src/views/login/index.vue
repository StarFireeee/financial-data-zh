<template>
  <div>
    {{ base }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      base: 'Hello,World'
    }
  }
}
</script>

<style lang="less" scoped>
div{
  height: 300px;
}
</style>
