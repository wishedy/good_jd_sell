<template>
    <section class="set_item" @click.stop="routerTo">
        <div class="label">
            <i class="icon"></i>
            <span class="set_title" v-text="title"></span>
        </div>
        <div class="set_des">
            <span class="des_content" v-if="subTitle"></span>
            <i class="icon"></i>
        </div>
    </section>
</template>
<script>
export default {
  name: 'setItem',
  methods: {
    routerTo () {
      const _this = this
      if (_this.path) {
        _this.$router.push({ path: `/${_this.path}` })
      }
    }
  },
  props: {
    title: {
      default () {
        return ''
      },
      type: String
    },
    path: {
      default () {
        return ''
      },
      type: String
    },
    subTitle: {
      default () {
        return ''
      },
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
    .set_item{
        height:109px;
        background:rgba(255,255,255,1);
        width: 750px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(246,246,246,1);;
        .label{
            margin-left: 34px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
           .icon{
               width:37px;
               height:40px;
               margin-right: 25px;
           }
            .set_title{
                font-size:32px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(51,51,51,1);
            }
        }
        &.order{
            .label{
                .icon{
                    background: url("~img/personal/order.png") no-repeat center/cover;
                }
            }
        }
        &.privacy{
            .label{
                .icon{
                    background: url("~img/personal/privacy.png") no-repeat center/cover;
                }
            }
        }
        &.agreement{
            .label{
                .icon{
                    background: url("~img/personal/agreement.png") no-repeat center/cover;
                }
            }
        }
        &.performance{
            .label{
                .icon{
                    width:40px;
                    height:37px;
                    background: url("~img/personal/performance.png") no-repeat center/cover;
                }
            }
        }
        &.search{
            .label{
                .icon{
                    width:40px;
                    height:40px;
                    background: url("~img/personal/search.png") no-repeat center/cover;
                }
            }
        }
        &.set{
            .label{
                .icon{
                    width:40px;
                    height:40px;
                    background: url("~img/personal/set.png") no-repeat center/cover;
                }
            }
        }
        .set_des{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content:flex-start ;
            margin-right: 31px;
           .des_content{
               height:26px;
               font-size:28px;
               font-family:SourceHanSansCN;
               font-weight:400;
               color:rgba(153,153,153,1);
               margin-right: 14px;
           }
            .icon{
                width:15px;
                height:28px;
                background: url("~img/personal/right.png") no-repeat center/cover;
            }
        }
    }
</style>
