<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Help </h1>
            <h6 align=center>Should you need any assistance we're here to help.</h6>
        </div>
        <hr>
        <div class="sub-container" align="center">
            <h4>(a) How do I create an Bogiyo account ? </h4>

            <p>Go to
                <a href="/signup"><a>bogiyo.com/signup</a></a>
                and fill our simple form
            </p>

            <h4>(b) How much does it cost to open an Account on Bogiyo ? </h4>

            <p>It is free of charge, Best things in Life are free. </p>

            <h4>(c) Why can't I register certain usernames ? </h4>

            <p>If you try to select a username and see that it has already been claimed, you will need to select a
                different one.<br>
                Adding a number or underscores before or after your desired username will help you claim a unique
                username.. </p>

            <h4>(d) I see an error message when I try to select my username, but I don’t think it’s taken! ? </h4>

            <p>Your username cannot be longer than 15 characters. Your real name can be longer (20 characters), but
                usernames are kept shorter for the sake of ease.<br>
                A username can only contain alphanumeric characters (letters A-Z, numbers 0-9) with the exception of
                underscores, as noted above.<br>
                Check to make sure your desired username doesn't contain any symbols, dashes, or spaces.<br> The
                username may be claimed by a suspended or deactivated account.<br>
                Suspended and deactivated usernames are not immediately available for use, so you’ll need to select a
                different username.
            </p>

            <h4>(e) How do I change my profile picture ? </h4>

            <p>Go to your Profile and click the 'pen' icon to edit, and click the 'change profile picture' link, or just
                simply Click on your current profile to change it. </p>

            <h4>(f) How do I search my favorite artists, lounge or songs ? </h4>

            <p>On every page, you can enter artists, lounge and songs on the search box and click "Search" to find
                relevant results. </p>

            <h4>(g) How do I stream songs ? </h4>

            <p>This option is currently available on the desktop version, on the download page you will see the player
                on the right, Press Play. </p>

            <h4>(h) How do I share songs and my lounge ? </h4>

            <p>You can do so by clicking Facebook or Twitter banner on the page/content you want to share. </p>

            <h4>(i) Can I add songs to my playlist ?</h4>

            <p>Yes, You can add as many songs as you want on your playlist, on the download page click 'add to
                playlist'. </p>

            <h4>(j) How do I delete songs on my playlist ?</h4>

            <p>You can delete your unwanted songs on your Profile, go to 'Playlist' and below your no longer wanted song
                click 'remove from playlist'. </p>

            <h4>(k)How do I change my password ?</h4>

            <p>Go to your Profile, click the 'pen' to edit, at the bottom click on 'Security settings', click save after
                changing it . </p>

            <h4>(l)What format does Bogiyo support and Size ?</h4>

            <p>Bogiyo supports wav, wma and obviously mp3. with the size of 1kb to 100mb. </p>

            <h4>(m) How do I report piracy ?</h4>

            <p>To report piracy or copyrights infringements please email us a DMCA takedown at copyrights@bogiyo.com
                .</p>

            <h4>(n) Is Bogiyo legal ?</h4>

            <p>Absolutely, Bogiyo is piracy-free .</p>

            <h4>(o) Where I can reset my password ?</h4>

            <p>Go to
                <a href="/resetpassword"><a>Reset password </a></a>
                page .
            </p>


            <h4>(p) Why am I being asked to enter my email login information while trying to reset my Bogiyo password
                ?</h4>

            <p>We need to make sure that this Bogiyo account belongs to you before we let you reset your password.</p>


            <h4>(q) How do I de-activate my account ?</h4>

            <p>Go to your Profile, click the 'pen' to edit, select security settings link and de-activate your
                account.</p>


        </div>
        <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:0px ;">
             <hr v-if="show">
            <app-login id="#login" v-if="show"></app-login>
        </div>

        <hr>
    </div>
</template>

<script>
    import login from  '../../website/login/mobile_login.vue'
    import {buss} from '../../../app'
    export default {

        components: {
            appLogin: login,
        },

        data () {
            return {
                show:true,
            }
        },
        created(){
            buss.$emit('MobileLogin',()=>{
                this.show = true
            });
            if(this.$session.has('username') && this.$session.has('id')){
                this.show = false
            }
            buss.$emit('setColor', '')
            window.scrollTo(0, 0)
        }

    }
</script>

<style scoped>
    h4 {
        font-weight: bold;
    }

    a {
        color: #b76666;
    }

    a:hover {
        color: #b76666;
    }
</style>

