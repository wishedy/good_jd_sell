<template>
    <section class="jd_order_item">
        <h1 class="order-id">
            <span class="id-num">手机号:{{config.mobile}}</span>
            <span class="order-state" v-text="status.statusDes">待付款</span>
        </h1>
        <section class="order-content">
            <figure class="logo" :style="{background:`url('${config.goodsList[0].primaryPicUrl}') no-repeat center/cover`}"></figure>
            <article class="order-detail">
                <h1 class="title" v-text="config.goodsList[0].goodsName"></h1>
                <span class="des"></span>
            </article>
            <div class="order-price">￥{{config.orderPrice}}</div>
            <div class="order-num">x1</div>
        </section>
        <section class="order-info">
            <!--<div class="mail-deduct">
                <span class="des">
                    您的提成：
                </span>
                <span class="price">￥45.90</span>
            </div>-->
            <div class="mail-detail" >
                <span class="des">
                    付款：
                </span>
                <span class="price">￥{{config.orderPrice}}</span>
                <span class="des mail-info">(含运费￥0.00）</span>
            </div>
            <div class="mail-detail"  v-if="config.payTime">
                <span class="des">
                    付款时间：
                </span>
                <span class="des mail-info">{{ config.payTime }}</span>
            </div>
        </section>
        <section class="handle-bar">
            <div class="order-time" v-text="'下单：'+config.createTime"></div>
            <div class="order-btn">
                <section class="btn-item" v-if="status.checkDes" v-text="status.checkDes" @click="handleOrder(config,1)" :class="{wake:status.checkDes==='提醒发货',pay:status.checkDes==='去付款'}"></section>
                <section class="btn-item receive" v-if="status.expressDes" v-text="status.expressDes" @click="receiveOrder(config,1)"></section>
            </div>
        </section>
    </section>
</template>
<script>
import Cookies from 'js-cookie'
import { checkOrderExpress, receiveUserOrder, cancelUserOrder, doPay } from '@/resource'
import { changeURLArg, isWeiXin } from 'libs/utils'
export default {
  name: 'orderItem',
  props: {
    config: {
      default () {
        return {}
      },
      type: Object
    }
  },
  data () {
    const openId = Cookies.get('openId')
    return {
      openId
    }
  },
  methods: {
    checkStatus (options, trigger, data) {
      const _this = this
      let resultStr = ''
      let btnStatus = ''
      let espressStatus = ''
      switch (parseInt(_this.config.payStatus, 10)) {
        case 1:
        case 0:
          resultStr = '待付款'
          btnStatus = '去付款'
          trigger && options.payOrder && options.payOrder(data)
          break
        case 5:
          switch (parseInt(_this.config.shippingStatus, 10)) {
            case 1:
            case 0:
              resultStr = '待发货'
              btnStatus = '提醒发货'
              trigger && options.wakeExpress && options.wakeExpress(data)
              break
            case 5:
              resultStr = '待收货'
              btnStatus = '查看物流'
              espressStatus = '确认收货'
              trigger && options.checkExpress && options.checkExpress(data)
              break
            case 15:
              resultStr = '已签收'
              // btnStatus = '确认收货'
              // trigger && options.receiveOrder && options.receiveOrder(data)
              break
            case 20:
              resultStr = '退货中'
              btnStatus = ''
              break
            default:
              switch (parseInt(_this.config.orderStatus, 10)) {
                case 10:
                  resultStr = '已退款'
                  btnStatus = ''
                  break
              }
              break
          }
          break
      }
      return {
        statusDes: resultStr,
        expressDes: espressStatus,
        checkDes: btnStatus
      }
    },
    async checkExpress (data) {
      const _this = this
      try {
        const res = await checkOrderExpress({ orderSn: data.orderSn })
        console.log(res)
        _this.$emit('showPanel', res)
      } catch (e) {
        _this.Toast('获取物流信息失败')
      }
    },
    async wakeExpress (data) {
      const _this = this
      _this.Toast('收到，迅速为您发货')
    },
    async receiveOrder (data) {
      const _this = this
      _this.MessageBox({
        title: '提示',
        message: '请您确定该订单已经收到？',
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: '取消',
        confirmButtonText: '确定'

      }).then(async () => {
        try {
          const res = await receiveUserOrder({ orderSn: data.orderSn })
          console.log(res)
          _this.handleAfterSuccess()
        } catch (e) {
          _this.Toast('获取物流信息失败')
        }
      })
    },
    async cancelOrder (data) {
      const _this = this
      _this.MessageBox({
        title: '提示',
        message: '请您确定取消该订单？',
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: '取消',
        confirmButtonText: '确定'

      }).then(async () => {
        try {
          const res = await cancelUserOrder({ orderSn: data.orderSn })
          console.log(res)
        } catch (e) {
          _this.Toast('获取物流信息失败')
        }
      })
    },
    handleAfterSuccess () {
      const _this = this
      _this.$emit('handleAfterSuccess')
    },
    async payOrder (item) {
      const _this = this
      console.log('继续支付')
      const successUrlFirst = changeURLArg(location.origin + '/purchase?type=0', 'pay_success', 'success')
      const successUrlSecond = changeURLArg(successUrlFirst, 'orderSn', item)
      const param = {
        orderSn: item.orderSn,
        payType: isWeiXin() ? 1 : 4,
        notifyUrl: encodeURIComponent(successUrlSecond),
        openId: _this.openId ? _this.openId : ''
      }
      if (isWeiXin()) {
        // 微信环境下
        const payConfig = await doPay(param)
        // wx.chooseWXPay(payConfig)
        /*eslint-disable*/
        const payFun = () => {
          WeixinJSBridge.invoke(
              'getBrandWCPayRequest', payConfig,
              function (res) {
                // alert(res.err_msg);
                if (res.err_msg === 'get_brand_wcpay_request:ok') {
                  // 使用以上方式判断前端返回,微信团队郑重提示：
                  console.log('支付成功===')
                  _this.paySuccess = true
                  _this.orderSn = param.orderSn
                  _this.checkQuery()
                } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
                  console.log('用户取消支付')
                } else if (res.err_msg === 'get_brand_wcpay_request:fail') {
                  console.log('支付失败')
                }
              })
        }

        if (typeof WeixinJSBridge === 'undefined') {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', function () {
              payFun()
            }, false)
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', function () {
              payFun()
            })
            document.attachEvent('onWeixinJSBridgeReady', function () {
              payFun()
            })
          }
        } else {
          payFun()
        }
      } else {
        // 非微信环境下
        const payConfig = await doPay(param)
        const payUrl = payConfig.url
        location.href = payUrl
      }
    },
    handleOrder (item) {
      const _this = this
      _this.checkStatus({
        checkExpress: _this.checkExpress,
        wakeExpress: _this.wakeExpress,
        payOrder: _this.payOrder,
        receiveOrder: _this.receiveOrder
      }, 1, item)
    }
  },
  computed: {
    status () {
      const _this = this
      /* "shippingStatus": 0,物流状态（1、未发货 5、 发货中 10、已到达 15、已签收 20-退货中 25-已退货） <number>   "orderStatus": null,订单状态(1-未付款 5-交易成功 10-已退款 15-交易关闭) <string>
      * "payStatus": null,支付状态（1-未支付 5-已支付 10-超时未支付） <string> */
      return _this.checkStatus()
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_order_item{
        height: 455px;
        width: 100%;
        margin-bottom: 30px;
        background: #fff;
        .order-id{
            width: 100%;
            height: 69px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .id-num{
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(102,102,102,1);
                margin-left: 30px;
            }
            .order-state{
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(239,101,58,1);
                margin-right: 29px;
            }
        }
        .order-content{
           width: 100%;
            height:205px;
            background:rgba(246,246,246,1);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            .order-price{
                top:39px;
                right: 30px;
                position: absolute;
                height:25px;
                font-size:30px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:40px;
            }
            .order-num{
                position: absolute;
                bottom:51px;
                right: 30px;
                height:18px;
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(153,153,153,1);
                line-height:27px;
            }
            .logo{
                width:160px;
                height:160px;
                margin-left: 30px;
                margin-right: 33px;
            }
            .order-detail{
                height: 160px;
                .title{
                    width:328px;
                    height:65px;
                    font-size:30px;
                    font-family:SourceHanSansCN;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:36px;
                    margin-bottom: 33px;
                }
                .des{
                    font-size:22px;
                    font-family:SourceHanSansCN;
                    font-weight:500;
                    color:rgba(153,153,153,1);
                    line-height:27px;
                }
            }
        }
        .order-info{
            height: 81px;
            font-size:24px;
            padding: 0 10px;
            font-family:SourceHanSansCN;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(246,246,246,1);
            .mail-deduct{
                margin-left: 30px;
            }
            .price{
                font-size:30px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:40px;
            }
        }
        .handle-bar{
            height: 97px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .order-time{
                font-size:22px;
                margin-left: 30px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:30px;
            }
            .order-btn{
                height:55px;
                margin-right: 31px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                .btn-item{
                    width:144px;
                    height:56px;
                    border:2px solid rgba(153,153,153,1);
                    border-radius:27px;
                    font-size:24px;
                    font-family:SourceHanSansCN;
                    font-weight:500;
                    color:rgba(153,153,153,1);
                    line-height: 56px;
                    text-align: center;
                    margin-right: 11px;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  &.pay{
                    border:2px solid #EF4C51;
                    color:#EF4C51;
                  }
                  &.receive{
                    border:2px solid #3AB344;
                    color:#3AB344;
                  }
                  &.wake{
                    border:2px solid #02B1FF;
                    color:#02B1FF;
                  }
                }
            }
        }
    }
</style>
