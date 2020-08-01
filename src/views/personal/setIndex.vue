<template>
    <section class="jd_main">
        <HeaderBar title="设置" :back="true"></HeaderBar>
        <SetItem class="privacy" title="隐私协议"></SetItem>
        <SetItem class="agreement" title="用户协议"></SetItem>
        <div class="bottom-btn">
            退出登录
        </div>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'

import SetItem from './components/SetItem'
export default {
  name: 'setIndex',
  components: {
    SetItem,
    HeaderBar
  }
}
</script>
<style lang="scss" scoped>
    .bottom-btn {
        position: absolute;
        width: 400px;
        bottom: 240px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(18,201,138,1); /* Green */
        border: none;
        color: white;
        border-radius: 5px;
        padding: 30px 0;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 32px;
    }
</style>
