<template>
    <div class="commodity" v-if="commodityDetail">
        <div class="commodity-banner swiper-container" id="swiper1">
            <ul class="commodity-wrapper swiper-wrapper">
                <li class="swiper-slide" v-for="(imgItem, index) in commodityDetail.images" :key="imgItem+index" @click="handleViewImage(index)">
                    <img  class="swiper-img" :src="imgItem" alt="" srcset="">
                </li>
            </ul>
            <div class="page-wrap">
                <div class="swiper-pagination swiper1-pagination"></div>
            </div>
        </div>
        <div class="price-outer">
            <Price :displayPrice="commodityDetail.display_price" :coin="commodityDetail.coin" :type="commodityDetail.type" :className="'big'"/>
        </div>
        <p class="commodity-intro">{{commodityDetail.name}}</p>
        <div class="commodity-detail">
            <div class="commodity-title">
                <i class="commodity-flag"></i>
                <span class="title">商品详情</span>
            </div>
            <div class="commodity-desc" v-html="commodityDetail.content" ></div>
        </div>
        <section class="exchange-btn-wrap">
            <span class="exchange-btn" :seclick="'商品详情-'+seclickText" :class="{'on-shelf': commodityDetail.status === 1,'out-shelf': commodityDetail.status === 2}"  v-if="parseInt(commodityDetail.type,10)!==1" @click="goShopping">立即购买</span>
            <span class="exchange-btn" :seclick="'商品详情-'+seclickText" :class="{'on-shelf': commodityDetail.status === 1,'out-shelf': (commodityDetail.status === 2)||(!(commodityDetail.stock_num > 0))}" v-if="parseInt(commodityDetail.type,10)===1" @click="goShopping">立即购买</span>
        </section>
        <div class="commodity-model" v-if="modelFlag" @click="handleCloseModel()">
            <div class="commodity-banner swiper-container" id="swiper2">
                <ul class="commodity-wrapper swiper-wrapper">
                    <li class="swiper-slide" v-for="(imgItem,index) in commodityDetail.images" :key="index+imgItem">
                        <img  class="swiper-img" :src="imgItem" alt="" srcset="">
                    </li>
                </ul>
            </div>
            <div class="page-wrap">
                <div class="swiper-pagination swiper2-pagination"></div>
            </div>
        </div>
        <div class="commodity-add-bus">加入购物车</div>
    </div>
</template>
<script>
import Price from './components/Price'
import Swiper from 'swiper/js/swiper.js'
export default {
  data () {
    return {
      modelFlag: false,
      commodityDetail: {
        type: 1,
        name: '鲸鱼精美学生练习本（4本）',
        coin: 1200,
        display_price: 16,
        stock_num: 915,
        images: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600593638953&di=8853fb2e9505c6832db5233ef7c3b7f1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F81a0000a835003df64f7dbfb59c0356cf0a9f99e4952f-OIod35_fw658',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600593638953&di=8853fb2e9505c6832db5233ef7c3b7f1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F81a0000a835003df64f7dbfb59c0356cf0a9f99e4952f-OIod35_fw658',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600593638953&di=8853fb2e9505c6832db5233ef7c3b7f1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F81a0000a835003df64f7dbfb59c0356cf0a9f99e4952f-OIod35_fw658'
        ],
        content: '<p><img src="https://jyxb-common-1252525514.cos.ap-shanghai.myqcloud.com/8ddff1226a777c156c7f4477f8ab7f57.png" style="max-width:100%;"><br></p>',
        status: 1
      },
      swiper1: null,
      swiper2: null,
      goodNo: '',
      coinBalance: '0',
      seclickText: '立即兑换'

    }
  },
  computed: {
    /*eslint-disable*/
      exchangeDes () {
        /*eslint-disable*/
        const _this = this
        if (_this.commodityDetail) {
          if (parseInt(_this.commodityDetail.type, 10) === 1) {
            if (parseInt(_this.commodityDetail.status, 10) === 1) {
              // 实物且上架状态
              if (parseInt(_this.commodityDetail.stock_num, 10) > 0) {
                return '立即兑换'
              } else {
                return '补货中'
              }
            } else if (parseInt(_this.commodityDetail.status, 10) === 2) {
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
      Price
    },
    created () {
      this.goodNo = this.$route.params.goodNo
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
      //this.getMyCoin()
      //this.getCommodityDetail()
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
      handleViewImage (index) {
        this.modelFlag = true
        setTimeout(() => {
          this.swiper2.slideTo(index)
        })
      },
      handleCloseModel () {
        this.modelFlag = false
      },
      goShopping(){
        const _this = this
        _this.$router.push({
          path:'purchase'
        })
      },
      handleGoExchage (status) {
        const _this = this
        if (status === 2) {
          return
        }
        if (this.commodityDetail.coin > this.coinBalance) {
          this.Toast('鲸币不足，暂时无法兑换哦~')
        } else {
          if ((parseInt(_this.commodityDetail.type, 10) === 1) && (parseInt(_this.commodityDetail.stock_num, 10) > 0)) {
            this.$router.push({
              path: '/orderDetail/' + this.goodNo
            })
          }
          if ((parseInt(_this.commodityDetail.type, 10) === 1) && !(parseInt(_this.commodityDetail.stock_num, 10) > 0)) {
            this.Toast('补货中，稍后再来看看吧~')
          }
          if (parseInt(_this.commodityDetail.type, 10) !== 1) {
            this.$router.push({
              path: '/orderDetail/' + this.goodNo
            })
          }
        }
      },
      async getMyCoin () {
        try {
          const data = await getMyCoin()
          this.coinBalance = data.display_balance
        } catch (e) {
          this.Toast(e.message)
        } finally {
          this.Indicator.close()
        }
      },
      async getCommodityDetail () {
        this.Indicator.open()
        try {
          const params = {
            goods_no: this.goodNo
          }
          this.commodityDetail = await getCommodityDetail(params)
          const type = this.commodityDetail.type
          const cardType = this.commodityDetail.card_type
          if (type === 1) {
            // 实物
            this.seclickText = '实物'
          } else if (type === 2) {
            // 课时
            this.seclickText = '课时'
          } else {
            if (cardType === 1) {
              // 直充
              this.seclickText = '直充'
            } else {
              this.seclickText = '卡密'
            }
          }
        } catch (e) {
          console.log(e)
          this.Toast(e.message || '网络错误')
        } finally {
          this.Indicator.close()
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
            height:auto;
            padding: 16px 68px 40px 68px;
            background:rgba(255,255,255,1);
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
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
