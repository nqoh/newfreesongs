<template>
    <div>

        <div class="row" style="padding: 0px">
            <div v-for="user in member.data" class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding-top: 10px;;padding-bottom: 20px;">
                <div v-if=" user.Music_id != '0' ">
                    <router-link :to="'/profile/feeds'"><img :src="user.album_art" onerror="this.src='/thumbnails/olova.png';"></router-link>
                    <div class="icon_and_label">
                        <div class="icon"></div>
                        <small>{{ user.track.substr(0,27) }}</small>
                    </div>
                    <br>
                    <div class="icon_and_label">
                        <div class="size"></div>
                        <small> {{ (user.size / 1000000).toFixed(2) }} Mb | {{ user.duration }} Min</small>
                    </div>
                    <br>
                    <div class="icon_and_label">
                        <div class="by"></div>
                        <small><b>By :</b>
                            <router-link :to="'/profile/feeds'" append>{{ user.name | Ucfirst }}</router-link>
                        </small>
                    </div>

                    <p>
                        <router-link :to="'/profile/ads/history/insights/' + user.Music_id "><b>View Insight</b></router-link>
                    </p>

                </div>

                <div v-if=" user.Music_id == '0' "  >
                    <router-link :to="'/profile/timeline'"><img :src="user.image" onerror="this.src='/thumbnails/newuser.gif';"></router-link>
                    <div style="padding-left: 10px;">
                        <strong>
                            <router-link :to="'/profile/feeds'" style=";font-size: 18px; color: rgb(149,75,75)">
                                {{user.name |
                                Ucfirst}}
                            </router-link>
                        </strong>
                        <p style="margin-top: -5px"><b>{{followers}}</b> Followers</p>
                        <p style="margin-top: -5px">{{totalSongs}} Songs Uploaded</p>
                        <p style="font-size: 11px;height: 20px;">{{user.bio}} </p>
                        <router-link :to="'/profile/ads/history/insights/' + user.Music_id "><b>View Insight</b></router-link>
                    </div>

                </div>


            </div>
        </div>

        <div>
            <button v-if="member.current_page > 1" @click="getResults(member.current_page - 1)" class="prev"> <</button>
            <h2 v-if="member.current_page != member.last_page">{{ member.current_page }} </h2>
            <button v-if="member.current_page != member.last_page" @click="getResults(member.current_page + 1)"
                    class="next"> >
            </button>
        </div>
        <p v-if=" member.data =='' " align="center" class="nothing">You have no new history.</p>
    </div>
</template>

<script>
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                member: [],
                followers: 0,
                totalSongs: 0,
                priceCurrency: [],
            }
        },
        beforeCreate(){
            $.get('/api/getPriceCurrency', (response) => {
                this.priceCurrency = response
            });
        },

        created(){
            buss.$emit('setColor','')
            this.getResults();
        },

        methods: {
            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                $.get('/api/AdHistory?page=' + page, (response) => {
                    buss.$emit('Closeloading','')
                    this.member = response.member
                    this.totalSongs = response.totalSongs
                    this.followers = response.followers
                })
            },
        },

        metaInfo: {
            title: 'History',
        }

    }
</script>

<style scoped>

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