<template>
    <div style="padding: 20px" >
        <p style="font-size:20px; margin:-20px 0px 0px 0px" align="center"><b>Promoted on {{ insight[0].created_at | formatDate}}</b></p><br>
        <div class="row" >
        <div class="col-6" ><p style="font-size:18px;" align="center"><b>  {{insight[0].Hits}} </b></p><p class="insight" align="center">Hits</p></div>
        <div class="col-6" ><p style="font-size:18px;" align="center"><b> {{insight[0].Impressions}} </b></p><p class="insight" align="center" >Impressions</p></div>
        </div>
        <div class="row" v-if=" insight[0].music_id != '0' ">
            <div class="col-6"><p style="font-size:18px;" align="center"><b> {{insight[0].PlayLists}} </b></p><p class="insight" align="center">Playlist</p></div><br><br><br><br>
            <div class="col-6"><p style="font-size:18px;" align="center"><b> {{insight[0].Comments}} </b></p><p class="insight" align="center">Comments</p></div>
        </div>
        <div class="row" v-if=" insight[0].music_id != '0' ">
           <div class="col-6"><p style="font-size:18px;" align="center"><b> {{insight[0].Downloads}} </b></p><p class="insight" align="center">Downloads</p></div>
           <div class="col-6"><p style="font-size:18px;" align="center"><b> {{insight[0].Plays}} </b></p><p class="insight" align="center">Plays</p></div>
        </div>
        <div class="row" v-if=" insight[0].music_id == '0' ">
            <div class="col-12"><p style="font-size:18px;" align="center"><b> {{ insight[0].Followers }} </b></p><p class="insight" align="center">Followers</p></div>
        </div>
    </div>
</template>

<script>
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                insight:[]
            }
        },
       created(){
           buss.$emit('setColor','')
            $.getJSON('/api/getAdInsight/'+this.$route.params.id , (response)=>{
                buss.$emit('Closeloading','')
               if(response !== 'Not Exists') {
                   this.insight = response
               }else{
                   this.$router.push('/error')
               }
            })
       },

        metaInfo: {
            title: 'View Insight',
        }
    }
</script>

<style scoped>
 .insight{
     font-size: 18px;
     margin-top:0px;
     color:rgb(11,200,39)
 }
</style>
