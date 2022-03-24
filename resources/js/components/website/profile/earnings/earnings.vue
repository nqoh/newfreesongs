<template>
    <div style="margin:0px">
        <span style=" margin: -10px auto; font-size:13px">You will paid on the 7th if you reach R500.00 or more. Make sure your <router-link to="/profile/payment/settings">payment details</router-link> are correct</span><br style="line-height: 1">
        <span style="float:right; margin-right: 5%;  font-size:13px"><b>Total Sales :
           {{ priceCurrency.currency }} {{ ((totalDownloads * priceCurrency.price) / 100 * 5).toFixed(2) }}</b></span><br style="line-height:.1">
        <div class="row">

            <div class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding-bottom: 20px" v-for="(track,i) in music.data">
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
                <p>
                    <a :href="'/' + track.download_code">
                        <b>{{ priceCurrency.currency }} {{ priceCurrency.price.toFixed(2) }}</b>
                    </a>&nbsp;&nbsp;<b>{{track.purchases}}</b>
                    Purchases  &nbsp;&nbsp;{{ priceCurrency.currency }} {{ ((track.purchases * priceCurrency.price) / 100 * 5).toFixed(2) }}
                </p>

                <p style="margin: 0px">
                   bogiyo.com/{{username}}/{{track.download_code}} &nbsp;&nbsp;&nbsp;<span style="color:rgb(149, 75, 75);font-size: 17px">Promo Link</span>
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
        <p v-if=" music.data == '' " align="center" class="nothing">You have no new earnings.</p>
    </div>
</template>

<script>
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                music: [],
                username:this.$session.get('username'),
                totalDownloads:0,
                priceCurrency:[]
            }
        },
        created(){
            buss.$emit('setColor','')
            this.getResults();
            this.getTotalPrice();
        },
        beforeCreate(){
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
        },
        methods: {

            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                $.get('/api/getEarnings/?page=' + page, (data) => {
                    buss.$emit('Closeloading','')
                    this.music = data.music
                    this.totalDownloads = data.totalPurchases
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

        mounted(){
            this.WidowSize();
            window.addEventListener('resize', this.WidowSize)
        },

        metaInfo: {
            title: 'Earnings',
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
