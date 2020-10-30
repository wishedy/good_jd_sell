import Cookies from 'js-cookie'
import { tokenKey } from '@/libs/constant'

const mutations = {
  saveToken (state, token) {
    Cookies.set(tokenKey, token, { expires: 7 })
    state.token = token
  }
}
export default mutations
