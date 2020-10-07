<template>
    <section class="jd_main">
        <HeaderBar title="文章推荐" :back="true"></HeaderBar>
        <section class="jd_recommend_list">
            <RecommendItem :config="articleList[0]"></RecommendItem>
            <RecommendSub v-for="(item) in articleList" :config="item" :key="item.id"></RecommendSub>
        </section>
    </section>
</template>
<script>
import { getArticleList } from '@/resource'

import RecommendItem from './components/RecommendItem'
import RecommendSub from './components/RecommendSub'
import HeaderBar from 'components/HeaderBar/index'
export default {
  name: 'recommend',
  components: {
    RecommendItem,
    HeaderBar,
    RecommendSub
  },
  data () {
    return {
      articleList: []
    }
  },
  methods: {
    async getArticleData () {
      const _this = this
      try {
        const res = await getArticleList({
          pageSize: 1000,
          pageNum: 1
        })
        _this.articleList = res.rows
      } catch (e) {
        console.log(e.message || '获取商品数据失败')
      }
    }
  },
  mounted () {
    const _this = this
    _this.getArticleData()
  }
}
</script>
<style lang="scss" scoped>
    .jd_recommend_list{
        padding-top: 33px;
        height: auto;
    }
</style>
