<template>
    <section class="ml-login-mainInner">
        <HeaderBar title="登录注册页" :back="true"></HeaderBar>
        <!--<section class="ml-login-title">
            <h1 class="title">欢迎登陆</h1>
            <div class="close-btn" @click.stop="reBack"></div>
        </section>-->
        <!--<section class="ml-slogan-container">
            <Slogan></Slogan>
        </section>-->
        <section class="ml-form-phone">
            <InputPhone></InputPhone>
            <VerificationCode></VerificationCode>
        </section>
        <section class="ml-open-metion" :class="{'active':submitOnOff}" @click.stop="loginFunc">登录</section>
        <section class="ml-authorization">
            <article class="register">快速注册</article>
            <p class="third-line">第三方</p>
            <figure class="third-logo"></figure>
            <section class="userAgreement">登录表示您同意 <em>《用户协议》</em></section>
        </section>
    </section>
</template>

<script type="text/ecmascript-6">
// import Slogan from 'components/Slogan'
import HeaderBar from 'components/HeaderBar/index'

import InputPhone from './components/InputPhone.vue'
import VerificationCode from './components/VerificationCode.vue'
import { mapGetters } from 'vuex'
import { isInvalidString } from 'libs/utils.js'
import { testPhoneNum } from 'libs/regularTest.js'
import axios from 'axios'
export default {
  components: {
    // Slogan,
    InputPhone,
    HeaderBar,
    VerificationCode
  },
  data () {
    return {

    }
  },
  beforeMount () {
  },
  computed: {
    ...mapGetters(['codeNum', 'phoneNum']),
    submitOnOff () {
      const _this = this
      return (!isInvalidString(_this.phoneNum)) && testPhoneNum(_this.phoneNum) && (!isInvalidString(_this.codeNum))
    }
  },
  methods: {
    reBack () {
      window.history.back()
    },
    loginFunc () {
      const _this = this
      axios.get('/api/customer/login', {
        params: {
          phone: _this.phoneNum,
          smsCode: _this.codeNum
        }
      })
        .then(function (response) {
          console.log(response)
          if (parseInt(response.data.code, 10) === 200) {
            localStorage.setItem('customerId', response.data.result.id)
            _this.reBack()
          } else {
            alert('登录失败')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  watch: {

  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
    .ml-login-mainInner{
        background: #fff;
        height: 100vh;
    }
    .ml-form-phone{
        margin:30px 64px 0 56px;
    }
    .ml-open-metion{
        margin:144px 64px 40px 56px;
        width:630px;
        height:92px;
        background:rgba(18, 201, 138, 1); /* Green */
        border-radius:12px;
        font-size:32px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:92px;
        text-align: center;
        opacity:.7;
        &.active{
            opacity:1;
        }

    }
    .ml-authorization{
        margin: 0 58px;
        position: fixed;
        bottom:0;
        height: 306px;
        width: 630px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        .register{
            height:40px;
            font-size:28px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:#34A814;
            line-height:40px;
            text-align: center;
            margin-bottom: 32px;
        }
        .third-line{
            height:28px;
            font-size:20px;
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(142,142,147,1);
            line-height:28px;
            text-align: center;
            width:82px;
            position: relative;
            margin-bottom: 20px;
            &:after{
                content: " ";
                position: absolute;
                width:276px;
                height:2px;
                background: #e7e7e7;
                left: -296px;
                top:50%;
                margin-top: -1px;
            }
            &:before{
                content: " ";
                position: absolute;
                width:276px;
                height:2px;
                background: #e7e7e7;
                right: -296px;
                top:50%;
                margin-top: -1px;
            }
        }
        .third-logo{
            width:88px;
            height:88px;
            background:rgba(80,182,116,1);
            background: url("~img/login/weChatLogin.png") no-repeat center center/cover;
            margin-bottom: 50px;
        }
        .userAgreement{
            width:372px;
            height:28px;
            font-size:20px;
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(142,142,147,1);
            line-height:28px;
            text-align: center;
            em{
                color: #3484FF;
                font-style: normal;
            }
        }
    }

</style>
