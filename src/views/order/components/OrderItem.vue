<template>
    <section class="jd_order_item">
        <h1 class="order-id">
            <span class="id-num">手机号:{{config.mobile}}</span>
            <span class="order-state">待付款</span>
        </h1>
        <section class="order-content">
            <figure class="logo" :style="{background:`url('${config.goodsList[0].primaryPicUrl}') no-repeat center/cover`}"></figure>
            <article class="order-detail">
                <h1 class="title" v-text="config.goodsList[0].goodsName">绿萝盆栽吸出甲醛室内办室小绿植</h1>
                <span class="des">人参-干货</span>
            </article>
            <div class="order-price">￥678.00</div>
            <div class="order-num">x1</div>
        </section>
        <section class="order-info">
            <!--<div class="mail-deduct">
                <span class="des">
                    您的提成：
                </span>
                <span class="price">￥45.90</span>
            </div>-->
            <div class="mail-detail" style="margin-left: 25px;">
                <span class="des">
                    付款：
                </span>
                <span class="price">￥{{config.orderPrice}}</span>
                <span class="des mail-info">(含运费￥0.00）</span>
            </div>
        </section>
        <section class="handle-bar">
            <div class="order-time" v-text="config.createTime"></div>
            <div class="order-btn">
                <section class="btn-item">查看详情</section>
            </div>
        </section>
    </section>
</template>
<script>
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
  computed: {
    status () {
      /* "shippingStatus": 0,物流状态（1、未发货 5、 发货中 10、已到达 15、已签收 20-退货中 25-已退货） <number>   "orderStatus": null,订单状态(1-未付款 5-交易成功 10-已退款 15-交易关闭) <string>
      * "payStatus": null,支付状态（1-未支付 5-已支付 10-超时未支付） <string> */
      const _this = this
      let resultStr = ''
      switch (parseInt(_this.config.payStatus, 10)) {
        case 1:
          resultStr = '待付款'
          break
        case 5:
          switch (parseInt(_this.config.shippingStatus, 10)) {
            case 1:
              resultStr = '待发货'
              break
            case 5:
              resultStr = '待收货'
              break
            case 15:
              resultStr = '交易完成'
              break
            case 20:
              resultStr = '退货中'
              break
            default:
              switch (parseInt(_this.config.orderStatus, 10)) {
                case 10:
                  resultStr = '已退款'
                  break
              }
              break
          }
          break
      }
      return resultStr
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
            .mail-info{
                margin-right: 31px;
            }
        }
        .handle-bar{
            height: 97px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .order-time{
                font-size:20px;
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
                }
            }
        }
    }
</style>
