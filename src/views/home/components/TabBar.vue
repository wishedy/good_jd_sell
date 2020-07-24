<template>
    <section class="jd_tab">
        <span class="tab-item active">标题</span>
        <span class="tab-item">标题</span>
        <span class="tab-item">标题</span>
        <span class="tab-item">标题</span>
        <span class="tab-item">标题</span>
        <span class="tab-item">标题</span>
    </section>
</template>
<script>
export default {
  name: 'tab'
}
</script>
<style lang="scss" scoped>
    .jd_tab{
        height: 100px;
        width: 100%;
        display: flex;
        background: #fff;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #e5e5e5;
        .tab-item{
            font-size:32px;
            font-family:SourceHanSansCN;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:32px;
            &.active{
                font-size:34px;
                font-family:PangMenZhengDao;
                font-weight:400;
                color:rgba(51,51,51,1);
                position: relative;
                &::after{
                    content: " ";
                    position: absolute;
                    width: 102%;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom:-14px;
                    height: 8px;
                    background: #12C98A;
                }
            }
        }
    }
</style>
