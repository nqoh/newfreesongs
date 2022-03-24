<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Promotions  </h1>
            <h2 align=center><b>Grow your fanbase.</b></h2>
        </div>
        <hr>
        <div class="sub-container" style="height: auto;">
            <div class="row">
                <div class="col-6" style="padding:0px 0px 0px 3px">
            <img src="/thumbnails/artist.jpg" class="card-img" style="max-width: 250px; max-height: 250px; ">
                </div>
                <div class="col-6" style="padding:0px">
            <ul  >
                <li><b>Use credit card to promote your music</b></li><br>
                <li><b>Grow your fanbase, world wide.</b></li><br>

                <li v-if="show"><b>Reach up to 100 000 people,
                    <a href="/profile/ads" style="color:rgb(149,75,75)">advertise now</a>
                 </b></li>

                <li v-if="!show"><b>Reach up to 100 000 people,
                    <router-link to="/signup" style="color:rgb(149,75,75)"><a>advertise now</a></router-link>
                </b></li>
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


    }
</script>

<style>

</style>
