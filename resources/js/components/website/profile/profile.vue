<template>
<div style="padding: 0px 20px 0px 20px; height: auto;
    margin-bottom: 5px;" class="col-12">

    <div class="row" style="padding: 0px;">
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12" style="padding: 0px">

                <div class="d-none d-xl-block  d-lg-block  d-md-block col-md-12" style="padding: 0px">
                    <top_header/>
                    <div align="center" style="padding-left: 10%; background-color:  #eed5b7;">
                    <navigations></navigations></div>
                </div>

                <div class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding: 0px">
                    <mobile-header></mobile-header>
                    <mobile-navs></mobile-navs>
                </div>

                <div class="alert sub-container" >
                  
                        <!-- <div  v-if="show" align="center" style="margin-top:60px" class="loader loader&#45;&#45;style5" title="Please wait...">
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
                    
                    <router-view v-if="showOffline"></router-view>
                    
                  <div v-if="!showOffline" align="center" style="margin-top: 30px">
                    <div  class="wired-network"></div>
                        <p style="color:rgb(149, 75, 75); font-size: 20px">Network disconnected</p>
                    </div>
                  
                </div>


            </div>


            <div class="d-none d-xl-block d-lg-block d-md-none  col-4">
                <div class="col-12" style="padding:0px;margin-top: 0px">
                    <plylist></plylist>
                </div>
                <div class="col-12" style="padding:0px; margin-top: 3px">
                    <followers></followers>
                </div>
            </div>
        </div>

</div>
</template>

<script>
    import top_header from './const_components/heade.vue'
    import mobile_navs from './const_components/mobile_navigation.vue'
    import mobile_header from  './const_components/mobile_header.vue'
    import recent_playlist from './const_components/recent_on_playlist.vue'
    import recent_followers from './const_components/recent_followeres.vue'
    import navigations from './const_components/navigation.vue'
    import free_music from './music/free.vue'
    import {buss}  from '../../../app'
    export default {
          components:{
              top_header,
              plylist:recent_playlist,
              followers:recent_followers,
              navigations,
              mobileNavs:mobile_navs,
              mobileHeader:mobile_header,
              freeMusic:free_music
          },

        beforeUpdate(){
              buss.$emit('changeRoute',this.$route.fullPath)
        },

        data () {
            return {
                selectedComponent:'freeMusic',
                show:true,
                showOffline:true
            }
        },
        created(){
             buss.$on('Openloading',(data)=>{
                this.show = true
            })
            buss.$on('Closeloading',(data)=>{
                this.show = false
            })
            
             buss.$on('Online',()=>{
                this.showOffline = true
            })
            buss.$on('Offline',()=>{
                this.showOffline = false
            })
            
            buss.$emit('setColor','')
          //  this.$router.push('/profile/feeds')
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
 .alert{
     width: 100%;
     margin-top: 3px;
     padding: 15px;
     border:none;
     height: auto;
     min-height: 533px;
 }
    .col-4{
        padding:0px 0px 0px 3px;
        width: 100%;
        height: 20px;
    }
</style>
