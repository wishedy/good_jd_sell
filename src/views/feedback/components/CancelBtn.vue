<template>
    <section class="ml-cancalBtn" v-text="txt" @click.stop="reBack"></section>
</template>
<script>
export default {
  props: {
    txt: {
      default () {
        return ''
      },
      type: String
    }
  },
  methods: {
    reBack () {
      window.history.back()
    }
  }
}
</script>
<style lang="scss" scoped>
    .ml-cancalBtn{
        width:652px;
        height:80px;
        background:#fff;
        border-radius:12px;
        line-height: 84px;
        text-align: center;
        font-size:34px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(18, 201, 138, 1);;
        border:2px solid rgba(18, 201, 138, 1);
        margin-left: auto;
        margin-right: auto;
    }
</style>
