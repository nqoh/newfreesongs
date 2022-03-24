<template>
    <div>
        <span ref="status"></span>
        <div>
            <div class="form-group">
                <label fo="new password">New Password: <span class="star" ref="ErrorNPassword"></span></label>
                <input type="password" class="form-control" v-model="NPassword" ref="NPassword">
            </div>
        </div>

        <div>
            <div class="form-group">
                <label fo="re type password">Re-type Password: <span class="star" ref="ErrorRPassword"></span></label>
                <input type="password" class="form-control" v-model="RPassword" ref="=RPassword">
            </div>
        </div>

        <div style="clear: both; margin-left: 15px">
            <button class="btn" @click="changePasswrod()" id="btn">Save</button>
        </div>

    </div>
</template>

<script>
    function _(x) {
        return document.getElementById(x)
    }
    export default {

        data () {
            return {
                NPassword: '',
                RPassword: '',
            }
        },

        watch:{
            NPassword: function (val) {
                this.$refs.status.innerHTML="";
                if (val.length >= 6) {
                    this.$refs.ErrorNPassword.innerHTML = ""
                    this.$refs.NPassword.style.border = "1px solid #954b4b";
                } else {
                    this.$refs.ErrorNPassword.innerHTML = "6 or more characters"
                    this.$refs.NPassword.style.border = "1px solid red";
                    this.$refs.NPassword.focus()
                }
            },

            RPassword: function (val) {
                this.$refs.status.innerHTML="";
                if (val.match(this.NPassword)) {
                    this.$refs.ErrorRPassword.innerHTML = ""
                    this.$refs.RPassword.style.border = "1px solid #954b4b"
                } else {
                    this.$refs.ErrorRPassword.innerHTML = "Password do not match"
                    this.$refs.RPassword.style.border = "1px solid red"
                    this.$refs.RPassword.focus()
                }
            }
        },

        methods:{
            changePasswrod(){
                if(this.RPassword.length >= 6 && this.NPassword.match(this.RPassword)){
                     _('btn').innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
                    var formData = new FormData();
                    formData.append('NPassword', this.NPassword);
                    formData.append('RPassword', this.RPassword);
                    formData.append('email',     this.$route.params.id);
                    var vm = this
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-Token': $('meta[name=_token]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "/ChangePassword",
                        data: formData,
                        type: 'POST',
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (response) {
                            if (response !== "Ok") {
                                _('btn').innerHTML = "Save"
                                vm.$refs.status.innerHTML=response;
                                vm.$refs.status.style.color='red';
                            } else {
                                _('btn').innerHTML = "Save"
                                vm.$refs.status.innerHTML="Password changed";
                                vm.$refs.status.style.color='green';
                                setTimeout(function () {
                                    vm.$router.push('/login')
                                },1000)
                            }
                        }
                    });
                }else{
                   this.$refs.status.innerHTML="Incorrect Password";
                   this.$refs.status.style.color='red';
                }
            }
        },

    }
</script>

<style>

</style>
