<template>
    <section class="jd_main">
        <HeaderBar title="个人中心"></HeaderBar>
        <PersonalCard></PersonalCard>
        <PersonalInfo></PersonalInfo>
        <PersonalSet></PersonalSet>
    </section>
</template>
<script>
import { getUserInfo } from '@/resource'
import HeaderBar from 'components/HeaderBar/index'
import PersonalCard from './components/PersonalCard'
import PersonalInfo from './components/PersonalInfo'
import PersonalSet from './components/PersonalSet'
import { mapActions } from 'vuex'
export default {
  name: 'personal',
  components: {
    HeaderBar,
    PersonalCard,
    PersonalInfo,
    PersonalSet
  },
  methods: {
    ...mapActions(['saveUser']),
    async getUserData () {
      const _this = this
      try {
        const res = await getUserInfo()
        if (res) {
          _this.saveUser(res.sysUser)
          console.log(res)
        }
      } catch (e) {
        _this.Toast(e.message || '获取用户信息失败')
      }
    }
  },
  mounted () {
    const _this = this
    _this.getUserData()
  }
}
</script>
