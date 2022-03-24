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
        
        <div class="row">

            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3" v-for="(followers,i) in followers.followers.data">
                <a :href=" '/' + followers.username "><img :src="followers.image" class="card-img" onerror="this.src='/thumbnails/newuser.gif';"></a>
                <p align="center" style="margin: 0px" ><a :href=" '/' + followers.username "><b>{{ followers.name.substr(0,8) | Ucfirst}}</b></a></p>
                <span v-if="username">
                <p style="margin: 0px 0px 5px 0px" align="center" v-if=" getFollowingId(followers.id) ">
                    <button class="btn" style="padding: 0px;"  :id="followers.username"  @click="UnFollow(followers.username)">Unfollow</button>
                </p>

                <p style="margin: 0px 0px 5px 0px" align="center" v-else>
                    <button  class="btn" style="padding: 0px;"  :id="followers.username" @click="Follow(followers.username)">Follow</button>
                </p>
                </span>
            </div>


        </div>

        <div style="clear: both; margin-top: -10px">

            <button v-if="followers.followers.current_page > 1" @click="getResults(followers.followers.current_page - 1)" class="prev"> <</button>
            <h2 v-if="followers.followers.current_page != followers.followers.last_page">{{ followers.followers.current_page }} </h2>
            <button v-if="followers.followers.current_page != followers.followers.last_page" @click="getResults(followers.followers.current_page + 1)"
                    class="next"> >
            </button>

        </div>
        <p v-if=" followers.followers.data == '' " align="center" class="nothing">You do not have any follower.</p>
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

        data () {
            return {
                followers:[],
                username:'',
                followings_id:[],
                showLoader:true,
            }
        },
        created(){
            buss.$emit('setColor','')
            this.getResults();
            this.isLogin();
            buss.$on('userLogin',()=>{
                this.isLogin();
                this.getResults();
            })
        },
        methods:{

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
                this.followings_id=[];
                $.get('/api/ProfileFollowers?page=' + page, (response) => {
                    buss.$emit('Closeloading','')
                    this.followers  = response
                    for(var i=0; i < response.followings.length; i++){
                        this.followings_id.push(response.followings[i].id)
                    }
                    this.showLoader = false
                })
            },

            getFollowingId(id){
                if(this.followings_id.includes(id)){
                    return true
                }else{
                    return false
                }
            },

            Follow(username){
                _(username).innerHTML ='<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
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
                        buss.$emit('getMemberDetails','');
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
                        buss.$emit('getMemberDetails','');
                        buss.$emit('setColor','');
                    }
                });
            },

        },
        metaInfo: {
            title: 'Followers',
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