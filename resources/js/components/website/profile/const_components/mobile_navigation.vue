<template>
    <div style="margin-top:3px;background-color: #eed5b7;">
        <ul class="nav" style="padding:0px;">
            <li>
                <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" id="store" role="button"
                   aria-haspopup="true" aria-expanded="false">Store</a>
                <div class="dropdown-menu" aria-labelledby="store">
                    <router-link v-if=" account_type == 'artist' " to="/profile/free/music" class="dropdown-item"><a>Free Music</a></router-link>
                    <router-link v-if=" account_type == 'artist' " to="/profile/paid/music" class="dropdown-item"><a>Paid Music</a></router-link>
                    <router-link to="/profile/earnings" class="dropdown-item" @click="setLoader('earnings')"><a>Earnings</a></router-link>
                    <router-link v-if=" account_type == 'fan' " to="/profile/purchases/music" @click="setLoader('purchases')" class="dropdown-item"><a>Purchases</a></router-link>
                    <router-link v-if=" account_type == 'artist'" to="/profile/sales" class="dropdown-item" @click="setLoader('sales')"><a>Sales</a></router-link>
                </div>
            </li>

            <router-link to="/profile/feeds" tag="li" active-class="active">
                <a class="nav-link" href="" >Feed</a>
            </router-link>

            <router-link to="/profile/playlist" tag="li" active-class="active">
                <a class="nav-link" href="">Playlist</a>
            </router-link>

            <router-link to="/profile/inbox" tag="li" active-class="active">
                <a class="nav-link" id="color_message2" @click="setLoader('inbox')">Inbox <span v-if="message_count != 0" style="background:#00c851" id="badge_messagex"  class="badge">{{message_count}}</span></a>
            </router-link>

            <router-link to="/profile/alerts" tag="li" active-class="active">
                <a class="nav-link" id="color_alert2" href="" @click="setLoader('alert')">Alert <span v-if="alert_count != 0" id="badge_alert2" class="badge">{{alert_count}}</span></a>
            </router-link>


            <li v-if=" account_type == 'artist' ">
                <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" id="ads" role="button"
                   aria-haspopup="true" aria-expanded="false" @click="setLoader('ads')">Ads</a>
                <div class="dropdown-menu" aria-labelledby="store">
                    <router-link to="/profile/ads" class="dropdown-item" @click="setLoader('promote')"><a>Promote</a></router-link>
                    <router-link to="/profile/ads/overview" class="dropdown-item" @click="setLoader('overview')"><a>Overview</a></router-link>
                    <router-link to="/profile/ads/history" class="dropdown-item" @click="setLoader('history')"><a>History</a></router-link>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
    function _(x) {return document.getElementById(x)}
    import {buss} from '../../../../app'
    export default {
        data () {
            return {
                account_type:'',
                message_count:0,
                alert_count:0,
                pointer:'',
                activeInbox:false,
                activeAlert:false,
            }
        },
        created(){
            this.setColor();
            $.get('/api/getMemberDetails',(response)=>{
                this.account_type = response.member.account_type;
            });
            buss.$on('setColor',()=>{
                this.setColor();
            })
        },

        methods:{
            
            setLoader(val){
                this.activeInbox = false
                this.activeAlert = false
                if(val === 'inbox'){
                  this.activeInbox = true
                }
                if(val === 'alert'){
                  this.activeAlert = true
                }
                buss.$emit('followLinkColor','')
                if(this.pointer !== val ) {
                    this.pointer = val
                    buss.$emit('Openloading', '')
                }
            },
            
            setColor(){
                 $.get('/api/setColor/',(response)=>{
                    if(response.alert !== 0){
                        this.alert_count = response.alert
                        _('color_alert2').style.color='#ff4444'
                        _('badge_alert2').style.background='#ff4444'
                    }else if(this.activeAlert){
                        _('color_alert2').style.color='#d19275'
                    }else{
                        this.activeAlert = false
                        this.alert_count = 0
                        _('color_alert2').style.color='rgb(149, 75, 75)'
                    }
                    if(response.message !== 0){
                        this.message_count =  response.message
                        _('color_message2').style.color='#00c851'
                        _('badge_messagex').style.background='#00c851'
                    }else if(this.activeInbox) {
                        _('color_message2').style.color = '#d19275'
                    }else{
                        this.activeInbox = false
                        this.message_count = 0
                        _('color_message2').style.color= 'rgb(149, 75, 75)'
                    }
                })
            },
        }
    }
</script>

<style scoped>

    #white{
        color: rgb(149, 75, 75);
    }
    #green{
        color: green;
    }

    .active a {
        color: #d19275;
    }

    a {
        font-weight: bold;
        font-size: 95%;
    }

    .nav-link {
        font-weight: bold;
        font-size: 95%;
        cursor: pointer;
        margin-left: -10px;
        color: rgb(149, 75, 75);
        padding: 0.5rem 0.8rem;
    }

    .dropdown-menu {
        background-color: #d19275;
        border: 1px solid rgb(149, 75, 75);
    }

    .dropdown-menu a {
        cursor: pointer;
        color: #eed5b7;
    }

    .dropdown-menu a:hover {
        color: #d19275;
        background-color: #eed5b7;
    }
</style>
