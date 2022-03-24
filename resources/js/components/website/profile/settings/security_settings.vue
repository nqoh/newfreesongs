<template>
    <div>
        <h2>Change Password</h2>

        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9">
            <span id="status"></span>
            <div class="form-group">
                <label fo="Cell_Number">Current Password: <span class="star" id="ErrorCPassword"></span></label>
                <input type="password" class="form-control" v-model="CPassword" id="CPassword">
            </div>
        </div>

        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9">
            <div class="form-group">
                <label fo="Cell_Number">New Password: <span class="star" id="ErrorNPassword"></span></label>
                <input type="password" class="form-control" v-model="NPassword" id="NPassword">
            </div>
        </div>

        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9">
            <div class="form-group">
                <label fo="Cell_Number">Re-type Password: <span class="star" id="ErrorRPassword"></span></label>
                <input type="password" class="form-control" v-model="RPassword" id="=RPassword">
            </div>
        </div>

        <div style="clear: both; margin-left: 15px">
            <button class="btn" @click="changePasswrod()">Save</button>
        </div>
        <br>
        <p align="center"><router-link to="/profile/security/settings/deactivate"><a style="font-size: 20px">Deactivate Account</a></router-link></p>

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
                CPassword: '',
                NPassword: '',
                RPassword: '',
            }
        },
        created(){
            buss.$emit('setColor','')
        },
        watch: {
            CPassword: function (val) {
                if (val.length >= 6) {
                    $.get('/getPassword/' + val, (data) => {
                        if (data !== 'Ok') {
                            _('ErrorCPassword').innerHTML = "Invalid Password"
                            _('CPassword').style.border = "1px solid red";
                            _("CPassword").value = "";
                            _('CPassword').focus()
                        } else {
                            _('ErrorCPassword').innerHTML = ""
                            _('CPassword').style.border = "1px solid #954b4b";
                        }
                    })
                } else {
                    _('ErrorCPassword').innerHTML = "Invalid Password"
                    _('CPassword').style.border = "1px solid red";
                    _('CPassword').focus()
                }
            },

            NPassword: function (val) {
                if (val.length >= 6) {
                    _('ErrorNPassword').innerHTML = ""
                    _('NPassword').style.border = "1px solid #954b4b";
                } else {
                    _('ErrorNPassword').innerHTML = "6 or more characters"
                    _('NPassword').style.border = "1px solid red";
                    _('NPassword').focus()
                }
            },

            RPassword: function (val) {
                if (val.match(this.RPassword) && val.length >= 6) {
                    _('ErrorRPassword').innerHTML = ""
                    _('RPassword').style.border = "1px solid #954b4b"
                } else {
                    _('ErrorRPassword').innerHTML = "Password do not match"
                    _('RPassword').style.border = "1px solid red"
                    _('RPassword').focus()
                }
            }

        },
        methods:{
            changePasswrod(){
                if(this.RPassword !=="" && this.CPassword !== "" && this.NPassword){
                    var formData = new FormData();
                    formData.append('CPassword', this.CPassword);
                    formData.append('NPassword', this.NPassword);
                    formData.append('RPassword', this.RPassword);
                    var vm = this
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-Token': $('meta[name=_token]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "/setPassword",
                        data: formData,
                        type: 'POST',
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (response) {
                            if (response !== "Ok") {
                                _('status').innerHTML=response;
                                _('status').style.color='red';
                            } else {
                                _('status').innerHTML="Password changed";
                                _('status').style.color='green';
                            }
                        }
                    });


                }else{
                    _('status').innerHTML="All fields required";
                    _('status').style.color='red';
                }
            }
        },
        metaInfo: {
            title: 'Security',
        }

    }
</script>

<style>

</style>
