<template>
    <section class="ml-mainInner">
        <HeaderBar title="消息中心" :back="true"></HeaderBar>
        <section class="ml-message-content">
            <MessageBanner></MessageBanner>
            <section class="ml-system-message">
                <section class="system-item">
                    <figure class="message-logo">
                        <div class="logo-type">
                            <i class="icon"></i>
                            <em class="type-des">官方</em>
                        </div>
                    </figure>
                    <article class="system-message-content">
                        <h1 class="system-title">
                            <span class="system-sign">#</span>哇~ 有人热情的欢迎了你，魅力爆棚诶~
                        </h1>
                        <span class="message-time">2月10日 15:01</span>
                        <span class="slide">展开</span>
                    </article>
                </section>
                <section class="system-item">
                    <figure class="message-logo">
                        <div class="logo-type">
                            <i class="icon"></i>
                            <em class="type-des">官方</em>
                        </div>
                    </figure>
                    <article class="system-message-content">
                        <h1 class="system-title">
                            <span class="system-sign">#</span>哇~ 有人热情的欢迎了你，魅力爆棚诶~
                        </h1>
                        <span class="message-time">2月10日 15:01</span>
                        <span class="slide">展开</span>
                    </article>
                </section>
                <section class="system-item">
                    <figure class="message-logo">
                        <div class="logo-type">
                            <i class="icon"></i>
                            <em class="type-des">官方</em>
                        </div>
                    </figure>
                    <article class="system-message-content">
                        <h1 class="system-title">
                            <span class="system-sign">#</span>哇~ 有人热情的欢迎了你，魅力爆棚诶~
                        </h1>
                        <span class="message-time">2月10日 15:01</span>
                        <span class="slide">展开</span>
                    </article>
                </section>
                <section class="system-item">
                    <figure class="message-logo">
                        <div class="logo-type">
                            <i class="icon"></i>
                            <em class="type-des">官方</em>
                        </div>
                    </figure>
                    <article class="system-message-content">
                        <h1 class="system-title">
                            <span class="system-sign">#</span>哇~ 有人热情的欢迎了你，魅力爆棚诶~
                        </h1>
                        <span class="message-time">2月10日 15:01</span>
                        <span class="slide">展开</span>
                    </article>
                </section>
            </section>
        </section>
    </section>
</template>

<script type="text/ecmascript-6">
import HeaderBar from 'components/HeaderBar/index'
import MessageBanner from './components/MessageBanner.vue'
export default {
  components: {
    HeaderBar,
    MessageBanner
  },
  data () {
    return {
      navIndex: 1,
      headerConfig: {
        backOnOff: false,
        title: '消息'
      }
    }
  },
  beforeMount () {
  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
    body{
        background: #f6f6f6;
    }
    @mixin clearfix() {
        &:after {
            content: '';
            display: table;
            clear: both;
        }
    }
    .ml-message-content{
        .ml-system-message{
            width:750px;
            background:rgba(255,255,255,1);
            @include clearfix();
            height: auto;
            .system-item{
                height:252px;
                width: 698px;
                padding: 22px 32px 20px 20px;
                border-bottom: 2px solid rgba(237, 237, 237, 1);
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-around;
                .message-logo{
                    width:88px;
                    height: 100%;
                    margin-right: 18px;
                    .logo-type{
                        width:88px;
                        height:88px;
                        border-radius: 50%;
                        position: relative;
                        //overflow: hidden;
                        background:rgba(255,60,49,0.5);
                        border:2px solid rgba(255,60,49,1);
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .icon{
                            width: 40px;
                            height: 42px;
                            background: url("~img/topic/bell.png") no-repeat center center/cover;
                        }
                        .type-des{
                            font-style: normal;
                            width:48px;
                            height:18px;
                            position: absolute;
                            top: -6px;
                            background: rgba(255,60,49,1);
                            right: -10px;
                            font-size:12px;
                            font-family:PingFangSC-Semibold;
                            text-align: center;
                            line-height: 18px;
                            font-weight:600;
                            color:rgba(255,255,255,1);
                            border-radius: 4px;
                        }
                    }
                }
                .system-message-content{
                    width:552px;
                    min-height:210px;
                    height: auto;
                    padding: 20px;
                    background:rgba(246,246,246,1);
                    border-radius:12px;
                    position: relative;
                    .system-title{
                        width:524px;
                        min-height:94px;
                        height: auto;
                        font-size:32px;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        color:#444;
                        line-height:50px;
                        .system-sign{
                            color:rgba(255,60,49,1);
                            margin-right: 6px;
                        }
                    }
                    .message-time{
                        position: absolute;
                        bottom:20px;
                        left: 20px;
                        height:28px;
                        font-size:20px;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(142,142,147,1);
                        line-height:28px;
                    }
                    .slide{
                        height:40px;
                        font-size:28px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(153,153,153,1);
                        line-height:40px;
                        letter-spacing:1px;
                        bottom:20px;
                        right: 20px;
                        position: absolute;
                    }
                }
            }
        }

    }

</style>
