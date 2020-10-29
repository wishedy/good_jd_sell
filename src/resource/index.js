import { json2Query } from '@/libs/utils'
const Resource = require('./create-api')
const { api } = Resource
export function getBannerList (params) {
  const query = params?`?${json2Query(params)}`:''
  return api.get(`/api/home/getBannerList${query}`)
}
export function getRecommendList (params) {
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/home/getRecommendList${query}`)
}
export function getExpressAddressList (params) {
  const query = params?`?${json2Query(params)}`:''
  return api.get(`/api/discover/getReceiverInfolist${query}`)
}
export function getArticleList (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/discover/getArticleList${query}`)
}
export function getGoodsList (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''
  return api.get(`/api/home/getGoodsList${query}`)
}
export function getGoodDetail (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/home/getGoodsDetail${query}`)
}
export function getExpressAddressInfo (params) {
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/discover/getReceiverInfolist${query}`)
}
export function getGoodCart (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/cart/getCart${query}`)
}
export function getGoodsTypeList (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/home/getCategoryList${query}`)
}
export function getEntranceList (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/home/getEntranceList${query}`)
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
export function previewGoodDetail (params) {
  console.log(params)
  return api.post('/api/order/previewOrder', params)
}
export function submitGood (params) {
  console.log(params)
  return api.post('/api/order/submitOrder', params)
}
export function addCart (params) {
  console.log(params)
  return api.post('/api/cart/add', params)
}
export function userLogin (params) {
  console.log(params)
  return api.post('/api/customer/login', params)
}
