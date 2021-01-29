<template>
    <section class="jd_main jd_classify">
        <HeaderBar title="分类" :back="true"></HeaderBar>
        <section class="jd_classify_container">
            <div class="jd_tab">
                <span class="jd_tab_item"  :class="{active:index===tabIndex}" v-for="(item,index) in tabData" v-text="item.name" :key="item.id"  @click="changeTab(index)"></span>
            </div>
            <section class="jd_content">
                <span class="jd_content_item" v-for="(item) in goodList" :key="item.id"  @click="goToDetail(item)">
                    <figure class="jd_logo"  :style="{background:`url('${item.primaryPicUrl}') no-repeat center/cover`}"></figure>
                    <h1 class="title" v-text="item.name"></h1>
                </span>
            </section>
        </section>
    </section>
</template>
<script>
import { getGoodsList, getGoodsTypeList } from '@/resource'
import HeaderBar from 'components/HeaderBar/index'
export default {
  name: 'classify',
  components: {
    HeaderBar
  },
  data () {
    return {
      tabData: [],
      goodList: [],
      loadEnd: false,
      tabIndex: 0,
      tabConfig: {}
    }
  },
  watch: {
    tabConfig: {
      handler (n) {
        const _this = this
        _this.getGoodsData(n.id)
      },
      deep: true
    }
  },
  mounted () {
    const _this = this
    _this.getOrderList()
  },
  methods: {
    goToDetail (config) {
      const _this = this
      _this.$router.push({
        path: 'commodity',
        query: {
          id: config.id
        }
      })
    },
    async getGoodsData (id) {
      const _this = this
      _this.Indicator.open()
      try {
        const res = await getGoodsList({
          pageSize: 1000,
          id: id,
          pageNum: 1
        })
        _this.goodList = res.rows[0].goodsList
      } catch (e) {
        console.log(e.message || '获取商品数据失败')
      } finally {
        _this.loadEnd = true
        _this.Indicator.close()
      }
    },
    changeTab (index) {
      const _this = this
      if (_this.tabIndex !== index) {
        _this.tabIndex = index
        _this.tabConfig = _this.tabData[index]
      }
    },
    async getOrderList () {
      const _this = this
      try {
        const res = await getGoodsTypeList({
          pageSize: 1000,
          pageNum: 1
        })
        _this.tabData = res.rows
        _this.tabConfig = _this.tabData[_this.tabIndex]
      } catch (e) {
        _this.Toast(e.msg || '获取分类信息失败')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_classify{
        .jd_classify_container{
            width: 100%;
            background: #fff;
            height: calc(100vh - 187px);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
        }
        .jd_tab{
            width:163px;
            height: 100%;
            background:rgba(245,245,245,1);
            .jd_tab_item{
                display: block;
                height: 86px;
                text-align: center;
                font-size: 24px;
                line-height: 86px;
                &.active{
                    color: #55C47D;
                    background: #fff;
                    border-left:5px solid #55C47D
                }
            }
        }
        .jd_content{
            width: calc(100% - 163px);
            height: 100%;
            overflow-y: scroll;
            -webkit-overflow-scrolling : touch;
            .jd_content_item{
                height: 160px;
                width: 107px;
                margin: 36px;
                float: left;
                .jd_logo{
                    width: 107px;
                    height: 107px;
                    background: #ccc;
                    border-radius: 50%;
                    margin-bottom: 26px;
                }
                .title{
                    width: 107px;
                    min-height:24px;
                    height: auto;
                    text-align: center;
                    font-size:25px;
                    font-family:SourceHanSansCN;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                }
            }
        }
    }
</style>
