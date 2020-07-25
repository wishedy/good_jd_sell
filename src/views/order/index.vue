<template>
    <section class="jd_order">
        <HeaderBar title="我的订单" :back="true"></HeaderBar>
        <TabBar></TabBar>
        <section class="order_list">
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
        </section>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'

import TabBar from './components/TabBar'
import OrderItem from './components/OrderItem'
export default {
  name: 'order',
  components: {
    TabBar,
    OrderItem,
    HeaderBar
  }
}
</script>
<style lang="scss" scoped>
    .jd_order{

    }
</style>
