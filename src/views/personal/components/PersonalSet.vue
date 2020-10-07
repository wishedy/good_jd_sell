<template>
    <section class="personal_set">
        <SetItem class="order" title="我的订单" path="order"></SetItem>
        <SetItem class="address" title="收获地址" path="myaddress"></SetItem>
        <SetItem class="feedBack" title="用户反馈" path="feedBack"></SetItem>
        <SetItem class="search" title="常见问题" path="helpCenter"></SetItem>
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
