<template>
    <div v-if="!logedin">
    <div class="alert "  style="background: #eed5b7; height: 275px">
        <h1 align="center">Log In</h1>
        <div class="col-md-7 col-11">
            <app-form></app-form>
        </div>
    </div>
    </div>
</template>

<script>
    import loginFrom from './login_form.vue'
    import {buss}  from '../../../app'
    export default {
      components:{
          appForm:loginFrom
      },
        data () {
            return {logedin:false}
        },
       created(){
           buss.$on('MobileLogin', (data) => {
               this.logedin = data
           })
       },

/*        metaInfo() {
            return {
                title: 'Login',
                meta: [
                    //facebook
                    {property: 'og:description', content: 'Upload your Music Online for Free with OlovaMp3 and'+
                    'Share it with your friends on social networks, Music From all over'},
                    {property: 'og:image', content: 'https://olovamp3.com/thumbnails/logonje.jpg'},
                    {property: 'og:title', content: 'Music From All Over'},
                    {property: 'og:type', content: 'image/jpg'},
                    {property: 'og:url', content: 'https://olovamp3.com'},
                    {property: 'og:site_name', content: 'OlovaMp3.com'},
                    {property: 'fb:app_id', content: '265391744215464'},

                    // twitter
                    {name: 'twitter:site',  content: 'https://olovamp3.com'},
                    {name: 'twitter:title', content: 'Music From All Over'},
                    {name: 'twitter:description', content: 'Upload your Music Online for Free with OlovaMp3 and'+
                    'Share it with your friends on social networks, Music From all over'},
                    {name: 'twitter:image:src', content: 'thumbnails/logonje.jpg'},
                    {name: 'twitter:creator', content: '@OlovaMp3.com'},


                    {name: 'description', content: 'Upload your Music Online for Free with OlovaMp3 and'+
                    'Share it with your friends on social networks, Music From all over'},

                    {name:"robots", content:"index, follow"},
                    {name:"googlebot", content:"index, follow"},
                    {name:"google", content:"Music From All Over"},

                    {name:"keywords", content:"allovemp3, Mp3olova, Mp3allover, olovamp3, olova mp3," +
                    " mp3 all over, Download, free, Mzansi, Umculo, Hip hop, underground, post music,"+
                    "Maskandi, Gospel, africa,mp3 olova, kwaito, SA, South Africa, latest, new, recent,"+
                    "house, igqomu, music,share music, upload, 2015, 2016, 2017"},

                    {name: 'author', content: 'Music From All Over'},
                ]
            }
        },*/
        
    }


</script>

<style scoped>
    .alert{
        border-radius: 0px;
    }
</style>
