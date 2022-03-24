<template>
    <div>
        
        <div  v-if="showLoader" class="row"   >
            <div v-for="x in 18"  class="col-xl-2 col-md-2 col-lg-2 col-sm-3 col-3" style="padding-bottom: 27px;">
                <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="60" :height="80" style="float:right">
                    <rect x="0" y="0" rx="2" ry="2" width="60" height="60" />
                    <rect x="12" y="64" rx="0" ry="0" width="35" height="3" />
                    <rect x="11" y="70" rx="0" ry="4" width="37" height="12" />
                </vue-content-loading>
            </div>
        </div>
        
        <div v-if="!showLoader" >
        <div class="row" style="padding: 5px">

            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3" v-for="(following,i) in followings.followings.data">

                <a :href=" '/' + following.username " v-if=" username != following.username ">
                    <img :src="following.image" onerror="this.src='/thumbnails/newuser.gif';" @click="getLounge(following.username)" class="card-img"></a>
                <a href="/profile/feeds" v-else><img :src="following.image" onerror="this.src='/thumbnails/newuser.gif';" class="card-img"></a>

                <p align="center" v-if=" username != following.username "><a :href=" '/' + following.username ">
                    <b @click="getLounge(following.username)">{{ following.name.substr(0,8) | Ucfirst}}</b></a></p>
                <p align="center" v-else style="margin: 0px;padding: 0px"><a href="/profile/feeds"><b>{{ following.name.substr(0,8) | Ucfirst}}</b></a></p>

                <span v-if="username">
                   <span v-if="username == following.username">
                   </span>

                   <span v-else>
                <p align="center" style="margin: -16px 0px 5px 0px" v-if=" getFollowingId(following.id) ">
                    <button class="btn" style="padding: 0px;" :id="following.username" @click="UnFollow(following.username)">Unfollow</button>
                </p>

                <p align="center" style="margin: -16px 0px 5px 0px" v-else>
                    <button class="btn" style="padding: 0px;" :id="following.username" @click="Follow(following.username)">Follow</button>
                </p>
                       </span>
               </span>

                <p align="center" style="margin-top: -16px;" v-else>
                    <span class="d-none d-xl-block d-lg-block d-md-block d-md-block d-sm-none d-none link" @click="Login()" >Follow</span>
                    <a href="#login" class="d-none d-xl-none d-lg-none d-md-none d-sm-block d-block link" >Follow</a>
                </p>
            </div>

        </div>
        <div style="clear: both; margin-top: -15px">

            <button v-if="followings.followings.current_page > 1" @click="getResults( followings.followings.current_page - 1)" class="prev"> <
            </button>
            <h2 v-if="followings.followings.current_page != followings.followings.last_page">{{ followings.followings.current_page }} </h2>
            <button v-if="followings.followings.current_page != followings.followings.last_page" @click="getResults( followings.followings.current_page + 1)"
                    class="next"> >
            </button>

        </div>
        <p v-if=" followings.followings.data == '' " align="center" class="nothing">No new followings.</p>
    </div>
    </div>
</template>

<script>
    function _(x) {return document.getElementById(x)}
    import {buss} from '../../../../app'
    import VueContentLoading from 'vue-content-loading';
    export default {
        components:{
            VueContentLoading
        },

        props:['id'],
        data () {
            return {
                followings: [],
                username:'',
                followings_id:[],
                showLoader:true,
            }
        },

        created(){
            this.getResults();
            this.isLogin();
            buss.$on('userLogin',()=>{
                this.isLogin();
                this.getResults();
            })
            buss.$emit('setColor','')
        },
        methods: {

            Login(){
                buss.$emit('login', 'Log In')
                $("[data-toggle=modal]").trigger({type: "click"});
            },


            Follow(username){
                _(username).innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
                $.get('/api/LoungeFollowMember/'+username , (response)=>{
                    if(response === 'Ok') {
                        _(username).innerHTML = 'Unfollow'
                        this.getResults();
                        buss.$emit('getLoungeDetails','');
                        buss.$emit('setColor','');
                    }
                })
            },

            UnFollow(username){
                _(username).innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
                $.get('/api/LoungeUnfollowMember/'+username , (response)=>{
                    if(response === 'Ok') {
                        _(username).innerHTML = 'Follow'
                        this.getResults();
                        buss.$emit('getLoungeDetails','');
                        buss.$emit('setColor','');
                    }
                });
            },

            getFollowingId(id){
                if(this.followings_id.includes(id)){
                    return true
                }else{
                    return false
                }
            },

            isLogin(){
                if (this.$session.has('username')) {
                    this.username = this.$session.get('username')
                }
            },

            getResults(page) {
                this.showLoader = true
                if (typeof page === 'undefined') {
                    page = 1;
                }
                this.followings_id=[]
                $.get('/api/LoungeFollowings/'+this.id+'?page=' + page, (response) => {
                    buss.$emit('Closeloading','')
                    this.followings  = response

                    for(var i=0; i < response.LogedInFollowings.length; i++){
                        this.followings_id.push(response.LogedInFollowings[i].id)
                    }
                    this.showLoader = false
                })
            },

            getLounge(id){
                buss.$emit('getLounge', id)
                this.id=id
                this.getResults();
            }

        }
    }
</script>

<style scoped>

    .prev {
        width: 30px;
        float: left;
        color: rgb(149, 75, 75);
        background: #eed5b7;
        margin-top: 12px;
        cursor: pointer;
        outline: none;
        padding: 0px;
        align-content: center;
        height: 30px;
        border: 1px solid rgb(149, 75, 75);
    }

    .next {
        width: 30px;
        float: right;
        color: rgb(149, 75, 75);
        background: #eed5b7;
        cursor: pointer;
        outline: none;
        margin-top: -25px;
        padding: 0px;
        align-content: center;
        height: 30px;
        border: 1px solid rgb(149, 75, 75);
    }

    h2 {
        font-weight: bold;
        font-size: 22px;
        margin-top: 25px;
        color: rgb(149, 75, 75);
        margin-left: 48.5%;
    }

    .link{
        cursor: pointer;
        color: #954b4b;
    }
    .link:hover{
        text-decoration: underline;
    }
</style>
