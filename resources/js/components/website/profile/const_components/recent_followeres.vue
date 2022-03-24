<template>
    <div>
        <div class="alert sub-container" style="width: 100%; padding: 0px; height: 405px">
            <div class="box_label">
                <h4 align="center">Recent Followers</h4>
            </div>
            <div class="row">
                <div class="col-4" v-for="follower in followers">
                    <router-link :to="'/' + follower.username"><img :src="follower.image" class="card-img embed-responsive"></router-link>
                    <p align="center">
                        <router-link :to="'/' + follower.username"><b>{{follower.name | Ucfirst}}</b></router-link>
                    </p>
                </div>

            </div>
            <p v-if=" followers.length <= '0' " align="center" class="nothing">You do not have any follower.</p>
        </div>

    </div>
</template>

<script>
    export default {

        data () {
            return {
                followers: [],

            }
        },
        beforeCreate(){
            $.get('/api/recentFollowers', (response) => {
                this.followers = response
            });
        },

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
