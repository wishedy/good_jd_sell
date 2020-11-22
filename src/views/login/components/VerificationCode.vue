<template>
    <section class="ml-code-module">
        <section class="ml-verification-code">
            <figure class="ml-input-bar">
                <input type="text" class="ml-input-item" placeholder="请输入您的验证码" v-model="code">
            </figure>
            <div class="ml-code-time" v-text="codeDes" @click.stop="getCode"></div>
        </section>
        <div class="ml-residue-num" v-text="residueNumDes" v-if="residueNum>0"></div>
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { sendCode } from '@/resource'
import { isInvalidString } from 'libs/utils.js'
import { testPhoneNum } from 'libs/regularTest.js'
export default {
  computed: {
    ...mapGetters(['onCoding', 'phoneNum', 'residueNum']),
    codeDes () {
      const _this = this
      if (_this.onCoding) {
        return _this.time + '秒'
      } else {
        return '获取验证码'
      }
    },
    residueNumDes () {
      const _this = this
      if (parseInt(_this.residueNum, 10)) {
        return '今日还剩' + _this.residueNum + '次'
      } else {
        return '今日获取验证码次数已用完'
      }
    }
  },
  watch: {
    onCoding (n) {
      const _this = this
      if (n) {
        const timer = setInterval(() => {
          _this.time > 0 ? _this.time-- : clearInterval(timer)
        }, 1000)
      }
    },
    code (n) {
      const _this = this
      _this.changeCodeNum(n)
    },
    time (n) {
      const _this = this
      if (parseInt(n, 10) === 0) {
        _this.changeCodeState(false)
        _this.time = 60
      }
    }
  },
  methods: {
    ...mapActions(['changeCodeState', 'changeResidueNum', 'changeCodeNum']),
    async getCode () {
      const _this = this
      if ((!isInvalidString(_this.phoneNum)) && testPhoneNum(_this.phoneNum)) {
        _this.changeCodeState(true)
        try {
          const param = {
            codeType: 1,
            mobile: _this.phoneNum
          }
          const res = await sendCode(param)
          if (res) {
            console.log(parseInt(res, 10), !isNaN(parseInt(res, 10)))
            if (!isNaN(parseInt(res))) {
              _this.changeResidueNum(res)
            }
            console.log(res)
          }
        } catch (e) {
          _this.changeResidueNum(0)
          _this.Toast(e.msg || '获取验证码失败')
        }
      } else {
        if (!isInvalidString(_this.phoneNum)) {
          _this.Toast('请输入您的手机号')
        } else {
          _this.Toast('请输入正确的手机号')
        }
      }
    }
  },
  data () {
    return {
      time: 60,
      code: ''
    }
  }
}
</script>
<style lang="scss" scoped>
    .ml-residue-num{
        width: 100%;
        text-align: right;
        height:36px;
        font-size:26px;
        font-family:PingFangSC-Light;
        font-weight:300;
        color:rgba(176,176,179,1);
        line-height:36px;
    }
    .ml-verification-code{
        width: 630px;
        height: 98px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        border-bottom: 2px solid #F1F0F1;
        margin-bottom: 32px;
        .ml-input-bar{
            width: 400px;
            text-align: left;
            line-height:40px;
            margin-bottom: 16px;
            .ml-input-item{
                outline: none;
                border:none;
                width: 100%;
                height: 100%;
                text-align: left;
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(68,68,68,1);
                &::-webkit-input-placeholder { /* WebKit browsers */
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:40px;
                    text-align: left;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:40px;
                    text-align: left;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:40px;
                    text-align: left;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10+ */
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:40px;
                    text-align: left;
                }
            }
        }
        .ml-code-time{
           width: 150px;
            height: 64px;
            margin-bottom: 16px;
            border-left: 2px solid #E7E7E7;
            padding-left: 20px;
            font-size:24px;
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(68,68,68,1);
            text-align: center;
            line-height: 64px;
        }
    }
</style>
