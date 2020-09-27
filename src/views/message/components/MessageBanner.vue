<template>
    <section class="ml-message-banner">
        <section class="ml-message-center">
            <figure class="ml-message-logo">
                <h1 class="ml-message-title">新出炉！更多优质小伙伴~ 快来打招呼</h1>
                <div class="ml-image-container"></div>
            </figure>
            <article class="ml-message-detail">
                喜报！喜报！本次版本更新后，带来了更多优质伙伴的推荐，快来和他们打招呼吧~
            </article>
        </section>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .ml-message-banner{
        width: 750px;
        height: 400px;
        background: #F6F6F6;
        padding: 18px 0 20px 0;
        .ml-message-center{
            margin: 0 auto;
            height: 400px;
            width: 710px;
            .ml-message-logo{
                width:710px;
                height:284px;
                background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(0,0,0,0.6) 100%);
                border-radius:12px 12px 0px 0px;
                position: relative;
                overflow: hidden;
                .ml-message-title{
                    width: 670px;
                    position: absolute;
                    left: 20px;
                    bottom:20px;
                    height:44px;
                    font-size:32px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:44px;
                    letter-spacing: 1px;
                    z-index: 1;
                }
                .ml-image-container{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    right: 0;
                    bottom:0;
                    top:0;
                    background: url("https://webimg.quanjing.com/Recommend/1558459015894.jpg") no-repeat center center/cover;
                }
            }
            .ml-message-detail{
                background: #ffffff;
                height: 80px;
                padding: 18px 10px 18px 12px;
                font-size:28px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(68,68,68,1);
                line-height:40px;
                letter-spacing:1px;
                border-radius:0 0 12px 12px;
            }
        }
    }

</style>
