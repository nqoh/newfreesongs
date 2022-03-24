<template>
    <div  style="padding: 0px 5px 0px 5px; " ref="comp">
       <!-- {{metaData}}-->
        <div v-if="show" class="d-none d-xl-none d-lg-none d-md-none col-sm-block d-block"
             style="padding: 0px; width: 95%;  bottom: 13px; position: fixed; z-index: 500" ref="mobile_player">
            <mobile_player ></mobile_player>
        </div>
         <keep-alive>
        <component :is="selectedComponent" :username="username" :id="id"  style="z-index: 0" ></component>
         </keep-alive>
        <div class="d-none d-xl-none d-lg-none d-md-none d-sm-block d-block " ref="mobile"></div>
        <div class="d-none d-xl-block d-lg-block d-md-block d-md-block d-sm-none d-none" ref="desktop"></div>
        <!-- <div style="border: 1px solid red; height: 100px"></div>-->
    </div>
</template>

<script>
    import download from './download/download.vue'
    import lounge  from './lounge/index.vue'
    import mobile_player from './download/mobile_player.vue'
    import {buss} from '../../app'
    export default {
        components:{
            download,
            lounge,
            mobile_player
        },

        data () {
            return {
                responsive: '',
                show:false,
                selectedComponent:'',
                downloadCode:this.$route.params.downloadCode,
                username:this.$route.params.username,
                id:0,
                /*metaData:[],*/
            }
        },
        beforeRouteEnter(to,from,next){
            if(true){
                buss.$emit('stratProgress','');
                next();
            }
        },

        beforeRouteLeave(to,from,next){
            if(true){
                buss.$emit('stratProgress','');
                next();
            }
        },
        created(){
            /*buss.$on('Meta',(data)=>{
                this.metaData=data;
            })*/
            if(this.username === 'za' || this.username ==='ng'){
                this.id = this.downloadCode
                this.getComponent(this.downloadCode)
            } else if(typeof this.downloadCode === 'undefined'){
                this.id =this.username
                this.getComponent(this.username)
            }else{
                $.get('/api/setDownloadComponent/'+ this.username +'/'+ this.downloadCode,(response)=>{
                    if(response === 'download'){
                        this.id = this.downloadCode
                        this.selectedComponent = 'download'
                        this.show = true
                    }else{
                        this.$router.push('/error')
                    }
                })
            }

            buss.$on('ChangedMusic',(id)=> {
                 buss.$emit('stratProgress','');
                this.id = id
                this.getComponent(id)
            });

            buss.$on('getLounge',(id)=>{
                 buss.$emit('stratProgress','');
                this.id = id
                this.getComponent(id);
                buss.$emit('setAcountType',id);
            })

            buss.$on('userLogin',()=>{
                if(this.$session.has('username')) {
                    if(this.$session.get('username') === this.id) {
                        this.$router.push('/profile/feeds')
                    }
                }
            })


        },
        /*metaInfo() {
            return {
                title: this.metaData[0].title,
                meta: [
                    //facebook
                    {property: 'og:description', content: this.metaData[0].content},
                    {property: 'og:image', content: 'http://olovamp3.com/album_art/'+
                    this.metaData[0].track.substr(0,this.metaData[0].track.length - 3) + 'jpg'},
                    {property: 'og:title', content: this.metaData[0].title},
                    {property: 'og:type', content: 'image/jpg'},
                    {property: 'og:url', content: 'https://olovamp3.com/'+this.metaData[0].download_code},
                    {property: 'og:site_name', content: 'OlovaMp3.com'},
                    {property: 'fb:app_id', content: '265391744215464'},

                    // twitter
                    {name: 'twitter:card',  content: this.metaData[0].content},
                    {name: 'twitter:site',  content: 'https://olovamp3.com/'+this.metaData[0].download_code},
                    {name: 'twitter:title', content: this.title},
                    {name: 'twitter:description', content: this.metaData[0].content},
                    {name: 'twitter:image:src', content: 'http://olovamp3.com/album_art/'+
                    this.metaData[0].track.substr(0,this.metaData[0].length - 3) + 'jpg'},
                    {name: 'twitter:creator', content: '@OlovaMp3.com'},


                    {name: 'keywords', content: 'Music'},
                    {name: 'author', content: 'Music From All Over'},
                ]
            }
        },*/
        methods:{
            getComponent(id){
                if(this.$session.has('username')) {
                    if (this.$session.get('username') === id) {
                        this.$router.push('/profile/feeds')
                    }
                }
                this.fetchComponent(id)
            },

            fetchComponent(id){
                $.get('/api/setComponent/'+id,(response)=>{
                    if(response === 'download'){
                        this.selectedComponent = 'download'
                        this.show = true
                    }else if( response === 'lounge'){
                        this.selectedComponent = 'lounge'
                        this.show = false
                    }else{
                        this.$router.push('/error')
                    }
                })
            }
        },



    }
</script>

<style>

</style>
