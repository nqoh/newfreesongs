<template>
    <div>
        <div class="alert sub-container" style="width: 100%; padding: 0px; height: 405px">
            <div class="box_label">
                <h4 align="center">Recent Followers</h4>
            </div>
            <div class="row">
                <div class="col-4" v-for="follower in followers">
                    <a v-if="follower.username == username" href="/profile/feeds">
                        <img :src="follower.image"
                             class="card-img embed-responsive" onerror="this.src='/thumbnails/newuser.gif';"></a>

                    <a v-else :href="'/' + follower.username">
                        <img :src="follower.image"
                                          onerror="this.src='/thumbnails/newuser.gif';"
                                            @click="getLounge(follower.username)"
                                          class="card-img embed-responsive"></a>
                    <p align="center">

                        <a v-if="follower.username == username"  href="/profile/feeds">
                            <b @click="getLounge(follower.username)">{{follower.name.substr(0,10)
                                | Ucfirst}}</b></a>

                        <a v-else  :href="'/' + follower.username">
                            <b @click="getLounge(follower.username)">{{follower.name.substr(0,10)
                            | Ucfirst}}</b></a>
                    </p>
                </div>

            </div>
            <p v-if=" followers.length <= '0' " align="center" class="nothing">No new followers.</p>
        </div>

    </div>
</template>

<script>
    import {buss} from '../../../../app'
    export default {
        props: ['id'],
        data () {
            return {
                followers: [],
                show: false,
                username:this.$session.get('username')
            }
        },
        created(){
            this.getFollowers(this.id);
            if (this.$session.has('username')) {
                this.show = true
            }

        },
        methods: {
            getFollowers(id){
                $.get('/api/LoungeRecentFollowers/' + id, (response) => {
                    this.followers = response
                });
            },
            getLounge(id){
                buss.$emit('getLounge', id)
                this.getFollowers(id);
            }
        }
    }
</script>

<style scoped>
    .col-4 {
        align-content: center;
        padding: 2px;
    }

    .row {
        padding: 15px;
        margin: 5px 0px 0px 0px;
        align-content: center;
    }

    h4 {
        align-content: center;
        font-weight: bold;
        color: rgb(149, 75, 75);
    }

    .box_label {
        width: 100%;
        border-bottom: 1px solid rgb(149, 75, 75);
        align-content: center;
        padding: 3px
    }

    img {
        width: 100%;
    }

    p {
        margin: 0px auto;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }


</style>
