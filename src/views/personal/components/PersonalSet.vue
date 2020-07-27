<template>
    <section class="personal_set">
        <SetItem class="order" title="我的订单" path="order"></SetItem>
        <SetItem class="performance" title="代理业绩" path="agency"></SetItem>
        <SetItem class="search" title="号码查询" path="search"></SetItem>
        <SetItem class="set" title="设置" path="setIndex"></SetItem>
    </section>
</template>
<script>
import SetItem from './SetItem'
export default {
  name: 'set',
  components: {
    SetItem
  }
}
</script>
<style lang="scss" scoped>
    .personal_set{
        margin:0 auto 35px auto;
    }
</style>
