<template>
  <section class="express-info-item" :class="{'express-subMain':subMain}">
    <span class="time-line"></span>
    <div class="icon"></div>
    <article class="expressInfo">
      <h1 class="stateTitle" v-if="!subMain" style="display: none;">已签收</h1>
      <section class="expressDetail">
        <p class="des-content" v-text="config.status">
        </p>
        <p class="des-time" v-text="config.time"></p>
      </section>
    </article>
  </section>
</template>
<script>
export default {
  name: 'expressInfoItem',
  props: {
    subMain: {
      default () {
        return false
      },
      type: Boolean
    },
    config: {}
  }
}
</script>
<style lang="scss" scoped>
  .express-info-item{
    display: flex;
    -webkit-overflow-scrolling: touch;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 22px;
    padding-right: 26px;
    position: relative;
    padding-bottom: 39px;
    .icon{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 10px;
      background: #dadada;
    }
    .time-line{
      position: absolute;
      left: 8px;
      top:20px;
      width: 2px;
      background: #eceaea;
      height: calc(100% - 20px);
    }
    .expressInfo{
        .stateTitle{
          font-size: 24px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          color: #333333;
          margin-bottom: 12px;
        }
        .expressDetail{
          width: 545px;
          min-height: 36px;
          height: auto;
          margin-top: -10px;
          font-size: 22px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: justify;
          color: #333333;
          line-height: 48px;
          .des-time{
            color:#999;
          }
        }
    }
    &.express-subMain{
      padding-bottom: 23px;
      .icon{
        width: 10px;
        height: 10px;
        margin-left: 15px;
        margin-right: 33px;
        background: #dadada;
      }
      .time-line{
        top:10px;
        height: calc(100% - 10px);
      }
    }
    &:nth-last-of-type(1){
      .time-line{
        display: none;
      }
    }
    &:nth-of-type(1){
      .icon{
        background: #ff0012;
      }
    }
  }
</style>
