<template>
  <section class="text-input-wrapper" :class="type">
    <span class="text-label" v-text="labelTitle"></span>
    <span class="text-input-bar" @click="checkPicker">
      <input
        type="text"
        :maxlength="maxlength"
        :placeholder="placeholder"
        v-if="type==='text'"
        @change="$emit('change', currentValue)"
        ref="input"
        :disabled="disabled"
        :readonly="readonly"
        :value="currentValue"
        @input="handleInput"
      >
      <textarea
        name=""
        id=""
        :maxlength="maxlength"
        cols="30"
        rows="10"
        :placeholder="placeholder"
        v-if="type==='area'"
        @change="$emit('change', currentValue)"
        ref="input"
        :disabled="disabled"
        :readonly="readonly"
        :value="currentValue"
        @input="handleInput"
      ></textarea>
    </span>
    <span class="arrow" v-if="arrow"></span>
  </section>
</template>
<script>
export default {
  name: '',
  data () {
    const _this = this
    return {
      currentValue: _this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },

    currentValue (val) {
      this.$emit('input', val)
    },

    attr: {
      immediate: true,
      handler (attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea]
          target.forEach(el => {
            if (!el || !attrs) return
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]))
          })
        })
      }
    }
  },
  methods: {
    handleInput (evt) {
      this.currentValue = evt.target.value
    },
    checkPicker () {
      const _this = this
      if (_this.arrow) {
        _this.$emit('hanlePicker')
      }
    }
  },
  props: {
    readonly: Boolean,
    maxlength: Number,
    arrow: Boolean,
    disabled: Boolean,
    value: {},
    attr: Object,
    labelTitle: {
      default () {
        return ''
      },
      type: String
    },
    type: {
      default () {
        return 'text'
      },
      type: String
    },
    placeholder: {
      default () {
        return ''
      },
      type: String
    }
  }
}
</script>
<style scoped lang="scss">
  .text-input-wrapper{
    height: 100px;
    padding-left: 28px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    background: #fff;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 28px;
    line-height: 100px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    position: relative;
    &.text{
      height: 100px;
    }
    &.area{
      height: 200px;
    }
    .arrow{
      width: 8px;
      height: 18px;
      position: absolute;
      top:50%;
      right: 32px;
      transform: translateY(-50%);
      background: url("~img/personal/arrow.png") no-repeat center/cover;
    }
    .text-label{
      width: 140px;
      height: 100%;
      margin-right: 10px;
    }
    .text-input-bar{
      width: 500px;
      color: #333333;
      outline: none;
      border: none;
      background: none;
      height: 100%;
      textarea,input{
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        line-height: 48px;
        font-size:25px;
        font-family:SourceHanSansCN;
        font-weight:400;
        color: #333;
        &:focus{
          outline: none;
          border: none;
        }
        &::placeholder{
          outline: none;
          border: none;
          color:rgba(153,153,153,1);
        }
      }
      textarea{
        padding-top: 20px;
        line-height: 56px;
      }
    }
  }
</style>
