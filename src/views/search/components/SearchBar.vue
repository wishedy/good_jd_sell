<template>
    <section class="jd_search">
        <figure class="jd_back"  @click.stop="returnBack"><i></i></figure>
        <figure class="jd_search_wrapper">
            <i class="icon"></i>
            <span class="input-wrapper">
                <input type="text" placeholder="请输入您搜索的手机号">
            </span>
        </figure>
        <figure class="jd_search_label">搜索</figure>
    </section>
</template>
<script>
export default {
  name: 'searchHeader',
  methods: {
    returnBack () {
      const _this = this
      _this.$emit('returnOriginal')
      _this.$router.back(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_search{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 88px;
        padding: 0 33px 0 18px;
        background:linear-gradient(90deg,rgba(51,218,138,1),rgba(18,201,138,1));
        .jd_back{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            flex: 1;
            i{
                width: 24px;
                height: 40px;
                background: url('~img/headerBar/back.png') no-repeat center/cover;
            }
        }
        .jd_search_wrapper{
            width:546px;
            height:63px;
            background:rgba(255,255,255,1);
            border-radius:31px;
            position: relative;
            .icon{
                width: 28px;
                height: 28px;
                position: absolute;
                left: 20px;
                top:50%;
                transform: translateY(-50%);
                background: url("~img/search/search.png") no-repeat center/cover;
            }
            .input-wrapper{
                height: 48px;
                position: absolute;
                right: 0;
                left: 63px;
                top:50%;
                transform: translateY(-50%);
                input{
                    outline: none;
                    border: none;
                    line-height: 48px;
                    height: 100%;
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
            }
        }
        .jd_search_label{
            width:63px;
            height:31px;
            font-size:33px;
            font-family:SourceHanSansCN;
            font-weight:400;
            color:rgba(255,255,255,1);
            margin-left: 13px;
            flex: 1;
        }

    }
</style>
