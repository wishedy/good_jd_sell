<template>
    <section class="jd_main">
        <SearchBar></SearchBar>
        <section class="jd_search_result">
            <SearchResult></SearchResult>
        </section>
    </section>
</template>
<script>
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'
export default {
  name: 'search',
  components: {
    SearchBar,
    SearchResult
  }
}
</script>
<style lang="scss" scoped>
    .jd_search_result{
        margin-top: 30px;
    }
</style>
