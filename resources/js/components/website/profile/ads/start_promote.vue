<template>
       <div><h1>Content promotion ceased</h1></div>
  <!--  <div>
        <h1 align="center"><u>Create Promotion</u></h1><br>
        <h6 align="center">
            <button @click="StartPromote()" class="btn_promote"><b>Promote</b></button>
        </h6>
        <p style="color:red; font-size: 19px">{{Error}}</p>
        <p style="margin-left: 18px; font-size:18px"><b>Promote your lounge or music for {{currency_symbol}} {{ price.toFixed(2) }} and reach 50 000 people
            in Southern and East Africa .</b></p>
        <hr><br>
        <p align="center" style='margin-bottom: 15px;margin-top: -10px; font-size: 20px'><b><u>Promote this content</u></b>
        </p><br>
        <div class="row">

            <div class="col-12" style="padding-bottom: 27px" v-if=" user.track ">

                <a :href="'/' + user.download_code "><img :src="user.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
                <div class="icon_and_label">
                    <div class="icon"></div>
                    <small>{{ user.track.substr(0,40) }}</small>
                </div>
                <br>
                <div class="icon_and_label">
                    <div class="size"></div>
                    <small> {{ (user.size / 1000000).toFixed(2) }} Mb | {{ user.duration }} Min</small>
                </div>
                <br>
                <div class="icon_and_label">
                    <div class="by"></div>
                    <small><b>By :</b>
                        <a :href="'/' +user.username ">{{ user.name | Ucfirst }}</a>
                    </small>
                </div>

                <p v-if=" user.price == '0' ">
                    <a :href="'/' + user.download_code "><b>Download</b></a>
                    <b>{{ user.downloads }}</b> downloads
                    <router-link to="/profile/ads"><b>Remove</b></router-link>
                </p>

                <p v-if=" user.price == '1' ">
                    <a :href="'/' + user.download_code"><b>{{ currency_symbol }}
                        {{ price.toFixed(2) }} Buy</b></a>
                    <b>{{ user.downloads }}</b> Purchases
                    <router-link to="/profile/ads"><b>Remove</b></router-link>
                </p>

            </div>

            <div class="col-12" style="padding-bottom: 27px" v-if=" !user.track ">
                <img :src="user.image" onerror="this.src='/thumbnails/newuser.gif';">
                <div style="padding-left: 10px;">
                    <strong style=";font-size: 18px; color: rgb(149,75,75)">{{user.name |  Ucfirst}}   {{user.surname |  Ucfirst}}</strong>
                    <p style="margin-top: -5px"><b>{{ followers }}</b> Followers</p>
                    <p style="margin-top: -5px">{{ total_music }} Songs Uploaded</p>
                    <p style="font-size: 11px;height: 35px;">{{ user.bio }} </p>
                    <router-link to="/profile/ads"><b>Remove</b></router-link>
                </div>
            </div>
        </div>
    </div>  --->
</template>

<script>
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                currency: '',
                currency_symbol:'',
                country:'',
                price: '',
                user: [],
                total_music:0,
                followers:0,
                Error:'',
                TrackId:0
            }
        },

        created(){
            buss.$emit('setColor','')
            $.get('/api/getAdsMusic/' + this.$route.params.id, (vl) => {
    
                if (vl !== "not exists") {
                    if (vl.member.email !== "") {
                        this.user = vl.member;
                        this.total_music = vl.music;
                        this.followers = vl.followers;
                        if(vl.member.track){
                            this.TrackId =  this.$route.params.id
                        }
                        if(vl.currency.currency === "R"){
                            this.country = "ZA"
                            this.currency = "ZAR"
                            this.currency_symbol = vl.currency.currency
                            this.price = vl.currency.price
                        }
                        if(vl.currency.currency === "$"){
                            this.country = ""
                            this.currency = "USD"
                            this.currency_symbol = vl.currency.currency
                            this.price = vl.currency.price
                        }

                        if(vl.currency.currency === "₦"){
                            this.country = "NG"
                            this.currency = "NGN"
                            this.currency_symbol = vl.currency.currency
                            this.price = vl.currency.price
                        }


                    } else {
                        this.$router.push('/error')
                    }
                } else {
                    this.$router.push('/error')
                }
            })
        },

        methods:{
            StartPromote(){
                var email = this.user.email;
                var download  = this.user.download_code;
                getpaidSetup(
                    {
                        PBFPubKey: "FLWPUBK-f6ff010217667e2802f5b7baac6f17f9-X",
                        customer_email: this.user.email,
                        amount: this.price,
                        custom_logo:"https://bogiyo.com/thumbnails/logonje.jpeg",
                        custom_title:"Bogiyo",
                        custom_description:"Start to promote now",
                        country: this.country,
                        payment_method:"card",
                        currency: this.currency,
                        txref: "Promotion" ,
                        onclose: function() {},
                        callback: function(response) {
                            if(response.tx.chargeResponse ==='00' || response.tx.chargeResponse === '0') {
                                this.Error = "Please try again or " + '<a href="/contactus">Contactus</router-link>'
                            } else {
                                var formdata = new FormData();
                                formdata.append("email", email);
                                formdata.append("download_code", download)
                                $.ajaxSetup({
                                    headers: {
                                        'X-CSRF-Token': $('meta[name=_token]').attr('content')
                                    }
                                });
                                var vm= this
                                $.ajax({
                                    url: "/Promote",
                                    data: formdata,
                                    type: 'POST',
                                    contentType: false,
                                    cache: false,
                                    processData: false,
                                    success: function (response) {
                                        if (response === "Ok") {
                                            vm.$router.push("/profile/ads/overview")
                                        } else {
                                            vm.Error = "Please try again or " + '<a href="/contactus">Contactus</router-link>'
                                        }
                                    }
                                });
                            }
                        }
                    }

                );

            }
        },
        metaInfo: {
            title: 'Start to Promote',
        }


    }
</script>

<style scoped>
    .btn_promote {
        padding: 8px;
        width: 200px;
        border-radius: 20px;
        outline: none;
        font-size: 20px;
        color: #eed5b7;
        background-color: #d19275;
    }

    img {
        width: 80px;
        float: left
    }

    .icon_and_label {
        display: inline-block;
        padding-top: 6px
    }

    small {
        font-size: 11px;
        padding-top: 6px;
    }

    p {
        margin: -3px 0px 0px 0px;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }

</style>
