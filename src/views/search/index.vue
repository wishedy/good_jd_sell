<template>
    <section class="jd_main">
        <SearchBar></SearchBar>
<!--
        <TabBar></TabBar>
-->
        <section class="jd_order_list" v-if="goodList.length">
            <OrderItem v-for="(item) in goodList" :key="item.id" :config="item"></OrderItem>
        </section>
      <EmptyList v-if="goodList.length===0"></EmptyList>
    </section>
</template>
<script>
import { getGoodsList } from '@/resource'
import EmptyList from 'components/EmptyList'
import SearchBar from './components/SearchBar'
/*
import TabBar from '../home/components/TabBar'
*/
import OrderItem from '../home/components/OrderItem'
export default {
  name: 'search',
  components: {
    SearchBar,
    EmptyList,
    /*
    TabBar,
*/
    OrderItem
  },
  data () {
    const _this = this
    const title = _this.$route.query.title
    return {
      title: title,
      goodList: []
    }
  },
  methods: {
    async getGoodsData () {
      const _this = this
      try {
        const res = await getGoodsList({
          pageSize: 1000,
          searchParam: _this.title,
          pageNum: 1
        })
        _this.goodList = res.rows[0].goodsList
      } catch (e) {
        console.log(e.message || '获取商品数据失败')
      }
    }
  },
  mounted () {
    const _this = this
    _this.getGoodsData()
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
        justify-content: flex-start;
    }
</style>
