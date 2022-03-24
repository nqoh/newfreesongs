<template xmlns="http://www.w3.org/1999/html">
    <div>

        <div v-if="show" style="background: #eed5b7;height: 766px; padding:0px" class="alert">
            <div class="top_label alert  col-xl-12 col-md-12 col-lg-12"><h5 align="center">Featured</h5>
            </div>
            <div  class="alert col-xl-12 col-md-12 col-lg-12" style="background: #eed5b7; float: right;height: 724px;
        padding: 9px 0px 0px 13px;">

                <div  class="animated   slower track" style="padding-bottom: 35px;">
                    <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="350" :height="80">
                        <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                        <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                        <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                        <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                        <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                    </vue-content-loading>
                </div>

                <div  class="animated  slower lounge" style="padding-bottom: 35px; width: 92%">
                        <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="350" :height="80">
                            <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                            <rect x="52" y="2" rx="0" ry="0" width="70" height="3" />
                            <rect x="52" y="18" rx="0" ry="0" width="55" height="3" />
                            <rect x="52" y="32" rx="0" ry="0" width="65" height="3" />
                            <rect x="52" y="45" rx="0" ry="0" width="85" height="3" />
                        </vue-content-loading>
                </div>

                <div class="animated   slower track" style="padding-bottom: 35px;">
                    <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="350" :height="80">
                        <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                        <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                        <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                        <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                        <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                    </vue-content-loading>

                </div>

                <div class="animated  slower lounge" style="padding-bottom: 35px;width: 92%">
                    <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="350" :height="80">
                        <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                        <rect x="52" y="2" rx="0" ry="0" width="70" height="3" />
                        <rect x="52" y="18" rx="0" ry="0" width="55" height="3" />
                        <rect x="52" y="32" rx="0" ry="0" width="65" height="3" />
                        <rect x="52" y="45" rx="0" ry="0" width="85" height="3" />
                    </vue-content-loading>
                </div>


                <div class="animated   slower track" style="padding-bottom: 35px;">
                    <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="350" :height="80">
                        <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                        <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                        <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                        <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                        <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                    </vue-content-loading>
                </div>
            </div>

        </div>



    <div v-if="!show">
    <div v-if="ads != '' " style="background: #eed5b7;height: 766px; padding:0px" class="alert">
        <div class="top_label alert  col-xl-12 col-md-12 col-lg-12"><h5 align="center">Featured</h5>
        </div>
        <div class="alert col-xl-12 col-md-12 col-lg-12" style="background: #eed5b7; float: right;height: 724px;
        padding: 9px 0px 0px 13px;">

            <div  class="animated   slower track" style="padding-bottom: 35px;">
                <a :hreef="'/' + ads.musics[0].download_code">
                    <img @click="loardMusic(ads.musics[0].download_code)" :src="ads.musics[0].album_art" onerror="this.src='/thumbnails/olova.png';"></a>
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
                        <a :href="'/'+ ads.musics[0].username">
                            <span @click="getLounge(ads.musics[0].username)">{{ ads.musics[0].name | Ucfirst }}</span>
                        </a>
                    </small>
                </div>
                <p style="margin: 0px" v-if=" ads.musics[0].price == '0' ">
                    <a  :href="'/' + ads.musics[0].download_code "><b @click="loardMusic(ads.musics[0].download_code)">Download</b></a>
                    <b>{{ ads.musics[0].downloads | formatNumber }}</b> downloads
                    <a :href="'/lyrics/' + ads.musics[0].download_code"><b>Lyrics</b></a>
                </p>

                <p style="margin: 0px" v-if=" ads.musics[0].price == '1' ">
                    <a   :href="'/' + ads.musics[0].download_code"><b @click="loardMusic(ads.musics[0].download_code)">{{ priceCurrency.currency }}
                        {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                    <b>{{ ads.musics[0].downloads | formatNumber}}</b> Purchases
                    <a :href="'/lyrics/' + ads.musics[0].download_code"><b>Lyrics</b></a>
                </p>
            </div>

            <div  class="animated  slower lounge" style="padding-bottom: 35px; width: 92%">
                <a :href="'/' + ads.lounge.username">
                    <img @click="getLounge(ads.lounge.username)" :src="ads.lounge.image" onerror="this.src='/thumbnails/newuser.gif';"></a>
                <div style="padding-left: 10px; margin-top:-10px">
                    <strong><a :href="'/' + ads.lounge.username"  style=";font-size: 18px; color: rgb(149,75,75)">
                        <span @click="getLounge(ads.lounge.username)">{{ads.lounge.name |
                            Ucfirst}}</span></a></strong>
                    <p style="margin-top: -5px"><b>{{ads.followers}}</b> Followers</p>
                    <p style="margin-top: -5px">{{ads.songs}} Songs Uploaded</p>
                    <p style="font-size: 11px;height: 35px;">{{ads.lounge.bio.substr(0,80)}} </p>
                </div>
            </div>

            <div class="animated   slower track" style="padding-bottom: 35px;">
                <a :href="'/' + ads.musics[1].download_code">
                    <img @click="loardMusic(ads.musics[1].download_code)" :src="ads.musics[1].album_art" onerror="this.src='/thumbnails/olova.png';"></a>
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
                        <a :href="'/'+ ads.musics[1].username">
                            <span @click="getLounge(ads.musics[1].username)">{{ ads.musics[1].name | Ucfirst }}</span>
                        </a>
                    </small>
                </div>


                <p style="margin: 0px" v-if=" ads.musics[1].price == '0' ">
                    <a :href="'/' + ads.musics[1].download_code "><b @click="loardMusic(ads.musics[1].download_code)" >Download</b></a>
                    <b>{{ ads.musics[1].downloads | formatNumber }}</b> downloads
                    <a :href="'/lyrics/' + ads.musics[1].download_code"><b>Lyrics</b></a>
                </p>

                <p style="margin: 0px" v-if=" ads.musics[1].price == '1' ">
                    <a  :href="'/' + ads.musics[1].download_code"><b @click="loardMusic(ads.musics[1].download_code)">{{ priceCurrency.currency }}
                        {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                    <b>{{ ads.musics[0].downloads | formatNumber}}</b> Purchases
                    <a :href="'/lyrics/' + ads.musics[1].download_code"><b>Lyrics</b></a>
                </p>
            </div>

            <div class="animated  slower lounge" style="padding-bottom: 35px;width: 92%">
                <a :href="'/' + ads.lounge2.username">
                    <img @click="getLounge(ads.lounge2.username)" :src="ads.lounge2.image" onerror="this.src='/thumbnails/newuser.gif';"></a>
                <div style="padding-left: 10px; margin-top:-10px">
                    <strong><a :href="'/' + ads.lounge2.username"  style=";font-size: 18px; color: rgb(149,75,75)">
                        <span @click="getLounge(ads.lounge2.username)">{{ads.lounge2.name |
                            Ucfirst}}</span></a></strong>
                    <p style="margin-top: -5px"><b>{{ads.followers2}}</b> Followers</p>
                    <p style="margin-top: -5px">{{ads.songs2}} Songs Uploaded</p>
                    <p style="font-size: 11px;height: 35px;">{{ads.lounge2.bio.substr(0,80)}} </p>
                </div>
            </div>


            <div class="animated   slower track" style="padding-bottom: 35px;">
                <a :href="'/' + ads.musics[2].download_code">
                    <img @click="loardMusic(ads.musics[2].download_code)" :src="ads.musics[2].album_art" onerror="this.src='/thumbnails/olova.png';"></a>
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
                        <a :href="'/'+ ads.musics[2].username">
                            <span @click="getLounge(ads.musics[2].username)">{{ ads.musics[2].name | Ucfirst }}</span>
                        </a>
                    </small>
                </div>

                <p style="margin: 0px" v-if=" ads.musics[2].price == '0' ">
                    <a :href="'/' + ads.musics[2].download_code "><b @click="loardMusic(ads.musics[2].download_code)">Download</b></a>
                    <b>{{ ads.musics[2].downloads | formatNumber}}</b> downloads
                    <a :href="'/lyrics/' + ads.musics[2].download_code"><b>Lyrics</b></a>
                </p>

                <p style="margin: 0px" v-if=" ads.musics[2].price == '1' ">
                    <a :href="'/' + ads.musics[2].download_code"><b @click="loardMusic(ads.musics[2].download_code)">{{ priceCurrency.currency }}
                        {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                    <b>{{ ads.musics[2].downloads | formatNumber}}</b> Purchases
                    <a :href="'/lyrics/' + ads.musics[2].download_code"><b>Lyrics</b></a>
                </p>

            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
    import {buss} from '../../../app'
    import VueContentLoading from 'vue-content-loading';
    onload= function(){

    }
    function  _(x) { return document.getElementById(x)}
    export default {
        components:{
            VueContentLoading
        },
        data () {
            return {
                myinterval: '',
                priceCurrency:[],
                ads: [],
                show:true,
            }
        },

        beforeCreate(){
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
        },

        created(){
                this.setAds()
                var vm = this
                this.myinterval = setInterval(function () {
                    $('.track').removeClass('headShake');
                    $('.lounge').removeClass('flipInX');
                    vm.setAds()
                }, 300000);
        },


        beforeDestroy(){
            clearInterval(this.myinterval);
        },



        methods:{
            getLounge(username){
                buss.$emit('getLounge',username)
            },

            setAds(){
                var vm = this
                $.get('/api/getAdds', (val) => {
                    this.show = false
                    vm.ads = val;
                    buss.$emit('setMobileAds',val)
                    $('.lounge').addClass('flipInX');
                    $('.track').addClass('headShake');
                });
            },

            loardMusic(id){
                buss.$emit('ChangedMusic',id)
            }
        }

    }
</script>

<style scoped>
    .slower{
        animation-duration: 5s;
    }
    img {
        width: 80px;
        float: left
    }

    .link{
        cursor: pointer;
        color: #954b4b;
    }
    .link:hover{
        text-decoration: underline;
    }

    .icon_and_label {
        display: inline-block;
        padding-top: 6px
    }

    small {
        font-size: 11px;
        padding-top: 6px;
    }

    p {
        margin: -3px 0px 0px 20px;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }

</style>
