<template>
    <section class="jd_main">
        <BannerBar></BannerBar>
        <Entrance></Entrance>
    </section>
</template>
<script>
import BannerBar from 'components/BannerBar/BannerBar'
import Entrance from 'components/Entrance/Entrance'

export default {
  name: 'home',
  components: {
    BannerBar,
    Entrance
  }
}
</script>
<style lang="scss" scoped>
    .jd_main{
        width: 100%;
        height: auto;
        min-height: 100vh;
    }
</style>
