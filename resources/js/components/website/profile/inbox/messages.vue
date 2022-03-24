<template>
    <div>
        <div  align="center" style="padding:0px 0px 0px 0px;align-content: center;margin:0px;border-bottom:1px solid rgb(149, 75, 75); ">
            <span class="back" @click="back">Back</span>
           <!-- <p class="notF">
            <span align="center" class="offlinemsg" v-if=" active == 0 "></span>
            <span align="center" class="onlinemsg" v-if=" active == 1 "></span>
            </p>-->
            <p align="center" class="name">
                {{name | Ucfirst}} {{ surname | Ucfirst}}
            </p>
        </div>

        <!--<div class="row" style="padding:5px 0px 0px 11%;">
            <p align="center" style="color:red; font-size: 20px">{{ error }}</p>
            <div class="form-group col-8" align="center" style="padding: 0px; margin: 0px">
                <input class="form-control msg" v-if="error == '' " v-model="messageInput" @keyup.enter="SendMessage()" style="padding: 0px;">
            </div>
            <div class="col-4" style="padding: 0px;">
                <button class="btn" v-if="error == '' "   @click="SendMessage()">Send</button>
            </div>
        </div>-->

        <div class="row" style="padding:5px 0px 0px 11%;">

            <div class="form-group col-8" align="center" style="padding: 0px; margin: 0px">
                <input class="form-control msg"  v-model="messageInput" @keyup.enter="SendMessage()" style="padding: 0px;">
            </div>
            <div class="col-4" style="padding: 0px;">
                <button class="btn"   @click="SendMessage()">Send</button>
            </div>
        </div>

        <div class="msgBox" id="wrap" @scroll="LoardMoreMessages(num)">

            <div  v-for="message in messages">
                <div class="col-10"  style="float:left;" v-if="message.from_member_id != myId">
                    <div><span> {{message.created_at | formatDate}} </span></div>
                    <p class="alert" v-html="message.message"></p>
                </div>


                <div class="col-10" style="float:right;" v-if="message.from_member_id == myId">
                    <div><span> {{message.created_at | formatDate}} </span></div>
                    <p class="alert" v-html="message.message" ></p>
                </div>
            </div>

        </div>


    </div>

</template>

<script>
    function _(x) {
        return document.getElementById(x)
    }
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                name:'',
                surname:'',
                num:10,
                messageInput:'',
                error:'',
                messages:[],
                myId: this.$session.get('id'),
                active:0
            }
        },
        created(){
            this.getResults();
            buss.$emit('setColor','')
        },
        methods: {
            back(){
              this.$router.push('/profile/inbox')
            },
            SendMessage(){
                if(this.messageInput !== ""){
                    var formData = new FormData();
                    formData.append('from_member_id', this.$route.params.id);
                    formData.append('message', this.messageInput);
                    var vm = this
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-Token': $('meta[name=_token]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "/send/message",
                        data: formData,
                        type: 'POST',
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (response) {
                            if (response === "Ok") {
                                vm.messageInput=""
                                buss.$emit('setColor','')
                                vm.getResults(0);
                            }
                        }
                    });
                }
            },
            LoardMoreMessages(num) {
                var element = document.getElementById('wrap');
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    $.get('/api/readMessages/'+ this.$route.params.id +'/'+num , (data) => {
                        if(data.messages.length > 0) {
                            for (var i = 0; i < data.messages.length; i++) {
                                this.messages.push(data.messages[i])
                            }
                            this.num += 10
                        }
                    });
                }
            },

            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                $.get('/api/readMessages/'+ this.$route.params.id +'/'+0 , (data) => {
                     buss.$emit('Closeloading','')
                    this.messages = data.messages
                    this.error = data.error
                    this.name = data.name
                    this.surname = data.surname
                    this.active = data.active
                });
            },

        },

        metaInfo: {
            title: 'Messages',
        }

    }
</script>

<style scoped>
    .notF {
        font-size: 15px;
        margin: 0px;
        align-content: center;
    }

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

    .back{
        float: left;
        font-size: 15px;
        color:rgb(149, 75, 75);
        cursor: pointer;
    }
    .name{
        font-size: 20px;
        color:rgb(149, 75, 75);
        margin: 0px;
        font-weight: bold;
        align-content: center;
    }
    .msg {
        height: 50px;
        margin: 0px;
    }

    .btn {
        height: 50px;
        margin-left: 2px
    }

    .alert {
        box-shadow: 0px 0px 2px 0px rgb(149, 75, 75);
        padding: 5px;
        background-color: #d19275;
        color:white;
    }

    .col-10 {
        padding: 2px 0px 0px 0px;
    }

    .col-10 div {
        margin-left: 10px;
        opacity: .6;
    }

    .msgBox {
        height: 430px;
        width: 100%;
        padding: 3px;
        overflow: auto;
    }
    .msgBox::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    .msgBox::-webkit-scrollbar-thumb {
        background-color: rgb(149, 75, 75);
    }
    .msgBox::-webkit-scrollbar-track {
        /*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        background-color: transparent;
    }
</style>
