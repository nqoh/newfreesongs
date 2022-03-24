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
            <img src="/thumbnails/1Loader.gif" class="loader" id="loader">
            <img :src="user.member.image"  @click="DisplayControls(tablet)" onerror="this.src='/thumbnails/newuser.gif';" style="float: left;width: 24%">

            <div v-if="show" class="img_controller" id="img_controller">

                <input type="file" capture="user"  accept="image/jpeg , image/jpg , image/png , image/gif" title="Change profile picture" id="pp_input"
                       @change="change_pp()" class="pp_input">

                <div title="Change profile picture" capture="user"  accept="image/jpeg , image/jpg , image/png , image/gif" class="img_changer"
                     @click="remove_pp()">Change
                </div>

                <div title="Remove profile picture" class="img_remover"
                     @click="remove_pp()">Remove
                </div>
            </div>


            <div class="userDetails">
                <span class="name">{{ user.member.name.toUpperCase()}} {{ user.member.surname.toUpperCase() }}</span><br
                    style="line-height: 0.1">
                <span class="username">@ {{user.member.username }}</span><br style="line-height: 0.1">
                <button v-if=" account_type == 'artist' "  class="btn" @click="upload()">Upload</button>
                <button v-if=" account_type == 'fan' "  class="btn" @click="getMusic()">Explore</button>

                <br style="line-height: 0.1">
                <router-link to="/profile/followers" active-class="active" ><span @click="setLinkColor('follower')" id="follower">{{user.followers}} Followers</span></router-link>&nbsp;&nbsp;&nbsp;
                &emsp;&emsp;<router-link to="/profile/followings" active-class="active" ><span @click="setLinkColor('following')"  id="following">{{user.followings}} Following</span></router-link>

                <br style="line-height: 0.1">
                <span style="font-size: 13px;"> {{user.member.bio | Ucfirst}}</span><br style="line-height: 0.1">
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
                <router-link to="/profile/edit"><img src="/thumbnails/editp.png" class="edit"></router-link>
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
    .share {
        border-top: 1px solid rgb(149, 75, 75);
    }
    .edit {
        width: 27px;
        cursor: pointer;
        float: right;
        margin-right: 5px;
        margin-top: 0px;
    }
    .loader {
        width: 10%;
        margin: 3% 0px 0px 7%;
        position:absolute;
        display: none;
    }
    .img_controller {
        background-color: #eed5b7;
        width: 24%;
        height: auto;
        position: absolute;
        margin-top: 10.5%;
    }
    .pp_input {
        position: absolute;
        opacity: 0;
        height: 23px;
        cursor: pointer;
        color: rgb(149, 75, 75);
        width: 100%;
        z-index: 400;
    }
    .img_changer {
        width: 100%;
        color: rgb(149, 75, 75);
        text-align: center;
        transition: display ease 1s;
        cursor: pointer;
        border-top: 1px solid rgb(149, 75, 75);
        background-color: #eed5b7;
        padding-top: 4px;

    }
    .img_remover {
        width:100%;
        color: rgb(149, 75, 75);
        text-align: center;
        transition: display ease 1s;
        cursor: pointer;
        border-top: 1px solid rgb(149, 75, 75);
        background-color: #eed5b7;
        margin-top: 3px;
        padding-top: 4px;

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
