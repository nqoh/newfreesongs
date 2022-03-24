<template>
    <div>
        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" style="float: left">
            <span ref="status"></span>
            <div class="form-group">
                <label fo="Firstname">First Name: <span class="star" id="ErrorName"></span> </label>
                <input type="text" class="form-control" v-model="firstname" id="Firstname">
            </div>
        </div>

        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" style="float: right">
            <div class="form-group">
                <label fo="Lastname">Last Name: <span class="star" id="ErrorLast"></span></label>
                <input type="text" class="form-control" v-model="lastname" id="Lastname">
            </div>
        </div>


        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" style="float: left">
            <div class="form-group">
                <label fo="country">Country: <span class="star" id="ErrorCountry"></span></label>
                <select v-model="selectedCountry" class="form-control">
                    <option v-for="country in countries" :selected="selectedCountry">{{ country.country_name }}</option>
                </select>
            </div>
        </div>


        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" style="float: right">
            <div class="form-group">
                <label fo="city">City: <span class="star" id="ErrorCity"></span></label>
                <input type="text" class="form-control" v-model="city" id="city">
            </div>
        </div>


        <div class="form-group col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" style="float: left">
            <label fo="bio">Bio: ( {{counter}} Characters) <span class="star" id="ErrorBio"></span></label>
            <textarea class="form-control message" v-model="bio" id="bio"></textarea>
        </div>


        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" style="float: right">
            <div class="form-group">
                <label fo="email">Email: <span class="star" id="ErrorEmail"></span></label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
        </div>
        <div style="clear: both; margin-left: 15px">
            <button class="btn" id="save" @click="SaveData()">Save</button>
            <br><br>

            <router-link to="/profile/security/settings"><a>Security Settings</a></router-link>

            <router-link to="/profile/payment/settings"><a>Payment Settings</a></router-link>
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
                counter: 80,
                firstname: '',
                lastname: '',
                countries: [],
                selectedCountry: '',
                city: '',
                bio: '',
                email: '',
            }
        },
        created(){
            buss.$emit('setColor','')
            this.getMemberDetails();
        },
        watch: {
            firstname: function (val) {
                if (val.length >= 3 && val.length <= 15) {
                    _("ErrorName").innerHTML = ""
                    _('Firstname').style.border = "1px solid #954b4b"
                } else {
                    _("ErrorName").innerHTML = "3 to 15 characters allow"
                    _('Firstname').style.border = "1px solid red"
                    _('Firstname').focus()
                }


            },
            lastname: function (val) {
                if (val.length >= 3 && val.length <= 15) {
                    _("ErrorLast").innerHTML = ""
                    _('Lastname').style.border = "1px solid #954b4b"
                } else {
                    _("ErrorLast").innerHTML = "3 to 15 characters allow"
                    _('Lastname').style.border = "1px solid red"
                    _('Lastname').focus()
                }
            },


            city: function (val) {
                if (val.length >= 3 && val.length <= 15) {
                    _("ErrorCity").innerHTML = ""
                    _('city').style.border = "1px solid #954b4b"
                } else {
                    _("ErrorCity").innerHTML = "Enter full city name"
                    _('city').style.border = "1px solid red"
                    _('city').focus()
                }
            },


            bio: function (val) {
                if (val.length > 80) {
                    this.bio = val.substring(0, 80);
                } else {
                    this.counter = 80 - val.length;
                }

            },

            email: function (val) {
                if (val.indexOf('@') > -1 && val.indexOf('.') > -1) {
                    _('ErrorEmail').innerHTML = ''
                    _('email').style.border = "1px solid #954b4b"
                } else {
                    _('ErrorEmail').innerHTML = "Invalid email"
                    _('email').style.border = "1px solid red"
                    _('email').focus()
                }
            },

        },
        methods: {
            getMemberDetails(){
                $.get('/api/getMemberDetails', (response) => {
                    this.firstname = response.member.name;
                    this.lastname = response.member.surname;
                    this.countries = response.countries;
                    this.city = response.member.province;
                    this.selectedCountry = response.member.country
                    this.bio = response.member.bio;
                    this.email = response.member.email;
                })
            },
            SaveData(){
                _('save').innerHTML = '<img src="/thumbnails/load.gif">'
                this.$refs.status.innerHTML = "";
                if (this.bio.length >= 10 && this.bio.length <= 80) {
                    _("ErrorBio").innerHTML = ""
                    _('bio').style.border = "1px solid #954b4b"
                } else {
                    _("ErrorBio").innerHTML = "Enter bio 10 to 80 characters"
                    _('bio').style.border = "1px solid red"
                    _('bio').focus()
                }

                var formData = new FormData();
                formData.append('firstname', this.firstname);
                formData.append('lastname', this.lastname);
                formData.append('country', this.selectedCountry);
                formData.append('city', this.city);
                formData.append('bio', this.bio)
                formData.append('email', this.email)
                var vm = this
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-Token': $('meta[name=_token]').attr('content')
                    }
                });

                $.ajax({
                    url: "/edit/settings",
                    data: formData,
                    type: 'POST',
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function (response) {
                        if (response !== "Ok") {
                            vm.getMemberDetails();
                        } else {
                            _('save').innerHTML = 'Save'
                            vm.$refs.status.innerHTML = "Updated";
                            vm.$refs.status.style.color = 'green';
                            vm.getMemberDetails();
                        }
                    }
                });
            }
        },
        metaInfo: {
            title: 'Edit Profile',
        }

    }
</script>

<style scoped>
    a {
        margin-top: 150px;
        font-weight: bold;
        font-size: 23px;
        margin-left: 20px;
    }

    .btn {
        margin-left: 5px;
    }
</style>
