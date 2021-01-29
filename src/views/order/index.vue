<template>
    <section class="jd_order">
        <HeaderBar title="我的订单" :back="true"></HeaderBar>
        <TabBar :tabIndex="tabIndex" @handleTab="handleTab"></TabBar>
        <section class="order_list" v-if="goodList&&goodList.length">
            <OrderItem v-for="(item) in goodList" :key="item.orderSn" :config="item" @showPanel="showPanel" @handleAfterSuccess="handleAfterSuccess"></OrderItem>
        </section>
      <EmptyList v-if="loadEnd&&goodList&&goodList.length===0"></EmptyList>
      <Logistics
          v-show="showExpress"
          :expressInfo="expressInfo"
          :expressName="expressName"
          :expressNo="expressNo"
          @closeDialog="handleClose"
      ></Logistics>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import Logistics from 'components/logistics/index'
import { getOrderList } from '@/resource'
import EmptyList from 'components/EmptyList'
import TabBar from './components/TabBar'
import OrderItem from './components/OrderItem'
export default {
  name: 'order',
  components: {
    TabBar,
    OrderItem,
    HeaderBar,
    EmptyList,
    Logistics
  },
  data () {
    return {
      expressInfo: [],
      expressName: '',
      expressNo: '',
      showExpress: false,
      loadEnd: false,
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
    handleClose () {
      const _this = this
      _this.showExpress = false
    },
    handleAfterSuccess () {
      const _this = this
      _this.getMyOrderList()
    },
    showPanel (data) {
      const _this = this
      const res = data.rows
      console.log('---')
      console.log(JSON.parse(res.shippingContent))
      _this.expressInfo = JSON.parse(res.shippingContent).result.list
      _this.expressName = res.shippingName
      _this.expressNo = res.shippingNo
      console.log(res)
      _this.showExpress = true
    },
    async getMyOrderList (param) {
      const _this = this
      _this.Indicator.open()

      try {
        const res = await getOrderList(param ? {
          pageSize: 1000,
          pageNum: 1,
          ...param
        } : {
          pageSize: 1000,
          pageNum: 1
        })
        console.log('数据加载完')
        console.log(res)
        if (res && res.rows) {
          _this.goodList = res.rows
          console.log(res)
        } else {
          _this.goodList = []
        }
      } catch (e) {
        console.log('数据加载失败')
        _this.goodList = []
        _this.Toast(e.msg || '获取订单列表失败')
      } finally {
        _this.Indicator.close()

        _this.loadEnd = true
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
