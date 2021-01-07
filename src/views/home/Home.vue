<template>
    <section class="jd_main">
        <!--<HeaderBar title="关东臻品"></HeaderBar>-->
        <section class="jd_home_card">
            <div class="jd_content">
                <input type="text" placeholder="请输入您的产品" @focusin="focus=true" @focusout="focus=false" v-model="searchval">
                <i class="icon" v-if="!focus"></i>
                <i class="message" @click="goToMessage"></i>
            </div>
        </section>
        <BannerBar :bannerList="bannerList"></BannerBar>
        <EntranceModule :entranceList="entranceList"></EntranceModule>
        <section class="divide-line"></section>
        <SpecialOffer :recommendList="recommendList"></SpecialOffer>
        <section class="divide-line"></section>
        <TabBar :tabData="tabData" @handleTabChange="changeTab"></TabBar>
        <section class="jd_order_list" v-if="goodList.length">
            <OrderItem v-for="(item) in goodList" :key="item.id" :config="item"></OrderItem>
        </section>
    </section>
</template>
<script>
import BannerBar from 'components/BannerBar/BannerBar'
import EntranceModule from './components/EntranceModule'
import SpecialOffer from 'components/SpecialOffer/SpecialOffer'
import TabBar from './components/TabBar'
import OrderItem from './components/OrderItem'
import ShareMixin from 'libs/mixin/ShareMixin'
import { isWeiXin } from 'libs/utils'
import { getGoodsList, getBannerList, getEntranceList, getRecommendList, getGoodsTypeList } from '@/resource'
export default {
  name: 'home',
  mixins: [ShareMixin],
  methods: {
    async getBannerData () {
      const _this = this
      try {
        const res = await getBannerList({
          pageSize: 1000,
          pageNum: 1
        })
        console.log('获取到的数据', res)
        _this.bannerList = res.rows
        console.log('获取banner' + _this.bannerList)
      } catch (e) {
        console.log('这里这里')
        console.log(e)
        console.log(e.message || '获取banner数据失败')
      }
    },
    async getTabData () {
      const _this = this
      try {
        const res = await getGoodsTypeList({
          pageSize: 1000,
          pageNum: 1
        })
        _this.tabData = res.rows
        _this.tabConfig = _this.tabData[0]
      } catch (e) {
        console.log(e.message || '获取tab数据失败')
      }
    },
    async getGoodsData (id) {
      const _this = this
      try {
        const res = await getGoodsList({
          pageSize: 1000,
          id: id,
          pageNum: 1
        })
        _this.goodList = res.rows[0].goodsList
      } catch (e) {
        console.log(e.message || '获取商品数据失败')
      }
    },
    async getRecommendData () {
      const _this = this
      try {
        const res = await getRecommendList({
          pageSize: 1000,
          pageNum: 1
        })
        _this.recommendList = res.rows
      } catch (e) {
        console.log(e.message || '获取推荐数据失败')
      }
    },
    changeTab (data) {
      const _this = this
      _this.tabConfig = data
    },
    async getEntranceData () {
      const _this = this
      try {
        const res = await getEntranceList({
          pageSize: 1000,
          pageNum: 1
        })
        _this.entranceList = res.rows
      } catch (e) {
        console.log(e.message || '获取入口数据失败')
      }
    },
    goToMessage () {
      const _this = this
      _this.$router.push({
        path: 'message'
      })
    }
  },
  watch: {
    tabConfig: {
      handler (n) {
        const _this = this
        _this.getGoodsData(n.id)
      },
      deep: true
    },
    focus (n) {
      const _this = this
      if (!n) {
        if (_this.searchval) {
          _this.$router.push({
            path: 'search',
            query: {
              title: _this.searchval
            }
          })
        }
      }
    }
  },
  data () {
    return {
      title: '关东臻品',
      desc: '一站式山货购物，是真品，更是臻品',
      imgUrl: 'https://goodjd.oss-cn-beijing.aliyuncs.com/goodjd/20201222/rvbIUnaqDXnZfgAnFBrgiANZEMlGjwkc.png',
      url: location.href,
      focus: false,
      searchval: '',
      entranceList: [],
      tabConfig: {},
      tabData: [],
      goodList: [],
      recommendList: [],
      bannerList: []
    }
  },
  components: {
    BannerBar,
    // HeaderBar,
    EntranceModule,
    SpecialOffer,
    TabBar,
    OrderItem
  },
  mounted () {
    const _this = this
    _this.getBannerData()
    _this.getEntranceData()
    _this.getTabData()
    _this.getRecommendData()
    if (isWeiXin()) {
      _this.share()
    }
  }
}
</script>
<style lang="scss" scoped>
        .jd_home_card{
            width:100%;
            height:346px;
            background:linear-gradient(90deg,rgba(51,218,138,1),rgba(18,201,138,1));
            position: relative;
            overflow: hidden;
            .jd_content{
                width:604px;
                height:60px;
                background:rgba(255,255,255,1);
                border-radius:30px;
                position: absolute;
                top:20px;
                left: 30px;
                .icon{
                    width: 26px;
                    height: 26px;
                    position: absolute;
                    top:50%;
                    left: 22%;
                    transform: translate(0,-50%);
                    background: url('~img/search/search.png') no-repeat center/cover;
                }
                .message{
                    width:47px;
                    height:46px;
                    top:50%;
                    position: absolute;
                    transform: translateY(-40%);
                    right: -80px;
                    background: url('~img/search/message.png') no-repeat center/cover;
                }
                input{
                    position: absolute;
                    top:0;
                    left: 0;
                    right: 0;
                    bottom:0;
                    width: 100%;
                    height: 60px;
                    outline: none;
                    border: none;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-radius:30px;
                    line-height:60px;
                    font-size:28px;
                    &::placeholder{
                        outline: none;
                        border: none;
                        font-size:28px;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:#b1b1b1;
                        line-height:60px;
                        text-align: center;
                    }
                    &:focus{
                        outline: none;
                        border: none;
                    }
                }
            }
            &::after{
                width: 140%;
                height: 346px;
                position: absolute;
                left: -20%;
                top: 200px;
                z-index: 1;
                content: ' ';
                border-radius: 50% 50% 0 0 ;
                background: #fff;
            }
        }
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
            justify-content: flex-start;
        }
</style>
