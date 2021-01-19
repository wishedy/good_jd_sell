<template>
  <transition name="confirm-fade">
  <section class="rouchi-logistics">
    <section class="logistics-content">
      <i class="closeIcon" @click="handleClose"></i>
      <h1 class="logistics-title">物流跟踪</h1>
      <SfExpress  style="display:none;"></SfExpress>
      <ExpressList :expressInfo="expressInfo" :expressName="expressName" :expressNo="expressNo"></ExpressList>
      <EmptyInfo  v-if="expressInfo.length===0"></EmptyInfo>
    </section>
  </section>
  </transition>
</template>
<script>
import EmptyInfo from './components/EmptyInfo'
import SfExpress from './components/SfExpress'
import ExpressList from './components/ExpressList'
export default {
  name: 'logistics',
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
    },
    expressInfo: {
      default () {
        return []
      },
      type: Array
    }
  },
  components: {
    EmptyInfo,
    SfExpress,
    ExpressList
  },
  methods: {
    handleClose () {
      const _this = this
      _this.$emit('closeDialog')
    }
  }
}
</script>
<style lang="scss" scoped>
  /* 进来的动画 */
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* 出去的动画 */
  @keyframes outOpacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  /* 进入和出去的动画 */
  .confirm-fade-enter-active {
    animation: opacity 0.3s;
  }
  .confirm-fade-leave-active {
    animation: outOpacity 0.2s;
  }
  .rouchi-logistics{
    height: 100vh;
    width: 100%;
    background: rgba(4,4,4,.7);
    position: fixed;
    top:0;
    bottom:0;
    right: 0;
    left: 0;
    z-index: 2;
    .logistics-content{
      width: 650px;
      height: 1146px;
      overflow-x: hidden;
      overflow-y: scroll;
      background: #ffffff;
      border-radius: 15px;
      position: relative;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .closeIcon{
        width: 23px;
        position: absolute;
        top:36px;
        right: 36px;
        height: 23px;
        background: url("~@/assets/images/closeIcon.png") no-repeat center/cover;

      }
      .logistics-title{
        padding-top: 36px;
        text-align: center;
        font-size: 32px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #333333;
        width: 100%;
      }
    }
  }
</style>
