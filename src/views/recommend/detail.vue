<template>
    <section class="jy-main">
        <HeaderBar title="文章推荐" :back="true"></HeaderBar>
        <section v-html="detail.articleContent"></section>
    </section>
</template>
<script>
import { getArticleList } from '@/resource'

import HeaderBar from 'components/HeaderBar/index'

export default {
  name: 'recommendDetail',
  data () {
    const _this = this
    const id = _this.$route.query.id
    return {
      id: id,
      detail: {}
    }
  },
  components: {
    HeaderBar
  },
  methods: {
    async getDetailData () {
      const _this = this
      try {
        const param = {
          id: _this.id,
          pageNum: 1,
          pageSzie: 1000
        }
        const res = await getArticleList(param)
        console.log(res)
        _this.detail = res.rows[0]
      } catch (e) {
        _this.Toast(e.msg || '获取文章详情失败')
      }
    }
  },
  mounted () {
    const _this = this
    _this.getDetailData()
  }
}
</script>
<style lang="scss" scoped>

</style>
