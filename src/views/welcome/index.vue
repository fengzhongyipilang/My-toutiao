// this is：路由级别组件（页面级别组件）
<template>
  <div>
    <img src="../../assets/images/welcome.jpg" alt />
    <!-- <button>获取数据</button> -->
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get()
  }
}
</script>

<style scoped lang="less">
div {
  text-align: center;
  vertical-align: middle;
  img {
    margin-top: 10px;
    vertical-align: middle;
  }
}
</style>
