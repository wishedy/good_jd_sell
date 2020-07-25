<template>
    <section class="jd_main">
        <HeaderBar title="个人中心"></HeaderBar>
        <PersonalCard></PersonalCard>
        <PersonalInfo></PersonalInfo>
        <PersonalSet></PersonalSet>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import PersonalCard from './components/PersonalCard'
import PersonalInfo from './components/PersonalInfo'
import PersonalSet from './components/PersonalSet'

export default {
  name: 'personal',
  components: {
    HeaderBar,
    PersonalCard,
    PersonalInfo,
    PersonalSet
  }
}
</script>
