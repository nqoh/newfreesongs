<template>
    <div class="container-fluid" style="padding:0px 5px 0px 5px; margin: 0px">
        <div class="footer-box">
            <div  align="center">
                <p id="footer">Bogiyo &copy; {{ new Date().getFullYear() }} &nbsp; <a href="../../contactus">
                    <b>Contact Us</b></a> - <a href='../../aboutus'><b>About Us</b></a> -
                    <a href="../../privacy"><b>Privacy Policy</b></a> - <a href="../../help"><b>Help</b></a>
                    - <a href="../../copyright"><b>Copyright</b></a> - <a href="../../terms"><b>Terms and Conditions</b></a>
                     <a href="https://www.facebook.com/pages/Mp3Olova/1512466575638686" shape=rect alt="Like Bogiyo">
                        <img src="/thumbnails/faceb.png" style="width: 21px; height: 17px"></a>
                    <a href="https://twitter.com/bogiyomusic" shape=rect alt="follow Bogiyo"><img src="/thumbnails/twit.png" style="width: 21px; height: 17px"></a>
                    <a href="https://www.instagram.com/bogiyomusic" shape=rect alt="follow Bogiyo"><img src="/thumbnails/insta.png" style="width: 21px; height: 17px"></a>
                    <br> Music Social Media | <a href="https://m.bogiyo.com">Lite version </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data () {
            return {}
        },

    }
</script>

<style scoped>
.container-fluid > .footer-box{
    padding: 0px;
}
.footer-box div{
    background: #b05f3c;
    padding: 0px
}
#footer{
    color: white
}
#footer a{
    color:#eed5b7
}
</style>
