<template>
    <section class="al-payHelp">
        <HeaderBar title="常见问题" :back="true"></HeaderBar>
        <div class="buy-container">
            <div class="question-item">
                <h1 class="title">
                    一、什么是唯币
                </h1>
                <p class="content">
                    唯币是唯医骨科平台的虚拟货币，用于购买平台内的付费内容。唯币只能消费，不能提现或转让。唯币仅限iOS系统消费，无法在其他系统使用。
                </p>
            </div>
            <div class="question-item">
                <h1 class="title">
                    二、为什么提示扣款成功，唯币却没有到账
                </h1>
                <p class="content">
                    1. 因Apple支付服务需要时间完成验证，故唯币充值存在极短时间延迟的可能，请您耐心等待。<br/>
                    2. 请检查您当前账户和充值的账户是否一致，您可对照查看用户名或者播放历史等信息。<br/>
                    3. 尝试退出唯医骨科App，再次进入我的-余额。<br/>
                    4. 如果完成充值1小时后，唯币仍未到账。<br/>
                    请拨打唯医骨科官方客服热线 010-59007006 <br/>
                    或者添加唯医骨科官方客服微信 weiyizs123，<br/>
                    我们会在第一时间为您核实支付情况并为您的账户添加对应的唯币。
                </p>
            </div>
            <div class="question-item">
                <h1 class="title">
                    三、通过苹果支付，为何实际扣费比充值金额多，是否造成多扣费
                </h1>
                <p class="content">
                    Apple扣费有时会把多笔消费累计扣除，请登录注册Apple ID的邮箱，查看Apple发给您的邮件收据，在这里会有扣费的详细信息，指明每笔扣费具体流向哪个App。<br/>

                </p>
            </div>

        </div>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
export default {
  components: {
    HeaderBar
  },
  data () {
    return {
      headerConfig: {
        title: '苹果充值帮助', //  *标题项
        share: { // ..自定义分享项
          onOff: false,
          params: {},
          authority: 1
        },
        feedback: { // ..自定义反馈项
          onOff: false
        },
        backOnOff: true
      },
      appPort: true
    }
  }
}
</script>
<style lang="scss" scoped>
    @mixin clearfix() {
        &:after {
            content: '';
            display: table;
            clear: both;
        }
    }
    .buy-container {
        width: 100%;
        box-sizing: border-box;
        padding: 0 (15px);
        background: #fff;

        .items {
            margin-bottom: (30px);

            &.items-last {
                margin-bottom: 0;
            }

            .outer {
                //margin-bottom: (13px);

                &.outer-one {
                    padding-top: (22px);
                    &.outer-one-top{
                        padding-top: (10px);
                    }
                }

                &.outer-last {
                    padding-bottom: (40px);
                    margin-bottom: 0;
                }

                .sidebar {
                    float: left;
                    width: (27px);
                    //height: (44px);
                    .order-number {
                        display: block;
                        width: (19px);
                        height: (19px);
                        line-height: (19px);
                        background: rgba(100, 131, 233, 1);
                        border-radius: (19px);
                        text-align: center;
                        font-size: (15px);
                        color: #fff;
                        &.order-number-last{
                            background:url("/static/images/buyHelp/small.png") center center;
                            background-size: cover;
                        }
                        &.order-number-1{
                            background:url("/static/images/buyHelp/s1.png") center center;
                            background-size: cover;
                        }
                        &.order-number-2{
                            background:url("/static/images/buyHelp/s2.png") center center;
                            background-size: cover;
                        }
                        &.order-number-3{
                            background:url("/static/images/buyHelp/s3.png") center center;
                            background-size: cover;
                        }
                        &.order-number-4{
                            background:url("/static/images/buyHelp/s4.png") center center;
                            background-size: cover;
                        }
                        &.order-number-5{
                            background:url("/static/images/buyHelp/s5.png") center center;
                            background-size: cover;
                        }
                        &.order-number-6{
                            background:url("/static/images/buyHelp/s5.png") center center;
                            background-size: cover;
                        }
                    }
                }

                .content {
                    width: (287px);
                    //height: (44px);
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                    line-height: (22px);
                    margin-left: (27px);
                    font-size: (16px);
                    text-align:justify;
                }
            }

            .img-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                //height: (168px);
                background: rgba(248, 248, 248, 0.8);
                border-radius: (4px);
                margin-top: (13px);

                .img {
                    width: 100%;
                    //width: (260px);
                    //margin: 0 auto;

                    &.img1 {
                        height: (168px);
                        background: url("/static/images/buyHelp/1.png") no-repeat;
                        background-size: cover;
                    }

                    &.img2 {
                        //width: (345px);
                        height: (98px);
                        background: url("/static/images/buyHelp/2.png") no-repeat;
                        background-size: cover;
                    }

                    &.img3 {
                        //width: (345px);
                        height: (318px);
                        background: url("/static/images/buyHelp/3.png") no-repeat;
                        background-size: cover;
                    }

                    &.img4 {
                        //width: (345px);
                        height: (315px);
                        background: url("/static/images/buyHelp/4.png") no-repeat;
                        background-size: cover;
                    }

                    &.img5 {
                        height: (315px);
                        background: url("/static/images/buyHelp/6-6.png") no-repeat;
                        background-size: cover;
                    }

                    &.img6 {
                        //width: (345px);
                        height: (225px);
                        background: url("/static/images/buyHelp/6.png") no-repeat;
                        background-size: cover;
                    }
                }
            }

        }
        .question-item{
            .title{
                min-height:(52px);
                height:auto;
                font-size:(36px);
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(0,0,0,1);
                line-height:(52px);
                padding: (40px) 0;
                padding-top: (44px);
            }
            .content{
                font-size:(32px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:(50px);
                @include clearfix();
            }
        }

    }
</style>
