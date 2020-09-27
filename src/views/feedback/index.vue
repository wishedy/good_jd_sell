<template>
  <section class="ml-feedBack">
    <HeaderBar title="用户反馈" :back="true"></HeaderBar>
    <section class="speakContainer">
      <figure class="container">
        <textarea name="" id="" cols="30" rows="10" placeholder="说说您想对ta说的话"></textarea>
        <span class="num">50/50</span>
      </figure>
    </section>
    <section class="ml-feedBack-publish">
      <PublishImage></PublishImage>
    </section>
    <SureBtn txt="保存" class="save-btn"></SureBtn>
    <CancelBtn txt="取消"></CancelBtn>
  </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'

import PublishImage from './components/PublishImage.vue'
import SureBtn from './components/SureBtn.vue'
import CancelBtn from './components/CancelBtn.vue'
export default {
  components: {
    HeaderBar,
    PublishImage,
    SureBtn,
    CancelBtn
  },
  data () {
    const editTitle = ''
    return {
      headerConfig: {
        backOnOff: true,
        title: decodeURIComponent(editTitle)
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  .ml-feedBack{
    background: #fff;
    width: 100%;
    height: 100vh;
    .speakContainer{
      padding-top: 68px;
        margin-right: 20px;
        margin-left: 20px;
        margin-bottom: 40px;
        .container{
          width:650px;
          margin: 0 auto;
          height:254px;
        padding: 28px 30px;
        position: relative;
        background:rgba(246,246,246,1);
        border-radius: 12px;
        .num{
          height:36px;
          font-size:26px;
          font-family:PingFangSC-Light;
          font-weight:300;
          line-height:36px;
          position: absolute;
          right: 50px;
          bottom:52px;
          color: #8E8E93;
          &.error{
            color:rgba(255,102,90,1);
          }
        }
        textarea{
          display: block;
          border: none;
          outline: none;
          resize: none;
          font-size:32px;
          width: 100%;
          height: 100%;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(68,68,68,1);
          line-height:44px;
          background:rgba(246,246,246,1);
          &::-webkit-input-placeholder { /* WebKit browsers */
            color:rgba(187,187,187,1);
            font-size:32px;
            line-height:44px;
          }
          &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color:rgba(187,187,187,1);
            font-size:32px;
            line-height:44px;
          }
          &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color:rgba(187,187,187,1);
            font-size:32px;
            line-height:44px;
          }
          &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color:rgba(187,187,187,1);
            font-size:32px;
            line-height:44px;
          }
        }
      }
    }
    .save-btn{
      margin-bottom: 20px;
    }
    .ml-feedBack-publish{
      margin-bottom: 40px;
    }
  }

</style>
