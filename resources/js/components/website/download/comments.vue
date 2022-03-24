<template>
    <div style="background: #eed5b7;height: 766px; padding:0px" class="alert">
        <div class="top_label alert  col-xl-12 col-md-12 col-lg-12">
            <h5 align="center">{{size}} Comments</h5>
        </div>
        <div class="comment_box" id="wrap" @scroll="LoardMoreComments(num)">
            <div v-if="comments !='' " v-for="(comment,i) in comments">

                <div class="col-10" v-if=" i %= '2' " style="float:right;" >
                    <p class="alert" style="min-height:30px; margin: 5px 0px 0px 0px; padding: 1px">
                        <a :href="'/' + comment.username"><img :src="comment.image" onerror="this.src='/thumbnails/newuser.gif';" style="float: right" class="card-img"></a>
                        &nbsp;<span style="float: right; opacity: 1;font-size:15px" v-html="comment.comment"></span> <br style="line-height:0.1">
                        &nbsp;<span style="float: right;margin-right: 5px;"> {{comment.created_at | formatDate}} </span>
                        &nbsp;<span  v-if=" comment.member_id == member_id " @click="DeleteComment(comment.id)" class="link" style="opacity: 1;margin-right: 5px; float: right;">Delete</span>
                        <a :href="'/' + comment.username" class="link" style="opacity: 1;float: left; margin-left:5px">{{comment.name}}</a>
                    </p>
                </div>

                <div class="col-10" v-else style="float:left;" >
                    <p class="alert" style="min-height:30px; margin: 5px 0px 0px 0px; padding: 1px">
                        <a :href="'/' + comment.username"><img :src="comment.image" onerror="this.src='/thumbnails/newuser.gif';" style="float: left" class="card-img "></a>
                        &nbsp;<span style="opacity: 1;font-size:15px;" v-html="comment.comment"></span> <br style="line-height:0.1">
                        &nbsp;<span> {{comment.created_at | formatDate}} </span>
                        &nbsp;<span v-if=" comment.member_id == member_id  " @click="DeleteComment(comment.id)" class="link" style="opacity: 1">Delete</span>
                        <a  :href="'/' + comment.username" class="link" style="opacity: 1;float: right; margin-right:10px">{{comment.name}}</a>
                    </p>
                </div>


                <!--  <div class="col-10" style="float:right" >
                      <div><span> {{comment.created_at | formatDate}} </span></div>
                      <p class="alert">
                          {{comment.comment}}
                      </p>
                  </div>
              </div>-->
            </div>
        </div>
        <div  class="row" style="padding:20px 0px 0px 10%;">
            <img :src="image" class="card-img img-thumbnail" onerror="this.src='/thumbnails/newuser.gif';">
            <div class="form-group col-xl-7 col-lg-7 col-md-6 col-sm-6 col-6" align="center" style="padding: 0px; margin: 0px 0px 0px 3px">
                <input :disabled="hid" :placeholder="placeholder" class="form-control msg"  v-model="CommentInput" @keyup.enter="SendComment()" style="padding: 3px;">
            </div>
            <div class="col-4" style="padding: 0px 0px 0px 2px;">
                <button :disabled="hid" class="btn"   @click="SendComment()">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {buss} from '../../../app'
    export default {
        props: ['id'],
        data () {
            return {
                error: '',
                hid: true,
                placeholder: 'Login to comment',
                CommentInput: '',
                member_id: 0,
                comments: [],
                num: 10,
                size:0,
                image: '/pictures/newuser.gif'
            }
        },

        created(){
            this.getSession();
            this.getComments();
            this.setSessions();
            buss.$on('userLogin', () => {
                this.getSession();
                this.getComments();
                this.setSessions();
            });
        },

        methods: {
            DeleteComment($id){
                $.get('/api/deleteComment/'+$id , (response)=>{
                    if(response === 'Ok'){
                        this.getComments();
                    }
                })
            },
            getSession(){
                if (this.$session.has('username')) {
                    this.hid = false
                    this.placeholder = "Enter your message"
                    this.member_id = this.$session.get('id')
                } else {
                    this.hid = true
                    this.placeholder = "Login to comment"
                }
            } ,
            setSessions(){
                if (this.$session.has('username')) {
                    $.get('/api/getUserImage/' + this.member_id, (image) => {
                        this.image = image
                    })
                }else{
                    this.image = '/pictures/newuser.gif'
                }
            },

            getLounge(username){
                buss.$emit('getLounge',username)
            },

            SendComment(){
                if(this.CommentInput !== ""){
                    var formData = new FormData();
                    formData.append('download_code', this.id);
                    formData.append('comment', this.CommentInput);
                    var vm = this
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-Token': $('meta[name=_token]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "/send/comment",
                        data: formData,
                        type: 'POST',
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (response) {
                            if (response === "Ok") {
                                vm.CommentInput=""
                                vm.getComments();
                            }
                        }
                    });
                }
            },

            getComments(){
                $.get('/api/getComment/' + this.id + '/' + 0, (response) => {
                    this.comments = response.comments
                    this.size=response.size
                })
            },

            LoardMoreComments(num) {
                var element = document.getElementById('wrap');
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    $.get('/api/readMessages/' + this.$route.params.id + '/' + num, (data) => {
                        if (data.comments.length > 0) {
                            for (var i = 0; i < data.comments.length; i++) {
                                this.comments.push(data[i].comments)
                                this.size=data.size
                            }
                            this.num += 10
                        }
                    });
                }
            },
        },
    }
</script>

<style scoped>
    .link{
        cursor: pointer;
        color: #954b4b;
    }
    .link:hover{
        text-decoration: underline;
    }
    .col-10 {
        padding: 2px;
    }

    .col-10 span {
        opacity: .6;
        font-size:11px
    }
    .alert {
        box-shadow: 0px 0px 2px 0px rgb(149, 75, 75);
        padding: 5px;
    }
    .card-img{
        padding: 0px;
        margin:0px;
        width:40px;
        height:40px;
        cursor: pointer;
        float: left;
    }
    .comment_box{
        padding: 5px;
        height: 650px;
        width:100%;
        margin-top: 45px;
        overflow: auto;
    }
    .comment_box::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    .comment_box::-webkit-scrollbar-thumb {
        background-color: rgb(149, 75, 75);
    }
    .comment_box::-webkit-scrollbar-track {
        /*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        background-color: transparent;
    }
</style>
