<template>
    <div>
        <div class="alert sub-container" style="width: 100%; padding: 0px; height: 400px">
            <div class="box_label">
                <h4 align="center">Recent On Playlist</h4>
            </div>
            <div style="padding:5px">

                <div v-for="(track,i) in music">
                    <router-link :to="'/' + track.download_code "><img :src="track.album_art"></router-link>
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
                            <router-link :to="'/' +track.username ">{{ track.name | Ucfirst }}</router-link>
                        </small>
                    </div>
                    <p v-if=" track.price == '0' ">
                        <router-link :to="'/' + track.download_code "><b>Download</b></router-link>
                        <b>{{track.downloads | formatNumber}}</b>
                        downloads <span @click="RemoveOnPlaylist(track.id)"><b>Remove</b></span>
                    </p>

                    <p v-if=" track.price == '1' ">
                        <router-link :to="'/' + track.download_code"><b>{{ priceCurrency.currency }} {{
                            priceCurrency.price.toFixed(2) }} Buy</b></router-link>
                        <b>{{track.downloads | formatNumber}}</b>
                        downloads <span @click="RemoveOnPlaylist(track.id)"><b>Remove</b></span>
                    </p>
                    <hr>
                </div>


            </div>
            <p v-if=" music == '' " align="center" class="nothing">You have no new playlist.</p>
        </div>

    </div>
</template>

<script>
    import {buss} from  '../../../../app'
    export default {

        data () {
            return {
                music: [],
                priceCurrency:[]
            }
        },

        created(){
            this.RecentOnPlayList()
            buss.$on('setPlaylist',()=>{
                this.RecentOnPlayList()
            })
        },

        beforeCreate(){
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
        },

        methods: {
            RecentOnPlayList(){
                $.get('/RecentOnPlayList', (response) => {
                    this.music = response
                });
            },

            RemoveOnPlaylist(id){
                $.get('/RemoveOnPlaylist/' + id, (response) => {
                    buss.$emit('setPlaylist','')
                })
            },
        }

    }
</script>

<style scoped>
    span{
        font-style: italic;
        color: #954b4b;
        font-weight: bold;
    }
    span:hover{
        text-decoration: underline;
        cursor: pointer;
    }

    h4 {
        align-content: center;
        font-weight: bold;
        color: rgb(149, 75, 75);
    }

    .box_label {
        width: 100%;
        border-bottom: 1px solid rgb(149, 75, 75);
        align-content: center;
        padding: 3px
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
