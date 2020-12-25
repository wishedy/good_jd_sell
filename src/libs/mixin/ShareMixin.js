import { getWxConfig } from '@/libs/utils'
import wx from 'wx'
export default {
  methods: {
    async share () {
      const _this = this
      getWxConfig().then(()=>{
        console.log('成功111111111')
        _this.wxJsSdkConfig()
      }).catch((e)=>{
        console.log('失败')
        console.log(e)
        return _this.Toast(e.message)
      })
    },
    wxJsSdkConfig () {
      // 分享到朋友圈
      const _this = this
      console.log(_this.title)
      console.log(_this.url)
      console.log(_this.imgUrl)
      wx.onMenuShareTimeline({
        title: _this.title, // 分享标题
        link: _this.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: _this.imgUrl, // 分享图标
        success: () => {
          console.log('分享朋友圈')
          _this.$emit('share-success')
        },
        cancel: () => {
          // 用户取消分享后执行的回调函数
        }
      })
      // 分享给朋友
      wx.onMenuShareAppMessage({
        title: _this.title, // 分享标题
        desc: _this.desc, // 分享描述
        link: _this.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: _this.imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: () => {
          _this.$emit('share-success')
        },
        cancel: () => {
          // 用户取消分享后执行的回调函数
        }
      })
      // 分享到QQ
      wx.onMenuShareQQ({
        title: _this.title, // 分享标题
        desc: _this.desc, // 分享描述
        link: _this.url, // 分享链接
        imgUrl: _this.imgUrl, // 分享图标
        success: () => {
          _this.$emit('share-success')
        },
        cancel: () => {
          // 用户取消分享后执行的回调函数
        }
      })
      // 分享到QQ空间
      wx.onMenuShareQZone({
        title: _this.title, // 分享标题
        desc: _this.desc, // 分享描述
        link: _this.url, // 分享链接
        imgUrl: _this.imgUrl, // 分享图标
        success: () => {
          _this.$emit('share-success')
        },
        cancel: () => {
          // 用户取消分享后执行的回调函数
        }
      })
    }
  }
}
