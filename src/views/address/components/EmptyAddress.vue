<template>
  <section class="empty-address">
    <figure class="logo"></figure>
    <p class="des">暂无收货地址</p>
  </section>
</template>
<script>
export default {
  name: 'emptyAddress'
}
</script>
<style lang="scss" scoped>
  .empty-address{
    width: 100%;
    height: 100vh;
    .logo{
      margin: 300px auto 35px auto;
      width: 256px;
      height: 258px;
      background: url("~~img/address/emptyAddress.png") no-repeat center/cover;
    }
    .des{
      font-size: 30px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      color: #adadad;
    }
  }
</style>
