<template>
    <section class="ml-sure-btn" v-text="txt"></section>
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
  }
}
</script>
<style lang="scss" scoped>
    .ml-sure-btn{
        width:656px;
        height:84px;
        background:rgba(18, 201, 138, 1); /* Green */
        border-radius:12px;
        line-height: 84px;
        text-align: center;
        font-size:34px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(255,255,255,1);
        margin-left: auto;
        margin-right: auto;
    }
</style>
