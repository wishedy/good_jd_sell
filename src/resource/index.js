import { json2Query } from '@/libs/utils'
const Resource = require('./create-api')
const { api } = Resource
export function getBannerList (params) {
  console.log(params)
  return api.get(`/api/home/getBannerList?${json2Query(params)}`)
}
export function getRecommendList (params) {
  console.log(params)
  return api.get(`/api/home/getRecommendList?${json2Query(params)}`)
}
export function getExpressAddressList (params) {
  console.log(params)
  return api.get(`/api/discover/getReceiverInfolist?${json2Query(params)}`)
}
export function getArticleList (params) {
  console.log(params)
  return api.get(`/api/discover/getArticleList?${json2Query(params)}`)
}
export function getGoodsList (params) {
  console.log(params)
  return api.get(`/api/home/getGoodsList?${json2Query(params)}`)
}
export function getGoodDetail (params) {
  console.log(params)
  return api.get(`/api/home/getGoodsDetail?${json2Query(params)}`)
}
export function getGoodsTypeList (params) {
  console.log(params)
  return api.get(`/api/home/getCategoryList?${json2Query(params)}`)
}
export function getEntranceList (params) {
  console.log(params)
  return api.get(`/api/home/getEntranceList?${json2Query(params)}`)
}
export function editExpressAddress (params) {
  console.log(params)
  return api.post('/admin/category/add', params)
}
export function saveExpressAddress (params) {
  console.log(params)
  return api.post('/api/receiver/add', params)
}
export function addCategory (params) {
  console.log(params)
  return api.post('/admin/category/add', params)
}
