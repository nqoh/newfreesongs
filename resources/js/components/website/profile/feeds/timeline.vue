<template>
    <div>
        <div class="MusicBox" id="wrap" @scroll="LoardMoreMessages(num)">

             <div v-if="show"  class="row" style="margin:10px" >
                <div v-for="x in 6"  class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding-bottom: 27px">
                    <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="200" :height="80" style="float:right">
                        <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                        <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                        <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                        <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                        <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                    </vue-content-loading>
                </div>
            </div>
            
               <div v-if="!show">
<span v-if=" suggestion.length >= '2' ">
            <div   class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style="padding:3px; float: left;">
                <a :href="'/' + suggestion[0].username"> <img :src="suggestion[0].image" onerror="this.src='/thumbnails/newuser.gif';"></a>
                <div style="padding-left: 10px; ">
                    <strong><a :href="'/' + suggestion[0].username"  style=";font-size: 18px; color: rgb(149,75,75)">
                        {{suggestion[0].name | Ucfirst}}  {{suggestion[0].surname | Ucfirst}}</a></strong>
                    <p style="margin: -5px 0px 0px 0px"><b>{{Totalfollwer[0]}}</b> Followers <span @click="Follow(suggestion[0].id)" class="span"><a>Follow</a></span></p>
                    <p style="margin: -5px 0px 0px 0px">{{Totalmusic[0]}} Songs Uploaded  <small class="badge" style="float: right;">Suggestion</small></p>
                    <p style="margin: -5px 0px 0px 0px;font-size: 11px;height: 35px;">{{suggestion[0].bio.substr(0,37)}} </p>
                </div>
            </div>


            <div  class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style="padding:3px;float: right;">
                <a :href="'/' + suggestion[1].username"> <img :src="suggestion[1].image" onerror="this.src='/thumbnails/newuser.gif';"></a>
                <div style="padding-left: 10px; ">
                    <strong><a :href="'/' + suggestion[1].username"  style=";font-size: 18px; color: rgb(149,75,75)">
                        {{suggestion[1].name | Ucfirst}}  {{suggestion[1].surname | Ucfirst}}</a></strong>
                    <p style="margin: -5px 0px 0px 0px"><b>{{Totalfollwer[1]}}</b> Followers <span @click="Follow(suggestion[1].id)" class="span"><a>Follow</a></span></p>
                    <p style="margin: -5px 0px 0px 0px">{{Totalmusic[1]}} Songs Uploaded  <small class="badge" style="float: right;">Suggestion</small></p>
                    <p style="margin: -5px 0px 0px 0px;font-size: 11px;height: 35px;">{{suggestion[1].bio.substr(0,37)}} </p>
                </div>
            </div>
</span>

            <span v-if=" music != '' ">
                <div v-for="track in music" class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding: 0px; height: 140px;  float: left; margin-top: 5px; margin-bottom: 10px;">
                    <a :href="'/' + track.download_code "><img :src="track.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
                    <div class="icon_and_label">
                        <div class="icon"></div>
                        <small>{{ track.track.substr(0,27) }}</small>
                    </div>
                    <br>
                    <div class="icon_and_label">
                        <div class="size"></div>
                        <small> {{ (track.size / 1000000).toFixed(2) }} Mb | {{ track.duration }} Min
                        </small>
                    </div>
                    <br>
                    <div class="icon_and_label">
                        <div class="by"></div>
                        <small><b>By :</b>
                            <a :href="'/' + track.username ">{{ track.name | Ucfirst}}
                            </a>
                        </small>
                    </div>

                    <p style="margin-top: -3px" v-if=" track.price == '0' ">
                        <a :href="'/' + track.download_code "><b>Download</b></a>
                        <b>{{ track.downloads  | formatNumber}}</b> downloads
                        <a :href="'/lyrics/' + track.download_code"><b>Lyrics</b></a>
                    </p>

                    <p style="margin-top: -3px" v-if=" track.price == '1' ">
                        <a :href="'/' + track.download_code"><b>{{ priceCurrency.currency }}
                            {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                        <b>{{ track.downloads | formatNumber}}</b> Purchases
                        <a :href="'/lyrics/' + track.download_code"><b>Lyrics</b></a>
                    </p>


                    <p style="margin: -15px 0px 0px 0px; padding: 0px; font-size: 14px" v-if="track.playlisted_name != '' ">
                        <span>Playlisted by &nbsp;</span>
                        <a :href="'/' + track.playlisted_username"><b>{{ track.playlisted_name | Ucfirst }}</b></a>
                        <span style="opacity: .6; font-size: 14px">&nbsp; {{ track.created_at | formatDate }} </span>
                    </p>


</div>

            </span>

        </div>
</div>
    </div>
</template>

<script>
    import {buss} from '../../../../app'
    let arra=[]
    import VueContentLoading from 'vue-content-loading';
    export default {
        
       components:{
            VueContentLoading
        },
        
        data () {
            return {
                music:[],
                num:10,
                suggestion:[],
                Totalmusic:[],
                Totalfollwer:[],
                priceCurrency:[],
                show:true
            }
        },

        created(){
            buss.$emit('Closeloading','')
            if(this.$session.has('username')) {
            }else{
                this.$router.push('error')
            }
            this.getResults();
            buss.$emit('setColor','')
        },

        methods:{
            Follow(id){
                $.get('/api/FollowMember/'+id, (response) => {
                    if(response === "Ok"){
                        this.getResults();
                        buss.$emit('getMemberDetails','')
                        buss.$emit('setColor','')
                    }
                });
            },

            getResults() {
                $.get('/api/getFeeds/'+ 0 , (data) => {
                    buss.$emit('Closeloading','')
                    this.suggestion   = data.suggestions
                    this.Totalmusic   = data.TotalMusic
                    this.Totalfollwer = data.TotalFollwer
                    this.music = data.musics
                    this.show = false
                });

                $.get('/api/getPriceCurrency', (response) => {
                    this.priceCurrency = response
                });
            },

            LoardMoreMessages(num){
                var element = document.getElementById('wrap');
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    $.get('/api/getFeeds/' + num, (data) => {
                        if(data.musics.length > 0) {
                            for (var i = 0; i < data.musics.length; i++) {
                                this.music.push(data.musics[i])
                            }
                            this.num += 10
                        }
                    });
                }
            }


        },

        metaInfo: {
            title: 'Timeline',
        }



    }
</script>

<style scoped>
    img {
        width: 80px;
        float: left
    }

    .icon_and_label {
        display: inline-block;
        padding-top: 6px
    }

    .span{
        float: right;
        color:#954b4b;
        cursor: pointer;
        margin-left: -100%;
    }
    .span:hover{
        text-decoration: underline;
    }


    small {
        font-size: 11px;
        padding-top: 6px;
    }



    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }

    .MusicBox {
        height: 500px;
        width: 100%;
        overflow: auto;
    }
    .MusicBox::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    .MusicBox::-webkit-scrollbar-thumb {
        background-color: rgb(149, 75, 75);
    }
    .MusicBox::-webkit-scrollbar-track {
        /*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        background-color: transparent;
    }

</style>
