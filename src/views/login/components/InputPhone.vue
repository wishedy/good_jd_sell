<template>
    <section class="ml-inputPhone">
        <div class="ml-num-sign">
            <i class="sign-num">+86</i>
            <em class="icon"></em>
        </div>
        <figure class="ml-input-bar">
            <input type="text" class="ml-input-item" placeholder="请输入您的手机号" v-model="phoneNum">
        </figure>
    </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      phoneNum: ''
    }
  },
  methods: {
    ...mapActions(['setPhoneNum'])
  },
  watch: {
    phoneNum (n) {
      const _this = this
      _this.setPhoneNum(n)
    }
  }
}
</script>
<style lang="scss" scoped>
    .ml-inputPhone{
        width: 630px;
        height: 98px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        border-bottom: 2px solid #F1F0F1;
        .ml-num-sign{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            height:40px;
            margin-bottom: 16px;
            .sign-num{
                margin-left: 10px;
                height:40px;
                font-style: normal;
                font-size:28px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(68,68,68,1);
                line-height:40px;
            }
            .icon{
                width: 14px;
                height: 24px;
                margin-left: 10px;
                background: url("~img/login/right.png") no-repeat center center/cover;
            }
        }
        .ml-input-bar{
            width: auto;
            min-width: 400px;
            height:40px;
            font-size:28px;
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(68,68,68,1);
            text-align: right;
            line-height:40px;
            margin-bottom: 16px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .ml-input-item{
                outline: none;
                border:none;
                width: 100%;
                height: 100%;
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(68,68,68,1);
                text-align: right;
                &::-webkit-input-placeholder { /* WebKit browsers */
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:40px;
                    text-align: right;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:40px;
                    text-align: right;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:40px;
                    text-align: right;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10+ */
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:40px;
                    text-align: right;
                }
            }
        }
    }
</style>
