<template>
    <section class="jd_main">
        <!--<HeaderBar title="关东臻品"></HeaderBar>-->
        <section class="jd_home_card">
            <div class="jd_content">
                <input type="text" placeholder="请输入您的产品">
                <i class="icon"></i>
                <i class="message"></i>
            </div>
        </section>
        <BannerBar></BannerBar>
        <EntranceModule></EntranceModule>
        <section class="divide-line"></section>
        <SpecialOffer></SpecialOffer>
        <section class="divide-line"></section>
        <TabBar></TabBar>
        <section class="jd_order_list">
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
        </section>
    </section>
</template>
<script>

import BannerBar from 'components/BannerBar/BannerBar'
import EntranceModule from './components/EntranceModule'
import SpecialOffer from 'components/SpecialOffer/SpecialOffer'
import TabBar from './components/TabBar'
import OrderItem from './components/OrderItem'
export default {
  name: 'home',
  components: {
    BannerBar,
    // HeaderBar,
    EntranceModule,
    SpecialOffer,
    TabBar,
    OrderItem
  }
}
</script>
<style lang="scss" scoped>
        .jd_home_card{
            width:100%;
            height:346px;
            background:linear-gradient(90deg,rgba(51,218,138,1),rgba(18,201,138,1));
            position: relative;
            overflow: hidden;
            .jd_content{
                width:604px;
                height:60px;
                background:rgba(255,255,255,1);
                border-radius:30px;
                position: absolute;
                top:20px;
                left: 30px;
                .icon{
                    width: 26px;
                    height: 26px;
                    position: absolute;
                    top:50%;
                    left: 28%;
                    transform: translate(0,-50%);
                    background: url('~img/search/search.png') no-repeat center/cover;
                }
                .message{
                    width:47px;
                    height:46px;
                    top:50%;
                    position: absolute;
                    transform: translateY(-40%);
                    right: -80px;
                    background: url('~img/search/message.png') no-repeat center/cover;
                }
                input{
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    border-radius:30px;
                    &::placeholder{
                        outline: none;
                        border: none;
                        font-size:28px;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:#b1b1b1;
                        line-height:60px;
                        text-align: center;
                    }
                    &:focus{
                        outline: none;
                        border: none;
                    }
                }
            }
            &::after{
                width: 140%;
                height: 346px;
                position: absolute;
                left: -20%;
                top: 200px;
                z-index: 1;
                content: ' ';
                border-radius: 50% 50% 0 0 ;
                background: #fff;
            }
        }
        .divide-line{
            width: 744px;
            border: 3px solid #fff;
            height: 14px;
        }
        .jd_order_list{
            box-sizing: unset;
            width: 710px;
            padding: 21px 20px;
            //background: #fff;
            min-height: 500px;
            flex-wrap: wrap;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
</style>
