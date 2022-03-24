<template>
    <div>
        <!--<vue-topprogress id="progress" ref="topProgress" style="height:5px;background-color:rgb(176, 95, 60);border: 1px solid #eed5b7"></vue-topprogress>-->
        <app-headerr></app-headerr>
        <router-view></router-view>
        <app-footerr></app-footerr>
        <app-modal></app-modal>
        <offline @detected-condition="handleConnectivityChange"></offline>
    </div>
</template>

<script>
    import header  from './website/header/header.vue'
    import footer  from './website/footer/footer.vue'
    import modal   from  './website/modal/modal.vue'
    import offline from 'v-offline'
  /*  import { vueTopprogress } from 'vue-top-progress'*/
    import {buss} from '../app'
    function _(x) {return document.getElementById(x)}
    export default {
        components: {
            appHeaderr: header,
            appFooterr: footer,
            appModal: modal,
           /* vueTopprogress,*/
            offline
        },
        data () {
            return {}
        },

       created(){
           buss.$on('stratProgress',(data)=>{
               this.$refs.topProgress.start()
             });

           buss.$on('closeProgress',(data)=>{
               this.$refs.topProgress.done()
           })
         },
         
        methods:{
            handleConnectivityChange(status) {
                if(status){
                   buss.$emit('Online','')
                }else{
                    buss.$emit('Offline','')
                }
            }
        },
        
         mounted () {
                _('loader').style.display='none';
                _('loader2').style.display='none';
         },

    }
</script>

<style scoped>
 #state{
     background:#eed5b7;
     border: 1px solid #d19275;
     padding:10px;
     display: none;
     right: 0px;
     bottom: 5px;
     color: #954b4b;
     position: fixed;
 }
</style>
