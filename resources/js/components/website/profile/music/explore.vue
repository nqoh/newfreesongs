<template>
    <div style="margin:10px">

<div v-if="showOffline">
    
        <div class="row" id="wrap" @scroll="LoardMoreMusic(num)" >

       
                <div v-if="show" v-for="x in 6"  class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding-bottom: 27px">
                    <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="200" :height="80" style="float:right">
                        <rect x="0" y="0" rx="0" ry="0" width="50" height="50" />
                        <rect x="52" y="4" rx="0" ry="0" width="75" height="3" />
                        <rect x="52" y="22" rx="0" ry="0" width="65" height="3" />
                        <rect x="52" y="40" rx="0" ry="0" width="55" height="3" />
                        <rect x="0" y="58" rx="0" ry="0" width="115" height="3" />
                    </vue-content-loading>
                </div>
        



            <div v-if="!show" class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding-bottom: 27px" v-for="track in music">
                <a :href="'/' + track.download_code "><img :src="track.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
                <div class="icon_and_label">
                    <div class="icon"></div>
                    <small>{{ track.track.substr(0,27) }}</small>
                </div>
                <br>
                <div class="icon_and_label">
                    <div class="size"></div>
                    <small> {{ (track.size / 1000000).toFixed(2) }} Mb | {{ track.duration }} Min</small>
                </div>
                <br>
                <div class="icon_and_label">
                    <div class="by"></div>
                    <small><b>By :</b>
                        <a :href="'/' +track.username">{{ track.name | Ucfirst }}&nbsp;&nbsp;|&nbsp;
                        <span style="opacity: .4;font-size: 12px; color: black">{{track.created_at | formatDate}}</span></a>
                    </small>
                </div>


                <p v-if=" track.price == '0' ">
                    <a :href="'/' + track.download_code "><b>Download</b></a>
                    <b>{{ track.downloads  | formatNumber}}</b> downloads
                    <a :href="'/lyrics/' + track.download_code"><b>Lyrics</b></a>
                </p>

                <p v-if=" track.price == '1' ">
                    <a :href="'/' + track.download_code"><b>{{ priceCurrency.currency }}
                        {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                    <b>{{ track.downloads }}</b> Purchases
                    <a :href="'/lyrics/' + track.download_code"><b>Lyrics</b></a>
                </p>

            </div>

        </div>


        <div class="d-none d-xl-block  d-lg-block  d-md-block col-md-12" ref="desktop">
            <!-- <app-desktop ></app-desktop>-->
        </div>

        <div class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:5px 5px 0px 5px;"
             ref="mobile">
            <!--<app-mobile :getRoute="getRoute" ></app-mobile>-->
        </div>

    </div>
    
    <div v-if="!showOffline" align="center" class="alert sub-container">
            <div  class="wired-network"></div>
             <p style="color:rgb(149, 75, 75); font-size: 20px">Network disconnected</p>
          </div>
          
          
    </div>
</template>

<script>
    import {buss} from '../../../../app'
    import VueContentLoading from 'vue-content-loading';
    export default {
         components: {
            VueContentLoading
        },
        data () {
            return {
                music: [],
                num:10,
                responsive: '',
                priceCurrency:[],
                showOffline:true,
                show:true
            }
        },

        created(){
            buss.$emit('Closeloading','')
            buss.$emit('changeBtn','');
            buss.$on('Online',()=>{
                this.showOffline = true
            })
            buss.$on('Offline',()=>{
                this.showOffline = false
            })
            
            buss.$emit('setColor','')
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
            this.getResults();
        },

        methods: {
            getResults() {
                $.get('/api/getExploreMusic/'+ 0, (data) => {
                    for(var i=0 ; i < data.length ; i++){
                        this.music.push(data[i])
                        this.show = false
                    }

                })
            },

            LoardMoreMusic(num){
                var element = document.getElementById('wrap');
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    $.get('/api/getExploreMusic/' + num, (data) => {
                        if(data.length > 0) {
                            for (var i = 0; i < data.length; i++) {
                                this.music.push(data[i])
                            }
                            this.num += 10
                        }
                    })
                }
            },

            WidowSize() {
                if (this.$refs.desktop.clientWidth > 1 && this.responsive !== 'desktop') {
                    this.responsive = "desktop"
                    $.get('/api/setResultSession/6',()=>{
                        this.getResults();
                    })
                }

                if (this.$refs.mobile.clientWidth > 1 && this.responsive !== 'mobile') {
                    this.responsive = "mobile"
                    $.get('/api/setResultSession/5',()=>{
                        this.getResults();
                    })
                }
            },
            metaInfo() {
            return {
                title: 'Explore New Music',
            }
            },

        },

        mounted(){
            this.WidowSize();
            window.addEventListener('resize', this.WidowSize)
        }

    }
</script>

<style scoped>
  .wired-network {
        display: inline-block;
        width: 84px;
        height: 84px;
        background-image: url("data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='80.000000pt' height='80.000000pt' viewBox='0 0 80.000000 80.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cg transform='translate(0.000000,80.000000) scale(0.100000,-0.100000)'%0Afill='%23d19275' stroke='%23b05f3c'%3E%3Cpath d='M320 725 c-11 -13 -10 -51 5 -223 10 -114 22 -217 26 -230 11 -28 64%0A-31 77 -5 12 23 48 434 40 455 -9 22 -130 25 -148 3z'/%3E%3Cpath d='M506 623 c-3 -3 -6 -23 -6 -44 0 -34 3 -38 38 -50 55 -17 112 -48%0A155 -82 l39 -30 30 30 31 31 -34 31 c-57 52 -234 132 -253 114z'/%3E%3Cpath d='M188 596 c-62 -25 -144 -81 -162 -108 -9 -14 -6 -23 15 -44 l26 -26%0A67 46 c36 25 84 51 106 57 39 12 40 14 40 56 0 52 -9 53 -92 19z'/%3E%3Cpath d='M496 413 c-3 -4 -6 -23 -6 -43 0 -32 6 -40 46 -69 l46 -32 29 27 c16%0A15 29 31 29 35 0 19 -132 93 -144 82z'/%3E%3Cpath d='M223 380 c-28 -16 -55 -35 -59 -41 -3 -6 7 -24 23 -41 l30 -29 36 23%0Ac33 21 36 27 37 71 0 26 -3 47 -7 47 -5 0 -31 -14 -60 -30z'/%3E%3Cpath d='M343 195 c-47 -33 -36 -103 21 -130 32 -15 36 -15 61 1 51 33 59 81%0A20 119 -28 28 -70 32 -102 10z'/%3E%3C/g%3E%3C/svg%3E");
        background-size: 100%;
    }

    h2 {
        font-weight: bold;
        font-size: 22px;
        margin-top: 25px;
        color: rgb(149, 75, 75);
        margin-left: 48.5%;
    }

    h4 {
        align-content: center;
        font-weight: bold;
        color: rgb(149, 75, 75);
    }
    .row{
        height: 480px;
        overflow: auto;
    }
    .row::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    .row::-webkit-scrollbar-thumb {
        background-color: rgb(149, 75, 75);
    }

    .row::-webkit-scrollbar-track {
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

    small {
        font-size: 11px;
        padding-top: 6px;
    }

    p {
        margin: -3px 0px 0px 0px;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }


</style>
