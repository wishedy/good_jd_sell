import Vue from 'vue'
import 'style/reset.scss'
import 'style/common.scss'
import App from './App.vue'
import MintUI, {
  Toast,
  MessageBox,
  Indicator
} from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import 'swiper/css/swiper.min.css'
import AwesomePicker from 'vue-awesome-picker'

Vue.use(AwesomePicker)
Vue.config.productionTip = false
Vue.prototype.MessageBox = MessageBox
Vue.prototype.Toast = Toast
Vue.prototype.Indicator = Indicator
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
