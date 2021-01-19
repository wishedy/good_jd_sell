<template>
  <section class="logistics-empty">
    <figure class="logo"></figure>
    <p class="des">暂无物流信息，稍后再查看~</p>
  </section>
</template>
<script>
export default {
  name: 'emptyInfo'
}
</script>
<style lang="scss" scoped>
  .logistics-empty{
    padding-top: 179px;
    .logo{
      width: 327px;
      height: 263px;
      margin: 0 auto 35px auto;
      background: url("~@/assets/images/logisticsLogo.png") no-repeat center/cover;
    }
    .des{
      height: 48px;
      font-size: 30px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      color: #adadad;
      line-height: 48px;
    }
  }
</style>
