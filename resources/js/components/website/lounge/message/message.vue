<template>
    <div>
<!--
        <div class="row" style="padding:10px 0px 0px 11%;">
            <p align="center" style="color:red; font-size: 20px">{{ error }}</p>
            <div class="form-group col-8" align="center" style="padding: 0px; margin: 0px">
                <textarea class="form-control msg" v-if="error == '' " v-model="messageInput"  style="padding: 5px;"></textarea>
            </div>
            <div class="col-4" style="padding: 0px;">
                <button class="btn" v-if="error == '' "   @click="SendMessage()">Send</button>
            </div>
        </div>-->

        <div class="row" style="padding:10px 0px 0px 11%;">
            <div class="form-group col-8" align="center" style="padding: 0px; margin: 0px">
                <textarea class="form-control msg"  v-model="messageInput"  style="padding: 5px;"></textarea>
            </div>
            <div class="col-4" style="padding: 0px;">
                <button class="btn"   @click="SendMessage()">Send</button>
            </div>
        </div>


        <div class="msgBox" id="wrap" @scroll="LoardMoreMessages(num)">

            <div  v-for="message in messages">

                <div class="col-10"  style="float:left" v-if="message.from_member_id != myId">
                    <div><span> {{message.created_at | formatDate}} </span></div>
                    <blockquote class="alert" v-html="message.message" ></blockquote>
                </div>


                <div class="col-10" style="float:right" v-if="message.from_member_id == myId">
                    <div><span> {{message.created_at | formatDate}} </span></div>
                    <blockquote class="alert" v-html="message.message" ></blockquote>
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
        props:['id'],
        data () {
            return {
                num:10,
                messageInput:'',
                error:'',
                messages:[],
                myId: this.$session.get('id')
            }
        },
        created(){
            this.getResults();
            buss.$on('followMember',()=>{
                this.getResults();
            })
            buss.$emit('setColor','')
        },
        methods: {
            SendMessage(){
                if(this.messageInput !== ""){
                    var formData = new FormData();
                    formData.append('username', this.id);
                    formData.append('message', this.messageInput);
                    var vm = this
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-Token': $('meta[name=_token]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "/send/lounge/message",
                        data: formData,
                        type: 'POST',
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (response) {
                            if (response === "Ok") {
                                vm.messageInput=""
                                vm.getResults(0);
                            }
                        }
                    });
                }
            },
            LoardMoreMessages(num) {
                var element = document.getElementById('wrap');
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    $.get('/api/readLoungeMessages/'+ this.id +'/'+num , (data) => {
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
                $.get('/api/readLoungeMessages/'+ this.id +'/'+0 , (data) => {
                    this.messages = data.messages
                    this.error = data.error
                });
            },

        }

    }
</script>

<style scoped>
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
