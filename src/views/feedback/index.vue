<template>
  <section class="ml-feedBack">
    <HeaderBar title="用户反馈" :back="true"></HeaderBar>
    <section class="speakContainer">
      <figure class="container">
        <textarea name="" id="" cols="30" rows="10" placeholder="您的意见和建议是我们提升服务的源头活水" v-model="suggestion"></textarea>
        <span class="num">{{suggestion.length}}/50</span>
      </figure>
    </section>
    <section class="ml-feedBack-publish">
      <PublishImage @insertPhoto="addPhoto" :exhibitionData="attIdList" @deleteItem="deleteItem"></PublishImage>
    </section>
    <SureBtn txt="保存" class="save-btn" @click.native="saveAdvice"></SureBtn>
    <CancelBtn txt="取消" @click.native="returnBack"></CancelBtn>
  </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import { saveSuggestion } from '@/resource'
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
      browseType: 1,
      suggestion: '',
      attIdList: [],
      headerConfig: {
        backOnOff: true,
        title: decodeURIComponent(editTitle)
      }
    }
  },
  watch: {
    suggestion (n) {
      const _this = this
      if (n.length > 50) {
        _this.suggestion = n.substring(0, 50)
      }
    }
  },
  methods: {
    returnBack () {
      const _this = this
      _this.$router.go(-1)
    },
    async saveAdvice () {
      const _this = this
      const param = {
        browseType: 1,
        suggestion: _this.suggestion,
        attIdList: _this.attIdList
      }
      try {
        const res = await saveSuggestion(param)
        console.log(res)
        if (res) {
          _this.Toast('已收到您的反馈，我们会尽快处理')
        }
      } catch (e) {
        _this.Toast('反馈提交失败')
      }
    },
    deleteItem (index) {
      const _this = this
      _this.attIdList.splice(index, 1)
    },
    addPhoto (url) {
      const _this = this
      _this.attIdList.push({ imageUrl: url })
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
