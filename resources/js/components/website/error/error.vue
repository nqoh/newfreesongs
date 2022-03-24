<template>
    <div class="container-fluid" style="padding:5px">

        <hr>
        <div class="sub-container">
            <h1 align=center> Page not found </h1>
        </div>
        <hr>

        <div class="sub-container">
            <div align="center"><img align="center" class="img img-response" style="margin:3px auto; " src="/thumbnails/nfound.png"><br></div>
            <div align="center">
                <p>Please check your url and try again, or</p>
                <p>The file was removed, or</p>
                <p>Content violated our <a href="/terms"><a href="">terms and condition's.</a></a> </p>
            </div><br>
            <button class="btn" @click="home()">Homepage</button>

        </div>

        <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
             <hr v-if="show">
            <app-login id="#login" v-if="show"></app-login>
        </div>

        <hr>
    </div>
</template>

<script>
    import login from  '../../website/login/mobile_login.vue'
    import {buss} from '../../../app'
    export default {
        components: {
            appLogin: login,
        },
        data () {
            return {show:true,}
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
        methods:{
           home(){
             window.location='/'
            }
       },
        
    }
</script>

<style scoped>
  p{
      align-content: center;
      margin: 0px;
  }
</style>
