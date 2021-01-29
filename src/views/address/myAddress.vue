<template>
  <section class="rouchi-myAddress">
    <HeaderBar title="我的收获地址" :back="true"></HeaderBar>
    <section class="address-list" v-show="loadEnd">
      <AddressItem v-for="(item) in list" :config="item" :key="item.id" @handleDelete="deleteAddress" @click.native="selectAddress(item)"></AddressItem>
    </section>
    <EmptyAddress v-if="(list.length===0)&&loadEnd"></EmptyAddress>
  </section>
</template>
<script>
import { getExpressAddressList } from '@/resource'
import HeaderBar from 'components/HeaderBar/index'

import AddressItem from './components/AddressItem'
import EmptyAddress from './components/EmptyAddress'
export default {
  name: 'myAddress',
  components: {
    AddressItem,
    EmptyAddress,
    HeaderBar
  },
  data () {
    const _this = this
    const goodNo = _this.$route.query.goodNo
    return {
      goodNo: goodNo,
      loadEnd: true,
      list: []
    }
  },
  mounted () {
    const _this = this
    document.title = ''
    _this.getList()
  },
  methods: {
    selectAddress (item) {
      const _this = this
      if (_this.goodNo) {
        this.$router.push({
          path: '/orderDetail/' + _this.goodNo,
          query: {
            addrId: item.id
          }
        })
      }
    },
    async deleteAddress (data) {
      const _this = this
      _this.MessageBox({
        title: '提示',
        message: '确定要删除该收货地址吗？',
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: '取消',
        confirmButtonText: '确定'

      }).then(
        async action => {
          if (action === 'confirm') {
            // const res = await deleteExpressAddress(data)
            const res = null
            console.log(res)
            if (res) {
              _this.Toast('已删除')
              _this.getList()
            }
          }
        }
      )
    },
    addAddress () {
      const _this = this
      _this.$router.push({ name: 'address' })
    },
    async getList () {
      const _this = this
      _this.Indicator.open()
      try {
        const res = await getExpressAddressList()
        console.log(res)
        _this.list = res.rows
      } catch (e) {
        console.log(e.msg || '获取商品数据失败')
      } finally {
        _this.loadEnd = true
        _this.Indicator.close()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .rouchi-myAddress{
    width: 100%;
    height: 100vh;
    background: #fff;
  }
</style>
