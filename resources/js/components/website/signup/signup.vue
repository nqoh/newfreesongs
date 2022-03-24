<template>
    <div class="container-fluid">
        <div class="row" >

            <div class="d-none d-xl-block  d-lg-block  col-md-12" ref="desktop" style="padding: 0px">
              <app-trending></app-trending>
            </div>

            <div class="d-none d-xl-none d-lg-none col-12 d-block" ref="mobile" style="padding: 0px">
              <app-signup></app-signup>
            </div>

        </div>
    </div>
</template>

<script>
    import signup from './mobile&tablet.vue'
    import {buss} from '../../../app'
    import trending from '../index.vue'
    export default {
          components:{
            appSignup:signup,
            appTrending:trending,
          },
        data () {
            return {responsive:''}
        },
        mounted(){
            this.WidowSize()
            window.addEventListener('resize',this.WidowSize)
        },
        methods:{
            WidowSize() {
                if(this.$refs.desktop.clientWidth > 1 && this.responsive !=='desktop'){
                    buss.$emit('signup',"Sign Up")
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
