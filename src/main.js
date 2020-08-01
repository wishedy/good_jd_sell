import Vue from 'vue'
import 'style/reset.scss'
import 'style/common.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.min.css'
import AwesomePicker from 'vue-awesome-picker'
Vue.use(AwesomePicker)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
