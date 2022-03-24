<template>
    <div>
         <div v-if="showLoader">
            <div class="alert sub-container container-fluid" style="width: 100%; height: 220px">
                <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="200" :height="80">
                    <rect x="0" y="0" rx="0" ry="0" width="45" height="45" />
                    <rect x="47" y="0" rx="0" ry="0" width="70" height="3" />
                    <rect x="47" y="8" rx="0" ry="0" width="40" height="3" />
                    <rect x="47" y="16" rx="0" ry="0" width="20" height="8" />
                    <rect x="47" y="28" rx="0" ry="0" width="30" height="3" />
                    <rect x="87" y="28" rx="0" ry="0" width="30" height="3" />
                    <rect x="47" y="36" rx="0" ry="0" width="90" height="3" />
                    <rect x="47" y="44" rx="0" ry="0" width="40" height="3" />
                    <rect x="180" y="44" rx="0" ry="0" width="30" height="3" />
                </vue-content-loading>
            </div>
         </div>

        <!---- Header For Desktop AND Tablet  --->
        <div v-if="!showLoader" class="alert sub-container container-fluid" style="width: 100%; height: 220px">
            <div id="pic_status"style="margin-top:-2.6%;display: none"></div>
            <div class="image_box">
                <img v-if="img" :src="user.member.image" onerror="this.src='/thumbnails/newuser.gif';" class="user_img" id="image1">
            </div>
            <div class="userDetails">
                <span class="name">{{ user.member.name.toUpperCase()}} {{ user.member.surname.toUpperCase() }}</span><br style="line-height: 0.1">
                <span class="username">@ {{user.member.username }}</span><br style="line-height: 0.1">

                <span v-if="username">
            <button v-if="!doIfollowu" id="follow"  class="btn" @click="Follow()">Follow</button>
            <button v-if="doIfollowu"  id="unfollow" class="btn" @click="UnFollow()">Unfollow</button>
            </span>
                <button v-else   class="btn" @click="Login()">Follow</button>
                <br style="line-height: 0.1">
                <a  active-class="active" id="follower"><span id="followers" @click="getLounge(user.member.username,'followers')" >{{user.followers}} Followers</span></a>&nbsp;&nbsp;&nbsp;
                &emsp;&emsp;<a  active-class="active"  id="following"><span id="followings" @click="getLounge(user.member.username,'followings')">{{user.followings}} Following</span></a>
                <br
                        style="line-height: 0.1">
                <span style="font-size: 13px"> {{user.member.bio.substr(0,80) | Ucfirst}}</span><br style="line-height: 0.1">
                <span class="country" style="float: left">
                <img style="width:13px; margin-top:-10px" src="/thumbnails/location.png"> {{user.member.country | Ucfirst}}
                <img style="width:20px;margin-top:-5px" :src="flag"> | <span>{{user.member.account_type | Ucfirst}}</span>
            </span>
                <span v-if=" account_type == 'artist' " style="float: right; opacity: .7">{{user.music}} Songs Uploaded</span>
            </div>

            <div class="share">

        <span class="fb">
       <a :href="fb + user.member.username ">
         <img src="/thumbnails/fbshare.png" width="70" height="20" title="Share on facebook">
       </a></span>

        <span class="tw">
       <a :href="whatsapp + user.member.username ">
         <img src="/thumbnails/download.jpg" width="70" height="20" title="Share on WhatsApp">
       </a></span>
       
                <span class="tw">
       <a :href="twitter + user.member.username">
       <img src="/thumbnails/twitter.png" width="70" height="20" title="Share on twitter">
       </a></span>

            </div>
        </div>
        <!--- End ---->



    </div>
</template>

<script>

    import  {headerMixin} from './mixins'
    export default{
        mixins:[headerMixin]
    }
</script>

<style scoped>
    .active {
        color: #d19275;
    }

    .tw {
        margin-left: 20px;
        margin-top: 5px;
    }

    .share {
        border-top: 1px solid rgb(149, 75, 75);
    }

    .fb {
        margin-left: 280px;
        margin-top: 5px;
    }


    .name {
        color: rgb(149, 75, 75);
        font-size: 22px;
        font-weight: bold;
    }

    .username {
        opacity: .6;
    }

    #follower {
        color: rgb(149, 75, 75);
        font-size: 14px;
        font-weight: bold;
        float: left;
        cursor: pointer;
        margin-left: 3px;
    }

    #following {
        color: rgb(149, 75, 75);
        font-size: 14px;
        font-weight: bold;
        left: 80px;
        cursor: pointer;
        margin-left: 3px;
    }

    .image_box {
        float: left;
        border: 1px solid rgb(149, 75, 75);
        width: 25%;
        height: 170px;
        border-bottom: none;
    }

    .image_box .user_img {
        width: 100%;
        height: 168px
    }

    .userDetails {
        padding-left: 15px;
        width: 100%;
        height: 170px;
    }

    .userDetails span {
        display: inline-block;
        margin-left: 3px;
    }

    .userDetails button {
        display: inline-block;
        margin-left: 3px;
    }
</style>
