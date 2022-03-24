<template>
    <div>
        <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Lyrics </h1>
        </div>
        <hr>
        <div class="sub-container">
            <p><b>Lyrics for :</b>&nbsp;&nbsp;<a :href="'/'+ music.download_code">{{music.track}}</a></p>
           <p align="center"><pre>{{music.lyrics}}</pre></p>


            <div align="center">
                <p align="center"  style="width:230px;height: 23px;clear: left;  margin: 0px; ">

                <a   :href="fb + music.download_code">
                    <img   src="/thumbnails/fbshare.png" style="width: 70px; height: 20px" width="50" height="20" title="Share on facebook">
                </a>

                <a    :href="whatsapp + music.download_code ">
                    <img   src="/thumbnails/download.jpg" style="margin-left: 3px; width: 70px; height: 20px" width="50" height="20" title="Share on Whatsapp">
                </a>

                <a   :href="twitter + music.download_code">
                    <img   src="/thumbnails/twitter.png" style="margin-left: 3px; width: 70px; height: 20px" width="50" height="20" title="Share on twitter">
                </a>

            </p>
            </div>
        </div>
            <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
                <app-login id="#login" v-if="show"></app-login>
            </div>

            <hr>
    </div>
 </div>
</template>

<script>
    import login from  '../../website/login/mobile_login.vue'
    import {buss} from '../../../app'
    export default {
        components: {
            appLogin: login,
        },
        props:['id'],
        data () {
            return {
                show:true,
                music: '',
                //id: this.$route.params.id,
                whatsapp:'whatsapp://send?text=https://www.bogiyo.com/lyrics',
                fb:'whatsapp://send?text=https://bogiyo.com/lyrics/',
                twitter:'http://twitter.com/share?url=https://bogiyo.com/lyrics/'
            }
        },

        created(){

            buss.$emit('MobileLogin',()=>{
                this.show = true
            });
            if(this.$session.has('username') && this.$session.has('id')){
                this.show = false
            }
            buss.$emit('setColor', '')

            $.get('/api/lyrics/' + this.id, (response) => {
                if (response !== 'Fail') {
                    this.music = response
                } else {
                    window.location='/error'
                  //  this.$router.push('/error')
                }
            })
        },

        metaInfo() {
            return {
                title: 'Lyrics for ' + this.music.track,
                meta: [
                    {
                        name: 'Description', content: 'Read  '+ this.music.track +' lyrics and download ' +
                        'the track for free - Music From All Over'
                    },

                    {property: 'og:image', content: 'http://olovamp3.com/album_art/'+
                       this.music.track.substr(0,this.music.track.length - 3) + 'jpg'},
                    {property: 'og:description',  content: 'Read  '+ this.music.track +' lyrics and download ' +
                    'the track for free - Music From All Over'},
                    {property: 'og:title', content: 'Read  '+ this.music.track +' lyrics'},
                    {property: 'og:type', content: 'image/jpg'},
                    {property: 'og:url', content: 'https://olovamp3.com/lyrics/'+this.music.download_code},
                    {property: 'og:site_name', content: 'OlovaMp3.com'},
                    {property: 'fb:app_id', content: '265391744215464'},


                    {name: 'twitter:site',  content: 'https://olovamp3.com/'+this.music.download_code},
                    {name: 'twitter:title', content: 'Read  '+ this.music.track +' lyrics'},
                    {name: 'twitter:description', content: 'Read  '+ this.music.track +' lyrics and download ' +
                    'the track for free - Music From All Over'},
                    {name: 'twitter:image:src', content: 'http://olovamp3.com/album_art/'+
                    this.music.track.substr(0,this.music.track.length - 3) + 'jpg'},
                    {name: 'twitter:creator', content: '@OlovaMp3.com'},

                ]
            }
        }

    }
</script>

<style>

</style>
