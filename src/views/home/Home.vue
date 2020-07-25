<template>
    <section class="jd_main">
        <HeaderBar title="关东臻品"></HeaderBar>
        <BannerBar></BannerBar>
        <Entrance></Entrance>
        <section class="divide-line"></section>
        <SpecialOffer></SpecialOffer>
        <section class="divide-line"></section>
        <TabBar></TabBar>
        <section class="jd_order_list">
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
        </section>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'

import BannerBar from 'components/BannerBar/BannerBar'
import Entrance from 'components/Entrance/Entrance'
import SpecialOffer from 'components/SpecialOffer/SpecialOffer'
import TabBar from './components/TabBar'
import OrderItem from './components/OrderItem'
export default {
  name: 'home',
  components: {
    BannerBar,
    HeaderBar,
    Entrance,
    SpecialOffer,
    TabBar,
    OrderItem
  }
}
</script>
<style lang="scss" scoped>
        .divide-line{
            width: 744px;
            border: 3px solid #fff;
            height: 14px;
        }
        .jd_order_list{
            box-sizing: unset;
            width: 710px;
            padding: 21px 20px;
            //background: #fff;
            min-height: 500px;
            flex-wrap: wrap;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
</style>
