<template>
    <section class="jd_main jd_shopping">
        <section class="jd_shopping_card">
            <HeaderBar title="购物车" subTitle="删除" class="shopping-header" :back="true" @handleEvent="handleDeleteCart"></HeaderBar>
        </section>
        <section class="jd_shopping_list">
            <h1 class="jd_shopping_title">
                <figure class="logo"></figure>
                <span>关东臻品</span>
            </h1>
            <section class="jd_shopping_item" v-for="(item) in cartData.cartList" :key="item.id" @click="selectItem(item)" :class="{selected:item.select}">
                <div class="radio"></div>
                <figure class="logo" :style="{background:`url('${item.primaryPicUrl}') no-repeat center/cover`}"></figure>
                <article class="shopping-detail">
                    <h1 class="title" v-text="item.goodsName"></h1>
                    <div class="des">规格：6个/份     重量：  1kg</div>
                    <div class="price">￥{{item.retailPrice}}</div>
                </article>
                <div class="changeNum">
                    <span class="minus" @click.stop="changeNum(item,0)">-</span>
                    <span class="num">{{item.number}}</span>
                    <span class="add" @click.stop="changeNum(item,1)">+</span>
                </div>
            </section>
        </section>
        <section class="jd_shopping_buy">
            <span class="select_all" @click="selectAllGoods" :class="{selected:selectAll}">
                <i class="icon"></i>
                全选
            </span>
            <span class="price">
                <div class="jd_title">
                    <span>合计：</span>
                    <span class="num">￥{{cartData.goodsAmount}}</span>
                </div>
                <div class="jd_subTitle">已优惠：{{cartData.goodsDiscount}}元</div>
            </span>
            <span class="submit" @click="submitOrder">去结算</span>
        </section>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import { getGoodCart, clearCart, deleteCart } from '@/resource'
import { mapActions } from 'vuex'
export default {
  name: 'shopping',
  components: {
    HeaderBar
  },
  data () {
    return {
      cartOriginalData: {},
      cartData: {},
      selectData: []
    }
  },
  mounted () {
    const _this = this
    _this.getGoodCartList()
  },
  computed: {
    selectAll () {
      const _this = this
      let allOnOff = true
      if (_this.cartData.cartList.length) {
        for (let num = 0; num < _this.cartData.cartList.length; num++) {
          const item = _this.cartData.cartList[num]
          if (parseInt(item.select, 10) === 0) {
            allOnOff = false
          }
        }
      } else {
        allOnOff = false
      }
      return allOnOff
    }
  },
  methods: {
    ...mapActions(['saveGoodCart']),
    selectAllGoods () {
      const _this = this
      if (_this.selectData.length) {
        _this.selectData = []
        for (let num = 0; num < _this.cartData.cartList.length; num++) {
          const item = _this.cartData.cartList[num]
          item.select = 0
        }
      } else {
        _this.selectData = JSON.parse(JSON.stringify(_this.cartData.cartList))
        for (let num = 0; num < _this.selectData.length; num++) {
          const item = _this.selectData[num]
          item.select = 1
          _this.cartData.cartList[num].select = 1
        }
      }
    },
    submitOrder () {
      const _this = this
      const resultData = []
      for (let num = 0; num < _this.selectData.length; num++) {
        const item = _this.selectData[num]
        const jsonData = {
          goodsId: item.goodsId,
          goodsNum: item.number
        }
        resultData.push(jsonData)
      }
      if (resultData.length) {
        console.log(resultData)
        _this.saveGoodCart(resultData)
        setTimeout(() => {
          _this.$router.push({
            path: 'purchase',
            query: {
              type: 1// 购物车商品
            }
          })
        }, 300)
      } else {
        _this.Toast('请选择您要购买的商品')
      }
    },
    changeNum (data, dir) {
      const _this = this
      if (dir) {
        // +
        data.number++
      } else {
        // -
        if (data.number > 1) {
          data.number--
        }
      }
      _this.changeItemNumber(data)
    },
    changeItemNumber (data) {
      const _this = this
      const resultList = []
      let hasOnOff = false
      for (let num = 0; num < _this.selectData.length; num++) {
        const item = _this.selectData[num]
        if (data.id === item.id) {
          data.select = 1
          item.number = data.number
          hasOnOff = true
          continue
        }
      }
      if (!hasOnOff) {
        data.select = 1
      }
      resultList.push(data)
      _this.selectData = resultList
    },
    handleDeleteCart () {
      const _this = this
      if (_this.selectData.length) {
        _this.MessageBox.confirm(`您确定要${_this.selectAll ? '清空' : '删除'}购物车商品`).then(async () => {
          if (_this.selectAll) {
            // 全选既是清空
            console.log('清空购物车')
            const res = await clearCart()
            if (res) {
              // location.reload()
            }
          } else {
            // 单独删除购物车商品
            const resultData = []
            for (let num = 0; num < _this.selectData.length; num++) {
              const item = _this.selectData[num]
              resultData.push(item.id)
            }
            if (resultData.length) {
              try {
                const res = await deleteCart({ ids: resultData.join(',') })
                console.log(res)
                if (res) {
                  // location.reload()
                }
              } catch (e) {
                _this.Toast(e.message || '删除失败')
              }
            }
          }
        })
      }
    },
    selectItem (data) {
      const _this = this
      const resultList = []
      let hasOnOff = false
      for (let num = 0; num < _this.selectData.length; num++) {
        const item = _this.selectData[num]
        if (data.id === item.id) {
          data.select = 0
          hasOnOff = true
          continue
        }
      }
      if (!hasOnOff) {
        data.select = 1
        resultList.push(data)
      }
      _this.selectData = resultList
    },
    async getGoodCartList () {
      const _this = this
      try {
        const res = await getGoodCart()
        const formatte = (data) => {
          const resultList = []
          const originalList = JSON.parse(JSON.stringify(data.cartList))
          for (let num = 0; num < originalList.length; num++) {
            const item = originalList[num]
            item.select = 0
            resultList.push(item)
          }
          data.cartList = resultList
          return data
        }
        _this.cartOriginalData = formatte(res.rows)
        _this.cartData = JSON.parse(JSON.stringify(_this.cartOriginalData))
      } catch (e) {
        console.log(e.message || '获取tab数据失败')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_shopping{
        .jd_shopping_card{
            width:750px;
            height:317px;
            background:linear-gradient(90deg,rgba(51,218,138,1),rgba(18,201,138,1));
            .shopping-header{
                background: none;
            }
        }
        .jd_shopping_list{
            width:694px;
            box-shadow:-1px 8px 1px 0px rgba(161,161,161,0.06);
            min-height:490px;
            padding-bottom: 40px;
            height: auto;
            background:rgba(255,255,255,1);
            border-radius:14px;
            margin-top: -200px;
            margin-left: auto;
            margin-right: auto;
            .jd_shopping_title{
                height: 50px;
                margin: 0 0 0 12px;
                padding-top: 31px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                font-size:25px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(51,51,51,1);
                .logo{
                    width: 50px;
                    height: 50px;
                    background: #ccc;
                    margin-right: 20px;
                    background: url("~img/shopping/logo.png") center/cover;

                }
            }
            .jd_shopping_item{
                height: 138px;
                padding-left: 24px;
                padding-right: 44px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                margin-top: 80px;
                position: relative;
                .radio{
                    width:29px;
                    height:29px;
                    border:1px solid rgba(181,181,181,1);
                    border-radius:50%;

                }
                .logo{
                    width: 138px;
                    height: 138px;
                    border-radius: 50%;
                    background: #ccc;
                    margin-left: 40px;
                    margin-right: 30px;
                }
                .shopping-detail{
                    width: auto;
                    .title{
                        height:24px;
                        font-size:25px;
                        font-family:SourceHanSansCN;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        margin-bottom: 10px;
                    }
                    .des{
                        height:24px;
                        font-size:21px;
                        font-family:SourceHanSansCN;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        margin-bottom: 29px;
                    }
                    .price{
                        font-size:29px;
                        font-family:SourceHanSansCN;
                        font-weight:500;
                        color:rgba(231,26,39,1);
                        line-height:21px;
                    }
                }
                .changeNum{
                    position: absolute;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    right: 44px;
                    bottom:12px;
                    height: 32px;
                    .minus,.add{
                        width:32px;
                        height:32px;
                        color: #999;
                        text-align: center;
                        font-size: 20px;
                        border-radius: 50%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid #999;
                    }
                    .num{
                        height:32px;
                        font-size:21px;
                        font-family:SourceHanSansCN;
                        font-weight:500;
                        line-height: 32px;
                        color:rgba(153,153,153,1);
                        margin: 0 26px;
                    }
                }
                &.selected{
                    .radio{
                        border: 1px solid #33da8a;
                        background: url("~img/shopping/selected.png") center/cover;
                    }
                }
            }
        }
        .jd_shopping_buy{
            height:131px;
            background:rgba(255,255,255,1);
            width: 100%;
            position: absolute;
            bottom:99px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .select_all{
                height: 29px;
                margin-left: 50px;
                font-size:25px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(51,51,51,1);
                display: flex;
                flex-direction: row;
                align-items: center;
                i{
                    width:29px;
                    height:29px;
                    border:1px solid rgba(181,181,181,1);
                    border-radius:50%;
                    margin-right: 20px;
                }
                &.selected{
                    i{
                        border: 1px solid #33da8a;
                        background: url("~img/shopping/selected.png") center/cover;
                    }
                }

            }
            .price{
                height: 72px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 240px;
                margin-left: 104px;
                .jd_title{
                    height:28px;
                    font-size:29px;
                    font-family:SourceHanSansCN;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    margin-bottom: 24px;
                    .num{
                        color: #E71A27;
                    }
                }
                .jd_subTitle{
                    font-size:21px;
                    font-family:SourceHanSansCN;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                }
            }
            .submit{
                width:181px;
                height:62px;
                background:rgba(85,196,125,1);
                border-radius:31px;
                font-size:29px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height: 62px;
                text-align: center;
            }
        }
    }
</style>
