<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Promotions  </h1>
            <h2 align=center> <b>Earn money by promoting music.</b></h2>
        </div>
        <hr>
        <div class="sub-container" style="height: auto">
            <div class="row">
                <div class="col-6" style="padding:0px 0px 0px 3px">
            <img src="/thumbnails/fan.png" class="card-img" style="max-width: 380px; max-height: 380px;">
                </div>
                <div class="col-6" style="padding:0px">
            <ul  >
                <span style="font-size: 26px;color: rgb(149,75,75);"><b>Follow these 4 easy steps</b></span><br>

                <li><b>Purchase any song </b></li>

                <li v-if="show"><b>Receive your unique link
                    <a href="/profile/earnings" style="color:rgb(149,75,75)">here</a>
                </b><br></li>


                <li v-if="!show"><b>Receive your unique link
                    <a href="/signup" style="color:rgb(149,75,75)">here</a>
                </b><br></li>

                <li><b>Start sharing your promo link on your social media platform. </b><br></li>



                <li v-if="show"><b>keep track of your
                    <a href="/profile/earnings" style="color:rgb(149,75,75)">earnings</a>
                  </b><br></li>

                <li v-if="!show"><b>keep track of your
                    <a href="/signup" style="color:rgb(149,75,75)">earnings</a></b>
                </li>

            </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {buss} from '../../../app'
    export default {

        data () {
            return {
                show:false,
            }
        },
        created(){
            buss.$emit('setColor','')
            if(this.$session.has('id')){
                this.show = true
            }else{
                this.show = false
            }
        },

        metaInfo: {
            title: 'How to Promote',
        }

    }
</script>

<style scoped>
    ul li{
        margin-top: 30px;
    }

</style>
