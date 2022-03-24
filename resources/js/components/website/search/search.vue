<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Search Results </h1>
        </div>
        <hr>
        <div  class="sub-container">

      <ul  class="nav nav-tabs" style="padding: 0px; ">

          <li class="nav-item">
              <a href="#all" class="nav-link active" role="tab" data-toggle="tab"><span>All</span></a>
          </li>

          <li class="nav-item">
              <a href="#music" class="nav-link" role="tab" data-toggle="tab"><span>Music</span></a>
          </li>

          <li class="nav-item">
              <a href="#lounge" class="nav-link" role="tab" data-toggle="tab"><span>Lounge</span></a>
          </li>

      </ul>

        <div class="tab-content">
            <div role="tabpanel" @scroll="LoardMoreSearch(num,'all')" class="tab-pane active" id="all">
                
                 <div v-if="showAds"  class="row" style="margin:10px" >
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
                
                <div v-if="!showAds">
                <div v-if="music != '' " style="margin-left: 5%;">

                <div v-for="track in music" class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" style="padding-bottom: 15px;  float: left">

                   <a :href="'/' + track.download_code"><img :src="track.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
                    <div class="icon_and_label">
                        <div class="icon"></div>
                        <small>{{ track.track.substr(0,25) }}</small>
                    </div>
                    <br>
                    <div class="icon_and_label">
                        <div class="size"></div>
                        <small>{{ ( track.size / 1000000).toFixed(2) }} Mb | {{ track.duration }}
                            Min
                        </small>
                    </div>
                    <br>
                    <div class="icon_and_label">
                        <div class="by"></div>
                        <small><b>By :</b>
                            <a :href="'/'+ track.username">{{ track.name | Ucfirst }}
                            </a>
                        </small>
                    </div>

                    <p style="margin: 0px" v-if=" track.price == '0' "><a :href="'/' + track.download_code "><b>Download</b></a>
                        <b>{{ track.downloads }}</b> downloads
                        <a :href="'/lyrics/' + track.download_code"><b>Lyrics</b></a>
                    </p>

                    <p style="margin: 0px" v-if=" track.price == '1' ">
                        <a :href="'/' + track.download_code"><b>{{ priceCurrency.currency }}
                            {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                        <b>{{ track.downloads }}</b> Purchases
                        <a :href="'/lyrics/' + track.download_code"><b>Lyrics</b></a>
                    </p>

                </div>
                    </div>
                <div v-if="lounge !='' " style="clear:both; margin-left: 5%;">
                <div v-for="profile in lounge" class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"  style="padding-bottom: 15px; float:left; ">
                    <a :href="'/' + profile.username"> <img :src="profile.image" onerror="this.src='/thumbnails/newuser.gif';"></a>
                    <div style="padding-left: 10px; ">
                        <strong><a :href="'/' + profile.username"  style=";font-size: 18px; color: rgb(149,75,75)">{{profile.name |
                            Ucfirst}}</a></strong>
                        <p style="font-size: 11px;">{{profile.bio.substr(0,37)}} </p>
                        <span v-for="total in CountFollowers">
                            <p v-if="total.id == profile.id " style="margin: 0px;"><b>{{total.total}}</b> Followers</p>
                        </span>
                        <p style="margin-top: -5px">{{profile.account_type | Ucfirst}}</p>

                    </div>
                </div>
                </div>
                <span v-if="lounge == '' ">
                    <span v-if="music == '' ">
                        <p align="center" style="font-style: inherit; font-size: 20px">Result Not Found</p>
                    </span>
                </span>
                 </div>
            </div>
            
            

            <div role="tabpanel" class="tab-pane" @scroll="LoardMoreSearch(num,'music')" id="music">

                <div v-if="music != '' " style="margin-left: 5%;">

                    <div v-for="track in music" class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" style="padding-bottom: 15px;  float: left">

                        <a :href="'/' + track.download_code"><img :src="track.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
                        <div class="icon_and_label">
                            <div class="icon"></div>
                            <small>{{ track.track.substr(0,25) }}</small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="size"></div>
                            <small>{{ ( track.size / 1000000).toFixed(2) }} Mb | {{ track.duration }}
                                Min
                            </small>
                        </div>
                        <br>
                        <div class="icon_and_label">
                            <div class="by"></div>
                            <small><b>By :</b>
                                <a :href="'/'+ track.username">{{ track.name | Ucfirst }}
                                </a>
                            </small>
                        </div>

                        <p style="margin: 0px" v-if=" track.price == '0' "><a :href="'/' + track.download_code "><b>Download</b></a>
                            <b>{{ track.downloads }}</b> downloads
                            <a :href="'/lyrics/' + track.download_code"><b>Lyrics</b></a>
                        </p>

                        <p style="margin: 0px" v-if=" track.price == '1' ">
                            <a :href="'/' + track.download_code"><b>{{ priceCurrency.currency }}
                                {{ priceCurrency.price.toFixed(2) }} Buy</b></a>
                            <b>{{ track.downloads }}</b> Purchases
                            <a :href="'/lyrics/' + track.download_code"><b>Lyrics</b></a>
                        </p>

                    </div>
                </div>
                <p v-else align="center" style="font-style: inherit; font-size: 20px">Result Not Found</p>
            </div>

            <div role="tabpanel" class="tab-pane" @scroll="LoardMoreSearch(num,'lounge')" id="lounge">
                <div v-if="lounge !='' " style="margin-left: 5%;">
                    <div v-for="profile in lounge" class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" style="padding-bottom: 15px;  float:left; ">
                        <a :href="'/' + profile.username"> <img :src="profile.image" onerror="this.src='/thumbnails/newuser.gif';"></a>
                        <div style="padding-left: 10px; ">
                            <strong><a :href="'/' + profile.username"  style=";font-size: 18px; color: rgb(149,75,75)">{{profile.name |
                                Ucfirst}}</a></strong>
                            <p style="font-size: 11px;">{{profile.bio.substr(0,37)}} </p>
                            <span v-for="total in CountFollowers">
                            <p v-if="total.id == profile.id " style="margin: 0px;"><b>{{total.total}}</b> Followers</p>
                        </span>
                            <p style="margin-top: -5px">{{profile.account_type | Ucfirst}}</p>
                        </div>
                    </div>
                </div>
                <p v-else align="center" style="font-style: inherit; font-size: 20px">Result Not Found</p>
            </div>
        </div>
        </div>
        <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
             <hr v-if="show">
            <app-login id="#login" v-if="show"></app-login>
        </div>
        <hr>
    </div>
</template>

<script>
    import login from  '../../website/login/mobile_login.vue'
    import {buss} from '../../../app'
    import VueContentLoading from 'vue-content-loading';
    export default {
        components: {
            appLogin: login,
            VueContentLoading
        },
        props:['id'],
        data () {
            return {
              show:true,
              music:[],
              lounge:[],
              CountFollowers:[],
              num:15,
              priceCurrency:[],
              search:'',
              showAds:true
            }
        },

        mounted(){
            this.getResults(this.id);
            this.search = this.id;
        },

        created(){
            buss.$emit('MobileLogin',()=>{
                this.show = true
            });
            if(this.$session.has('username') && this.$session.has('id')){
                this.show = false
            }
            buss.$emit('setColor','')
            this.getResults(this.$route.params.id);
            this.search = this.$route.params.id;
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            })
        },

        methods:{

            LoardMoreSearch(num,element) {
                var element = document.getElementById(element);
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    $.get('/api/search/'+ this.search +'/'+num , (data) => {
                        if(data.music.length > 0 || data.lounge.length > 0) {
                            for (var i = 0; i < data.music.length; i++) {
                                this.music.push(data.music[i])
                            }
                            for (var i = 0; i < data.lounge.length; i++) {
                                this.lounge.push(data.lounge[i])
                            }
                            this.num += 15
                        }
                    });
                }
            },

            getResults(result){
                this.showAds = true
                $.get('/api/search/'+ result +'/'+ 0 , (data) => {
                  this.music  = data.music
                  this.lounge = data.lounge
                  this.CountFollowers = data.totalF
                  this.showAds = false
                })
            }
        },
        metaInfo: {
            title: 'Search',
        }
    }
</script>

<style scoped>

    .tab-pane::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    .tab-pane::-webkit-scrollbar-thumb {
        background-color: rgb(149, 75, 75);
    }
    .tab-pane::-webkit-scrollbar-track {
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
        margin: -3px 0px 0px 20px;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }

    .tab-pane{
        overflow: auto;
        max-height: 536px;
        padding: 5px;
    }
  .nav-item {
      padding:0px;
      width: 32%;
      float: left;
      margin-left: 2px;
      border: 1px solid #d19275;
  }
  .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
      background-color: #d19275;
      color: #eed5b7;
      border: none;
      text-align: center;
      border-radius: 0px;
  }
  .nav-tabs{
      border: none;
      margin: 0px;
      padding: 0px;
  }
  .nav-tabs .nav-link:hover{
      border:none;
  }
  .nav-item a{
      font-size: 20px;
      text-align: center;

  }
</style>
