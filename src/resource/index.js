import { json2Query } from '@/libs/utils'
const Resource = require('./create-api')
const { api } = Resource
export function getBannerList (params) {
  const query = params?`?${json2Query(params)}`:''
  console.log('这里')
  console.log(api,api.get)
  return api.get(`/api/home/getBannerList${query}`)
}
export function getRecommendList (params) {
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/home/getRecommendList${query}`)
}
export function getExpressAddressList (params) {
  const query = params?`?${json2Query(params)}`:''
  return api.get(`/api/receiver/getReceiverInfolist${query}`)
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

  return api.get(`/api/receiver/getReceiverInfolist${query}`)
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
  return api.post('/api/receiver/edit', params)
}
export function saveExpressAddress (params) {
  console.log(params)
  return api.post('/api/receiver/add', params)
}
export function addCategory (params) {
  console.log(params)
  return api.post('/admin/category/add', params)
}
export function saveSuggestion (params) {
  console.log(params)
  return api.post('/api/customer/suggestion/saveSuggestion', params)
}
export function editUserInfo (params) {
  console.log(params)
  return api.post('/api/customer/edit', params)
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
export function deleteCart (params) {
  console.log(params)
  return api.post('/api/cart/delete', params)
}
export function sendCode (params) {
  console.log(params)
  return api.post('/api/customer/sms/code/send', params)
}
export function clearCart (params) {
  console.log(params)
  return api.post('/api/cart/clear', params)
}
export function getUserInfo (params) {
  console.log(params)
  return api.get('/api/customer/loginUser', params)
}
export function userLogin (params) {
  console.log(params)
  return api.post('/api/customer/login', params)
}
export function getUserOpenId (params) {
  const query = params?`?${json2Query(params)}`:''
  return api.get(`/api/pay/getOpenId${query}`)
}
export function getJsapiTicket (params) {
  const query = params?`?${json2Query(params)}`:''
  return api.get(`/api/pay/getJsapiTicket${query}`)
}
export function getSignature (params) {
  console.log(params)
  return api.post('/api/wechat/getSignature', params)
}
export function getOrderList (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/order/getOrderList${query}`)
}
export function doPay (params) {
  console.log(params)
  return api.post('/api/pay/wxPay', params)
}
export function addCollectGoods (params) {
  console.log(params)
  return api.post('/api/collection/addGoods', params)
}
export function addBrowseRecord (params) {
  console.log(params)
  return api.post('/api/record/addRecord', params)
}
export function saveSigned (params) {
  console.log(params)
  return api.post('/api/customer/signed/saveSigned', params)
}
export function receiveUserOrder (params) {
  console.log(params)
  return api.post('/api/order/confirmOrder', params)
}
export function cancelUserOrder (params) {
  console.log(params)
  return api.post('/api/order/cancelOrder', params)
}
export function deleteCollectGoods (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/collection/deleteGoods${query}`)
}
export function checkCollectGoods (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/collection/isCollGoods${query}`)
}
export function checkOrderExpress (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/order/getShippingInfo${query}`)
}
export function getRecordList (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/record/queryRecord${query}`)
}
export function getCollectGoods (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/collection/queryGoods${query}`)
}
export function checkOrderStatus(params){
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/order/getOrderByOrderSn${query}`)
}
