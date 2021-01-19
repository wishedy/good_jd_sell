<template>
  <section class="sf-wrapper">
    <ExpressNo></ExpressNo>
    <section class="no-record">
      <figure class="logo"></figure>
      <p class="des">暂无任何记录哦</p>
    </section>
  </section>
</template>
<script>
import ExpressNo from './ExpressNo'
export default {
  name: 'sfExpress',
  components: {
    ExpressNo
  }
}
</script>
<style lang="scss" scoped>
  .sf-wrapper{
    .no-record{
      width: 100%;
      margin-top: 289px;
      .logo{
        width: 436px;
        height: 300px;
        margin: 0 auto;
        background: url("~@/assets/images/noRecord.png") no-repeat center/cover;
      }
      .des{
        margin-top: 11px;
        font-size: 30px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: center;
        color: #adadad;
        line-height: 48px;
      }

    }
  }
</style>
