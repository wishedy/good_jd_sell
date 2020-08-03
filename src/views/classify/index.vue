<template>
    <section class="jd_main jd_classify">
        <HeaderBar title="分类" :back="true"></HeaderBar>
        <section class="jd_classify_container">
            <div class="jd_tab">
                <span class="jd_tab_item active">分类</span>
                <span class="jd_tab_item">分类</span>
                <span class="jd_tab_item">分类</span>
                <span class="jd_tab_item">分类</span>
                <span class="jd_tab_item">分类</span>
                <span class="jd_tab_item">分类</span>
                <span class="jd_tab_item">分类</span>
                <span class="jd_tab_item">分类</span>
                <span class="jd_tab_item">分类</span>
                <span class="jd_tab_item">分类</span>
            </div>
            <section class="jd_content">
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
                <span class="jd_content_item">
                    <figure class="jd_logo"></figure>
                    <h1 class="title">测试标题</h1>
                </span>
            </section>
        </section>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
export default {
  name: 'classify',
  components: {
    HeaderBar
  }
}
</script>
<style lang="scss" scoped>
    .jd_classify{
        .jd_classify_container{
            width: 100%;
            background: #fff;
            height: calc(100vh - 187px);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
        }
        .jd_tab{
            width:163px;
            height: 100%;
            background:rgba(245,245,245,1);
            .jd_tab_item{
                display: block;
                height: 86px;
                text-align: center;
                line-height: 86px;
                &.active{
                    color: #55C47D;
                    background: #fff;
                    border-left:5px solid #55C47D
                }
            }
        }
        .jd_content{
            width: calc(100% - 163px);
            height: 100%;
            overflow-y: scroll;
            -webkit-overflow-scrolling : touch;
            .jd_content_item{
                height: 160px;
                width: 107px;
                margin: 36px;
                float: left;
                .jd_logo{
                    width: 107px;
                    height: 107px;
                    background: #ccc;
                    border-radius: 50%;
                    margin-bottom: 26px;
                }
                .title{
                    width: 107px;
                    height:24px;
                    font-size:25px;
                    font-family:SourceHanSansCN;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                }
            }
        }
    }
</style>
