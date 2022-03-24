<template>
    <div style="padding: 3px;">
        <div class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding: 0px; float: left;">
        <a  :href="'/' + music.download_code "><img :src="music.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
        <div class="icon_and_label">
            <div class="icon"></div>
            <small>{{ music.track.substr(0,27) }}</small>
        </div>
        <br>
        <div class="icon_and_label box2">
            <div class="size"></div>
            <small> {{ (music.size / 1000000).toFixed(2) }} Mb | {{ music.duration }} Min </small>
        </div>
        <br>
        <div class="icon_and_label box2">
            <div class="by"></div>
            <small><b>By :</b>
                <span v-if=" music.username == 'unknown'  ">{{ music.name }}</span>
                <a v-else :href="'/' + music.username ">
                    <span @click="getLounge(music.username)">{{ music.name }}</span>
                </a>
            </small>
        </div>

        <p v-if=" music.price == '0' " style="margin-left: 10px">
            <form v-if=" music.price == '0' "   action="/download.php" style="float: left; margin-left: 13px; margin-top: -13px; padding: 0px" method="POST">
                <input type="hidden"  name='song' :value="music.track">
                <input type="hidden"  name='code' :value="music.download_code">
                <button type="submit" @click="getMusic(music.id)" class="btn" >Download</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </form>
            <span v-if=" music.price == '0' ">
            <b>{{ music.downloads | formatNumber }}</b> downloads&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span v-if=" music.price == '0' "  @click="setComponent()" class="link"><b>{{ type }}</b></span>
       </p>

            <form v-if=" music.price == '1' " id="purchaseForm"  action="/download.php" style="float: left; margin-left: 13px; margin-top: -13px; padding: 0px" method="POST">
                <input type="hidden" id="song" name='song' value="">
                <input type="hidden" id="download_code" name='code' value="">&nbsp;&nbsp;
            </form>

        <p v-if=" music.price == '1' " style="margin-left: 10px">
            <button class="btn" @click="PruchaseMusic()" >{{ priceCurrency.currency }}
                {{ priceCurrency.price.toFixed(2) }} Buy </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>{{ music.downloads }}</b> Purchases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span @click="setComponent()" class="link"><b>{{ type }}</b></span>
        </p>
        </div>

        <div class="d-none d-xl-block d-lg-block d-md-block d-none col-xl-6 col-md-6 col-lg-6" style="padding: 0px;float: right; width: 100%;">
             <player :music="music"></player>
        </div>

      <!--<div class="d-none d-xl-none d-lg-none d-md-none col-sm-block d-block col-11"
             style="height: 50px; clear: both; border: 1px solid red;">
            <mobile_player :music="music"></mobile_player>
        </div>-->


        <hr style="clear: both;">

        <div align="center">
           <p align="center"  style="width:230px;height: 23px;clear: left;  margin: 0px; ">

                <a   :href="fb + music.download_code">
                    <img   src="/thumbnails/fbshare.png" style="width: 70px; height: 20px" width="50" height="20" title="Share on facebook">
                </a>

                <a    :href="whatsapp + music.download_code ">
                    <img   src="/thumbnails/download.jpg" style="margin-left: 3px; width: 70px; height: 20px" width="50" height="20" title="Share on Whatsapp">
                </a>

                <a   :href="twitter + music.download_code">
                    <img   src="/thumbnails/twitter.png" style="margin-left: 3px; width: 70px; height: 20px" width="50" height="20" title="Share on twitter">
                </a>

            </p>

            <p style="margin:0px ; padding:0px ">
                <a v-if="Playlisted.length >= 1" :href="'/' + Playlisted[0].username">
                    <span class="link"  @click="getLounge(Playlisted[0].username)">
                        {{ Playlisted[0].name }} </span>
                </a>

                <span v-if="totalPlaylisted >=  3 ">,</span>
                <span v-if="totalPlaylisted ==  2 ">and</span>

                <a v-if="Playlisted.length >= 2" :href="'/' + Playlisted[1].username">
                    <span class="link"  @click="getLounge(Playlisted[1].username)">
                        {{ Playlisted[1].name }} </span>
                </a>

                <span v-if="totalPlaylisted > 2 ">and</span>

                <a :href="'/playlisted/' + music.download_code ">
                    <span v-if="totalPlaylisted > 2 " class="link">{{ totalPlaylisted - 2 }} other</span>
                </a>

                <span>added this song on playlist</span>

            </p>

            <span v-if="login">

              <p v-if="!show"  style="margin:0px ; padding:0px">
                <span class="link" style="font-size:20px" @click="AddPlaylist(music.id)">Add to playlist</span>
              </p>

              <p v-if="show"  style="margin:0px ; padding:0px">
                <span class="link" style="font-size:20px" @click="RemoveOnPlaylist(music.id)">Remove from playlist</span>
              </p>

            </span>

            <p v-else style="margin:0px ; padding:0px">
                <span class="d-none d-xl-block d-lg-block d-md-block d-none link"
                      style="font-size:20px" @click="logIn()" >Add to playlist</span>
                <span class="d-none d-xl-none d-lg-none d-md-none d-sm-block d-block">
                    <a href="#login">Add to playlist</a></span>
            </p>

        </div>
    </div>
</template>

<script>
    function _(x) {return document.getElementById(x)}
    import player from './player_div.vue'
    import mobile_player from './mobile_player.vue'
    import {buss} from '../../../app'
    export default {
        components:{
            player,
            mobile_player
        },
        props:['id'],
        data () {
            return {
                music:'',
                priceCurrency:[],
                totalPlaylisted:0,
                Playlisted:[],
                memberId:0,
                show:false,
                login:false,
                comment_lyrics:'comments',
                type:'Lyrics',
                twitter:'http://twitter.com/share?url=https://www.bogiyo.com/',
                whatsapp:'whatsapp://send?text=https://bogiyo.com/',
                fb:'http://www.facebook.com/sharer.php?u=https://www.bogiyo.com/',
                currency: '',
                currency_symbol:'',
                country:'',
                price: '',
            }
        },
        


        created(){

            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
                
                if(response.currency === "R"){
                    this.country = "ZA"
                    this.currency = "ZAR"
                    this.currency_symbol = response.currency
                    this.price = response.price.toFixed(2)
                }
                if(response.currency === "$"){
                    this.country = ""
                    this.currency = "USD"
                    this.currency_symbol = response.currency
                    this.price = response.price.toFixed(2)
                }

                if(response.currency === "₦"){
                    this.country = "NG"
                    this.currency = "NGN"
                    this.currency_symbol = response.currency
                    this.price = response.price.toFixed(2)
                }
            });

            buss.$on('ChangedMusic',(id)=>{
                this.id=id
                this.getMusic(id);
            });

            buss.$on('userLogin',()=>{
                this.isLogin();
                this.DoIPurchased();
                this.getSongOnPlaylisted();
            });

            this.isLogin();
            this.getMusic(this.id);
        },


        
        
        methods:{
            PruchaseMusic(){
                var download  = this.id;
                if(this.$session.has('email')){
                    var email = this.$session.get('email');
                }else{
                    var email = 'info@bogiyo.com'
                }
                getpaidSetup(
                    {
                        PBFPubKey: "FLWPUBK-f6ff010217667e2802f5b7baac6f17f9-X",
                        customer_email: email,
                        amount: this.price,
                        custom_logo:"https://bogiyo.com/thumbnails/logonje.jpeg",
                        custom_title:"Bogiyo",
                        custom_description:"Start to purchase music now",
                        country:this.country,
                        payment_method:"card",
                        currency:this.currency,
                        txref: "Purchase Music" ,
                        onclose: function() {},
                        callback: function(response) {
                            if(response.tx.chargeResponse ==='00' || response.tx.chargeResponse === '0') {
                                alert('please contactus')
                            } else {
                                var formdata = new FormData();
                                formdata.append("downloadCode", download)
                                $.ajaxSetup({
                                    headers: {
                                        'X-CSRF-Token': $('meta[name=_token]').attr('content')
                                    }
                                });
                                var vm= this
                                $.ajax({
                                    url: "/api/pruchaseMusic",
                                    data: formdata,
                                    type: 'POST',
                                    contentType: false,
                                    cache: false,
                                    processData: false,
                                    success: function (response) {
                                        _('song').value = response
                                        _('download_code').value = this.id
                                        _('purchaseForm').submit();
                                        vm.music.price = 0
                                        vm.music.downloads = vm.music.downloads + 1
                                        buss.$emit('LoardTrack','true');
                                    }
                                });
                            }
                        }
                    }

                );
            },
            isLogin(){
                if(this.$session.has('username') && this.$session.has('id')){
                    this.login = true
                    this.memberId = this.$session.get('id')
                }else{
                    this.login = false
                }
            },

            getLounge(username){
                buss.$emit('getLounge',username)
            },
            getMusic(id){
                $.get('/api/getEditMusic/' +id, (response) => {
                    if(response) {
                        this.music = response
                        if(response.price === 1){
                            this.DoIPurchased();
                                buss.$emit('closeProgress','');
                        }else{
                            buss.$emit('closeProgress','');
                        }
                       /* buss.$emit('Meta',this.metaTag)*/
                        buss.$emit('player',this.music)
                        buss.$emit('lyrics',this.music.lyrics);
                        this.getSongOnPlaylisted();
                    }
                });
            },

            DoIPurchased(){
                $.get('/api/DoIPurchased/'+this.id, (response)=>{
                    if(response === 'yes'){
                       this.music.price = 0
                       buss.$emit('LoardTrack','true');

                    }
                })
            },

            AddPlaylist(id){
               $.get('/api/addSongOnPlaylist/'+id,(response)=>{
                   if(response ===  'Ok'){
                      this.getSongOnPlaylisted();
                   }
               });
            },

            RemoveOnPlaylist(id){
                $.get('/RemoveOnPlaylist/'+id, (response)=>{
                    this.getSongOnPlaylisted();
                })
            },

            getSongOnPlaylisted(){
                $.get('/api/getSongOnPlaylisted/'+ this.music.id ,(response)=>{
                    this.Playlisted = response.playlisted
                    this.totalPlaylisted = response.total
                    if(response.memberPlaylisted === "true"){
                        this.show = true
                    }else{
                        this.show = false
                    }
                })
            },
            logIn(){
                buss.$emit('login', 'Log In')
                $("[data-toggle=modal]").trigger({type: "click"});
            },

            setComponent(){
                if(this.comment_lyrics === 'comments'){
                    this.comment_lyrics = 'lyrics'
                    this.type='Comments'
                    buss.$emit('selectComponent',this.comment_lyrics)
                }else{
                    this.comment_lyrics='comments'
                    this.type='Lyrics'
                    buss.$emit('selectComponent',this.comment_lyrics)
                }
            }
        }

    }
</script>

<style scoped>
    .link{
        cursor: pointer;
        color: #954b4b;
    }
    .link:hover{
        text-decoration: underline;
    }
    .box2{
        margin-top: 20px;
    }
    img {
        width: 120px;
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


    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }

</style>
