<template>
    <section class="jd_order_tab">
        <section class="order-item active">全部</section>
        <section class="order-item">查看</section>
        <section class="order-item">待付款</section>
        <section class="order-item">待发货</section>
        <section class="order-item">待收货</section>
        <section class="order-item">完成</section>
    </section>
</template>
<script>
export default {
  name: 'orderTab'
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
