<template>
    <section class="jd_main">
        <HeaderBar title="文章推荐" :back="true"></HeaderBar>
        <section class="jd_recommend_list">
            <RecommendItem></RecommendItem>
            <RecommendSub></RecommendSub>
            <RecommendSub></RecommendSub>
            <RecommendSub></RecommendSub>
            <RecommendSub></RecommendSub>
            <RecommendSub></RecommendSub>
        </section>
    </section>
</template>
<script>
import RecommendItem from './components/RecommendItem'
import RecommendSub from './components/RecommendSub'
import HeaderBar from 'components/HeaderBar/index'
export default {
  name: 'recommend',
  components: {
    RecommendItem,
    HeaderBar,
    RecommendSub
  }
}
</script>
<style lang="scss" scoped>
    .jd_recommend_list{
        padding-top: 33px;
        height: auto;
    }
</style>
