<template>
    <section class="jd_agency_item">
        <section class="agency_bar user">
            <figure class="logo"></figure>
            <div class="user-label">代理名称：</div>
            <div class="user-name">代理019201</div>
        </section>
        <section class="agency_bar phone">
            <figure class="logo"></figure>
            <div class="user-label">手机号：</div>

            <div class="user-name">189****1232</div>
        </section>
        <section class="agency_bar register">
            <figure class="logo"></figure>
            <div class="user-label">注册用户数：</div>

            <div class="user-name">49</div>
        </section>
        <section class="agency_bar performance">
            <figure class="logo"></figure>
            <div class="user-label">业绩：</div>
            <div class="user-performance">898(今天)</div>
            <div class="user-performance">898(累计)</div>
        </section>
    </section>
</template>
<script>
export default {
  name: 'agencyItem'
}
</script>
<style lang="scss" scoped>
    .jd_agency_item{
        height: 355px;
        width: 100%;
        margin-bottom: 30px;
        background: #fff;
        .agency_bar{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            height:88px;
            background:rgba(255,255,255,1);
            .logo{
                width: 44px;
                height: 44px;
                margin-left: 32px;
                margin-right: 32px;
                background: #ccc;
            }
            .user-name{
                font-size:32px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(51,51,51,1);
            }
            .user-performance{
                margin-right: 20px;
            }
            &.user{
                .logo{
                    background: url("~img/personal/user.png") no-repeat center/cover;
                }
            }
            &.performance{
                .logo{
                    background: url("~img/personal/performance.png") no-repeat center/cover;
                }
            }
            &.register{
                .logo{
                    background: url("~img/personal/register.png") no-repeat center/cover;
                }
            }
            &.phone{
                .logo{
                    background: url("~img/personal/phone.png") no-repeat center/cover;
                }
            }
        }
    }
</style>
