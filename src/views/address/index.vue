<template>
  <section class="add-address">
    <HeaderBar title="编辑收获地址" :back="true"></HeaderBar>
    <TextInput labelTitle="联系人：" placeholder="请输入联系人姓名" type="text" v-model="formate.receiverName" :maxlength="usrMaxlength"></TextInput>
    <TextInput labelTitle="手机号：" placeholder="请填写收货人电话" type="text" v-model="formate.mobile"  :maxlength="mobileMaxlength"></TextInput>
    <TextInput labelTitle="所在地区：" placeholder="请选择收货人所在的地区" type="text" arrow @hanlePicker="onShowArea" readonly :value="localRegion"></TextInput>
    <TextInput labelTitle="详细地址：" placeholder="写到门牌号、楼层房间号等信息" type="area" v-model="formate.address" :maxlength="addresslength"></TextInput>
    <SetDefault @handleSet="onSet" :selected="formate.defaultStatus"></SetDefault>
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
import { editExpressAddress, saveExpressAddress, getExpressAddressInfo } from '@/resource'
import HeaderBar from 'components/HeaderBar/index'

import area from '@/libs/area'
import TextInput from './components/TextInput'
import SetDefault from './components/SetDefault'
export default {
  name: 'addAddress',
  components: {
    TextInput,
    SetDefault,
    HeaderBar
  },
  data () {
    const _this = this
    const id = _this.$route.query.id ? _this.$route.query.id : ''
    console.log(area)
    return {
      usrMaxlength: 50,
      mobileMaxlength: 11,
      addresslength: 500,
      localAddress: null,
      textTitle: '所在地区',
      formate: {
        addr_id: id,
        receiverName: '', // 收货人姓名
        mobile: '', // 收货人手机号
        province: '', // 省份
        city: '', // 城市
        district: '', // 地区
        address: '', // 详细地址
        defaultStatus: false// 是否默认，true=默认
      },
      area: area,
      anchor: []
    }
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
  methods: {
    isInvalidString (val) {
      /*eslint-disable*/
      if (((typeof val === 'string') && (val.length == 0)) || (val == undefined) || (val == 'undefined') || (val == 'null') || (typeof val === 'undefined') || (typeof val === 'null') || (val == null)) {
        return true
      } else {
        return false
      }
    },
    onSet (onOff) {
      const _this = this
      _this.formate.defaultStatus = onOff?1:0
      console.log(onOff ? '开' : '关')
    },
    onShowArea () {
      const _this = this
      _this.$refs.picker.show()
    },
    getLen(str) {
      // 获得字符串实际长度，中文2，英文1
      // 要获得长度的字符串
      let realLength = 0; const len = str.length; let charCode = -1
      for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i)
        if (charCode >= 0 && charCode <= 128) { realLength += 1 } else { realLength += 2 }
      }
      return realLength
    },
    checkForm (resolve,reject) {
      const _this = this
      const checkKeyName = {
        'receiverName':'请输入联系人姓名~', // 收货人姓名
        'mobile':'请输入手机号码~', // 收货人手机号
        'province':'请选择所在地区~', // 省份
        'city':'请选择所在地区~', // 城市
        'district':'请选择所在地区~', // 地区
        'address':'请填写详细地址~', // 详细地址
      }
      let completeOnOff = false
      let keyArr = Object.keys(checkKeyName)
      let errorMessage = ''
      for (let num = 0; num < keyArr.length; num++) {
        const keyName = keyArr[num]
        console.log(_this.formate[keyName],_this.isInvalidString(_this.formate[keyName]))
        completeOnOff = _this.isInvalidString(_this.formate[keyName])
        if (completeOnOff) {
          errorMessage = (checkKeyName[keyName])
          break
        }
      }
      if(!completeOnOff){
        if(_this.getLen(_this.formate.receiverName)>50){
          completeOnOff = true
          errorMessage = '请输入正确的联系人'
        }
        if(!(/^1[23456789]\d{9}$/.test(_this.formate.mobile))){
          completeOnOff = true
          errorMessage = '请输入正确的手机号'
        }
        if(_this.getLen(_this.formate.address)>500){
          completeOnOff = true
          errorMessage = '请输入正确的地址'
        }
      }
      return new Promise((resolve,reject)=>{
        if(!completeOnOff){
          resolve&&resolve()
        }else{
          reject&&reject(errorMessage)
        }
      })
    },
    submitAddress () {
      const _this = this
      _this.checkForm().then(async ()=>{
        let res = null
        if(_this.formate.addr_id){
           res = await editExpressAddress(_this.formate)
        }else{
           res = await saveExpressAddress(_this.formate)
        }
        console.log(res)
        if(res){
          _this.Toast(_this.formate.addr_id?'编辑成功':'添加成功')
          setTimeout(()=>{
            _this.$router.go(-1)
          },2000)
        }
      }).catch((errorMessage)=>{
        _this.Toast(errorMessage)
      })
    },
    handlePickerConfirm (value) {
      const _this = this
      _this.anchor = value
      console.log(value)
      _this.localAddress = value ? JSON.stringify(value) : null
    },
    async checkEditType(){
      const _this = this
      let appTitle = ''
      if(_this.formate.addr_id){
        //编辑模式
        appTitle = '编辑收货地址'
        const res = await getExpressAddressInfo({addr_id:_this.formate.addr_id})
        console.log('---')
        console.log(res)
        res.defaultStatus = !!res.defaultStatus
        console.log(res.defaultStatus )
        res.addr_id = res.id
        Object.keys(_this.formate).forEach((key)=>{
          _this.formate[key] = res[key]
        })
      }else{
        //新增模式
        appTitle = '新增收货地址'
      }
      document.title = appTitle
    }
  },
  mounted(){
    //const _this = this
    document.title = ''
   // _this.checkEditType()
  }
}
</script>
<style lang="scss" scoped>
  .add-address{
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: #fff;
  }
</style>
