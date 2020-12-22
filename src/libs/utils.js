import Cookies from 'js-cookie'
import {jsApiList,appId,MAIN_DOMAIN} from 'libs/constant'
import { getJsapiTicket, getUserOpenId } from 'api'
// 判断一个字符串是无效的字符串
export function isInvalidString (val) {
    if (((typeof val == 'string') && (val.length == 0)) || (val == undefined) || (val == 'undefined') || (val == 'null') || (typeof val == 'undefined') || (typeof val == 'null') || (val == null)) {
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
export const  addUrlParam =  (url, key, value)=> {
    var returnUrl = ''
    if (url.indexOf('?') == -1) {
        returnUrl += url + '?' + key + '=' + value
    } else {
        if (url.indexOf('?' + key + '=') == -1 && url.indexOf('&' + key + '=') == -1) {
            returnUrl += url + '&' + key + '=' + value
        } else {
            let isDone = false
            let startIndex = 0
            let endIndex = url.length - 1
            let parm = '?' + key + '='
            for (let i = 0; i < url.length; i++) {
                if (url.substr(i, parm.length) == parm) {
                    startIndex = i + parm.length
                    for (let j = startIndex; j < url.length; j++) {
                        if (url[j] == '&') {
                            endIndex = j
                            break
                        } else if (j == url.length - 1) {
                            endIndex = url.length
                        }
                    }
                    isDone = true
                    break
                }
            }
            if (!isDone) {
                parm = '&' + key + '='
                for (let i = 0; i < url.length; i++) {
                    if (url.substr(i, parm.length) == parm) {
                        startIndex = i + parm.length
                        for (const j = startIndex; j < url.length; j++) {
                            if (url[j] == '&') {
                                endIndex = j
                                break
                            } else if (j == url.length - 1) {
                                endIndex = url.length
                            }
                        }
                        break
                    }
                }
            }
            let parmKeyValue = parm + url.substring(startIndex, endIndex)
            returnUrl = url.replace(parmKeyValue, parm + value)
        }
    }
    return returnUrl
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
//判断是否微信登陆
export const isWeiXin = ()=> {
    const ua = window.navigator.userAgent.toLowerCase();
    console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
/**
 * [获取URL中的参数名及参数值的集合]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param {[string]} urlStr [当该参数不为空的时候，则解析该url中的参数集合]
 * @return {[string]}       [参数集合]
 */
export const  getParameterByName=(name)=> {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null ? "": decodeURIComponent(results[1]);
}
export const setDomain = ()=>{
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
export const getWxConfig = ()=>{
    return  new Promise(async (resolve,reject)=>{
        let url = window.location.href.split('#')[0]
        url = encodeURIComponent(url)
        const res = await getJsapiTicket({ url: url })
        res.jsApiList = jsApiList
        wx.config(res)
        wx.ready(() => {
            resolve({
                message:'ok',
                code:200
            })
        })
        wx.error((error) => {
            reject(error)
        })
    })
}
export const getOpenId = async ()=> {
    if (!isWeiXin()) {
        return true
    }
    if (!Cookies.get('openId')) {
        if(appId){
            const code = getParameterByName('code')
            if(code){
                const res = await getUserOpenId({code:code})
                console.log(res)
                Cookies.set('openId', res, { domain: setDomain(), path: '/', expires: 7 })
                return true
            }else{
                location.href = getRedirectUrl(location.href)
            }
        }else{
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
