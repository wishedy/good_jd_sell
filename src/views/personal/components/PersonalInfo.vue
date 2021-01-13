<template>
    <section class="jd_main_personal_statistics">
        <h1 class="title">操作记录</h1>
        <section class="jd_statistics">
            <div class="statistics-item" @click="goCollect">
                <span class="statistics-num">{{collectList.length}}</span>
                <span class="statistics-title">商品收藏</span>
            </div>
            <div class="statistics-item" @click="goOrder">
                <span class="statistics-num">{{goodList.length}}</span>
                <span class="statistics-title">我的订单</span>
            </div>
            <div class="statistics-item" @click="goBrowse">
                <span class="statistics-num">{{recordList.length}}</span>
                <span class="statistics-title">足迹</span>
            </div>
        </section>
    </section>
</template>
<script>
import { getCollectGoods, getOrderList, getRecordList } from 'api'

export default {
  name: 'statistics',
  data () {
    return {
      goodList: [],
      recordList: [],
      collectList: []
    }
  },
  mounted () {
    const _this = this
    _this.getListData()
    _this.getMyOrderList()
  },
  methods: {
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
    },
    async getListData () {
      const _this = this
      try {
        const record = await getRecordList()
        const collect = await getCollectGoods()
        _this.recordList = record.rows
        _this.collectList = collect.rows
      } catch (e) {
        console.log(e.message || '获取商品数据失败')
      }
    },
    goBrowse () {
      const _this = this
      _this.$router.push({
        name: 'browse'
      })
    },
    goOrder () {
      const _this = this
      _this.$router.push({
        name: 'Order'
      })
    },
    goCollect () {
      console.log('111')
      const _this = this
      _this.$router.push({
        name: 'collect'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_main_personal_statistics{
        width:100%;
        height:219px;
        background:rgba(255,255,255,1);
        //border-radius:8px;
        margin:0 auto 35px auto;
        .title{
            height: 79px;
            font-size: 28px;
            border-bottom: 1px solid rgba(233,231,231,1);
            padding-left: 40px;
            line-height: 80px;
            color:rgba(34,34,34,1);
        }
        .jd_statistics{
            height: 139px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .statistics-item{
                height:74px;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                &:nth-of-type(2){
                    border-right:1px solid rgba(233,231,231,1);
                    border-left:1px solid rgba(233,231,231,1);
                    padding: 0 72px;
                }
                .statistics-num{
                    height:33px;
                    font-size:42px;
                    font-family:SourceHanSansCN;
                    font-weight:500;
                    color:rgba(34,34,34,1);
                    margin-bottom: 18px;
                }
                .statistics-title{
                    font-size:25px;
                    font-family:SourceHanSansCN;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                }
            }
        }
    }
</style>
