<template>
  <div id="app">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
/*eslint-disable*/
import { isWeiXin } from 'libs/utils'
import TabBar from 'components/TabBar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>
