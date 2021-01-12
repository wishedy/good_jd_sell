<template>
  <section class="jd_main">
    <HeaderBar title="我的收藏" class="shopping-header" :back="true"></HeaderBar>
    <section class="jd_order_list" v-if="goodList.length">
      <OrderItem v-for="(item) in goodList" :key="item.id" :config="item"></OrderItem>
    </section>
    <EmptyList v-if="goodList.length===0"></EmptyList>
  </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import EmptyList from 'components/EmptyList'
import { getCollectGoods } from '@/resource'
import OrderItem from '../home/components/OrderItem'
export default {
  name: 'search',
  components: {
    OrderItem,
    EmptyList,
    HeaderBar
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
        const res = await getCollectGoods()
        _this.goodList = res.rows
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
