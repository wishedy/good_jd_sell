<template>
    <section class="jd_banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
            </div>
        </div>
    </section>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'banner',
  mounted () {
    const _this = this
    _this.initSwiper()
  },
  methods: {
    initSwiper () {
      /*eslint-disable*/
      const _this = this
      _this.$nextTick(()=>{
        new Swiper('.swiper-container', {
          autoplay: {
            delay: 2000
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_banner{
        width:698px;
        height:297px;
        border-radius:11px;
        margin: 10px auto 30px auto;
        .swiper-container{
            width: 100%;
            height: 100%;
            background: aqua;
        }
    }
</style>
