<template>
    <section class="jd_order_item">
        <figure class="logo" style="background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595586434305&di=117447f4f41cc5ba95d0c5fb3babbfe2&imgtype=0&src=http%3A%2F%2Fpic.jjkk.org%2Fuploads%2Fuserup%2Fjyimg%2F7ed603fe08a485df.jpg') no-repeat center/cover"></figure>
        <h1 class="title">测试标题测试标题测试标题测试标题测试标题</h1>
        <h1 class="price">￥327</h1>
    </section>
</template>
<script>
export default {
  name: 'orderItem'
}
</script>
<style lang="scss" scoped>
    .jd_order_item{
        height: 500px;
        border-radius: 11px;
        margin-top: 21px;
        margin-right: 20px;
        background: #fff;
        width:339px;
        &:nth-of-type(2n){
            margin-right: 0;
        }
        .logo{
            width:339px;
            height:339px;
            border-radius:11px 11px 0px 0px;
        }
        .price,.title{
            width:315px;
            min-height:28px;
            height: auto;
            font-size:30px;
            font-family:SourceHanSansCN;
            font-weight:400;
            text-align: center;
            color:rgba(51,51,51,1);
            line-height:45px;
            margin-top: 6px;
        }
        .price{
            font-size:32px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            color:rgba(227,28,121,1);
            line-height:32px;
            text-align: left;
        }
    }
</style>
