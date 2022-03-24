<template>
<div>
    <div style="padding: 5px 5px 5px 21px; height: auto;
    margin-bottom: 5px;">
      <div class="row" style="padding: 0px; margin-right:0px">
            <div class="col-xl-8 col-lg-8 co-md-12 co-sm-12 col-12" style="padding: 0px; ">

              <div class="d-none d-xl-block  d-lg-block  d-md-block col-md-12" style="padding: 0px">
                    <app-header :id="id" ></app-header>
                    <div align="center" style="padding-left: 20%; background-color:  #eed5b7;">
                    <app-navigation :id="id"></app-navigation></div>
              </div>

              <div class="d-none d-xl-none d-lg-none d-md-none d-sm-block d-block col-sm-12" style="padding: 0px">
                  <mobile-header :id="id"></mobile-header>
                  <div align="center" style="align-content: center;">
                  <mobile-navs :id="id"></mobile-navs></div>
              </div>

              <div class="alert sub-container" style="padding: 0px;  margin: 3px 0px 0px 0px; min-height: 536px" >
                  <keep-alive>
                    <component v-if="showOffline" :is="selectedComponent" :id="id"></component>
                  </keep-alive>
                  
                   <div v-if="!showOffline" align="center" style="margin-top: 30px">
                    <div  class="wired-network"></div>
                        <p style="color:rgb(149, 75, 75); font-size: 20px">Network disconnected</p>
                    </div>
                    
                     <!--  <div  v-if="show" align="center" style="margin-top:60px" class="loader loader--style5" title="Please wait...">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="0" width="4" height="10" fill="#b05f3c">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="0" width="4" height="10" fill="#b05f3c">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="20" y="0" width="4" height="10" fill="#b05f3c">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.4s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>
                    </div>-->
              </div>

        </div>


            <div style="padding: 0px 0px 0px 4px;" class="d-none d-xl-block d-lg-block d-md-none col-4">
                <div class="col-12"  style="padding:0px;">
                  <app-Playlist :id="id"></app-Playlist>
                </div>
                <div class="col-12" style="padding:0px; margin-top: 3px">
                   <app-followers :id="id"></app-followers>
                </div>
            </div>
        </div>



    </div>
    <app-login v-if="show2" id="login" class="d-none d-xl-none d-lg-none d-md-block d-sm-block d-block"></app-login>
    <hr v-if="show2">
</div>
</template>

<script>

    import {buss} from '../../../app'
    import header from './const_components/heade.vue'
    import recentFollowers from './const_components/recent_followeres.vue'
    import recentPlaylist from './const_components/recent_on_playlist.vue'
    import navigations from './const_components/navigation.vue'
    import mobile_nav from './const_components/mobile_navigation.vue'
    import mobile_header from './const_components/mobile_header.vue'
    import freeMusic from './music/free.vue'
    import PaidMusic from  './music/paid.vue'
    import allMusic from './music/all.vue'
    import Playlist from './playlist/playlist.vue'
    import followers from './Follow/followers.vue'
    import followings from './Follow/following.vue'
    import messages from './message/message.vue'
    import login from '../login/mobile_login.vue'
    export default {
        components:{
          appHeader:header,
          appFollowers:recentFollowers,
          appPlaylist:recentPlaylist,
          appNavigation:navigations,
          mobileNavs:mobile_nav,
          appLogin: login,
          mobileHeader:mobile_header,
          freeMusic,
          PaidMusic,
          allMusic,
          Playlist,
          followers,
          followings,
          messages
        },
        props:['id'],
        data () {
            return {
                show2:true,
                user:[],
                account_type:'',
                selectedComponent:'allMusic',
                show:false,
                showOffline:true
            }
        },
        created(){
        
            buss.$on('Online',()=>{
                this.showOffline = true
            })
            buss.$on('Offline',()=>{
                this.showOffline = false
            })
        
            $.get('/api/getLoungeMemberDetails/'+this.id,(response)=>{
                 buss.$emit('closeProgress','');
                this.user = response.member
                this.account_type = response.member.account_type;
                if(response.member.account_type === 'fan'){
                    this.selectedComponent = 'Playlist'
                }
            });
            buss.$on('Openloading',(data)=>{
                this.show = true
            })
            buss.$on('Closeloading',(data)=>{
                this.show = false
            })
            buss.$emit('MobileLogin',()=>{
                this.show2 = false
            });

            if(this.$session.has('username') && this.$session.has('id')){
                this.show2 = false
            }

            if(this.$session.get('username') === this.id){
                this.$router.push('/profile/feeds')
            }
            buss.$on('freeMusic',()=>{
                this.selectedComponent = 'freeMusic'
            });

            buss.$on('PaidMusic',()=>{
                this.selectedComponent = 'PaidMusic'
            })

            buss.$on('allMusic',()=>{
                this.selectedComponent = 'allMusic'
            })

            buss.$on('Playlist', ()=>{
                this.selectedComponent = 'Playlist'
            })

            buss.$on('followers', ()=>{
                this.selectedComponent = 'followers'
            })

            buss.$on('followings', ()=>{
                this.selectedComponent = 'followings'
            })

            buss.$on('messages', ()=>{
                this.selectedComponent = 'messages'
            })
        },
    }
</script>

<style scoped>
svg path,
    svg rect {
        fill: #b05f3c;
    }

</style>
