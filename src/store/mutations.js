import Cookies from 'js-cookie'
import { tokenKey } from '@/libs/constant'

const mutations = {
  saveToken (state, token) {
    Cookies.set(tokenKey, token, { expires: 7 })
    state.token = token
  },
  setPhoneNum (state, num) {
    state.phoneNum = num
  },
  saveUser (state, user) {
    state.user = user
  },
  changeCodeNum (state, num) {
    state.codeNum = num
  }
}
export default mutations
