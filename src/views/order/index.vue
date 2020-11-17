<template>
    <section class="jd_order">
        <HeaderBar title="我的订单" :back="true"></HeaderBar>
        <TabBar :tabIndex="tabIndex" @handleTab="handleTab"></TabBar>
        <section class="order_list" v-if="goodList.length">
            <OrderItem v-for="(item) in goodList" :key="item.id" :config="item"></OrderItem>
        </section>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import { getOrderList } from '@/resource'

import TabBar from './components/TabBar'
import OrderItem from './components/OrderItem'
export default {
  name: 'order',
  components: {
    TabBar,
    OrderItem,
    HeaderBar
  },
  data () {
    return {
      tabIndex: 0,
      goodList: []
    }
  },
  methods: {
    handleTab (data) {
      const _this = this
      if (parseInt(data.index) !== _this.tabIndex) {
        _this.getMyOrderList(data.param)
        _this.tabIndex = data.index
      }
    },
    async getMyOrderList (param) {
      const _this = this
      try {
        const res = await getOrderList(param ? {
          pageSize: 1000,
          pageNum: 1,
          ...param
        } : {
          pageSize: 1000,
          pageNum: 1
        })
        if (res) {
          _this.goodList = res.rows
          console.log(res)
        }
      } catch (e) {
        _this.Toast(e.msg || '获取订单列表失败')
      }
    }
  },
  mounted () {
    const _this = this
    _this.getMyOrderList()
  }
}
</script>
<style lang="scss" scoped>
    .jd_order{

    }
</style>
