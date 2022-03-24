<template>
    <div class="container-fluid">
        <div class="row" >
            <div class="d-none d-xl-block  d-lg-block  col-md-12" ref="desktop" style="padding: 0px">
                <app-trending></app-trending>
            </div>
          <!--  <span style="display: none" data-toggle="modal" data-target="#signup" aria-hidden="true"></span>-->
            <div class="d-none d-xl-none d-lg-none col-12 d-block" ref="mobile" style="padding: 0px">
                <appChange></appChange>
            </div>
        </div>
    </div>
</template>

<script>
    import trending from '../index.vue'
    import change_pswd_mob from './change_pswd_mob.vue'
    import {buss} from '../../../app'
    export default {
        components:{
            appChange:change_pswd_mob,
            appTrending:trending,
        },

        data () {
            return {responsive:''}
        },

        beforeCreate(){
           $.get('/api/ResetPasswordLinkExists/'+this.$route.params.id,(response)=>{
               if(response === 'true'){
               }else{
                   $("[data-dismiss=modal]").trigger({type: "click"});
                   $('#signup').removeClass('zoomOutUp');
                   $('#signup').hide();
                   this.$router.push('/error')
               }
           })
        },

        mounted(){
            this.WidowSize()
            window.addEventListener('resize',this.WidowSize)
        },

        methods: {
            WidowSize() {
                if (this.$refs.desktop.clientWidth > 1 && this.responsive !== 'desktop'){
                    buss.$emit('changepassword','Change Password')
                    $("[data-toggle=modal]").trigger({type: "click"});
                    this.responsive = "desktop"
                }
                if(this.$refs.mobile.clientWidth > 1 && this.responsive !=='mobile'){
                    $("[data-dismiss=modal]").trigger({ type: "click" });
                    $('#signup').removeClass('zoomOutUp')
                    this.responsive="mobile"
                }

            },
        }
    }
</script>

<style>

</style>
