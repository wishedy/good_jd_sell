<template>
    <section class="jd_edit" id="edit">
        <HeaderBar title="编辑个人信息" :back="true"></HeaderBar>
        <section class="jd_profile">
            <span class="label">上传头像:</span>
            <figure class="jd_user_logo">
                <img :src="formate.avatar" alt="" v-if="formate.avatar" class="avatarImage">
                <input accept="image/*" name="img" id="upload_file" type="file" class="ml-upload-image" @change="publishImage">
            </figure>
        </section>
        <TextInput labelTitle="名称：" placeholder="请输入您的人姓名" type="text" v-model="formate.userName" :maxlength="usrMaxlength"></TextInput>
        <TextInput labelTitle="名称：" placeholder="请输入您的昵称" type="text" v-model="formate.loginName" :maxlength="usrMaxlength"></TextInput>
        <TextInput labelTitle="手机号：" placeholder="请填您的电话" type="text" v-model="formate.phonenumber"  :maxlength="mobileMaxlength"></TextInput>
        <section class="jd_sex">
            <span class="text-label">性别:</span>
            <section class="jd-radio-wrapper">
                <div class="jd-radio" :class="{active:parseInt(formate.sex,10)===0}" @click="changeSex(0)">
                    <i class="icon"></i>
                    <span>男</span>
                </div>
                <div class="jd-radio" :class="{active:parseInt(formate.sex,10)===1}" @click="changeSex(1)">
                    <i class="icon"></i>
                    <span>女</span>
                </div>
            </section>
        </section>
        <div class="bottom-btn" @click="saveInfo">
            保存信息
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import HeaderBar from 'components/HeaderBar/index'
import { editUserInfo } from '@/resource'
import TextInput from './components/TextInput'
export default {
  name: 'editUserInfo',
  components: {
    TextInput,
    HeaderBar
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted () {
    const _this = this
    _this.getUserData()
  },
  methods: {
    getUserData () {
      const _this = this
      for (const key in _this.formate) {
        _this.formate[key] = _this.user[key]
      }
    },
    saveInfo () {
      const _this = this
      try {
        _this.checkForm().then(async () => {
          const res = await editUserInfo(_this.formate)
          console.log('------++++')
          console.log(res)
          if (res) {
            _this.Toast('保存成功')
            setTimeout(() => {
              _this.$router.go(-1)
            }, 1000)
          }
        }).catch((msg) => {
          _this.Toast(msg.msg || '保存失败')
        })
      } catch (e) {
        _this.Toast('信息保存失败')
      }
    },
    getLen (str) {
      // 获得字符串实际长度，中文2，英文1
      // 要获得长度的字符串
      let realLength = 0; const len = str.length; let charCode = -1
      for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i)
        if (charCode >= 0 && charCode <= 128) { realLength += 1 } else { realLength += 2 }
      }
      return realLength
    },
    checkForm (resolve, reject) {
      const _this = this
      const checkKeyName = {
        avatar: '请选择您的头像',
        loginName: '请输入您的昵称',
        userName: '请输入您的姓名', // 收货人姓名
        phonenumber: '请输入手机号~' // 收货人手机号
      }
      let completeOnOff = false
      const keyArr = Object.keys(checkKeyName)
      let errorMessage = ''
      for (let num = 0; num < keyArr.length; num++) {
        const keyName = keyArr[num]
        console.log(_this.formate[keyName], _this.isInvalidString(_this.formate[keyName]))
        completeOnOff = _this.isInvalidString(_this.formate[keyName])
        if (completeOnOff) {
          errorMessage = (checkKeyName[keyName])
          break
        }
      }
      if (!completeOnOff) {
        if (_this.getLen(_this.formate.loginName) > _this.usrMaxlength) {
          completeOnOff = true
          errorMessage = '请输入正确的昵称50字内'
        }
        if (_this.getLen(_this.formate.userName) > _this.usrMaxlength) {
          completeOnOff = true
          errorMessage = '请输入正确的姓名'
        }
        if (!(/^1[23456789]\d{9}$/.test(_this.formate.phonenumber))) {
          completeOnOff = true
          errorMessage = '请输入正确的手机号'
        }
      }
      return new Promise((resolve, reject) => {
        if (!completeOnOff) {
          resolve && resolve()
        } else {
          reject && reject(errorMessage)
        }
      })
    },
    publishImage (e) {
      const _this = this
      const file = e.target.files[0]
      const param = new FormData() // 创建form对象
      param.append('file', file, file.name)// 通过append向form对象添加数据
      param.append('chunk', '0')// 添加form表单中其他数据
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let upLoadProgress = 0
      const uploadTimer = setInterval(() => {
        if (upLoadProgress > 95) {
          clearInterval(uploadTimer)
        } else {
          console.log(upLoadProgress)
          _this.Toast(`${upLoadProgress++}%`)
        }
      }, 80)
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      } // 添加请求头
      axios.defaults.timeout = 30000
      axios.post('/api/system/oss/upload', param, config)
        .then(response => {
          console.log(response.data)
          if (!_this.isInvalidString(response.data.data)) {
            _this.Toast('100%')
            _this.Toast('√')
            _this.Toast('上传成功')
            clearInterval(uploadTimer)
            _this.formate.avatar = response.data.data
          } else {
            _this.Toast('上传失败')
            clearInterval(uploadTimer)
          }
        }).catch(function (error) {
          console.log(error)
          _this.Toast('上传失败')
          clearInterval(uploadTimer)
        })
    },
    changeSex (sex) {
      const _this = this
      _this.formate.sex = sex
    },
    isInvalidString (val) {
      /*eslint-disable*/
      if (((typeof val === 'string') && (val.length == 0)) || (val == undefined) || (val == 'undefined') || (val == 'null') || (typeof val === 'undefined') || (typeof val === 'null') || (val == null)) {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      usrMaxlength: 50,
      localAddress: null,
      mobileMaxlength: 11,
      textTitle: '所在地区',
      formate: {
        avatar:'',
        sex:1,
        loginName:'',
        userName: '', // 收货人姓名
        phonenumber: '', // 收货人手机号
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    $headHeight:220px;
    .jd_profile {
        height: $headHeight;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        font-size: 28px;
        padding-left: 28px;
        background: #fff;
        border-bottom: 1px solid #eaeaea;

        .label {
            width: 140px;
            height: 100%;
            margin-right: 10px;
            line-height: $headHeight;
        }

        .jd_user_logo {
            width: 168px;
            height: 168px;
            margin-left: 120px;
            background: url("~img/personal/uploadHead.png") no-repeat center/80% 80%;
            position: relative;
            .avatarImage{
                position: absolute;
                top:0;
                right: 0;
                bottom:0;
                left: 0;
                width: 100%;
                height: 100%;
                font-size: 0;
                outline: none;
                border: none;
                border-radius: 50%;
            }
            .ml-upload-image{
                position: absolute;
                top:0;
                right: 0;
                bottom:0;
                left: 0;
                width: 100%;
                height: 100%;
                font-size: 0;
                outline: none;
                border: none;
                opacity: 0;
            }
            &::after {
                content: " ";
                position: absolute;
                width: 60px;
                height: 50px;
                bottom: 0;
                background: url("~img/personal/camera.png") no-repeat center/cover;
                right: 0;
            }
        }
    }

    .jd_sex {
        height: 100px;
        padding-left: 28px;
        background: #fff;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 28px;
        border-bottom: 1px solid #eaeaea;
        line-height: 100px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        display: flex;
        color: #333333;

        .text-label {
            width: 140px;
            height: 100%;
            margin-right: 10px;
        }

        .jd-radio-wrapper {
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            font-size: 28px;
        }

        .jd-radio {
            width: 114px;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            line-height: 100px;

            &.active {
                .icon {
                    border: 1px solid #33da8a;
                    background: url("~img/personal/selected.png") no-repeat center center/cover;
                }
            }

            .icon {
                width: 30px;
                height: 30px;
                border: 1px solid rgba(220, 220, 220, 1);
                margin-right: 12px;
                border-radius: 50%;
            }
        }
    }

    .bottom-btn {
        position: absolute;
        width: 400px;
        bottom: 240px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(18, 201, 138, 1); /* Green */
        border: none;
        color: white;
        border-radius: 5px;
        padding: 30px 0;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 32px;
    }
</style>
<style lang="scss">
    .jd_edit#edit  .picker-panel {
        position: relative;
        height: 226px;
        padding: 24px 12px;
        box-sizing: border-box;
    }
    .jd_edit#edit  .picker-title h4 {
        margin: 0;
        font-weight: 400;
        height: 88px;
        line-height: 44px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }
    .jd_edit#edit .picker-title span  {
        position: absolute;
        height: 88px;
        line-height: 88px;
        padding: 0 12px;
        font-size: 28px;
    }
    .jd_edit#edit .picker-title h4{
        font-size: 28px;
    }
    .jd_edit#edit .picker-panel .picker-mask-top{
        top:24px;
    }
    .jd_edit#edit .picker-panel .picker-mask-bottom{
        bottom:6px;
    }
    .jd_edit#edit .picker-wheel-wrapper .wheel-scroll .wheel-item{
        height: 68px;
        line-height: 68px;
        font-size: 34px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
    }
</style>
