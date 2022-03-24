<template>
    <div>
        <div class="form-group">
            <label fo="username">Username: <span class="star">*</span> </label>
            <span class="error">{{Error}}</span>
            <input type="text"  class="form-control" v-model="username" id="username" >
        </div>

        <div class="form-group">
            <label fo="password" >Password: <span class="star">*</span> </label>
            <input type="password" @keyup.enter="login()" class="form-control" v-model="password" id="password">
        </div>


       <span style="display: none" data-dismiss="modal"></span>

        <button class="btn" @click="login()" id="LoginBtn" >Login</button>

        <span class="d-none d-xl-block d-lg-block col-md-12" style="padding:0px;margin-top: 5px">
        <a @click="resetPassword()" class="resetLink" style="color:#954b4b;">Forgot Password</a>
        </span>

        <span style="padding:0px;margin-top: 5px" class="resetLink d-none d-xl-none d-lg-none d-block">
         <a href="/resetpassword" class="resetLink"  style="color:#954b4b;">Forgot Password</a>
       </span>

    </div>
</template>

<script>
    import {buss} from '../../../app'
    function _(x) {return document.getElementById(x)}
    export default {

        data () {
            return {
                username: '',
                password: '',
                Error:'',


            }
        },

        methods:{
            login(){
                if(this.username !== "" && this.password !== "" ){
                     _('LoginBtn').innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
                    var vm = this
                    vm.Error =''
                    var formData = new FormData();
                    formData.append('username', this.username);
                    formData.append('password', this.password);
                    formData.append('_token',$('meta[name=_token]').attr('content'));
                    var ajax = new XMLHttpRequest();
                    ajax.open("POST", "/MemberLogin");
                    ajax.send(formData);
                    ajax.onreadystatechange=function() {
                        if (ajax.readyState === 4 && ajax.status === 200) {
                           if(ajax.responseText !== 'Ok'){
                                 _('LoginBtn').innerHTML = "Login"
                               vm.Error = ajax.responseText
                               $('#signup').removeClass('zoomInUp')
                               $('#signup').addClass('shake')
                           } else {
                            _('LoginBtn').innerHTML = "Login"
                            vm.password=''
                            vm.username=''
                            vm.Error = ""
                               $.get('/api/getSessions', (sessions) => {
                                   if (sessions[0] !== null && sessions[1] !== null && sessions[2] !== null) {
                                       _('LoginBtn').innerHTML = "Login"
                                       vm.$session.start()
                                       vm.$session.set('id',sessions[1])
                                       vm.$session.set('name',sessions[0])
                                       vm.$session.set('username',sessions[2])
                                       buss.$emit('userLogin','')
                                       buss.$emit('account_type','')
                                   } else {
                                       vm.$router.push('/login')
                                   }
                               });
                            $("[data-dismiss=modal]").trigger({ type: "click" });
                            $('#signup').removeClass('zoomOutUp')
                            $('#signup').removeClass('shake')
                            $('#signup').addClass('zoomInUp')
                        }
                        }
                    }


                }else{
                    $('#signup').removeClass('zoomInUp')
                    $('#signup').addClass('shake')
                    this.Error="Username & password required"
                }
            },

            resetPassword(){
                buss.$emit('resetpassword','Reset Password')
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
    .resetLink{
        float: right;
        margin-right:5px;
        cursor: pointer;
        color:#954b4b;
    }
    .btn{
        float: left;
    }

</style>
