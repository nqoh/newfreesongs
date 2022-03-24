<template>
    <div class="container-fluid" style="padding: 5px;">
        <hr>
        <div class="sub-container">
            <h1 align=center> SignUp </h1>
        </div>
        <hr>
        <div class="sub-container">
            <div class="col-md-6 col-sm-6 col-10">
                <app-signup></app-signup>
            </div>
        </div>
        <hr v-if="show">
        <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
            <app-login id="#login" v-if="show"></app-login>
        </div>
        <hr>
    </div>
</template>

<script>
    import login from  '../../website/login/mobile_login.vue'
    import signup_form from './signup_form.vue'
    export default {
        components:{
            appLogin: login,
            appSignup:signup_form
        },
        data () {
            return {  show:true, }
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
        metaInfo() {
            return {
                title: 'SignUp',
                meta: [
                    //facebook
                    {property: 'og:description', content: 'Upload your Music Online for Free with Bogiyo and'+
                    'Share it with your friends on social networks, Music From all over'},
                    {property: 'og:image', content: 'thumbnails/logonje.jpg'},
                    {property: 'og:title', content: 'Music From All Over'},
                    {property: 'og:type', content: 'image/jpg'},
                    {property: 'og:url', content: 'https://bogiyo.com'},
                    {property: 'og:site_name', content: 'Bogiyo.com'},
                    {property: 'fb:app_id', content: '265391744215464'},

                    // twitter
                    {name: 'twitter:site',  content: 'https://bogiyo.com'},
                    {name: 'twitter:title', content: 'Music From All Over'},
                    {name: 'twitter:description', content: 'Upload your Music Online for Free with Bogiyo and'+
                    'Share it with your friends on social networks, Music From all over'},
                    {name: 'twitter:image:src', content: 'thumbnails/logonje.jpg'},
                    {name: 'twitter:creator', content: '@bogiyo.com'},


                    {name: 'description', content: 'Upload your Music Online for Free with Bogiyo and'+
                    'Share it with your friends on social networks, Music From all over'},

                    {name:"robots", content:"index, follow"},
                    {name:"googlebot", content:"index, follow"},
                    {name:"google", content:"sitelinkssearchbox"},

                    {name:"keywords", content:"allovemp3, Mp3olova, Mp3allover, Bogiyo, olova mp3, mp3 all over," +
                    " Download, free, Mzansi, Umculo, Hip hop, underground, post music, Maskandi, Gospel, " +
                    " africa,mp3 olova, kwaito, SA, South Africa, latest, new, recent, house, igqomu, music, "+
                    " share music, upload"},

                    {name: 'author', content: 'Music From All Over'},
                ]
            }
        },
    }
</script>

<style>

</style>
