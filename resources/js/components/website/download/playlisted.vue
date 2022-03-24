<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Playlisted </h1>
            <h6 align=center><router-link :to="'/' + download_code">{{trackName}}</router-link></h6>
        </div>
        <hr>

        <div class="alert sub-container" >
        <div class="row">

            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3" v-for="(member,i) in members.data">
                <router-link :to=" '/' + member.username "><img :src="member.image" onerror="this.src='/thumbnails/newuser.gif';" class="card-img"></router-link>
                <p align="center"><router-link :to=" '/' + member.username "><b>{{ member.name | Ucfirst}}</b></router-link></p>
            </div>

        </div>

        <button v-if="members.current_page > 1" @click="getResults(members.current_page - 1)" class="prev"> <</button>
        <h2 v-if="members.current_page != members.last_page">{{ members.current_page }} </h2>
        <button v-if="members.current_page != members.last_page" @click="getResults(members.current_page + 1)"
                class="next"> >
        </button>
        </div>
    </div>
</template>

<script>
    export default {

        data () {
            return {
            members:[],
            trackName:'',
            download_code:this.$route.params.id
            }
        },

        created(){
            this.getResults(1)
        },

        methods:{
            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                $.get('/api/getPlaylisted/'+this.$route.params.id+'?page=' + page, (data) => {
                    this.members   = data.playlistedMembers;
                    this.trackName = data.track;
                })
        }
    },
    
     metaInfo() {
         return {
         title: "Playlisted",
         meta: [
         
                ]
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
</style>
