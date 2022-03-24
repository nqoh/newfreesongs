<template>
    <div >
        <div class="alert sub-container" style=" padding: 0px;  height: 400px">
            <div class="box_label">
                <h4 align="center">Recent On Playlist</h4>
            </div>
          <div style="padding:5px">

                <div v-for="(track,i) in music">
                    <a :href="'/' + track.download_code ">
                        <img @click="ChangedMusic(track.download_code)":src="track.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
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
                 
                
                            <a v-if=" username === track.username " href="/profile/feeds"><span style="font-weight: normal;font-style: normal" >{{ track.name | Ucfirst }}</span></a>
                           
                            <a v-if=" track.username != 'unknown' && username != track.username" :href="'/' +track.username "><span style="font-weight: normal;font-style: normal" @click="getLounge(track.username)">{{ track.name | Ucfirst }}</span></a>
                        
                            <span v-if=" track.username == 'unknown'  ">{{ track.username }}</span>
                        
                        </small>
                    </div>
                    <p v-if=" track.price == '0' ">
                        <a :href="'/' + track.download_code "><b @click="ChangedMusic(track.download_code)">Download</b></a>
                        <b>{{track.downloads | formatNumber}}</b>
                        downloads <a :href="'/lyrics/'+ track.download_code">Lyrics</a>
                    </p>

                    <p v-if=" track.price == '1' ">
                        <a :href="'/' + track.download_code"><b @click="ChangedMusic(track.download_code)">{{ priceCurrency.currency }} {{
                            priceCurrency.price.toFixed(2) }} Buy</b></a>
                        <b>{{track.downloads | formatNumber}}</b>
                        downloads <a :href="'/lyrics/'+ track.download_code">Lyrics</a>
                    </p>
                    <hr>
                </div>


            </div>
            <p v-if=" music == '' " align="center" class="nothing">No new playlist.</p>
        </div>

    </div>
</template>

<script>
    import {buss} from  '../../../../app'
    export default {
        props:['id'],
        data () {
            return {
                music: [],
                priceCurrency:[],
                username:'',
            }
        },

        created(){
            this.RecentOnPlayList(this.id)
            buss.$on('setPlaylist',()=>{
                this.RecentOnPlayList()
            })
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
            buss.$on('getLounge',(id)=>{
                this.id=id
                this.RecentOnPlayList(this.id)
            })

            buss.$on('userLogin',()=>{
              this.isLogin();
            })
              this.isLogin();
        },

        methods: {
            isLogin(){
                if (this.$session.has('username')) {
                    this.username = this.$session.get('username')
                }
            },
            RecentOnPlayList(id){
                $.get('/LoungeRecentOnPlayList/'+id, (response) => {
                    this.music = response
                });
            },

            ChangedMusic(id){
                buss.$emit('ChangedMusic',id)
            },
            getLounge(id){
                buss.$emit('getLounge',id)
                this.RecentOnPlayList(id)
            }

        },

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
