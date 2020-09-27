<template>
    <section class="jd_main">
        <SearchBar></SearchBar>
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
import SearchBar from './components/SearchBar'
import TabBar from '../home/components/TabBar'
import OrderItem from '../home/components/OrderItem'
export default {
  name: 'search',
  components: {
    SearchBar,
    TabBar,
    OrderItem
  }
}
</script>
<style lang="scss" scoped>
    .jd_search_result{
        margin-top: 30px;
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
