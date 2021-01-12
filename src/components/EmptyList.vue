<template>
  <section class="jd_none">
    <i class="icon"></i>
    <h1 class="jd_title">暂无数据</h1>
  </section>
</template>
<script>
export default {
  name: 'EmptyList'
}
</script>
<style lang="scss">
.jd_none{
  padding-top: 300px;
}
.icon{
  display: block;
  background: url("~@/assets/images/common/empty.png") no-repeat center/cover;
  width: 464px;
  height: 320px;
  margin: 0 auto;
}
.jd_title{
  font-size:40px;
  font-family:SourceHanSansCN;
  font-weight:400;
  color: #637275;
  text-align: center;
  margin: 80px auto;
}
</style>
