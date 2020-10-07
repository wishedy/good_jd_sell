<template>
    <section class="jd_recommend_item">
        <figure class="logo"  :style="{background:`url('${config.articleCover}') no-repeat center/cover`}">
        <span class="sign">今日热门</span>
        </figure>
        <article class="jd_recommend_info">
            <h1 class="title" v-text="config.articleName">
            </h1>
            <div class="info" v-text="config.articleIntroduction">

            </div>
        </article>
    </section>
</template>
<script>
export default {
  name: 'recommendItem',
  props: {
    config: {
      default () {
        return {}
      },
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
   .jd_recommend_item{
       width: 750px;
       height: 470px;
       .logo{
            width: 100%;
           height: 340px;
           position: relative;
           .sign{
               position: absolute;
               top:0;
               left: 0;
               border-radius:0px 15px 15px 0px;
               background:rgba(234,50,50,1);
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
       .jd_recommend_info{
           height:90px;
           box-sizing: unset;
           background:rgba(255,255,255,1);
           padding: 20px;
           .title{
               height:78px;
               font-size:32px;
               font-family:SourceHanSansCN;
               font-weight:400;
               color:rgba(51,51,51,1);
               line-height:42px;
               overflow : hidden;
               text-overflow: ellipsis;
               display: -webkit-box;
               -webkit-line-clamp: 2;
               -webkit-box-orient: vertical;
           }
           .info{
               height:25px;
               font-size:26px;
               font-family:SourceHanSansCN;
               font-weight:400;
               color:rgba(102,102,102,1);
               line-height:38px;
           }
       }
   }
</style>
