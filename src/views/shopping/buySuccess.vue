<template>
    <section class="jd_main jd-buy-success">
        <HeaderBar title="支付成功"  :back="true"></HeaderBar>
        <section class="jd-success-logo">
            <figure class="logo"></figure>
            <h1 class="title">支付成功</h1>
            <h1 class="price" v-text="config&&config.orderPrice?config.orderPrice:''"></h1>
            <div class="handleBar">
                <span class="handleItem" @click="buyAgain">再来一单</span>
                <span class="handleItem" @click="checkMyOrder">查看订单</span>
            </div>
        </section>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import { checkOrderStatus } from 'api'

export default {
  name: 'buySuccess',
  components: {
    HeaderBar
  },
  data () {
    return {
      config: null
    }
  },
  mounted () {

  },
  methods: {
    async asyncCheckStatus () {
      const _this = this
      try {
        const res = await checkOrderStatus({ orderSn: _this.orderSn })
        console.log(res)
        if (parseInt(res.payStatus, 10) === 5) {
          // 5支付成功
          _this.config = res
        }
      } catch (e) {
        _this.Toast(e.msg || '支付状态查询失败，请在设置-反馈中联系客服')
      }
    },
    checkMyOrder () {
      const _this = this
      _this.$router.push({
        path: 'order'
      })
    },
    buyAgain () {
      const _this = this
      _this.$router.push({
        path: 'home'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd-buy-success{
        background: #fff;
        .jd-success-logo{
            width: 100%;
            margin-top: 141px;
            .logo{
                width:135px;
                height:135px;
                background: url("~img/shopping/successIcon.png") no-repeat center/cover;
                box-shadow:0px 8px 27px 0px rgba(11, 60, 146, 0.35);
                border-radius:50%;
                margin: 0 auto 35px auto;
            }
            .title{
                width: 100%;
                text-align: center;
                height:35px;
                font-size:38px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(85,196,125,1);
                margin-bottom: 38px;
            }
            .price{
                height:29px;
                font-size:38px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(51,51,51,1);
                text-align: center;
                width: 100%;
                margin-bottom: 57px;
            }
            .handleBar{
                height: 61px;
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                .handleItem{
                    text-align: center;
                    &:nth-of-type(1){
                        margin-right: 38px;
                        width:202px;
                        height:61px;
                        border:1px solid rgba(159,153,166,1);
                        border-radius:31px;
                        font-size:29px;
                        font-family:SourceHanSansCN;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height: 61px;
                    }
                    &:nth-of-type(2){
                        margin-right: 38px;
                        width:202px;
                        height:61px;
                        border:1px solid rgba(85,196,125,1);
                        border-radius:31px;
                        font-size:29px;
                        font-family:SourceHanSansCN;
                        font-weight:500;
                        color:#fff;
                        line-height: 61px;
                        background:rgba(85,196,125,1);
                    }
                }
            }
        }
    }
</style>
