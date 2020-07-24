<template>
    <section class="jd_tab">
        <section class="jd_tab_item active">
            <div class="icon index"></div>
            <div class="title">首页</div>
        </section>
        <!--<section class="jd_tab_item">
            <div class="icon poster"></div>
            <div class="title">个性化海报</div>
        </section>-->
        <section class="jd_tab_item">
            <div class="icon recommend"></div>
            <div class="title">推荐</div>
        </section>
        <section class="jd_tab_item">
            <div class="icon me"></div>
            <div class="title">我的</div>
        </section>
    </section>
</template>
<script>
export default {
  name: 'tab'
}
</script>
<style lang="scss" scoped>
    .jd_tab{
        width: 100%;
        height:99px;
        box-shadow:0px -1px 1px 0px rgba(204,204,204,0.5);
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        bottom:0;
        left: 0;
        right: 0;
        background: #fff;
        justify-content: space-around;
            .jd_tab_item{
                width: 120px;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            .icon{
                margin-bottom: 7px;
                &.index{
                    width: 51px;
                    height: 45px;
                    background: url("~img/tab/home.png") center/cover;
                }
                &.me{
                    width: 51px;
                    height: 45px;
                    background: url("~img/tab/personal.png") center/cover;
                }
                &.recommend{
                    width: 51px;
                    height: 45px;
                    background: url("~img/tab/recommend.png") center/cover;
                }
                &.poster{
                    width: 45px;
                    height: 45px;
                    background: url("~img/tab/poster.png") center/cover;
                }
            }
            .title{
                text-align: center;
                height:20px;
                font-size:20px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                color:rgba(153,153,153,1);
            }
                &.active{
                    .icon{
                        &.index{
                            width: 51px;
                            height: 45px;
                            background: url("~img/tab/home-active.png") center/cover;
                        }
                        &.me{
                            width: 51px;
                            height: 45px;
                            background: url("~img/tab/personal-active.png") center/cover;
                        }
                        &.recommend{
                            width: 51px;
                            height: 45px;
                            background: url("~img/tab/recommend-active.png") center/cover;
                        }
                        &.poster{
                            width: 45px;
                            height: 45px;
                            background: url("~img/tab/poster-active.png") center/cover;
                        }
                    }
                    .title{
                        color:#12C98A;
                    }
                }
        }
    }
</style>
