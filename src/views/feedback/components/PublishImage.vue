<template>
    <section class="ml-publish-image">
        <section class="ml-publish-imageItem" v-for="(item,index) in exhibitionData" :key="item.id">
            <figure class="image-content" :style="{'background':`url('${item.imageUrl}') no-repeat center center/cover`}"></figure>
            <i class="closeBtn" @click.stop="closeOriginalItem(index)">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem" v-for="(item,index) in insertList" :key="index">
            <figure class="image-content" :style="{'background':`url('${item}') no-repeat center center/cover`}"></figure>
            <i class="closeBtn" @click.stop="closeItem(index)">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem ml-publish-imageBar" v-if="publishOnOff">
            <i class="icon"></i>
            <p>上传照片</p>
            <input accept="image/*" name="img" id="upload_file" type="file" class="ml-upload-image" @change="publishImage">
        </section>
    </section>
</template>
<script>
import axios from 'axios'
import { isInvalidString } from '@/libs/utils.js'
export default {
  props: {
    publishMaxLen: {
      default () {
        return 10000
      },
      type: Number
    },
    insertList: {
      default () {
        return []
      },
      type: Array
    },
    exhibitionData: {
      default () {
        return []
      },
      type: Array
    }
  },
  computed: {
    publishOnOff () {
      const _this = this
      if (_this.exhibitionData.length) {
        return (_this.exhibitionData.length < _this.publishMaxLen)
      } else {
        return (_this.insertList.length < _this.publishMaxLen)
      }
    }
  },
  methods: {
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
          if (!isInvalidString(response.data.data)) {
            _this.Toast('100%')
            _this.Toast('√')
            _this.Toast('上传成功')
            clearInterval(uploadTimer)

            _this.$emit('insertPhoto', response.data.data)
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
    closeItem (index) {
      const _this = this
      _this.MessageBox.confirm('您确定要删除这张照片').then(action => {
        _this.$emit('deleteItem', index)
      })
    },
    closeOriginalItem (index) {
      const _this = this
      _this.MessageBox.confirm('您确定要删除这张照片').then(action => {
        _this.$emit('deleteItem', index)
      })
    }
  },
  data () {
    return {
      imageUrl: ''
    }
  }
}
</script>
<style lang="scss" scoped>
    @mixin clearfix() {
        &:after {
            content: '';
            display: table;
            clear: both;
        }
    }
    .ml-publish-image{
        padding: 0 46px 0 48px;
        min-height:230px;
        @include clearfix();
        .ml-publish-imageItem{
            width: 212px;
            height: 212px;
            float: left;
            margin-bottom: 10px;
            margin-right: 10px;
            border-radius:12px;
            position: relative;
            &:nth-of-type(3n){
                margin-bottom: 0;
                margin-right: 0;
            }
            .image-content{
                position: absolute;
                top: 0;
                bottom:0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                border-radius:12px;
                background: url("https://webimg.quanjing.com/Recommend/1558459015894.jpg") no-repeat center center/cover;
            }
            .closeBtn{
                width:46px;
                height:46px;
                border-radius: 50%;
                background: #FC355D;
                position: absolute;
                top:10px;
                right: 10px;
                .icon{
                    width: 32px;
                    height: 32px;
                    position: absolute;
                    top: 8px;
                    left: 8px;
                    background: url("~img/publish/search_close.png") no-repeat center center/cover;
                }
            }
            &.ml-publish-imageBar{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background:rgba(239,239,239,1);
                border-radius: 12px;
                .icon{
                    width: 88px;
                    height: 76px;
                    margin-bottom: 10px;
                    display: block;
                    background: url("~img/publish/camera.png") no-repeat center center/cover;
                }
                p{
                    height:28px;
                    font-size:20px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(142,142,147,1);
                    line-height:28px;
                    text-align: center;
                    width: 100%;
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
            }
        }
    }

</style>
