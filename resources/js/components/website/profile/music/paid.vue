<template>
    <div style="margin:10px">


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

        <div v-if="!show" class="row">

            <div class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding-bottom: 27px" v-for="(track,i) in music.data">
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
                        <a :href="'/' + track.username" append>{{ track.name | Ucfirst }}</a>
                    </small>
                </div>
                <p><a :href="'/' + track.download_code"><b>{{ priceCurrency.currency }} {{ priceCurrency.price.toFixed(2) }} Buy</b></a> <b>{{track.downloads | formatNumber }}</b>
                    downloads <router-link :to="'/profile/edit/music/' + track.download_code" ><b>Edit</b></router-link>
                </p>
            </div>

        </div>
        <div style="clear: both">


            <button v-if="music.current_page > 1" @click="getResults(music.current_page - 1)" class="prev"> <</button>
            <h2 v-if="music.current_page != music.last_page">{{ music.current_page }} </h2>
            <button v-if="music.current_page != music.last_page" @click="getResults(music.current_page + 1)"
                    class="next"> >  </button>
        </div>

        <div class="d-none d-xl-block  d-lg-block  d-md-block col-md-12" ref="desktop">
            <!-- <app-desktop ></app-desktop>-->
        </div>

        <div class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:5px 5px 0px 5px;"
             ref="mobile">
            <!--<app-mobile :getRoute="getRoute" ></app-mobile>-->
        </div>
        <p v-if=" music.data == '' " align="center" class="nothing">You have no new paid music.</p>
    </div>
</template>

<script>
    import {buss} from '../../../../app'
    import VueContentLoading from 'vue-content-loading';
    export default {
     components:{
            VueContentLoading
        },
        data () {
            return {
                music: [],
                priceCurrency:[],
                show:true
            }
        },
        created(){
            buss.$emit('Closeloading','')
            buss.$emit('setColor','')
            this.getResults();
        },
           beforeCreate(){
               $.get('/api/getPriceCurrency', (response) => {
                   this.priceCurrency = response
               });
           },
        methods: {
            getResults(page) {
                this.show = true
                if (typeof page === 'undefined') {
                    page = 1;
                }
                 this.show=true
                $.get('/api/getPaidMusic?page=' + page, (data) => {
                    buss.$emit('Closeloading','')
                    this.music = data
                    this.show = false
                })
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
            }

        },

        metaInfo: {
            title: 'Paid Music',
        },

        mounted(){
            this.WidowSize();
            window.addEventListener('resize', this.WidowSize)
        }

    }
</script>

<style scoped>

    .prev {
        width: 30px;
        float: left;
        color: rgb(149, 75, 75);
        background: #eed5b7;
        margin-top: 12px;
        cursor: pointer;
        outline: none;
        padding: 0px;
        align-content: center;
        height: 30px;
        border: 1px solid rgb(149, 75, 75);
    }

    .next {
        width: 30px;
        float: right;
        color: rgb(149, 75, 75);
        background: #eed5b7;
        cursor: pointer;
        outline: none;
        margin-top: -25px;
        padding: 0px;
        align-content: center;
        height: 30px;
        border: 1px solid rgb(149, 75, 75);
    }

    h2 {
        font-weight: bold;
        font-size: 22px;
        margin-top: 25px;
        color: rgb(149, 75, 75);
        margin-left: 50%;
    }

    h4 {
        align-content: center;
        font-weight: bold;
        color: rgb(149, 75, 75);
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
