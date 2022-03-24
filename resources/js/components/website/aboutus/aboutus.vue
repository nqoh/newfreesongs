<template>

    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> About Us </h1>
        </div>
        <hr>
        <div class="sub-container">
            <p align="center" style="font-size: 140%">
                We are a Music Social Media.<br>
                We pride ourselves in giving music lovers a home to interact and
                connect with other music lovers from all-over the world.<br>

                info@bogiyo.com <br>
                webmaster@bogiyo.com </p>
        </div>
        
        <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
             <hr v-if="show">
        <app-login id="#login" v-if="show"></app-login>
        </div>

        <hr>

    </div>
</template>

<script>
    import register_modal from '../modal/modal.vue'
    import offline from 'v-offline';
    import login from  '../../website/login/mobile_login.vue'
    import {buss} from '../../../app'
    export default {
        components: {
            appLogin: login,
            appRegister: register_modal,
        },
        data () {
            return {
                show:true,
            }
        },
        
        created(){
            buss.$emit('MobileLogin',()=>{
                this.show = true
            });
            if(this.$session.has('username') && this.$session.has('id')){
                this.show = false
            }
            buss.$emit('setColor','')
        },

            created(){
                buss.$emit('setColor','')
                window.scrollTo(0, 0)
            }
    }
</script>
