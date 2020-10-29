<template>
    <section class="jd_main jd_order">
        <HeaderBar title="确认订单"  :back="true"></HeaderBar>
        <AddressModule></AddressModule>
        <section class="jd_shopping_list">
            <h1 class="jd_shopping_title">
                <span>关东臻品</span>
                <span class="num" v-if="type===1">共3件</span>
            </h1>
            <section class="jd_shopping_item">
                <figure class="logo"></figure>
                <article class="shopping-detail">
                    <h1 class="title">千图柠檬无公害绿色</h1>
                    <div class="des">规格：6个/份     重量：  1kg</div>

                </article>
                <div class="price">￥67</div>
                <div class="changeNum">
                    <span class="num">X 1</span>
                </div>
            </section>
            <div class="amount">
                <span class="amount-title">合计：</span>
                <span class="amount-price">￥289</span>
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
            <span class="sum">合计：<i>￥120</i></span>
            <span class="buy-ok" @click="submitOrder">提交订单</span>
        </section>
    </section>
</template>
<script>
import { previewGoodDetail, submitGood } from '@/resource'

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
    const id = _this.$route.query.id
    return {
      type: type,
      id: id,
      submitData: [],
      goodDetail: {}
    }
  },
  mounted () {
    const _this = this
    _this.checkType()
  },
  methods: {
    async getGoodDetail () {
      const _this = this
      try {
        const res = await previewGoodDetail({
          previewOrderList: _this.submitData
        })
        _this.goodDetail = res.rows
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
        _this.getGoodDetail()
      } /* else if (_this.type === 1) {

      } */
    },
    async submitOrder () {
      const _this = this
      try {
        const res = await submitGood({
          receiverInfoId: 1,
          submitDetailList: _this.submitData
        })
        if (res) {
          _this.$router.push({
            path: 'buySuccess'
          })
        }
      } catch (e) {
        _this.Toast(e.message || '订单提交失败')
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
