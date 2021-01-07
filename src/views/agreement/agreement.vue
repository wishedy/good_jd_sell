<template>
  <section class="jy-rules">
    <h1 class="rules-title">{{agreementText.title}}</h1>
    <section class="section-content" v-for="(item,index) in agreementText.content" :key="index">
      <section class="subTitle" v-text="item.title"></section>
      <article class="details" v-for="(innerItem,innerIndex) in item.detail" v-text="innerItem" :key="index+'detail'+innerIndex"> </article>
    </section>
  </section>
</template>
<script>
import agreementText from '@/views/agreement/agreementText'
export default {
  name: 'RulesPage',
  data () {
    return {
      agreementText
    }
  }
}
</script>
<style lang="scss" scoped>
.jy-rules{
  padding: 20px 30px;
  background: #fff;
  .rules-title{
    height: auto;
    margin-top: 20px;
    font-size: 20px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 600;
    text-align: center;
    color: #222222;
  }
  .section-content{
    line-height: 45px;
    .subTitle{
      min-height: 33px;
      height: auto;
      margin-top: 20px;
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 600;
      text-align: left;
      color: #222222;
      margin-bottom: 10px;
    }
    .details{
      text-indent: 20px;
      min-height: 33px;
      height: auto;
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #222222;
    }
  }
  .section-writings{
    min-height: 431px;
    height: auto;
    background: #f8f8f8;
    border-radius: 20px;
    margin: 0 auto;
    .section-title{
      padding-top: 20px;
      margin-left: 30px;
      margin-bottom: 8px;
      min-height: 33px;
      height: auto;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #222222;
      line-height: 33px;
    }
    .writings-content{
      width: 481px;
      min-height: 340px;
      height: auto;
      padding-bottom: 30px;
      box-sizing: unset;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #222222;
      line-height: 38px;
      margin-left: 30px;
    }
  }
}
</style>
