<template>
    <section class="recommend-sub">
        <figure class="logo" style="background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595586434305&di=117447f4f41cc5ba95d0c5fb3babbfe2&imgtype=0&src=http%3A%2F%2Fpic.jjkk.org%2Fuploads%2Fuserup%2Fjyimg%2F7ed603fe08a485df.jpg') no-repeat center/cover">
            <span class="sign">养生</span>
        </figure>
        <article class="recommend-info">
            <h1 class="title">练习瑜伽的好处有哪些？</h1>
            <div class="statistics">
                <span>浏览量：8889</span>
                <span>收藏了：1222</span>
            </div>
            <article class="recommend-article">瑜伽，不仅只是一套流行或时髦的健身运动这么简单。瑜伽是瑜伽，不仅只是一套流行或时髦的健身运动这么简单。瑜伽是</article>
        </article>
    </section>
</template>
<script>
export default {
  name: 'recommendSub'
}
</script>
<style lang="scss" scoped>
    .recommend-sub{
        height: 223px;
        width: 100%;
        display: flex;
        margin-top: 33px;
        background: #fff;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .logo{
            width:221px;
            height:161px;
            margin-left: 22px;
            margin-right: 27px;
            position: relative;
            .sign{
                position: absolute;
                top:0;
                left: 0;
                border-radius:0px 15px 15px 0px;
                background:rgba(19,113,255,1);
                box-shadow:-1px 1px 3px 0px rgba(0, 0, 0, 0.3);
                font-size:20px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height: 31px;
                text-align: center;
                padding: 5px 10px;
            }
        }
        .recommend-info{
            height: 161px;
            width: 446px;
            .title{
                width:446px;
                height:27px;
                font-size:28px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:38px;
                margin-bottom: 17px;
            }
            .statistics{
                height:25px;
                font-size:26px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:38px;
                margin-bottom: 23px;
                span{
                    margin-right: 46px;
                }
            }
            .recommend-article{
                width:456px;
                height:51px;
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:28px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
</style>
