<template>
    <div class="container-fluid">
        <div class="row" v-if="showOffline">
            <!--      <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>-->
            <div class="d-none d-xl-block  d-lg-block  col-md-12" ref="desktop" style="padding:5px 5px 0px 5px;">
                <app-desktop></app-desktop>
            </div>

            <div class="d-none d-xl-none d-lg-none d-md-none d-md-block col-sm-12" style="padding:5px 5px 0px 5px;"
                 ref="tablet">
                <app-tablet></app-tablet>
            </div>

            <div class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:5px 5px 0px 5px;"
                 ref="mobile">
                <app-mobile></app-mobile>
            </div>

        </div>
        
        <hr  v-if="!showOffline">
        
         <div v-if="!showOffline" align="center"  class="sub-container col-12">
                    <div  class="wired-network"></div>
                        <p style="color:rgb(149, 75, 75); font-size: 20px">Network disconnected</p>
                    </div>
                    
     
        <hr  v-if="!showOffline">
        
    </div>
</template>

<script>
    import desktop from './home/mostDownload_desktop.vue'
    import tablet  from './home/mostDownload_tablet.vue'
    import mobile  from './home/mostDownload_mobile.vue'
    import {buss}  from '../../app'
    export default {
        components: {
            appTablet: tablet,
            appMobile: mobile,
            appDesktop: desktop,

        },
        data () {
            return {
                responsive: '',
                myinterval: '',
                ads: [],
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

            
            this.setAds();
            var vm = this

            this.myinterval = setInterval(function () {
                $('.track').removeClass('headShake')
                $('.lounge').removeClass('flipInX')
                vm.setAds()
            }, 300000);

        },

        beforeCreate(){
            $.get('/api/getSessions', (sessions) => {
                if (sessions[0] !== null && sessions[1] !== null && sessions[2] !== null) {
                    vm.$session.start()
                    vm.$session.set('id',sessions[1])
                    vm.$session.set('name',sessions[0])
                    vm.$session.set('username',sessions[2])
                    buss.$emit('userLogin','')
                    buss.$emit('account_type','')
                }
            });
        },

        beforeDestroy(){
            clearInterval(this.myinterval);
        },


        methods: {
            setAds(){
                var vm = this
                $.get('/api/getAdds', (val) => {
                    vm.ads = val;
                    $('.lounge').addClass('flipInX')
                    $('.track').addClass('headShake')
                    buss.$emit('reSetAds', this.ads)
                });
            },

            WidowSize() {
                if (this.$refs.desktop.clientWidth > 1 && this.responsive !== 'desktop') {
                    $.get('/api/setResultSession/10', () => {
                        buss.$emit('Desktop', this.ads)
                        this.responsive = "desktop"
                    })
                }
                if (this.$refs.tablet.clientWidth > 1 && this.responsive !== 'tablet') {
                    $.get('/api/setResultSession/5', () => {
                        buss.$emit('Tablet', this.ads)
                        this.responsive = "tablet"
                    })
                }
                if (this.$refs.mobile.clientWidth > 1 && this.responsive !== 'mobile') {
                    $.get('/api/setResultSession/5', () => {
                        buss.$emit('Mobile', this.ads)
                        this.responsive = "mobile"
                    })
                }
            }
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
</style>
