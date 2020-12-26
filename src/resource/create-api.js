import { getAxios } from './axios'
import { getBasicAuth } from '@/libs/utils'
export const api = getAxios({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  }
})
console.log('z这里这里这里')
console.log(api)
export const setHttpAuth = (token) => {
  const basicAuth = getBasicAuth(token)
    ;[api].forEach(instance => {
    instance.defaults.headers.common.Authorization = basicAuth
  })
}
