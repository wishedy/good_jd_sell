<template>
  <section class="address-item">
    <div class="user-info">
      <span class="lable-title">收货人：</span>
      <span class="user-receiverName" v-text="config.receiverName"></span>
      <span class="user-mobile" v-text="config.mobile"></span>
      <span class="defaultAddress" v-if="parseInt(config.is_default,10)===1"><i>默认</i></span>
    </div>
    <div class="user-address">
      <article class="address-content" v-text="`收货地址：${config.province?config.province:''}${config.city?config.city:''}-${config.district?config.district:''}${config.address?config.address:''}`"></article>
      <div class="handle-bar">
        <span class="handle-delete icon" @click.stop="deleteAddress"></span>
        <span class="handle-edit icon" @click.stop="editAddress"></span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  receiverName: 'addressItem',
  props: {
    config: {
      default () {
        return {}
      },
      type: Object
    }
  },
  methods: {
    deleteAddress () {
      const _this = this
      _this.$emit('handleDelete', { addr_id: _this.config.id })
    },
    editAddress () {
      const _this = this
      _this.$router.push({ name: 'address', query: { id: _this.config.id } })
    }
  }
}
</script>
<style lang="scss" scoped>
  .address-item{
    min-height: 140px;
    margin-left: 32px;
    padding: 25px 32px 25px 0;
    border-bottom: 1px solid #eaeaea;
    font-size: 28px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    line-height: 50px;
    &:nth-last-of-type(1){
      border-bottom: none;
    }
    .user-info{
      margin-bottom: 10px;
      .lable-title{
        color:#333;
      }
      .user-mobile,.user-receiverName{
        font-weight: 600;
        color: #333333;
        margin-left: 15px;
      }
      .defaultAddress{
        width: 48px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        font-size: 22px;
        color: #fff;
        background: #ff3939;
        border-radius: 3px;
        margin-left: 12px;
        display: inline-block;
        position: relative;
        i{
          display: block;
          position: absolute;
          top:0;
          bottom:0;
          right: 0;
          left: 0;
          font-style: normal;
          transform: scale(.8);
        }
      }
    }
    .user-address{
      min-height: 80px;
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 48px;
      width: 686px;
      position: relative;
      .address-content{
        width: 582px;
        height: auto;
      }
      .handle-bar{
        height: 34px;
        width: 88px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        right: 0;
        top:0;
        .icon{
          width: 34px;
          height: 34px;
          &.handle-delete{
            background: url("~~img/address/deleteIcon.png") no-repeat center/cover;

          }
          &.handle-edit{
            background: url("~~img/address/editIcon.png") no-repeat center/cover;

          }
        }
      }
    }

  }
</style>
