<template>
    <section class="recommend-sub" @click="goDetail">
        <figure class="logo" :style="{background:`url('${config.articleCover}') no-repeat center/cover`}">
            <span class="sign">11111{{config.articleCategory}}</span>
        </figure>
        <article class="recommend-info">
            <h1 class="title">{{config.articleName}}</h1>
            <div class="statistics">
                <span>浏览量：{{config.browseNum}}</span>
                <span>收藏了：{{config.collectionNum}}</span>
            </div>
            <article class="recommend-article">{{config.articleIntroduction}}</article>
        </article>
    </section>
</template>
<script>
export default {
  name: 'recommendSub',
  props: {
    config: {
      default () {
        return {}
      },
      type: Object
    }
  },
  methods: {
    goDetail () {
      const _this = this
      _this.$router.push({
        path: 'recommendDetail',
        query: {
          id: _this.config.id
        }
      })
    }
  }
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
