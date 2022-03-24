<template>
    <div>
        <div class="form-group">
            <label><span class="error">{{server_error}}</span><br
                v-if="show_server_error"></label>
            <label for="username">Username: <span class="star">*</span> <span
                    class="error">{{Error.username}}</span></label>
            <input type="email" class="form-control" v-model.lazy="username" id="username">
        </div>

        <div class="form-group">
            <label for="email">Email Address: <span class="star">*</span> <span
                    class="error">{{Error.email}}</span></label>
            <input type="text" class="form-control" v-model.lazy="email" id="email">
        </div>

        <div class="form-group">
            <label for="password">Password: <span class="star">*</span> <span
                    class="error">{{Error.password}}</span></label>
            <input type="password" class="form-control" v-model.lazy="password" id="password">
        </div>

        <div class="form-group">
            <label for="password2">Re-type Password: <span class="star">*</span> <span
                    class="error">{{Error.password2}}</span></label>
            <input type="password" class="form-control" v-model.lazy="password2" id="password2">
        </div>

        <div class="form-group">
            <label>Account type: <span class="star">*</span> <span class="error">{{Error.account_type}}</span></label>
            <input type="radio" v-model="account_type" value="artist" name="account_type">Artist
            <input type="radio" v-model="account_type" value="fan" name="account_type">Fan
        </div>

        <p style="font-size: 12px;">By clicking create account, you agree to our
            <a href="/terms">T&Cs</a>
            and confirm that you have read our
            <a href="/privacy">Privacy policy</a>.
        </p>

        <button class="btn" @click.enter="SubmitData()" disabled="true" id="SignupBtn" style="margin-top: -15px">Create
            Account
        </button>
    </div>
</template>

<script>
    function _(x) {return document.getElementById(x)}
    import {buss} from '../../../app'
    export default {

        data () {
            return {
                username: '',
                email: '',
                password: '',
                password2: '',
                account_type: '',
                show_server_error: false,
                server_error: '',
                Error: {
                    username: '',
                    email: '',
                    password: '',
                    password2: '',
                    account_type: '',
                }
            }
        },

        watch: {
            username: function (val) {
                var re = /^\w+$/;
                if(!re.test(val)){
                    this.username=""
                    _('username').style.border = "1px solid #954b4b"
                    this.Error.username = "Please use letters, digits or underscores`spaces are not allowed"
                    _('username').focus()
                }else if (val.length >= 3 && val.length <= 15) {

                    $.get('/api/username/' + val, (response) => {
                        if (response !== "Ok") {
                            this.Error.username = response
                            _('username').style.border = "1px solid red";
                            _('username').value ="";
                            _('username').focus()
                        } else {
                            this.Error.username = " "
                            _('username').style.border = "1px solid #954b4b"
                            this.singup()

                        }
                    });

                } else {
                    this.Error.username = "3 to 15 characters allowed"
                    _('username').style.border = "1px solid red"
                    this.singup()
                    _('username').focus()
                }
            },

            email: function (val) {
                if (val !== "") {
                    if (val.indexOf('@') > -1 && val.indexOf('.') > -1) {

                        $.get('/api/email/' + val, (response) => {
                            if (response !== "Ok") {
                                this.Error.email = response
                                _('email').style.border = "1px solid red";
                                _('email').value ="";
                                 this.email = "";
                                _('email').focus()
                            } else {
                                this.Error.email = " "
                                _('email').style.border = "1px solid #954b4b"
                                this.singup()
                            }
                        });

                    } else {
                        this.Error.email = "Invalid email";
                        _('email').style.border = "1px solid red"
                        this.singup()
                        _('email').focus()
                    }
                } else {
                    this.Error.email = "Email required"
                    _('email').style.border = "1px solid red"
                    this.singup()
                    _('email').focus()
                }
            },

            password: function (val) {
                if (val.length >= 6) {
                    this.Error.password = ""
                    _('password').style.border = "1px solid #954b4b"
                    this.singup()
                } else {
                    this.Error.password = "6 or more characters"
                    this.singup()
                    _('password').style.border = "1px solid red"
                    _('password').focus()
                }
            },

            password2: function (val) {
                if (val.match(this.password) && val.length >= 6) {
                    this.Error.password = ""
                    _('password2').style.border = "1px solid #954b4b"
                    this.singup()
                } else {
                    this.Error.password = "Password do not match"
                    _('password2').style.border = "1px solid red"
                    _('password2').focus()
                    this.singup()
                }
            },
            account_type: function (val) {
                if (val !== "") {
                    this.singup()
                }
            }
        },
        methods: {
            singup(){
                if (this.username.length >= 3 && this.email !== "" && this.password.length >= 6 &&

                    this.password2.length >= 6 && this.account_type !== "" && this.password === this.password2) {
                    _('SignupBtn').disabled = false
                } else {
                    _('SignupBtn').disabled = true
                }

            },
            SubmitData(){
                if (this.username.length >= 3 && this.email !== "" && this.password.length >= 6 &&
                    this.password2.length >= 6 && this.account_type !== "" && this.password === this.password2) {
                 _('SignupBtn').innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
                    var formData = new FormData();
                    formData.append('username', this.username);
                    formData.append('email', this.email);
                    formData.append('password', this.password);
                    formData.append('password2', this.password2);
                    formData.append('account_type', this.account_type)
                    var vm = this
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-Token': $('meta[name=_token]').attr('content')
                        }
                    });

                    $.ajax({
                        url: "/signup",
                        data: formData,
                        type: 'POST',
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (response) {
                            if (response !== "Ok") {
                                vm.show_server_error = true
                                vm.server_error = response;
                            } else {
                                vm.show_server_error = false;
                                vm.server_error = ""
                                $.get('/api/getSessions', (sessions) => {
                                    if (sessions[0] !== "" && sessions[1] !== "") {
                                        vm.$session.start()
                                        vm.$session.set('id',sessions[1])
                                        vm.$session.set('name',sessions[0])
                                        vm.$session.set('username',sessions[2])
                                        buss.$emit('userLogin','')
                                        _('SignupBtn').innerHTML="Create Account"
                                        window.location='/profile/alerts'
                                    } else {
                                        window.location='/login'
                                    }
                                });
                                $("[data-dismiss=modal]").trigger({ type: "click" });
                                $('#signup').removeClass('zoomOutUp')
                            }
                        }
                    });

                }

            }
        }
    }
</script>

<style scoped>
    .form-group {
        margin-top: 5px
    }

    .form-group label {
        margin: 0px
    }

    .error {
        color: red;
        font-size: 14px;
    }

    .form-group .form-control {
        border: 1px solid #954b4b;
    }
</style>
