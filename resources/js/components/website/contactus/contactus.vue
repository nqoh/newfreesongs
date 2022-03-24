<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Contact Us </h1>
            <h6 align=center> We are always interested in hearing from
                people, if you have questions or just want to
                Send us a message - please go right ahead! </h6>
        </div>
        <hr>
        <div class="sub-container">
            <div class="row">
                <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9">

                   <div class="form-group">
                       <p style="color: green">{{success}}</p>
                       <label fo="name">Your Name: <span class="star">*</span> <span
                               class="error">{{Error.name}}</span></label>
                       <input type="text" class="form-control" v-model.lazy="name" id="name">
                   </div>

                    <div class="form-group">
                        <label fo="email">Your Email Address: <span class="star">*</span> <span
                                class="error">{{Error.email}}</span></label>
                        <input type="email" v-model="email" class="form-control" id="email">
                    </div>

                    <div class="form-group">
                        <label fo="email">Enter Your Message: <span class="star">*</span><span
                                class="error">{{Error.message}}</span></label>
                       <textarea class="form-control message" v-model="message" id="message"></textarea>
                    </div>
 
                     <button class="btn" id='send' @click="SendMessage()">Send</button>

                </div>
            </div>
        </div>
        <hr v-if="show">
        
        <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
            <app-login id="#login" v-if="show"></app-login>
        </div>
        <hr>
    </div>
</template>

<script>
    import {buss} from '../../../app'
    import login from  '../../website/login/mobile_login.vue'
    function _(x) {
        return document.getElementById(x)
    }
    export default {
        components: {
            appLogin: login,
        },
        data () {
            return {
                show:true,
                name: '',
                email: '',
                success:'',
                message:'',
                Error: {
                    name: '',
                    email: '',
                    message:'',
                }
            }
        },

        created(){
            buss.$emit('MobileLogin',()=>{
                this.show = true
            });
            if(this.$session.has('username') && this.$session.has('id')){
                this.show = false
            }
            buss.$emit('setColor','')
        },

        watch: {
        email: function (val) {
            if (val !== "") {
                if (val.indexOf('@') > -1 && val.indexOf('.') > -1) {
                    this.Error.email = " "
                    _('email').style.border = "1px solid #954b4b"
                } else {
                    _('send').innerHTML='Send'
                    this.Error.email = "Invalid email"
                    _('email').style.border = "1px solid red"
                    _('email').focus()
                }
            } else {
                _('send').innerHTML='Send'
                this.Error.email = "Email required"
                _('email').style.border = "1px solid red"
                _('email').focus()
            }
        },
            name:function (val) {
                if (val.length >= 3 && val.length <= 15) {
                    this.Error.name = " "
                    _('name').style.border = "1px solid #954b4b"
                }else{
                    _('send').innerHTML='Send'
                    this.Error.name = "3 to 15 characters allow"
                    _('name').style.border = "1px solid red"
                    _('name').focus()
                }
            }

    },

        methods:{
            SendMessage(){
                 _('send').innerHTML='<img src="thumbnails/load.gif">'
                if(this.message.length > 3){
                    this.Error.message = ""
                    _('message').style.border = "1px solid #954b4b"

                    var formData = new FormData();
                    formData.append('name', this.name);
                    formData.append('email', this.email);
                    formData.append('message', this.message);
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-Token': $('meta[name=_token]').attr('content')
                        }
                    });
                    var vm = this
                    $.ajax({
                        url: "/contactUs",
                        data: formData,
                        type: 'POST',
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (response) {
                           if(response === 'Ok'){
                               vm.success = "Successfully sent"
                               vm.message=''
                               _('send').innerHTML='Send'
                              
                           }
                        }
                    });

                }else{
                    this.Error.message = "3 to 15 characters allow"
                    _('message').style.border = "1px solid red"
                    _('message').focus()
                }
            }
        },

    }
</script>

<style scoped>
    .form-group .form-control{
        border: 1px solid #954b4b;
    }
    .error {
        color: red;
        font-size: 14px;
    }

</style>