import { getAxios } from './axios'
import { getBasicAuth } from '@/utils/common'
export const api = getAxios({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  }
})
export const setHttpAuth = (token) => {
  const basicAuth = getBasicAuth(token)
    // const oldBasicAuth = getBasicAuth(oldToken)
    /* ;[api].forEach(instance => {
          instance.defaults.headers.common['Authorization'] = oldBasicAuth
        }) */
    ;[api].forEach(instance => {
    instance.defaults.headers.common.Authorization = basicAuth
  })
}
