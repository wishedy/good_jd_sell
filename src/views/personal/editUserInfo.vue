<template>
    <section class="jd_edit">
        <HeaderBar title="编辑个人信息" :back="true"></HeaderBar>
        <section class="jd_profile">
            <span class="label">上传头像:</span>
            <figure class="jd_user_logo"></figure>
        </section>
        <TextInput labelTitle="名称：" placeholder="请输入联系人姓名" type="text" v-model="formate.name" :maxlength="usrMaxlength"></TextInput>
        <TextInput labelTitle="手机号：" placeholder="请填写收货人电话" type="text" v-model="formate.mobile"  :maxlength="mobileMaxlength"></TextInput>
        <section class="jd_sex">
            <span class="text-label">性别:</span>
            <section class="jd-radio-wrapper">
                <div class="jd-radio active">
                    <i class="icon"></i>
                    <span>男</span>
                </div>
                <div class="jd-radio">
                    <i class="icon"></i>
                    <span>女</span>
                </div>
            </section>
        </section>
        <TextInput labelTitle="所在地区：" placeholder="请选择收货人所在的地区" type="text" arrow @hanlePicker="onShowArea" readonly :value="localRegion"></TextInput>
        <div class="bottom-btn">
            保存信息
        </div>
        <awesome-picker
                ref="picker"
                :textTitle="textTitle"
                :data="area"
                :anchor="anchor"
                @confirm="handlePickerConfirm">
        </awesome-picker>
    </section>
</template>
<script>
import HeaderBar from 'components/HeaderBar/index'
import area from 'libs/area'

import TextInput from './components/TextInput'
export default {
  name: 'editUserInfo',
  components: {
    TextInput,
    HeaderBar
  },
  watch: {
    localAddress: {
      handler (n) {
        const _this = this
        if (n) {
          const selectData = JSON.parse(n)
          _this.formate.province = selectData[0].value
          _this.formate.city = selectData[1].value
          _this.formate.district = selectData[2].value
        } else {
          _this.formate.province = ''
          _this.formate.city = ''
          _this.formate.district = ''
        }
      },
      deep: true
    }
  },
  methods: {
    onShowArea () {
      const _this = this
      _this.$refs.picker.show()
    },
    isInvalidString (val) {
      /*eslint-disable*/
      if (((typeof val === 'string') && (val.length == 0)) || (val == undefined) || (val == 'undefined') || (val == 'null') || (typeof val === 'undefined') || (typeof val === 'null') || (val == null)) {
        return true
      } else {
        return false
      }
    },
    handlePickerConfirm (value) {
      const _this = this
      _this.anchor = value
      console.log(value)
      _this.localAddress = value ? JSON.stringify(value) : null
    }
  },
  computed: {
    localRegion () {
      const _this = this
      const onOff = !(_this.isInvalidString(_this.formate.province) || _this.isInvalidString(_this.formate.city) || _this.isInvalidString(_this.formate.district))
      if (onOff) {
        return `${_this.formate.province}-${_this.formate.city}-${_this.formate.district}`
      } else {
        return ''
      }
    }
  },
  data () {
    return {
      area: area,
      usrMaxlength: 50,
      localAddress: null,
      mobileMaxlength: 11,
      addresslength: 500,
      textTitle: '所在地区',
      anchor: [],
      formate: {
        addr_id: '',
        name: '', // 收货人姓名
        mobile: '', // 收货人手机号
        province: '', // 省份
        city: '', // 城市
        district: '' // 地区
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
            background: url("~img/personal/headerLogo.png") no-repeat center/cover;
            position: relative;

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
