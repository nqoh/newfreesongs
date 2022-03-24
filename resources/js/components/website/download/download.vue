<template>
    <div style="padding: 7px" >
        <div  class="d-none d-xl-none d-lg-none d-md-none col-sm-block d-block"
             style="padding: 0px; width: 95%;  bottom: 13px; position: fixed; z-index: 500" ref="mobile_player">
            <mobile_player ></mobile_player>
        </div>
        <hr v-if="!show" >
        <div v-if="!show" class="sub-container d-none d-xl-none d-lg-none d-md-none d-sm-block d-block " style="width: 100%;padding: 5px">
            <small class="badge" style="margin-top: -10px ;float: right">Featured</small>
            <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="250" :height="50">
                <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                <rect x="52" y="2" rx="0" ry="0" width="70" height="3" />
                <rect x="52" y="18" rx="0" ry="0" width="55" height="3" />
                <rect x="52" y="32" rx="0" ry="0" width="65" height="3" />
                <rect x="52" y="45" rx="0" ry="0" width="85" height="3" />
            </vue-content-loading>
        </div>

        <div v-if="show">
            <hr class="d-none d-xl-none d-lg-none d-md-none d-sm-block d-block" >
        <div class="sub-container animated  slower lounge d-none d-xl-none d-lg-none d-md-none d-sm-block d-block "
             style="width: 100%;padding: 5px">
            <a :href="'/' + ads.lounge2.username">
                <img :src="ads.lounge2.image" @click="getLounge(ads.lounge2.username)" onerror="this.src='/thumbnails/newuser.gif';">
            </a>
            <div style="padding-left: 10px; ">
                <strong><a :href="'/' + ads.lounge2.username"  style=";font-size: 18px; color: rgb(149,75,75)">
                        <span @click="getLounge(ads.lounge2.username)">{{ads.lounge2.name |
                            Ucfirst}}</span></a>
                </strong> <small class="badge" style="float: right;; margin-top: -10px">Featured</small>
                <p style="margin-top: -5px"><b>{{ads.followers2}}</b> Followers</p>
                <p style="margin-top: -5px">{{ads.songs2}} Songs Uploaded</p>
                <p style="font-size: 11px;height: 35px;">{{ads.lounge2.bio.substr(0,80)}} </p>
            </div>
        </div>
        </div>
        <hr>
        <div class="sub-container ">
            <div class="d-none d-xl-block d-lg-block d-none" style="padding: 0px">
                <to_desktop :account_type="account_type"></to_desktop>
            </div>
            <div class="d-none d-xl-none d-lg-none d-md-block d-none" style="padding: 0px">
                <to_tablet :account_type="account_type"></to_tablet>
            </div>
            <div class="d-none d-xl-none d-lg-none d-md-none  d-sm-block d-block" style="padding: 0px">
                <top_mobile :account_type="account_type"></top_mobile>
            </div>
        </div>
        <hr>

        <div class="sub-container" style="height:300px; padding: 3px; margin-bottom: 10px">
            <music_div :id="id"></music_div>
        </div>
        <hr>

        <div class="row sub-container" style="padding: 0px; margin: 0px; background:transparent">
            <div class="col-xl-6- col-lg-6 col-md-6 col-sm-12 col-12 animated slower component" style="padding: 0px 1px 0px 0px ">
                <component :is="selectedComponent" :id="id"></component>
            </div>
            <div class="col-6 d-none d-xl-block d-lg-block d-md-block d-none"  style="padding:0px 0px 0px 1px">
               <Ads></Ads>
            </div>
        </div>
        <hr>


        <div v-if="!show" class="sub-container d-none d-xl-none d-lg-none d-md-none d-sm-block d-block">
            <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="250" :height="70">
                <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
            </vue-content-loading>
            <small class="badge" style="float: right;; margin-top: -10px">Featured</small>
        </div>


        <div  v-if="show" class="d-none d-xl-none d-lg-none d-md-none d-sm-block d-block">
            <div   class="sub-container  animated   slower track ">
                <a :href="'/' + ads.musics[0].download_code">
                    <img :src="ads.musics[0].album_art" @click="loardNewMusic(ads.musics[0].download_code)" onerror="this.src='/thumbnails/olova.png';">
                </a>
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
                    <a :href="'/' + ads.musics[0].download_code"><b @click="loardNewMusic(ads.musics[0].download_code)">Download</b></a>
                    <b>{{ ads.musics[0].downloads | formatNumber }}</b> downloads
                    <a  :href="'/lyrics/' + ads.musics[0].download_code"><b>Lyrics</b></a>
                </p>

                <p style="margin: 0px" v-if=" ads.musics[0].price == '1' ">
                    <a :href="'/' + ads.musics[0].download_code">
                        <b @click="loardNewMusic(ads.musics[0].download_code)">
                        {{ priceCurrency.currency }}
                        {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                    <b>{{ ads.musics[0].downloads | formatNumber }}</b> Purchases
                    <a :href="'/lyrics/' + ads.musics[0].download_code"><b>Lyrics</b></a>
                </p>
                <small class="badge" style="float: right;; margin-top: -10px">Featured</small>
            </div>
            <app-modal></app-modal>
        </div>
       <hr v-if="show2" class="d-none d-xl-none d-lg-none d-md-none d-sm-block d-block">
      <app-login v-if="show2" id="login" class="d-none d-xl-none d-lg-none d-md-block d-sm-block d-block"></app-login>
       <hr v-if="!show2">
    </div>
</template>

<script>
    import {buss}  from '../../../app'
    import top_mobile from './top_bar_mobile.vue'
    import to_tablet from './top_bar_tablet.vue'
    import to_desktop from './top_bar_desktop.vue'
    import music_div from './music_div.vue'
    import Ads from './ads_dektop.vue'
    import comments from './comments.vue'
    import lyrics from  './lyrics.vue'
    import mobile_player from './mobile_player.vue'
    import login from '../login/mobile_login.vue'
    import VueContentLoading from 'vue-content-loading';
    import modal from '../../website/modal/modal.vue'

    export default {
        props:['id'],
        components:{
            top_mobile,
            to_tablet,
            to_desktop,
            music_div,
            Ads,
            comments,
            lyrics,
            mobile_player,
            appLogin: login,
            VueContentLoading,
            appModal: modal,

        },
        data () {
            return {
                account_type:'',
                myinterval: '',
                ads: [],
                priceCurrency:[],
                show:false,
                show2:true,
                selectedComponent:'comments'
            }
        },



        created(){
            buss.$emit('setColor','')
            buss.$on('ChangedMusic',(id)=> {
                this.id = id
            });

            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
            
            $.get('/api/getMemberDetails',(response)=>{
                this.account_type = response.member.account_type;
            });

            buss.$on('account_type',(vl)=>{
                $.get('/api/getMemberDetails',(response)=>{
                    this.account_type = response.member.account_type;
                });
            })

            buss.$emit('MobileLogin',()=>{
                this.show2 = false
            });

            if(this.$session.has('username') && this.$session.has('id')){
                this.show2 = false
            }


            buss.$on('selectComponent',(vl)=>{
                $('.component').addClass('fadeIn');
                setTimeout(function () {
                    $('.component').removeClass('fadeIn');
                },2200)
                this.selectedComponent=vl
            });


            buss.$on('setMobileAds',(ads)=>{
               this.show = true
               this.ads  = ads
            })

        },

        mounted(){
            window.scrollBy(0, 100)
        },


        methods:{

            loardNewMusic(id){
                window.scrollTo(0,0)
                buss.$emit('ChangedMusic',id)
                buss.$emit('stratProgress','');
            },

            getLounge(username){
                buss.$emit('getLounge',username)
                buss.$emit('stratProgress','');
            },

            signUp(){
                window.location='/signup'
            }
        },

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

    small {
        font-size: 11px;
        padding-top: 6px;
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
