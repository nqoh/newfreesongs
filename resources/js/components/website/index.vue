<template>
    <div class="container-fluid">
        <div class="row">

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

           <!-- <div class="d-none d-xl-none d-lg-none d-md-none col-sm-block d-block col-11"
                 style="height: 100px; margin-bottom: 0px; bottom: 0px; padding: 0px; border: 1px solid red; position: fixed; z-index: 500" ref="mobile_player">
            </div>-->
        </div>

    </div>
</template>

<script>
    import desktop from './home/trending.vue'
    import tablet  from './home/tablet_trending.vue'
    import mobile  from './home/mobile_trending.vue'
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
            }
        },

        created(){
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

<style>

</style>
