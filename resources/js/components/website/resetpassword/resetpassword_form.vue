<template>
    <div>
        <div class="form-group">
            <label fo="email">Your email: <span class="star">*</span> </label>
            <span class="error">{{Error}}</span>
            <input type="email"  class="form-control" @keyup.enter="resetPassword()" v-model="email" id="email" >
        </div>

        <span style="display: none" data-dismiss="modal"></span>

        <button class="btn" id="submitBtn" @click="resetPassword()"  style="float: left">Reset Password</button>

        <span class="d-none d-xl-block d-lg-block col-md-12" style="padding: 0px;margin-top: 5px">
        <a @click="logIn()" class="loginLink" style="color:#954b4b;">Log In</a>
        </span>

        <span style="padding: 0px;margin-top: 5px"  class="loginLink d-none d-xl-none d-lg-none d-block">
         <a href="/login" class="loginLink"  style="color:#954b4b;">Log In</a>
       </span>

        <div class="d-none d-xl-block  d-lg-block  col-md-12" ref="desktop" ></div>
    </div>
</template>


<script>
    function _(x) { return document.getElementById(x) }
    import {buss} from '../../../app'
    export default {

        data () {
            return {
                email: '',
                Error:'',
                titleAndId:[]
            }
        },
        watch:{
            email:function(val){
                if(val !== ""){
                    if (val.indexOf('@') > 1 && val.indexOf('.') > 1) {
                        this.Error=""
                        _('email').style.border = "1px solid #954b4b"

                    }else{
                        this.Error="Invalid email"
                        _('email').style.border="1px solid red"
                        _('email').focus()
                    }
                }else{
                    this.Error="Email required"
                    _('email').style.border="1px solid red"
                    _('email').focus()
                }
            },
        },

        methods:{
            resetPassword(){
               if(this.email !== "" ){
                  // send email to the server
                  _('submitBtn').innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
                   this.Error=""
                   _('email').style.border = "1px solid #954b4b";
                   $.get('/api/ResetEmail/'+this.email, (response)=>{
                       if(response !== 'Email not exists'){
                           _('submitBtn').innerHTML =  "Reset Password"
                           this.titleAndId = ['Confirm Account',response.name,response.surname,response.image,response.email]
                           if(this.$refs.desktop.clientWidth > 1) {
                           buss.$emit('Desktopconfirm', this.titleAndId );
                           _('submitBtn').innerHTML =  "Reset Password"
                           }else{
                               buss.$emit('MobileConfirm',this.titleAndId);
                               _('submitBtn').innerHTML =  "Reset Password"
                           }

                       }else{
                           this.Error=response
                           _('email').style.border = "1px solid red";
                           _('submitBtn').innerHTML =  "Reset Password"
                       }
                   })
                }else{
                    this.Error="Email required"
                    _('email').style.border="1px solid red"
                    _('email').focus()
                }
            },
            logIn(){
                buss.$emit('login', 'Log In');
            },


        }

    }
</script>

<style scoped>
    .form-group{
        margin-top: 5px
    }
    .form-group label{
        margin: 0px
    }
    .error{
        color: red;
        font-size: 14px;
    }
    .form-group .form-control{
        border: 1px solid #954b4b;
    }
    .loginLink{
        float: right;
        margin-right:5px;
        cursor: pointer;
        color:#954b4b;
    }
</style>
