<template>
    <div>
      <hr>
        <div class="row container-fluid" style=" margin: 0px auto ;">
            
         <div class="sub-container">
            <h3 v-if=" account_type == 'artist' " align="center">Grow your fanbase,
                <a href="/artist/promote"><a>Promote</a></a>
                your music
            </h3>

            <h3 v-if=" account_type ==  'fan' " align="center">Make money with Bogiyo,
                <a href="/fan/promote"><a>Start Now </a></a>
            </h3>

            <h3 v-if=" account_type ==  '' " align="center">Connect with music lovers,
                 <a href="/signup"><a>Signup Now </a></a>
            </h3>
         </div>
        
        <hr>
            <div class="col-xl-6 col-md-6 col-lg-6">
                <div class="alert top_trending"><h5 align="center">Most Downloads Tracks</h5></div>
                <div style="background: #eed5b7;" class="mostDownload" @scroll="LoardMoreMusic(num)" id="mostDownload">
                    
                    
                     <div v-if="showMusic"  v-for="i in 10" style="padding-bottom: 20px;padding-left:12px;margin-bottom: 0px" class="col-xl-12 col-md-12 col-lg-12 col-12" >
                        <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="220" :height="70">
                            <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                            <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                            <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                            <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                            <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                        </vue-content-loading>
                    </div>

                    <div v-if="!showMusic"  v-for="(music,i) in musics" class="alert col-xl-12 col-md-12 col-lg-12 col-12" id="track_container">
                        
                        <b class="music_num">{{ i+1 }} .</b>
                        <img :src="music.album_art" :alt="music.track" onerror="this.src='/thumbnails/olova.png';">
                        <div class="icon_and_label">
                            <div class="icon"></div>
                            <small>{{ music.track.substr(0,27) }}</small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="size"></div>
                            <small> {{ (music.size / 1000000).toFixed(2) }} Mb | {{ music.duration }} Min</small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="by"></div>
                            <small><b>By :</b>
                                <a :href="'/' + music.username ">{{ music.name }}
                                </a>
                            </small>
                        </div>

                        <p v-if=" music.price == '0' ">
                            <a :href="'/' + music.download_code "><b>Download</b></a>
                            <b>{{ music.downloads | formatNumber}}</b> downloads
                            <a :href="'/lyrics/' + music.download_code"><b>Lyrics</b></a>
                        </p>

                        <p v-if=" music.price == '1' ">
                            <a :href="'/' + music.download_code"><b>{{ priceCurrency.currency }}
                                {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                            <b>{{ music.downloads | formatNumber }}</b> Purchases
                            <a :href="'/lyrics/' + music.download_code"><b>Lyrics</b></a>
                        </p>
                    </div>
                </div>
            </div>

            <!---  Ads Panel  --->
            <div class="col-xl-6 col-md-6 col-lg-6" style="padding: 0px 0px 0px 3px">
                <div class="top_label alert  col-xl-12 col-md-12 col-lg-12"><h5 align="center">Featured</h5>
                </div>

                <div  class="alert col-xl-12 col-md-12 col-lg-12" style="background: #eed5b7; float: right;height: 724px;
        padding: 9px 0px 0px 13px;">
                    
                      <div v-if="showAds">
                        <div  class="animated   slower track" style="padding-bottom: 35px;">
                            <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="220" :height="70">
                                <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                                <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                                <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                                <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                                <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                            </vue-content-loading>
                        </div>

                        <div  class="animated  slower lounge" style="padding-bottom: 35px; width: 92%">
                            <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="220" :height="70">
                                <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                                <rect x="52" y="2" rx="0" ry="0" width="70" height="3" />
                                <rect x="52" y="18" rx="0" ry="0" width="55" height="3" />
                                <rect x="52" y="32" rx="0" ry="0" width="65" height="3" />
                                <rect x="52" y="45" rx="0" ry="0" width="85" height="3" />
                            </vue-content-loading>
                        </div>

                        <div class="animated   slower track" style="padding-bottom: 35px;">
                            <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="220" :height="70">
                                <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                                <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                                <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                                <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                                <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                            </vue-content-loading>

                        </div>

                        <div class="animated  slower lounge" style="padding-bottom: 35px;width: 92%">
                            <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="220" :height="70">
                                <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                                <rect x="52" y="2" rx="0" ry="0" width="70" height="3" />
                                <rect x="52" y="18" rx="0" ry="0" width="55" height="3" />
                                <rect x="52" y="32" rx="0" ry="0" width="65" height="3" />
                                <rect x="52" y="45" rx="0" ry="0" width="85" height="3" />
                            </vue-content-loading>
                        </div>


                        <div class="animated   slower track" style="padding-bottom: 35px;">
                            <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="220" :height="70">
                                <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                                <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                                <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                                <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                                <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                            </vue-content-loading>
                        </div>
                    </div>

<div v-if="!showAds">
                    <div  class="animated   slower track" style="padding-bottom: 35px;">
                        <a :href="'/' + ads.musics[0].download_code"><img :src="ads.musics[0].album_art" :alt="ads.musics[0].track" onerror="this.src='/thumbnails/olova.png';"></a>
                        <div class="icon_and_label">
                            <div class="icon"></div>
                            <small>{{ ads.musics[0].track.substr(0,27) }}</small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="size"></div>
                            <small>{{ ( ads.musics[0].size / 1000000).toFixed(2) }} Mb | {{ ads.musics[0].duration }}
                                Min
                            </small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="by"></div>
                            <small><b>By :</b>
                                <a :href="'/'+ ads.musics[0].username">{{ ads.musics[0].name | Ucfirst }}
                                </a>
                            </small>
                        </div>
                        <p style="margin: 0px" v-if=" ads.musics[0].price == '0' "><a :href="'/' + ads.musics[0].download_code "><b>Download</b></a>
                            <b>{{ ads.musics[0].downloads | formatNumber}}</b> downloads
                            <a :href="'/lyrics/' + ads.musics[0].download_code"><b>Lyrics</b></a>
                        </p>

                        <p style="margin: 0px" v-if=" ads.musics[0].price == '1' ">
                            <a :href="'/' + ads.musics[0].download_code"><b>{{ priceCurrency.currency }}
                                {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                            <b>{{ ads.musics[0].downloads | formatNumber}}</b> Purchases
                            <a :href="'/lyrics/' + ads.musics[0].download_code"><b>Lyrics</b></a>
                        </p>
                    </div>

                    <div  class="animated  slower lounge" style="padding-bottom: 35px; width: 92%">
                        <a :href="'/' + ads.lounge.username"> <img :src="ads.lounge.image" :alt="ads.lounge.name" onerror="this.src='/thumbnails/newuser.gif';"></a>
                        <div style="padding-left: 10px; margin-top:-10px">
                            <strong><a :href="'/' + ads.lounge.username"  style=";font-size: 18px; color: rgb(149,75,75)">{{ads.lounge.name |
                                Ucfirst}}</a></strong>
                            <p style="margin-top: -5px"><b>{{ads.followers}}</b> Followers</p>
                            <p style="margin-top: -5px">{{ads.songs}} Songs Uploaded</p>
                            <p style="font-size: 11px;height: 35px;">{{ads.lounge.bio.substr(0,80)}} </p>
                        </div>
                    </div>

                    <div class="animated   slower track" style="padding-bottom: 35px;">
                        <a :href="'/' + ads.musics[1].download_code"><img :src="ads.musics[1].album_art" :alt="ads.musics[1].track" onerror="this.src='/thumbnails/olova.png';"></a>
                        <div class="icon_and_label">
                            <div class="icon"></div>
                            <small>{{ ads.musics[1].track.substr(0,27) }}</small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="size"></div>
                            <small>{{ ( ads.musics[1].size / 1000000).toFixed(2) }} Mb | {{ ads.musics[1].duration }}
                                Min
                            </small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="by"></div>
                            <small><b>By :</b>
                                <a :href="'/'+ ads.musics[1].username">{{ ads.musics[1].name | Ucfirst }}
                                </a>
                            </small>
                        </div>


                        <p style="margin: 0px" v-if=" ads.musics[1].price == '0' "><a :href="'/' + ads.musics[1].download_code "><b>Download</b></a>
                            <b>{{ ads.musics[1].downloads | formatNumber}}</b> downloads
                            <a :href="'/lyrics/' + ads.musics[1].download_code"><b>Lyrics</b></a>
                        </p>

                        <p style="margin: 0px" v-if=" ads.musics[1].price == '1' ">
                            <a :href="'/' + ads.musics[1].download_code"><b>{{ priceCurrency.currency }}
                                {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                            <b>{{ ads.musics[0].downloads | formatNumber}}</b> Purchases
                            <a :href="'/lyrics/' + ads.musics[1].download_code"><b>Lyrics</b></a>
                        </p>



                    </div>

                    <div class="animated  slower lounge" style="padding-bottom: 35px;width: 92%">
                        <a :href="'/' + ads.lounge2.username"> <img :src="ads.lounge2.image" :alt="ads.lounge2.name" onerror="this.src='/thumbnails/newuser.gif';"></a>
                        <div style="padding-left: 10px; margin-top:-10px">
                            <strong><a :href="'/' + ads.lounge2.username"  style=";font-size: 18px; color: rgb(149,75,75)">{{ads.lounge2.name |
                                Ucfirst}}</a></strong>
                            <p style="margin-top: -5px"><b>{{ads.followers2}}</b> Followers</p>
                            <p style="margin-top: -5px">{{ads.songs2}} Songs Uploaded</p>
                            <p style="font-size: 11px;height: 35px;">{{ads.lounge2.bio.substr(0,80)}} </p>
                        </div>
                    </div>


                    <div class="animated   slower track" style="padding-bottom: 35px;">
                        <a :href="'/' + ads.musics[2].download_code"><img :src="ads.musics[2].album_art" :alt="ads.musics[2].track" onerror="this.src='/thumbnails/olova.png';"></a>
                        <div class="icon_and_label">
                            <div class="icon"></div>
                            <small>{{ ads.musics[2].track.substr(0,27) }}</small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="size"></div>
                            <small>{{ ( ads.musics[2].size / 1000000).toFixed(2) }} Mb | {{ ads.musics[2].duration }}
                                Min
                            </small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="by"></div>
                            <small><b>By :</b>
                                <a :href="'/'+ ads.musics[2].username">{{ ads.musics[2].name | Ucfirst }}
                                </a>
                            </small>
                        </div>

                        <p style="margin: 0px" v-if=" ads.musics[2].price == '0' "><a :href="'/' + ads.musics[2].download_code "><b>Download</b></a>
                            <b>{{ ads.musics[2].downloads | formatNumber}}</b> downloads
                            <a :href="'/lyrics/' + ads.musics[2].download_code"><b>Lyrics</b></a>
                        </p>

                        <p style="margin: 0px" v-if=" ads.musics[2].price == '1' ">
                            <a :href="'/' + ads.musics[2].download_code"><b>{{ priceCurrency.currency }}
                                {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                            <b>{{ ads.musics[2].downloads | formatNumber}}</b> Purchases
                            <a :href="'/lyrics/' + ads.musics[2].download_code"><b>Lyrics</b></a>
                        </p>

                    </div>
</div>
                </div>

            </div>
            <hr style="line-height: 0.1">

            <h3 style="margin: -5px auto" align="center">
                <a href="/"><a>Trending Tracks</a></a>
            </h3>

            <div v-if="show" class="alert container-fluid">
                <app-login></app-login>
            </div>
            <hr>

        </div>
    
          
    </div>
</template>

<script>
    import {buss}  from '../../../app'
    import login from '../login/mobile_login.vue'
    import VueContentLoading from 'vue-content-loading';
    export default {
        components: {
            appLogin: login,
            VueContentLoading,
        },
        data () {
            return {
                musics: [],
                priceCurrency: [],
                ads: [],
                num:16,
                show: true,
                account_type: '',
                showAds:true,
                showMusic:true
            }
        },
        created(){
            
            
            buss.$emit('setColor','');
            this.MostDownloaded();
            buss.$on('Tablet', (value) => {
                $('#signup').addClass('zoomOutUp')
                setTimeout(function () {
                        $("[data-dismiss=modal]").trigger({type: "click"});
                        $('#signup').removeClass('zoomOutUp')
                    }
                    , 600)
                this.MostDownloaded();
            });

            buss.$on('reSetAds', (val) => {
                this.ads = val
                this.showAds = false
            });

            buss.$on('account_type', (vl) => {
                $.get('/api/getMemberDetails', (response) => {
                    this.account_type = response.member.account_type;
                });
            });
            $.get('/api/getMemberDetails', (response) => {
                this.account_type = response.member.account_type;
            });

            buss.$emit('MobileLogin', () => {
                this.show = true
            });

            if (this.$session.has('username') && this.$session.has('id')) {
                this.show = false
            }
        },

        beforeCreate(){
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
        },

        methods: {
            LoardMoreMusic(num) {
                var element = document.getElementById('mostDownload');
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    $.get('/api/getMostDownloadMusic/' + num, (data) => {
                        if (data.length > 0) {
                            for (var i = 0; i < data.length; i++) {
                                this.musics.push(data[i])
                            }
                            this.num += 16
                        }
                    });
                }
            },

            MostDownloaded(){
                $.getJSON("/api/getMostDownloadMusic/"+0, (data) => {
                    this.musics = data;
                    buss.$emit('closeProgress','');
                    this.showMusic = false;
                });
            },
        },
    }
</script>

<style scoped>
    .mostDownload{
        height: 723px;
        overflow: auto;
    }

    .mostDownload::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    .mostDownload::-webkit-scrollbar-thumb {
        background-color: rgb(149, 75, 75);
    }
    .mostDownload::-webkit-scrollbar-track {
        /*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        background-color: transparent;
    }

    img {
        width: 80px;
        float: left
    }

    .icon_and_label {
        display: inline-block;
        padding-top: 6px
    }

    .music_num {
        float: left;
        color: #954b4b;
    }

    small {
        font-size: 11px;
        padding-top: 6px;
    }

    p {
        margin: -3px 0px 0px 10px;
    }

    h3 {
        color: #954b4b;
        font-weight: bold;
    }

    h3 a {
        text-decoration: underline;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }

    .col-xl-6, .col-md-6, .col-lg-6 {
        padding: 0px;
        margin: 0px auto;
    }

    .row .container-fluid {
        padding: 0px;
        margin: 0px auto;
    }

    .ads_container {
        float: right;
        background-color: #eed5b7;
    }

    #track_container {
        padding: 5px;
        background: #eed5b7;
        margin-bottom: 0px
    }
</style>
