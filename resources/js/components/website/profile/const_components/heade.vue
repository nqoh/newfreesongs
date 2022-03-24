<template>
    <div>
        <!---- Header For Desktop AND Tablet  --->
    <div class="alert sub-container container-fluid" style="width: 100%;  height: 220px">
        <div id="pic_status"style="margin-top:-2.6%;display: none"></div>
        <div class="image_box">
            <img v-if="img" :src="user.member.image" class="user_img" id="image1"
                 @click="DisplayControls(tablet)"
                 @mouseover="DisplayControls(true)"

            >
           <img v-else :src="member_image" class="user_img" id="image2"
            >
            <img src="/thumbnails/1Loader.gif" class="loader" id="loader">
            <div v-if="show" class="img_controller" id="img_controller"
                 @mouseover="DisplayControls(true)"
                 @mouseout="DisplayControls(false)"
              >

                <input type="file" capture="user"  accept="image/jpeg , image/jpg , image/png , image/gif" title="Change profile picture" id="pp_input"
                       @change="change_pp()" class="pp_input"
                       @mouseover="DisplayControls(true)"
                       @mouseout="DisplayControls(false)"
                       
                     >

                <div title="Change profile picture" class="img_changer"
                     @click="remove_pp()"
                     @mouseover="DisplayControls(true)"
                     @mouseout="DisplayControls(false)"
                >Change Profile Picture
                </div>

                <div title="Remove profile picture" class="img_remover"
                     @click="remove_pp()"
                     @mouseover="DisplayControls(true)"
                     @mouseout="DisplayControls(false)"
                    >Remove profile picture
                </div>
            </div>
        </div>
        <div class="userDetails">
            <span class="name">{{ user.member.name.toUpperCase()}} {{ user.member.surname.toUpperCase() }}</span><br style="line-height: 0.1">
            <span class="username">@ {{user.member.username }}</span><br style="line-height: 0.1">

            <button v-if=" account_type == 'artist' "  class="btn" @click="upload()">Upload</button>
            <button v-if=" account_type == 'fan' "  class="btn" @click="getMusic()">Explore</button>

            <br style="line-height: 0.1">
            <router-link to="/profile/followers" active-class="active" id="follower">{{user.followers}} Followers</router-link>&nbsp;&nbsp;&nbsp;
            &emsp;&emsp;<router-link to="/profile/followings" active-class="active" id="following">{{user.followings}} Followings</router-link>
            <br
                    style="line-height: 0.1">
            <span style="font-size: 13px"> {{user.member.bio | Ucfirst}}</span><br style="line-height: 0.1">
            <span class="country" style="float: left">
                <img style="width:13px; margin-top:-10px" src="/thumbnails/location.png"> {{user.member.country | Ucfirst}}
                <img style="width:20px;margin-top:-5px" src="/flags/ZA.png"> | <span>{{user.member.account_type | Ucfirst}}</span>
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

    .edit {
        width: 27px;
        cursor: pointer;
        float: right;
        margin-right: 5px;
        margin-top: 0px;
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
        cursor: pointer;
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

    .loader {
        width: 50px;
        margin: -70% 0px 0px 35%;
        display: none;
    }

    .pp_input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 180px;
        z-index: 400;
    }

    .img_changer {
        width: 100%;
        color: rgb(149, 75, 75);
        display: block;
        font-size: 15px;
        text-align: center;
        transition: display ease 1s;
        cursor: pointer;
        border-top: 1px solid rgb(149, 75, 75);
        background-color: #eed5b7;
        height: 25px;
        padding-top: 4px;

    }

    .img_controller {
        background-color: #eed5b7;
        width: 23.7%;
        height: 60px;
        position: absolute;
        margin-top: -50px;
    }
    .img_controller:hover{
        display: block;
    }
    .img_remover {
        width:100%;
        color: rgb(149, 75, 75);
        font-size: 15px;
        text-align: center;
        transition: display ease 1s;
        cursor: pointer;
        border-top: 1px solid rgb(149, 75, 75);
        background-color: #eed5b7;
        height: 25px;
        margin-top: 3px;
        padding-top: 4px;

    }
</style>
