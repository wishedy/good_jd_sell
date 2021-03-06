import Cookies from 'js-cookie'
import { jsApiList, appId, MAIN_DOMAIN } from 'libs/constant'
import { getJsapiTicket, getUserOpenId } from 'api'
// 判断一个字符串是无效的字符串
export function isInvalidString (val) {
  /*eslint-disable*/
  if (((typeof val === 'string') && (val.length === 0)) || (val === undefined) || (val === 'undefined') || (val === 'null') || (typeof val === 'undefined') || (typeof val === 'null') || (val === null)) {
    return true
  } else {
    return false
  }
}
export const cleanArray = function (actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}
/*
* url 目标url
* arg 需要替换的参数名称
* arg_val 替换后的参数的值
* return url 参数替换后的url
*/
export const changeURLArg = function (url, arg, val) {
  const pattern = arg + '=([^&]*)'
  const replaceText = arg + '=' + val
  if (url.match(pattern)) {
    let tmp = '/(' + arg + '=)([^&]*)/gi'
    /*eslint-disable*/
    tmp = url.replace(eval(tmp), replaceText)
    return tmp
  } else {
    if (url.match('[\?]')) {
      return url + '&' + replaceText
    } else {
      return url + '?' + replaceText
    }
  }
}
export const json2Query = function (json) {
  if (!json) return ''
  return cleanArray(Object.keys(json).map(key => {
    if (json[key] === undefined) return ''
    return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key])
  })).join('&')
}
export const getBasicAuth = (token) => {
  return token ? 'login_tokens:' + token : ''
}
// 判断是否微信登陆
export const isWeiXin = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  return /microMessenger/ig.test(ua) && ua.match(/wxwork/i) != 'wxwork'
}
/**
 * [获取URL中的参数名及参数值的集合]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param {[string]} urlStr [当该参数不为空的时候，则解析该url中的参数集合]
 * @return {[string]}       [参数集合]
 */
export const getParameterByName = (name) => {
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(location.search)
  return results === null ? '' : decodeURIComponent(results[1])
}
export const setDomain = () => {
  let currentDomain = MAIN_DOMAIN
  if (document.domain.includes('.goodjd.cn')) {
    document.domain = 'goodjd.cn'
  } else {
    if (document.domain !== 'goodjd.cn') {
      currentDomain = window.location.hostname
    }
  }
  return currentDomain
}
export const getWxConfig = () => {
  return new Promise(async (resolve, reject) => {
    let url = window.location.href.split('#')[0]
    url = encodeURIComponent(url)
    const res = await getJsapiTicket({ url: url })
    res.jsApiList = jsApiList
    console.log(res)
    wx.config(res)
    wx.ready(() => {
      resolve({
        message: 'ok',
        code: 200
      })
    })
    wx.error((error) => {
      reject(error)
    })
  })
}
export const getOpenId = async () => {
  if (!isWeiXin()) {
    return true
  }
  if (!Cookies.get('openId')) {
    if (appId) {
      const code = getParameterByName('code')
      if (code) {
        const res = await getUserOpenId({ code: code })
        console.log(res)
        Cookies.set('openId', res, { domain: setDomain(), path: '/', expires: 7 })
        return true
      } else {
        location.href = getRedirectUrl(location.href)
      }
    } else {
      alert('openId获取失败')
    }
  } else {
    return true
  }
}
export const getRedirectUrl = (url) => {
  const redirectUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}
&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
  return redirectUrl
}
