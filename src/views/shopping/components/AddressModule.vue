<template>
    <section class="jd_address_module" @click="goAddress">
        <div class="icon"></div>
        <div class="detail">
            <h1 class="title">
                <span>收货人：{{config.userName}}</span>
                <span v-text="config.mobile"></span>
            </h1>
            <article class="address-info">收货地址：{{config.address}}</article>
        </div>
        <div class="arrow"></div>
    </section>
</template>
<script>
export default {
  name: 'addressModule',
  props: {
    config: {
      default () {
        return {}
      },
      type: Object
    }
  },
  methods: {
    goAddress () {
      const _this = this
      _this.$router.push({
        path: 'myAddress'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_address_module{
        height:167px;
        background:rgba(255,255,255,1);
        box-shadow:-1px 8px 1px 0px rgba(161,161,161,0.06);
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        .icon{
            width:31px;
            height:42px;
            margin-left: 35px;
            margin-right: 39px;
            background: url("~img/shopping/address.png") no-repeat center/cover;
        }
        .detail{
            .title{
                height:28px;
                font-size:29px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(51,51,51,1);
                width:559px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 36px;
            }
            .address-info{
                width:559px;
                height:24px;
                font-size:25px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(153,153,153,1);
            }
        }
        .arrow{
            width:17px;
            height:28px;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            right: 44px;
            background: url("~img/personal/arrow.png") no-repeat center/cover;
        }
    }
</style>
