<template>
    <section class="jd_order_tab">
        <section class="order-item" v-for="(item,index) in status" :key="index" v-text="item.des" :class="{active:tabIndex===index}" @click="changeTab(item,index)"></section>
    </section>
</template>
<script>
export default {
  name: 'orderTab',
  props: {
    tabIndex: {
      default () {
        return 0
      },
      type: Number
    }
  },
  methods: {
    changeTab (data, index) {
      const _this = this
      _this.$emit('handleTab', { param: data, index })
    }
  },
  data () {
    return {
      status: [
        {
          des: '全部'
        },
        {
          des: '待付款',
          payStatus: 1
        },
        {
          des: '待发货',
          payStatus: 5,
          shippingStatus: 1
        },
        {
          des: '待收货',
          payStatus: 5,
          shippingStatus: 5
        },
        {
          des: '完成',
          orderStatus: 1
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
   .jd_order_tab{
       background: #fff;
       height: 90px;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-around;
       font-size:30px;
       font-family:SourceHanSansCN;
       font-weight:400;
       color:rgba(51,51,51,1);
       border-bottom: 1px solid rgba(246,246,246,1);;
       .order-item{
           width: auto;
           height: 100%;
           position: relative;
           line-height: 90px;
           &.active{
               &::after{
                   width: 60%;
                   content: " ";
                   position: absolute;
                   height:4px;
                   background:rgba(52,168,20,1);
                   bottom:-4px;
                   left: 50%;
                   transform: translateX(-50%);
               }
           }
       }
   }
</style>
