<template>
    <div style="padding: 20px" >

        <p style="font-size:20px; margin:-20px 0px 0px 0px" align="center"><b>Promoted on {{ insight.data[0].Started_at | DateFormat }}</b></p><br>
        <div class="row" >
            <div class="col-6" ><p style="font-size:18px; color:rgb(11,200,39)" align="center"><b>  {{insight.data[0].Hits}} </b></p><p class="insight" align="center">Hits</p></div>
            <div class="col-6" ><p style="font-size:18px; color:rgb(11,200,39)" align="center"><b> {{insight.data[0].Impressions}} </b></p><p class="insight" align="center" >Impressions</p></div>
        </div>
        <div class="row" v-if=" insight.data[0].Music_id != '0' ">
            <div class="col-6"><p style="font-size:18px;color:rgb(11,200,39)" align="center"><b> {{insight.data[0].PlayLists}} </b></p><p class="insight" align="center">Playlist</p></div><br><br><br><br>
            <div class="col-6"><p style="font-size:18px;color:rgb(11,200,39)" align="center"><b> {{insight.data[0].Comments}} </b></p><p class="insight" align="center">Comments</p></div>
        </div>
        <div class="row" v-if=" insight.data[0].Music_id != '0' ">
            <div class="col-6"><p style="font-size:18px;color:rgb(11,200,39)" align="center"><b> {{insight.data[0].Downloads}} </b></p><p class="insight" align="center">Downloads</p></div>
            <div class="col-6"><p style="font-size:18px;color:rgb(11,200,39)" align="center"><b> {{insight.data[0].Plays}} </b></p><p class="insight" align="center">Plays</p></div>
        </div>
        <div class="row" v-if=" insight.data[0].Music_id == '0' ">
            <div class="col-12"><p style="font-size:18px;color:rgb(11,200,39)" align="center"><b> {{ insight.data[0].Followers }} </b></p><p class="insight" align="center">Followers</p></div>
        </div><br><br><br><br>
        <p style="color:red;font-size:20px; margin:-20px 0px 0px 0px" align="center"><b>Ended on {{ insight.data[0].created_at | DateFormat }}</b></p><br>

        <p style="font-size:16px; margin:-20px 0px 0px 0px" align="center"><b>Get more result</b></p>
        <h6 align="center">
            <button @click="PromoteAgain()" class="btn_promote"><b>Promote</b></button>
        </h6>
        <div>
            <button v-if="insight.current_page > 1" @click="getResults(insight.current_page - 1)" class="prev"> <</button>
            <h2 v-if="insight.current_page != insight.last_page">{{ insight.current_page }} </h2>
            <button v-if="insight.current_page != insight.last_page" @click="getResults(insight.current_page + 1)"
                    class="next"> >
            </button>
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
            this.getResults();
        },

        methods: {
            PromoteAgain(){
                if(this.insight.data[0].Music_id != '') {
                    this.$router.push('/profile/ads/promote/' + this.insight.data[0].Music_id)
                }else{
                    this.$router.push('/profile/ads/promote/' + this.insight.data[0].Member_id)
                }
            },
            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                $.getJSON('/api/getAdHistoryInsight/'+this.$route.params.id +'?page=' +page , (response)=>{
                    buss.$emit('Closeloading','')
                    if(response !== 'Not Exists') {
                        this.insight = response
                    }else{
                        this.$router.push('/error')
                    }
                })
            },
        },
        metaInfo: {
            title: 'History Insight',
        }
    }
</script>

<style scoped>
    .insight{
        font-size: 18px;
        margin-top:0px;
        color: rgb(149, 75, 75);
    }
    .prev {
        width: 30px;
        float: left;
        color: rgb(149, 75, 75);
        background: #eed5b7;
        margin-top: 12px;
        cursor: pointer;
        outline: none;
        padding: 0px;
        align-content: center;
        height: 30px;
        border: 1px solid rgb(149, 75, 75);
    }

    .next {
        width: 30px;
        float: right;
        color: rgb(149, 75, 75);
        background: #eed5b7;
        cursor: pointer;
        outline: none;
        margin-top: -25px;
        padding: 0px;
        align-content: center;
        height: 30px;
        border: 1px solid rgb(149, 75, 75);
    }

    .btn_promote {
        padding: 8px;
        width: 200px;
        border-radius: 20px;
        outline: none;
        font-size: 20px;
        color: #eed5b7;
        background-color: #d19275;
    }

    h2 {
        font-weight: bold;
        font-size: 22px;
        margin-top: 25px;
        color: rgb(149, 75, 75);
        margin-left: 50%;
    }

    h4 {
        align-content: center;
        font-weight: bold;
        color: rgb(149, 75, 75);
    }

    img {
        width: 80px;
        float: left
    }

    .icon_and_label {
        display: inline-block;
        padding-top: 6px
    }

    small {
        font-size: 11px;
        padding-top: 6px;
    }

    p {
        margin: -3px 0px 0px 0px;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }


</style>
