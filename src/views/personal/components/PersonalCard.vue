<template>
    <section class="jd_main_personal">
        <section class="header-module">
            <router-link tag="figure" :to="{path:'/editUserInfo'}" class="logo" :style="{background:`url('${user.avatar?user.avatar:userLogo}') no-repeat center/cover`}"></router-link>
            <section class="personal-info">
                <div class="user-name" v-text="user.userName"></div>
                <div class="user-phone">做真品，更做臻品</div>
            </section>
            <div class="sign">马上签到</div>
        </section>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'personalCard',
  data () {
    return {
      userLogo: require('../../../assets/images/personal/userLogo.png')
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
<style lang="scss" scoped>
    .jd_main_personal{
        width:750px;
        height:182px;
        background:linear-gradient(90deg,rgba(51,218,138,1) 0%,rgba(18,201,138,1) 100%);
        .header-module{
            height: 133px;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-start;
            .logo{
                width:99px;
                height:99px;
                background:rgba(255,255,255,1);
                border-radius:50%;
                margin: 0 26px 0 35px;
                border:3px solid #fff;
                background: url("https://goodjd.oss-cn-beijing.aliyuncs.com/goodjd/20210129/vfgrfVshwkMHGjEuaCxohKeRxtTPPdpJ.png") no-repeat center/cover;
            }
            .personal-info{
                width: 128px;
                .user-name{
                    width: 100%;
                    margin: 17px 0;
                    font-size:32px;
                    font-family:SourceHanSansCN;
                    font-weight:400;
                    color:rgba(255,254,254,1);
                    line-height:32px;
                }
                .user-phone{
                    width: 100%;
                    font-size:26px;
                    font-family:SourceHanSansCN;
                    font-weight:400;
                    color:rgba(255,254,254,1);
                    line-height:32px;
                }
            }
            .sign{
                margin-left: 241px;
                width:158px;
                height:60px;
                border:1px solid rgba(255,255,255,1);
                border-radius:30px;
                font-size:26px;
                font-family:SourceHanSansCN;
                font-weight:500;
                color:rgba(255,254,254,1);
                line-height: 60px;
                text-align: center;
            }
        }
    }
</style>
