<template>
  <section class="express-no" v-if="expressNo&&expressName">
    <span class="sf-title" v-text="expressName"></span>
    <span class="sf-no"  id="express-model-text" v-text="expressNo"></span>
    <span
      class="copy-btn"
      data-clipboard-action="copy"
      data-clipboard-target="#express-model-text"
      id="express-model-copy"
    >复制</span>
  </section>
</template>
<script>
import ClipboardJS from 'clipboard'
export default {
  props: {
    expressName: {
      default () {
        return ''
      },
      type: String
    },
    expressNo: {
      default () {
        return ''
      },
      type: String
    }
  },
  name: 'expressName',
  mounted () {
    const _this = this
    _this.shareCopy()
  },
  methods: {
    shareCopy () { // 复制
      const _this = this
      const clipboard = new ClipboardJS('#express-model-copy')
      clipboard.on('success', function (e) {
        _this.Toast('复制成功')
        e.clearSelection()
      })
      clipboard.on('error', function (e) {
        _this.Toast('复制失败，请长按文本复制')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .express-no{
    padding-left: 22px;
    padding-top: 51px;
    font-size: 24px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: rgba(0,0,0,0.85);
    .sf-title{
      margin-right: 10px;
    }
    .copy-btn{
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      color: rgba(0,0,0,0.85);
      line-height: 32px;
      padding: 6px 9px;
      background: #f4f4f4;
      border-radius: 16px;
      margin-left: 24px;
    }
  }
</style>
