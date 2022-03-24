<template>
    <div style="width: 100%; padding: 5px">
        <app-header></app-header>
        <div style="padding-left: -3%; background-color:  #eed5b7;">
            <app-navs></app-navs></div>
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
    import header from '../../website/profile/const_components/mobile_header.vue'
    import navs from '../../website/profile/const_components/mobile_navigation.vue'
    import freeM from './music/free.vue'
    import paidM from './music/paid.vue'
    export default {
        components: {
            appHeader: header,
            appNavs:navs
        },
        props: ['getRoute'],
        data () {
            return {
                currentComponent: '',
            }
        },

        created(){
            this.setRoute(this.getRoute)
        },
        watch: {
            getRoute: function (val) {
               this.setRoute(val)
            }
        },

        methods: {
            setRoute(val){
                if (val === "/profile/free/music") {
                    this.currentComponent = freeM
                }
                if (val === "/profile/paid/music") {
                    this.currentComponent = paidM
                }
            }


        }
    }
</script>

<style>

</style>
