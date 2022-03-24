<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center>Bogiyo Store </h1>
            <h6 align=center>Welcome to Bogiyo online store</h6>
        </div>
        <hr>
        <div class="sub-container">
            <p style="font-size: 18px">
                In this article we will outline the usage of our store and how everyone benefits.
            <ul>
                <li><b>You only need to reach a minimum of 1 000 FREE downloads to sell your music.</b></li><br>
                <li><b>Fans can use credit card to purchase your music.</b></li><br>
                <li><b>Payouts are done on the 7th of every month</b></li><br>
                <li><b>You need R500.00 to be aligible for a payout</b></li>
            </ul>
            </p>
            <h1 align="center">How it works</h1>
            <p>
                Songs are sold at the amount of R10.00. Bogiyo store is convinient for the morden day online shoppers as it requires credit card to make purchases, and data plan for browsing and downloading, we recommend you create an account to get the best of our store. To qualify you need to reach a minimum of 1 000 free downloads (during which your account will be monitored to see if you comply with out Terms and Conditions) this is to prevent piracy and misuse of our store.
            </p>
            <p>
                Payments are done on the 7th of every month you need to reach a minimum of R500.00  to be eligible for a payout, if not, all your earning will be paid to you after 6months.
                At Bogiyo you get 75% of your sales (that is 17 times higher than our competitors) the rest is then split between the service provider, Bogiyo and the third party
                company which processes the payments. Please make sure your payment details are correct before the payment date, these details will not be publicly available.
            </p>

            <p>
                Fans download music with or without an account, without an account you will download your song on the go, the song will be unlocked for 3minutes after that it will no longer be available for free, however if you have an account your purchased
                song will be saved to your lounge under the paid music section and you can get it anytime, incase you delete or want to download it later.
            </p>
            <p>
                Before making purchases on the go please be sure your data plan or storage  is sufficient as they are no refunds nor retries, if you purchase through your
                account you can rest easy your song will be unlocked.
            </p>
            <p>
                If accepted to use the Content ID tools, applicants will be required to complete an agreement explicitly stating that only
                content with exclusive rights can be used as references. Additionally, accepted applicants will need to provide the geographic
                locations of exclusive ownership, if not worldwide
            </p>
            <p>
                For help regarding your purchases you can <a href="/contactus">Contact us</a> referencing your email address used for the transaction
            </p>

            <p>
                Also refer to our <a href="/terms">Terms and condition</a> and <a href="/privacy">Privacy policy</a> page for more clarity.
            </p>
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
            return {show:true,}
        },
        created(){
            buss.$emit('MobileLogin',()=>{
                this.show = true
            });
            if(this.$session.has('username') && this.$session.has('id')){
                this.show = false
            }
            buss.$emit('setColor','')
            window.scrollTo(0,0)
        },

        metaInfo: {
            title: 'Store',
            meta: [
                {name: 'Description', content: 'Sell your music on Bogiyo and start making your own money.'},
            ]
        },


    }
</script>

<style>

</style>
