<template>
    <div class="container-fluid">
        <div class="row">

            <app-render></app-render>

            <div class="d-none d-xl-block  d-lg-block  d-md-block col-md-12" ref="desktop">
               <!-- <app-desktop ></app-desktop>-->
            </div>

            <div class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:5px 5px 0px 5px;"
                 ref="mobile">
                <!--<app-mobile :getRoute="getRoute" ></app-mobile>-->
            </div>

        </div>
    </div>
</template>

<script>
    import profile from'./profile.vue'
    import {buss}  from '../../../app'
    import {funcMixins} from '../../../mixins'
    export default {
          mixins:[funcMixins],
         components:{
           appRender:profile,
         },
        data () {
            return {
                responsive: '',
            }
        },
        created(){
            buss.$emit('setColor','')
            buss.$emit('stratProgress','');
        },
        beforeRouteEnter(to, from, next){
            $.get('/api/getSessions', (sessions) => {
                if (sessions[0] !== null && sessions[1] !== null && sessions[2] !== null) {
                    next(true)
                } else {
                    next('/login')
                }
            });
        },

        beforeCreate(){
            $.get('/api/getSessions', (sessions) => {
                if (sessions[0] !== null && sessions[1] !== null && sessions[2] !== null) {
                    this.$session.destroy();
                    this.$session.start()
                    this.$session.set('id', sessions[1])
                    this.$session.set('name', sessions[0])
                    this.$session.set('username', sessions[2])
                    buss.$emit('userLogin', '')
                } else {
                    next('/login')
                }
            });
        },
        methods: {
            WidowSize() {
                if (this.$refs.desktop.clientWidth > 1 && this.responsive !== 'desktop') {
                    this.responsive = "desktop"
                    $.get('/api/setResultSession/6',()=>{

                    })
                }

                if (this.$refs.mobile.clientWidth > 1 && this.responsive !== 'mobile') {
                    this.responsive = "mobile"
                    $.get('/api/setResultSession/5',()=>{

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

</style>
