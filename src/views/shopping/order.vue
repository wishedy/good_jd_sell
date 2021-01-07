<template>
    <section class="jd_main jd_order">
        <HeaderBar title="确认订单"  :back="true"></HeaderBar>
        <AddressModule :config="addressConfig"></AddressModule>
        <section class="jd_shopping_list">
            <h1 class="jd_shopping_title">
                <span>关东臻品</span>
                <span class="num" v-if="type===1">共3件</span>
            </h1>
            <section class="jd_shopping_item" v-for="(item) in goodDetail.goodsList" :key="item.goodsId">
                <figure class="logo"  :style="{background:`url('${item.primaryPicUrl}') no-repeat center/cover`}"></figure>
                <article class="shopping-detail">
                    <h1 class="title" v-text="item.goodsName"></h1>
                    <div class="des">规格：6个/份     重量：  1kg</div>

                </article>
                <div class="price">￥{{item.marketPrice}}</div>
                <div class="changeNum">
                    <span class="num">X {{item.number}}</span>
                </div>
            </section>
            <div class="amount">
                <span class="amount-title">合计：</span>
                <span class="amount-price">￥{{goodDetail.orderPrice}}</span>
            </div>
        </section>
        <section class="jd_pay">
            <h1 class="jd_shopping_title">
                <span>支付方式</span>
            </h1>
            <div class="pay-item weChat">
                <div class="pay_title">
                    <i class="icon"></i>
                <span class="label">微信</span>
                </div>
                <span class="radio"></span>
            </div>
            <div class="pay-item aliPay selected">
                <div class="pay_title">
                    <i class="icon"></i>
                    <span class="label">支付宝</span>
                </div>
                <span class="radio"></span>
            </div>
        </section>
        <section class="jd_order_submit">
            <span class="sum">合计：<i>￥{{goodDetail.orderPrice}}</i></span>
            <span class="buy-ok" @click="submitOrder">提交订单</span>
        </section>
    </section>
</template>
<script>
import Cookies from 'js-cookie'
import { checkOrderStatus, doPay, previewGoodDetail, submitGood } from '@/resource'
import { mapActions, mapGetters } from 'vuex'
import { isInvalidString, changeURLArg, isWeiXin } from 'libs/utils'
import HeaderBar from 'components/HeaderBar/index'
import AddressModule from './components/AddressModule'
export default {
  name: 'sureOrder',
  components: {
    HeaderBar,
    AddressModule
  },
  data () {
    const _this = this
    const type = parseInt(_this.$route.query.type, 10)
    const paySuccess = !isInvalidString(_this.$route.query.pay_success)
    const orderSn = _this.$route.query.orderSn
    const id = _this.$route.query.id
    const openId = Cookies.get('openId')
    return {
      openId,
      type: type,
      id: id,
      orderSn: orderSn,
      paySuccess: paySuccess,
      submitData: [],
      goodDetail: {},
      addressConfig: {}
    }
  },
  computed: {
    ...mapGetters(['goodsCart'])
  },
  mounted () {
    const _this = this
    alert(isWeiXin())
    _this.checkType()
    _this.checkQuery()
  },
  methods: {
    ...mapActions(['saveGoodCart']),
    async asyncCheckStatus () {
      const _this = this
      try {
        const res = await checkOrderStatus({ orderSn: _this.orderSn })
        console.log(res)
        if (parseInt(res.payStatus, 10) === 5) {
          // 5支付成功
          _this.$router.push({
            path: 'buySuccess',
            query: {
              orderSn: _this.orderSn
            }
          })
        }
      } catch (e) {
        _this.Toast(e.msg || '支付状态查询失败，请在设置-反馈中联系客服')
      }
    },
    checkQuery () {
      const _this = this

      if (_this.paySuccess) {
        // 检索到有支付成功的标识
        /*eslint-disable*/
        _this.$login().then(res => {
          _this.MessageBox.confirm('支付成功').then(action => {
            if (action === 'confirm') {
              _this.checkStatus()
              // 点击取消
            } else if (action === 'cancel') {
              _this.Toast('请在设置-反馈中向客服反馈')
            }
        })
        })
      }
    },
    async checkStatus(){
      const _this = this
      console.log('订单号========'+_this.orderSn)
      if(isInvalidString(_this.orderSn)){
        _this.Toast('支付参数有误')
      }else{
        _this.asyncCheckStatus()
      }
    },
    async getGoodDetail () {
      const _this = this
      try {
        const res = await previewGoodDetail({
          previewOrderList: _this.submitData
        })
        const resData = res.rows
        _this.goodDetail = resData
        _this.addressConfig = {
          receiverId: resData.receiverId,
          userName: resData.receiverInfo,
          mobile: resData.mobile,
          address: resData.province + '-' + resData.city + '-' + resData.district + '-' + resData.address
        }
        if (parseInt(_this.type, 10) === 1) {
          _this.saveGoodCart([])
        }
        console.log(_this.addressConfig)
      } catch (e) {
        console.log(e.message || '获取商品数据失败')
      }
    },
    checkType () {
      const _this = this
      if (_this.type === 0) {
        _this.submitData = [{
          goodsId: _this.id,
          goodsNum: 1
        }]
      } else if (_this.type === 1) {
        _this.submitData = _this.goodsCart
      }
      _this.getGoodDetail()
    },
    async submitOrder () {
      const _this = this
      if (_this.addressConfig.receiverId) {
        try {
          const res = await submitGood({
            receiverInfoId: _this.addressConfig.receiverId,
            submitDetailList: _this.submitData
          })
          const successUrlFirst = changeURLArg(location.href, 'pay_success', 'success')
          const successUrlSecond = changeURLArg(successUrlFirst, 'orderSn', res.rows)
          if (res) {
            console.log(res.rows)
            const param = {
              orderSn: res.rows,
              payType: isWeiXin() ? 1 : 4,
              notifyUrl: encodeURIComponent(successUrlSecond),
              openId: _this.openId ? _this.openId : ''
            }
            console.log(_this.addressConfig.receiverId)
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
          }
        } catch (e) {
          _this.Toast(e.message || '订单提交失败')
        }
      } else {
        _this.Toast('暂无发货地址-请添加')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_order{
        .amount,.jd_shopping_title{
            min-height: 50px;
            height: auto;
            margin: 0 0 0 28px;
            padding-top: 31px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-size:29px;
            font-family:SourceHanSansCN;
            font-weight:500;
            color:rgba(51,51,51,1);
            .num{
                height:28px;
                font-size:29px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(153,153,153,1);
                margin-right: 41px;
            }
        }
        .jd_shopping_list{
            width:100%;
            margin-top: 20px;
            min-height:490px;
            height: auto;
            background:rgba(255,255,255,1);
            border-radius:14px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 20px;
            padding-bottom: 50px;
            .amount{
                justify-content: flex-end;
                margin-right: 70px;
                .amount-price{
                    color: #e71a27;
                }
            }
            .jd_shopping_item{
                height: 138px;
                padding-left: 24px;
                padding-right: 44px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                margin-top: 80px;
                position: relative;
                .logo{
                    width: 138px;
                    height: 138px;
                    border-radius: 50%;
                    background: #ccc;
                    margin-left: 40px;
                    margin-right: 30px;
                }
                .shopping-detail{
                    width: auto;
                    .title{
                        height:24px;
                        font-size:25px;
                        font-family:SourceHanSansCN;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        margin-bottom: 10px;
                    }
                    .des{
                        height:24px;
                        font-size:21px;
                        font-family:SourceHanSansCN;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        margin-bottom: 29px;
                    }

                }
                .price{
                    position: absolute;
                    top:0;
                    font-size:29px;
                    font-family:SourceHanSansCN;
                    font-weight:500;
                    color:rgba(231,26,39,1);
                    line-height:21px;
                    right: 44px;
                    margin-right: 26px;
                }
                .changeNum{
                    position: absolute;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    right: 44px;
                    bottom:12px;
                    height: 32px;
                    .num{
                        height:32px;
                        font-size:21px;
                        font-family:SourceHanSansCN;
                        font-weight:500;
                        line-height: 32px;
                        color:rgba(153,153,153,1);
                        margin: 0 26px;
                    }
                }
                &.selected{
                    .radio{
                        border: 1px solid #33da8a;
                        background: url("~img/shopping/selected.png") center/cover;
                    }
                }
            }
        }
        .jd_pay{
            background: #fff;
            height: auto;
            width: 100%;
            .pay-item{
                width: 100%;
                height: 100px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid rgba(0,0,0,.1);
                &:nth-last-of-type(1){
                    border-bottom: none;
                }
                .pay_title{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                }
                .icon{
                    margin-right: 32px;
                    margin-left: 32px;
                }
                .label{
                    font-size:30px;
                    text-align: left;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                }
                .radio{
                    width:29px;
                    height:29px;
                    border:1px solid rgba(181,181,181,1);
                    border-radius:50%;
                    margin-right: 32px;

                }
                &.selected{
                    .radio{
                        border: 1px solid #33da8a;
                        background: url("~img/shopping/selected.png") center/cover;
                    }
                }
                &.weChat{
                    .icon{
                        width:44px;
                        height:40px;
                        background: url("~img/shopping/wechat.png") no-repeat center/cover;
                    }
                }
                &.aliPay{
                    .icon{
                        width:44px;
                        height:44px;
                        background: url("~img/shopping/aliPay.png") no-repeat center/cover;

                    }
                }
            }
        }
        .jd_order_submit{
            height:100px;
            background:rgba(255,255,255,1);
            box-shadow:-1px 8px 1px 0px rgba(161,161,161,0.06);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            position: fixed;
            bottom:0;
            left: 0;
            right: 0;
            .sum{
                margin-left: 40px;
                font-size:38px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(51,51,51,1);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                width: 449px;
                height: 100%;
                i{
                    font-style: normal;
                    color: #E71A27;
                    margin-right: 42px;
                }
            }
            .buy-ok{
                width:301px;
                height:100px;
                line-height: 100px;
                text-align: center;
                color: #fff;
                background:rgba(85,196,125,1);
            }
        }
    }
</style>
