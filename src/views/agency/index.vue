<template>
    <section class="jd_main">
        <HeaderBar title="代理业绩" :back="true"></HeaderBar>
        <section class="agency_list">
            <AgencyItem></AgencyItem>
            <AgencyItem></AgencyItem>
            <AgencyItem></AgencyItem>
            <AgencyItem></AgencyItem>
            <AgencyItem></AgencyItem>
        </section>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'

import AgencyItem from './components/AgencyItem'
export default {
  name: 'agency',
  components: {
    AgencyItem,
    HeaderBar
  }
}
</script>
<style lang="scss" scoped>
    .agency_list{

    }
</style>
