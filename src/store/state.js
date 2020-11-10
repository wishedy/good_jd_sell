import Cookies from 'js-cookie'
import { tokenKey } from '@/libs/constant'
import { setHttpAuth } from '@/resource/create-api'

const token = Cookies.get(tokenKey)
setHttpAuth(token)
const state = {
  token: token || '',
  user: {},
  goodsCart: [],
  onCoding: '',
  codeNum: '',
  phoneNum: ''
}

export default state
