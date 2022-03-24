<template>
    <div>

        <div v-if="showLoader" class="alert sub-container container-fluid">
            <vue-content-loading secondary="#eed5b7" primary="#d19275" :width="200" :height="80">
                <rect x="0" y="0" rx="0" ry="0" width="45" height="45" />
                <rect x="47" y="0" rx="0" ry="0" width="70" height="3" />
                <rect x="47" y="12" rx="0" ry="0" width="40" height="3" />
                <rect x="47" y="20" rx="0" ry="0" width="20" height="8" />
                <rect x="47" y="35" rx="0" ry="0" width="30" height="3" />
                <rect x="87" y="35" rx="0" ry="0" width="30" height="3" />
                <rect x="4" y="52" rx="0" ry="0" width="90" height="3" />
                <rect x="4" y="62" rx="0" ry="0" width="40" height="3" />
                <rect x="180" y="62" rx="0" ry="0" width="30" height="3" />
            </vue-content-loading>
        </div>


        <div v-if="!showLoader" class="alert sub-container container-fluid">
            <div id="pic_status" style="margin-top:-2.6%;display: none"></div>
            <img :src="user.member.image" style="float: left;width: 24%" onerror="this.src='/thumbnails/newuser.gif';">
            <div class="userDetails">
                <span class="name">{{ user.member.name.toUpperCase()}} {{ user.member.surname.toUpperCase() }}</span><br
                    style="line-height: 0.1">
                <span class="username">@ {{user.member.username }}</span><br style="line-height: 0.1">
                <span v-if="username">
                  <button v-if="!doIfollowu" id="follow"  class="btn" @click="Follow()">Follow</button>
                  <button v-if="doIfollowu"  id="unfollow" class="btn" @click="UnFollow()">Unfollow</button>
                </span>
                  <button v-else   class="btn" >
                      <a to="#login" style="color:white;text-decoration: none">Follow</a>
                  </button>

                <br style="line-height: 0.1">
                <a  active-class="active">
                    <span  id="follower" @click="getLounge(user.member.username,'followers')" ><span id="followersM" @click="getLoungeM(user.member.username,'followersM')" >{{user.followers}} Followers</span></span>
                </a>&nbsp;&nbsp;&nbsp;

                &emsp;&emsp;<a  active-class="active"  >
                <span id="following" @click="getLounge(user.member.username,'followings')"><span id="followingsM" @click="getLoungeM(user.member.username,'followingsM')">{{user.followings}} Followings</span></span>
                  </a>

                <br style="line-height: 0.1">
                <span style="font-size: 13px;"> {{user.member.bio.substr(0,80) | Ucfirst}}</span><br style="line-height: 0.1">
                <span class="country" style="float: left;">
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


    </div>
</template>

<script>

    import {headerMixin} from './mixins'
    import {buss} from '../../../../app'
    export default {
        mixins: [headerMixin],
    }
</script>

<style scoped>
    .tw {
        margin-left: 0px;
        margin-top: 0px;
    }

    .share {
        border-top: 1px solid rgb(149, 75, 75);
    }

    .fb {
        margin-left: 0px;
        margin-top: 0px;
    }
    a{
        margin-left: 3px;
    }
    .sub-container {
        width: 100%;
        height: auto;
        padding: 5px;
        border: none;
        border-radius: 0px;
    }
    .userDetails {
        width: 100%;
        height: 170px;
    }
    .userDetails span {
        display: inline-block;
        margin-left: 3px;
    }
    .name {
        color: rgb(149, 75, 75);
        font-size: 16px;
        font-weight: bold;
    }
      .btn{
          padding: 3px;
          margin-left:3px;
      }
    .username {
        opacity: .6;
    }
</style>
