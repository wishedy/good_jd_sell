<template>
    <div class="commodity" v-if="goodDetail">
      <HeaderBar title="商品详情" :back="true"></HeaderBar>
      <div class="commodity-banner swiper-container" id="swiper1">
            <ul class="commodity-wrapper swiper-wrapper">
                <li class="swiper-slide" v-for="(imgItem, index) in goodDetail.attachmentList" :key="imgItem+index" @click="handleViewImage(index)">
                    <img  class="swiper-img" :src="imgItem.goodsAttUrl" alt="" srcset="">
                </li>
            </ul>
            <div class="page-wrap">
                <div class="swiper-pagination swiper1-pagination"></div>
            </div>
        </div>
        <div class="price-outer">
            <Price :displayPrice="goodDetail.counterPrice" :coin="goodDetail.retailPrice" :className="'big'"/>
        </div>
        <p class="commodity-intro">{{goodDetail.categoryName+'-'+goodDetail.name}}</p>
        <div class="commodity-detail">
            <div class="commodity-title">
                <i class="commodity-flag"></i>
                <span class="title">商品详情</span>
            </div>
            <div class="commodity-desc" v-html="goodDetail.goodsDesc" ></div>
        </div>
        <section class="exchange-btn-wrap">
          <section class="handle-module">
            <span class="collect-item" :class="{activity:collectOnOff}" @click="handleCollect"></span>
            <span class="car-item"  @click="addGoodCart">
              <i class="num" v-if="token">{{cartData.goodsCount}}</i>
            </span>
          </section>
          <section class="buy-module"  @click="goShopping(goodDetail.id)">立即购买</section>
<!--
            <span class="exchange-btn" @click="goShopping(goodDetail.id)">立即购买</span>
-->
        </section>
        <div class="commodity-model" v-if="modelFlag" @click="handleCloseModel()">
            <div class="commodity-banner swiper-container" id="swiper2">
                <ul class="commodity-wrapper swiper-wrapper">
                    <li class="swiper-slide" v-for="(imgItem,index) in goodDetail.attachmentList" :key="index+imgItem">
                        <img  class="swiper-img" :src="imgItem.goodsAttUrl" alt="" srcset="">
                    </li>
                </ul>
            </div>
            <div class="page-wrap">
                <div class="swiper-pagination swiper2-pagination"></div>
            </div>
        </div>
<!--
        <div class="commodity-add-bus" @click="addGoodCart">加入购物车</div>
-->
    </div>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import { tokenKey } from '@/libs/constant'
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
import { addBrowseRecord, checkCollectGoods, deleteCollectGoods, addCollectGoods, getGoodDetail, addCart, getGoodCart } from '@/resource'
import Price from './components/Price'
import Swiper from 'swiper/js/swiper.js'
import { isWeiXin } from 'libs/utils'
import ShareMixin from 'libs/mixin/ShareMixin'
export default {
  mixins: [ShareMixin],
  data () {
    const _this = this
    const id = _this.$route.query.id
    return {
      title: '关东臻品',
      desc: '一站式山货购物，是真品，更是臻品',
      imgUrl: 'https://goodjd.oss-cn-beijing.aliyuncs.com/goodjd/20201222/rvbIUnaqDXnZfgAnFBrgiANZEMlGjwkc.png',
      url: '',
      id: id,
      modelFlag: false,
      goodDetail: null,
      collectOnOff: false,
      cartOriginalData: {},
      cartData: {},
      detail: {},
      swiper1: null,
      swiper2: null,
      goodNo: '',
      coinBalance: '0',
      seclickText: '立即兑换'

    }
  },
  computed: {
    ...mapGetters(['token']),
    /*eslint-disable*/
      exchangeDes () {
        /*eslint-disable*/
        const _this = this
        if (_this.goodDetail) {
          if (parseInt(_this.goodDetail.type, 10) === 1) {
            if (parseInt(_this.goodDetail.status, 10) === 1) {
              // 实物且上架状态
              if (parseInt(_this.goodDetail.stock_num, 10) > 0) {
                return '立即兑换'
              } else {
                return '补货中'
              }
            } else if (parseInt(_this.goodDetail.status, 10) === 2) {
              return '已下架'
            }
          } else {
            return ' '
          }
        } else {
          return ' '
        }
      }
    },
    components: {
      Price,
      HeaderBar
    },
    mounted () {
      const _this = this
      const token = Cookies.get(tokenKey)
      _this.token = token
      _this.getGoodDetail()
      _this.getGoodCartList()
      _this.checkCollect()
      _this.handleRecord()
      setTimeout(()=>{
        if (!this.swiper1) {
          this.swiper1 = new Swiper('#swiper1', {
            pagination: {
              el: '.swiper1-pagination',
              type: 'fraction'
            }
          })
        }
        this.swiper2 = new Swiper('#swiper2', {
          pagination: {
            el: '.swiper2-pagination',
            type: 'fraction'
          }
        })
      },1000)
    },
    updated () {
      /* eslint-disable no-new */
      if (!this.swiper1) {
        this.swiper1 = new Swiper('#swiper1', {
          pagination: {
            el: '.swiper1-pagination',
            type: 'fraction'
          }
        })
      }
      this.swiper2 = new Swiper('#swiper2', {
        pagination: {
          el: '.swiper2-pagination',
          type: 'fraction'
        }
      })
    },
    methods: {
      async handleRecord(){
        const _this = this
        try {
          await addBrowseRecord({ goodsId: _this.id })
        }catch (e){
          console.log(e)
        }
      },
      async getGoodCartList () {
        const _this = this
        try {
          const res = await getGoodCart()
          const formatte = (data) => {
            const resultList = []
            const originalList = JSON.parse(JSON.stringify(data.cartList))
            for (let num = 0; num < originalList.length; num++) {
              const item = originalList[num]
              item.select = 0
              resultList.push(item)
            }
            data.cartList = resultList
            return data
          }
          _this.cartOriginalData = formatte(res.rows)
          _this.cartData = JSON.parse(JSON.stringify(_this.cartOriginalData))
          console.log('购物车购物车')
          console.log(_this.cartData)
        } catch (e) {
          console.log(e.message || '获取tab数据失败')
        }
      },
      async checkCollect () {
        const _this = this
        if (_this.token) {
          try {
            const res = await checkCollectGoods({ goodsId: _this.id })
            console.log('获取状态')
            if(res.code===200){
              _this.collectOnOff = res.data
            }else{
              _this.collectOnOff = res
            }
          } catch (e) {
            _this.Toast('获取收藏信息失败')
          }
        } else {
          _this.collectOnOff = false
        }
      },
      handleCollect(){
        const _this = this
        _this.$login().then(async res => {
          if(!_this.collectOnOff){
            try {
              await addCollectGoods({goodsId:_this.id})
              _this.collectOnOff = !_this.collectOnOff
            }catch (e){
              _this.Toast('收藏失败')
            }
          }else{
            try {
              await deleteCollectGoods({goodsId:_this.id})
              _this.collectOnOff = !_this.collectOnOff
            }catch (e){
              _this.Toast('取消收藏失败')
            }
          }
        }).catch(err => {
          console.log(err)
        })
      },
      async addGoodCart(){
        const _this = this
        try{
          const elementBody = document.body
          elementBody.style.overflow = 'hidden'
          _this.$login().then(res => {
            console.log('登录成功')
            //location.reload()
            const param = {
              goodsId:_this.id,
              number:1
            }
            elementBody.style.overflow = 'auto'

            const addFun = async ()=>{
              const res = await addCart(param)
              if(res){
                _this.Toast('加入购物车成功')
                _this.getGoodCartList()
              }
            }
            addFun()
          }).catch(err => {
            elementBody.style.overflow = 'auto'
            console.log(err)
          })
        }catch (e) {
          _this.Toast(e.message||'加入购物车失败')
        }
      },
      handleViewImage (index) {
        this.modelFlag = true
        setTimeout(() => {
          this.swiper2.slideTo(index)
        })
      },
      handleCloseModel () {
        this.modelFlag = false
      },
      goShopping(id){
        const _this = this
        _this.$login().then(res => {
          _this.$router.push({
            path:'purchase',
            query:{
              type:0,//单一商品购买
              id:id
            }
          })
        })
      },
      async getGoodDetail(){
        const _this = this
        _this.Indicator.open()
        try {
          const res = await getGoodDetail({
            id: _this.id
          })
          _this.goodDetail = res.rows
          _this.desc = _this.goodDetail.categoryName+'-'+ _this.goodDetail.name
          _this.url = location.href
          _this.Indicator.close()
          if (isWeiXin()) {
            _this.share()
          }
        } catch (e) {
          _this.Indicator.close()
          console.log(e.message || '获取商品数据失败')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
    .commodity {
        padding-bottom: 200px;
        width: 100%;
        .swiper-container {
            width: 100%;
            height: 750px;
            .swiper-img {
                width: 100%;
                height: 100%;
                pointer-events: none;
            }
        }
        .commodity-banner {
            position: relative;
            left: 0;
            top: 0;
            width: 750px;
            height: 750px;
            .page-wrap {
                position: absolute;
                right: 32px;
                bottom: 38px;
                width:60px;
                height:36px;
                background:rgba(0,0,0,0.3);
                border-radius:18px;
                font-size:20px;
                font-family:PingFangSC-Light,PingFang SC;
                font-weight:300;
                color:rgba(255,255,255,1);
                line-height: 36px;
                text-align: center;
                z-index: 10;
                .swiper-pagination{
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    span {
                        font-size:28px !important;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                    }
                }

            }
        }
        .price-outer {
            padding: 34px 30px 18px;
        }
        .commodity-intro {
            padding: 0 32px 64px;
            font-size:32px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:50px;
        }
        .commodity-detail {
            border-top: 20px solid #F2F2F2;
            .commodity-title {
                padding-left: 32px;
                height: 74px;
                border-bottom: 1px solid #EAEAEA;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .commodity-flag {
                    margin-right: 6px;
                    display: inline-block;
                    width:8px;
                    height:22px;
                    background:rgba(2,177,255,1);
                }
                .title {
                    font-size:24px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                }
                .title-en {
                    font-size:24px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(2,177,255,1);
                }
            }
            .commodity-desc {
                width: 100%;
            }
        }
        .exchange-btn-wrap{
            position: fixed;
            bottom:0;
            right: 0;
            left: 0;
            background:rgba(255,255,255,1);
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 101px;
            background: #FFFFFF;
            box-shadow: 0px 1px 10px 1px rgba(161, 161, 161, 0.23);
          .handle-module{
             width: 289px;
            height: 100%;
            box-sizing: unset;
            padding: 0 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .collect-item{
              width: 55px;
              height: 51px;
              background: url("~img/shopping/collect.png") no-repeat center/cover;
              &.activity{
                background: url("~img/shopping/collect-activity.png") no-repeat center/cover;
              }
            }
            .car-item{
              width: 55px;
              height: 51px;
              background: url("~img/shopping/buyCar.png") no-repeat center/cover;
              position: relative;
              .num{
                width: 32px;
                height: 32px;
                position: absolute;
                top:-13px;
                right: -13px;
                font-style: normal;
                background: #E71A27;
                border-radius: 50%;
                text-align: center;
                font-size: 16px;
                line-height: 32px;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #FFFFFF;
              }
            }
          }
          .buy-module{
            width: 401px;
            height: 100%;
            background: #55C47D;
            line-height: 100px;
            text-align: center;
            font-size: 32px;
            font-family: SourceHanSansCN;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
        .exchange-btn {
            /*position: fixed;
            left: 50%;
            bottom: 100px;
            transform: translateX(-50%);
            margin: 50px auto 0;*/
            display: block;
            width:616px;
            height:84px;
            border-radius:42px;
            font-size:34px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            text-align: center;
            line-height: 84px;
            background-color: rgb(18, 201, 138); /* Green */
            color: #fff;
            &.on-shelf {
                color:rgba(255,255,255,1);
                background-color: rgb(18, 201, 138); /* Green */
            }
            &.out-shelf {
                color:#999;
                background:#E3E3E3;
            }
        }
        .commodity-model {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
            background: #000;
            .commodity-banner {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 770px;
            }
            .page-wrap {
                position: absolute;
                left: 50%;
                bottom: 12%;
                transform: translateX(-50%);
                width:80px;
                height:36px;
                background:rgba(0,0,0,0.3);
                border-radius:18px;
                font-size:20px;
                font-family:PingFangSC-Light,PingFang SC;
                font-weight:300;
                color:rgba(255,255,255,1);
                line-height: 36px;
                text-align: center;
                z-index: 1000;
                .swiper-pagination-fraction {
                    width: 100%;
                    height: 100%;
                    bottom: 0;
                    .swiper-pagination-current {
                        font-size:28px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                    }

                }
                .current-index {
                    font-size:28px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                }
            }

        }
        .commodity-add-bus{
            right: 0;
            position: fixed;
            bottom:30vh;
            padding-left: 10px;
            z-index: 3;
            width: 134px;
            height: 50px;
            line-height: 50px;
            color: #fff;
            font-size: 22px;
            text-align: center;
            border-radius: 50px 0 0 50px;
            background-color: rgb(18, 201, 138); /* Green */
        }
    }
</style>
<style lang="scss">
    .swiper-pagination {
        font-size: 32px !important;
        span {
            font-size: 32px !important;
        }
    }
</style>
<style lang="scss">
img{
  min-width: 100% !important;
  max-width:100% !important;
}
</style>
