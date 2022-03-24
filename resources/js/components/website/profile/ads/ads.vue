<template>
    <div >
        <p v-if="music.data.length != '0'" style="font-size: 20px" align="center" class="nothing">Choose a content to promote</p><br>
        <div class="row">
            <div v-if=" lounge != '' " class="col-xl-6 col-md-6 col-lg-6"  >
                <router-link to="/profile/timeline">
                    <img :src="lounge.image" onerror="this.src='/thumbnails/newuser.gif';"></router-link>
                <div style="padding-left: 10px;">
                    <strong>
                        <router-link :to="'/profile/feeds'" style=";font-size: 18px; color: rgb(149,75,75)">
                            {{lounge.name | Ucfirst}}
                        </router-link>
                    </strong>
                    <p style="margin-top: -5px"><b>{{followers}}</b> Followers</p>
                    <p style="margin-top: -5px">{{totalSongs}} Songs Uploaded</p>
                    <span style="margin-top: -5px" class="promote" @click="StartPromte( lounge.id )">Promote</span>
                    <p>
                        <b>Promote your lounge for only {{ priceCurrency.currency }} {{ priceCurrency.price.toFixed(2) }}</b>
                    </p>
                </div>

            </div>

            <div v-if="music.data.length != '0'" class="col-xl-6 col-md-6 col-lg-6" style="padding-bottom: 27px" v-for="(track,i) in music.data">
                <a href="#"><img :src="track.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
                <div class="icon_and_label">
                    <div class="icon"></div>
                    <small>{{ track.track.substr(0,27) }}</small>
                </div>
                <br>
                <div class="icon_and_label">
                    <div class="size"></div>
                    <small> {{ (track.size / 1000000).toFixed(2) }} Mb | {{ track.duration }} Min</small>
                </div>
                <br style="line-height: 0.1">
                <span class="promote" @click="StartPromte( track.id )">Promote</span>
                <p>
                    <b>Promote this track for only {{ priceCurrency.currency }} {{ priceCurrency.price.toFixed(2) }}</b>
                </p>

            </div>



        </div>
        <div style="clear: both">
            <button v-if="music.current_page > 1" @click="getResults(music.current_page - 1)" class="prev"> <</button>
            <h2 v-if="music.current_page != music.last_page">{{ music.current_page }} </h2>
            <button v-if="music.current_page != music.last_page" @click="getResults(music.current_page + 1)"
                    class="next"> >
            </button>
        </div>
        <span v-if="lounge == ''">
        <p v-if="music.data.length == '0'"  align="center" class="nothing">You have no new music to promote.</p>
        </span>
    </div>
</template>

<script>
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                music: [],
                priceCurrency: [],
                followers: 0,
                totalSongs: 0,
                lounge:''
            }
        },
        beforeCreate(){
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
        },

        created(){
            buss.$emit('setColor','')
            this.getResults();
        },

        methods: {
            StartPromte(id){
                this.$router.push('/profile/ads/promote/'+id)
            },

            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                $.get('/api/getMusicToPromote?page=' + page, (musics) => {
                    buss.$emit('Closeloading','')
                    this.music = musics.music
                    this.lounge = musics.lounge
                    this.followers = musics.followers
                    this.totalSongs = musics.Totalsongs
                });

            },

        },
        metaInfo: {
            title: 'Promote',
        }
    }
</script>

<style scoped>
    .promote{
        font-size:23px;
        cursor: pointer;
        color:#954b4b;
        margin: -20px 0px 0px 10px;
    }
    .promote:hover{
        text-decoration: underline;
    }
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
