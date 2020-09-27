<template>
  <div class="price-wrap" :class="className">
    <span class="current-price">{{coin}}</span>
    <span class="original-price">{{type !== 2 ? '¥' + displayPrice: ''}}</span>
  </div>
</template>
<script>
export default {
  name: 'Price',
  props: {
    displayPrice: {
      type: Number,
      default: 0
    },
    coin: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
  .price-wrap {
    padding: 0 2px;
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .current-price {
      padding-right: 38px;
      height: 32px;
      font-size:32px;
      font-family:DINAlternate-Bold,DINAlternate;
      font-weight:bold;
      color:rgba(239,76,81,1);
      line-height: 32px;
      background:url('~img/shopping/whale-coin.png') no-repeat right center;
      background-size: 32px 32px;
    }
    .original-price {
      font-size:24px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(171,168,171,1);
      text-decoration: line-through;
    }
  }
  .big {
    .current-price {
      display: block;
      height: 50px;
      padding-right: 62px;
      font-size:44px;
      line-height: 50px;
      background-size: 50px 50px;
    }
    .original-price {
      font-size:26px;
    }
  }
</style>
