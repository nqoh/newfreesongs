<template>
    <div class="container-fluid">
        <div class="row" >
            <div class="d-none d-xl-block  d-lg-block  col-md-12" ref="desktop" style="padding: 0px">
                <app-trending></app-trending>
            </div>

            <div class="d-none d-xl-none d-lg-none col-12 d-block" ref="mobile" style="padding: 0px">
                <app-login></app-login>
            </div>
        </div>
    </div>
</template>

<script>
    import login from './mobile&tablet.vue'
    import trending from '../index.vue'
    import {buss} from '../../../app'
    export default {
        components:{
            appLogin:login,
            appTrending:trending,
        },
        data () {
            return {responsive:''}
        },
        mounted(){
            this.WidowSize()
            window.addEventListener('resize',this.WidowSize)
        },
        created(){
            buss.$on('userLogin',()=>{
                this.pushToHome()
            })
        },
        methods:{
            WidowSize() {
                if(this.$refs.desktop.clientWidth > 1 && this.responsive !=='desktop'){
                    buss.$emit('login','Log In')
                    $("[data-toggle=modal]").trigger({ type: "click" });
                    this.responsive="desktop"
                }
                if(this.$refs.mobile.clientWidth > 1 && this.responsive !=='mobile'){
                    $("[data-dismiss=modal]").trigger({ type: "click" });
                    $('#signup').removeClass('zoomOutUp')
                    this.responsive="mobile"
                }

            },
            pushToHome(){
                if(this.$refs.mobile.clientWidth > 1 && this.responsive === 'mobile') {
                    if(this.$session.has('username') && this.$session.has('id')){
                        this.$router.push('/')
                    }
                }
            }
        },
    }
</script>


<style>

</style>
