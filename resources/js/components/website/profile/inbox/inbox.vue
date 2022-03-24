<template>
    <div>
        <div class="row" style="padding:5px; align-content: center">

            <div class="alert col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" v-for="(message,i) in messages.data">
                <div class="msgBox">
                    <a :href="'/' + message.username">
                        <img :src="message.image" onerror="this.src='/thumbnails/newuser.gif';"></a>
                    <a :href="'/' + message.username ">
                        <p class="name">{{message.name | Ucfirst }} {{ message.surname | Ucfirst}} <span v-if="unread[i+1] != 0" style="background-color:#00c851; color:#eed5b7;margin-left: 0px" class="badge">{{unread[i+1]}}</span></p>
                    </a>
                    <p class="msg" v-if=" message.message.length > 33 ">{{ message.message.substr(0,33) }}...</p>
                    <p class="msg" v-if=" message.message.length <= 33 ">{{ message.message.substr(0,36) }}</p>
                    <p class="notF">
                        <span class="offlinemsg" v-if=" login[i] == 0 "></span>
                        <span class="onlinemsg" v-if=" login[i] == 1 "></span>
                        <router-link :to="'/profile/inbox/messages/'+ message.id  ">View</router-link>
                        <span style="opacity: 0.6">{{message.created_at | formatDate }}</span>

                        <span class="link" style="margin-left:3%" @click="deleteMessage(message.from_member_id,message.to_member_id)">Delete</span>
                    </p>
                </div>
            </div>

        </div>

        <button v-if="messages.current_page > 1" @click="getResults(messages.current_page - 1)" class="prev"> <</button>
        <h2 v-if="messages.current_page != messages.last_page">{{ messages.current_page }} </h2>
        <button v-if="messages.current_page != messages.last_page" @click="getResults(messages.current_page + 1)"
                class="next"> >
        </button>

        <p v-if=" messages.data == '' " align="center" class="nothing">You have no new message.</p>

    </div>
</template>

<script>
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                messages: [],
                unread:[],
                login:[],

            }
        },

        created(){
            buss.$emit('setColor','')
            this.getResults();
        },

        methods: {

            deleteMessage(from,to){
                $.get('/api/DeleteMessage/'+from+'/'+to , (response)=>{
                    if(response === 'Ok') {
                        this.getResults()
                    }
                })
            },

            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                $.get('/api/getMessages?page=' + page, (response) => {
                        buss.$emit('Closeloading','')
                        this.messages = response.message,
                        this.unread = response.unread
                        this.login = response.login
                })
            }
        },

        metaInfo: {
            title: 'Inbox',
        }


    }
</script>

<style scoped>


    .offlinemsg {

        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='40' width='40'%3E%3Ccircle cx='20' cy='20' r='8' stroke='%23d19275' stroke-width='1' fill='%23aeaeae' /%3E%3C/svg%3E ");
        display: inline-block;
        width: 30px;
        height: 30px;
        background-size: 100%;
       float: left;
    }

    .onlinemsg {

        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='40' width='40'%3E%3Ccircle cx='20' cy='20' r='8' stroke='%23d19275' stroke-width='1' fill='%2300c851' /%3E%3C/svg%3E ");
        display: inline-block;
        width: 30px;
        height: 30px;
        background-size: 100%;
        float: left;
    }

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
    .alert {
        padding: 3px;
    }

    img {
        width: 80px;
        float: left;
    }

    .msg {
        font-size: 15px;
        margin: 0px;
        opacity: .6;
    }

    .name {
        margin: 0px;
        color: rgb(149, 75, 75);
        font-size: 20px;
    }

    .msgBox {
        box-shadow: 0px 0px 1px 0px rgb(149, 75, 75);
        padding: 2px;
    }

    .notF {
        font-size: 15px;
        margin: 0px;
        align-content: center;
    }

    p span {
        font-size: 12px;
        margin-left: 2%;
        margin-right: 5%;
    }

    .unread {
        font-size: 12px;
        opacity: .6;
        margin-left: 10%;
    }
</style>
