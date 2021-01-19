<template>
  <section class="express-list-wrapper">
    <ExpressNo  :expressName="expressName" :expressNo="expressNo"></ExpressNo>
    <section class="express-list">
      <ExpressInfoItem v-for="(item,index) in expressInfo" :config="item" :key="index"></ExpressInfoItem>
    </section>
  </section>
</template>
<script>
import ExpressNo from './ExpressNo'
import ExpressInfoItem from './ExpressInfoItem'
export default {
  name: 'expressList',
  props: {
    expressName: {
      default () {
        return ''
      },
      type: String
    },
    expressNo: {
      default () {
        return ''
      },
      type: String
    },
    expressInfo: {
      default () {
        return []
      },
      type: Array
    }
  },
  components: {
    ExpressNo,
    ExpressInfoItem
  }
}
</script>
<style lang="scss" scoped>
  .express-list-wrapper{
    .express-list{
      margin-top: 44px;
    }
  }
</style>
