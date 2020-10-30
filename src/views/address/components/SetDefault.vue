<template>
  <section class="set-default">
    <span class="default-title">设置为默认地址</span>
    <span class="default-btn" @click.stop="changeState">
      <span class="btn-panel" :class="{selected:selected}"></span>
    </span>
  </section>
</template>
<script>
export default {
  name: 'setDefault',
  props: {
    selected: {
      default () {
        return 0
      },
      type: Number
    }
  },
  data () {
    return {
      onOff: false
    }
  },
  created () {
    const _this = this
    _this.onOff = _this.selected
  },
  methods: {
    changeState () {
      const _this = this
      _this.onOff = !_this.onOff
      _this.$emit('handleSet', _this.onOff)
    }
  }
}
</script>
<style lang="scss" scoped>
  .set-default{
    margin-left: 28px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 30px;
    justify-content: space-between;
    .default-title{
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 100px;
    }
    .default-btn{
      width: 98px;
      height: 64px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .btn-panel{
        height: 34px;
        width: 63px;
        display: block;
        position: relative;
        background: #f2f2f2;
        border-radius: 17px;
        transition: all .4s ease-in-out;
        &::after{
          content:' ';
          border-radius: 50%;
          position: absolute;
          top:50%;
          width: 42px;
          transition: all .4s ease-in-out;
          height: 42px;
          background: #ffffff;
          box-shadow: 0px 2px 11px 0px rgba(205,205,205,0.5);
          transform: translateY(-50%);
          left: -20px;
        }
        &.selected{
          background: #02b1ff;
          &::after{
            left: 43px;
          }
        }
      }
    }
  }
</style>
