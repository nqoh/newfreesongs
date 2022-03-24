<template>
    <div class="container-fluid">
        <div class="row" >
            <div class="d-none d-xl-block  d-lg-block  col-md-12" ref="desktop" style="padding: 0px">
                <app-trending></app-trending>
            </div>

            <div class="d-none d-xl-none d-lg-none col-12 d-block" ref="mobile" style="padding: 0px">
                <app-resetpassword></app-resetpassword>
            </div>
        </div>
        <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
            <hr v-if="show">
            <app-login id="#login" v-if="show"></app-login>
        </div>
    </div>
</template>

<script>
    import resetpassword from './mobile&tablet.vue'
    import trending from '../index.vue'
    import {buss} from '../../../app'
    import login from  '../../website/login/mobile_login.vue'
    export default {
        props:['id'],
        components:{
            appResetpassword:resetpassword,
            appTrending:trending,
            appLogin: login,
        },
        data () {
            return {responsive:'',show:true,}
        },
        mounted(){
            buss.$emit('UnsucriberEmail',this.id);
            this.WidowSize()
            window.addEventListener('resize',this.WidowSize)
            buss.$emit('MobileLogin',()=>{
                this.show = true
            });


            if(this.$session.has('username') && this.$session.has('id')){
                this.show = false
            }
        },
        methods:{
            WidowSize() {
                if(this.$refs.desktop.clientWidth > 1 && this.responsive !=='desktop'){
                    var array= ['Unsubscribe',this.id]
                    buss.$emit('unsubscribe',array)
                    $("[data-toggle=modal]").trigger({ type: "click" });
                    this.responsive="desktop"
                }
                if(this.$refs.mobile.clientWidth > 1 && this.responsive !=='mobile'){
                    $("[data-dismiss=modal]").trigger({ type: "click" });
                    $('#signup').removeClass('zoomOutUp')
                    this.responsive="mobile"
                }

            }
        },


    }
</script>


<style>

</style>
