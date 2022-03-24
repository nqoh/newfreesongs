<template>
    <div>
        <div class="notBox" id="wrap" @scroll="LoardMoreAlerts(num)">
        <div v-if="show" v-for="(user,i) in member">
            <div v-if="member[i].alert == 'fan'">
                <p align="center" style="font-size: 16px"><u><b>Welcome to Bogiyo</b></u></p>
                <p style="margin-left: 4px" align="center">Hi {{member[i].name | Ucfirst}} tell us more about you
                    <a href="/profile/edit" style="color:rgb(149,75,75)"><a>Edit profile</a></a>
                </p>
                <hr>
                <p align="center" style="font-size: 16px"><u>As a fan you can</u></p>
                <ul>
                    <li>Make money now,
                        <a href="/fan/promote" style="color:rgb(149,75,75)"><a>learn more</a></a>
                    </li>
                    <br>
                    <li>Add songs to your playlist to download or listen to later</li>
                    <br>
                    <li>Comment on any song uploaded</li>
                    <br>
                    <li>Follow artists and fans</li>
                    <br>
                    <li>Share your lounge</li>
                    <br>
                    <li>Send and receive messages</li>
                    <br>
                    <li>Add info about your self and more...</li>
                </ul>
                <p align="center"><a style="color:rgb(149,75,75);" @click="deleteAlert(member[i].alert_id)">Delete</a>
                </p>
            </div>
            <div v-if="member[i].alert == 'artist'">
                <p align="center" style="font-size: 16px"><u><b>Welcome to Bogiyo</b></u></p>
                <p style="margin-left: 4px" align="center">Hi {{member[i].name | Ucfirst}} tell us more about you
                    <router-link to="/profile/edit" style="color:rgb(149,75,75)"><a>Edit profile</a></router-link>
                </p>
                <hr>
                <p align="center" style="font-size: 16px"><u>As an Artist you can</u></p>
                <ul>
                    <li>Grow your fan base,
                        <a href="/artist/promote" style="color:rgb(149,75,75)"><a>promote</a></a>
                        your
                        music
                    </li>
                    <br>
                    <li>Sell your music,
                        <a href="/store" style="color:rgb(149,75,75)"><a>learn more</a></a>
                    </li>
                    <br>
                    <li>Edit your album art,lyrics and more..</li>
                    <br>
                    <li>Share your lounge and your music</li>
                    <br>
                    <li>Upload and delete your music</li>
                    <br>
                    <li>Edit your lyrics</li>
                    <br>
                    <li>Add songs to your playlist to download or listen to later</li>
                    <br>
                    <li>Comment on any song uploaded</li>
                    <br>
                </ul>
                <p align="center"><a style="color:rgb(149,75,75);" @click="deleteAlert(member[i].alert_id)">Delete</a>
                </p>
            </div>
            <p v-if="member[i].alert == 'follow'">
                <router-link :to="'/' + member[i].username" style="color: rgb(149,75,75)">{{member[i].name | Ucfirst}}
                </router-link>
                <span>
                    started following you</span> <span style="opacity: .5; font-size: 10px">{{ member[i].created_at | formatDate }}</span>&nbsp;<a
                    style="color:rgb(149,75,75);" @click="deleteAlert(member[i].alert_id)">Delete</a> <br>
            </p>


            <p v-if="member[i].alert == 'unfollow'">
                <router-link :to="'/' + member[i].username" style="color: rgb(149,75,75)">{{member[i].name | Ucfirst}}
                </router-link>
                <span>
                    has unfollowed you </span> <span style="opacity: .5; font-size: 10px">{{ member[i].created_at | formatDate }}</span>&nbsp;
                <a style="color:rgb(149,75,75);" @click="deleteAlert(member[i].alert_id)">Delete</a> <br>
            </p>

            <p v-if="member[i].alert == 'playlist'">
                <router-link :to="'/' + member[i].username" style="color: rgb(149,75,75)">{{member[i].name | Ucfirst}}
                </router-link>
                <span> Playlisted your song</span>
                <span style="opacity: .5; font-size: 10px">{{ member[i].created_at | formatDate }}
                </span>&nbsp;<a style="color:rgb(149,75,75);" @click="deleteAlert(member[i].alert_id)">Delete</a> <br>
            </p>

            <p v-if="member[i].alert.substring(0, 6) == 'upload'">
                <router-link :to="'/' + member[i].username" style="color: rgb(149,75,75)">{{member[i].name | Ucfirst}}
                </router-link>
                <span> Uploaded new track <a :href="'https://bogiyo.com/' + member[i].alert.substring(6, 11)">Download</a> </span>
                <span style="opacity: .5; font-size: 10px">{{ member[i].created_at | formatDate }}
                </span>&nbsp;<a style="color:rgb(149,75,75);" @click="deleteAlert(member[i].alert_id)">Delete</a> <br>
            </p>


            <p v-if="member[i].alert.substring(0, 7) == 'comment'">
                <router-link :to="'/' + member[i].username" style="color: rgb(149,75,75)">{{member[i].name | Ucfirst}}
                </router-link>
                <span> commented on  <a :href="'https://bogiyo.com/' + member[i].alert.substring(7, 12)">
                    {{member[i].alert.substring(12, member[i].alert.length)}}</a></span>
                <span style="opacity: .5; font-size: 10px">{{ member[i].created_at | formatDate }}
                </span>&nbsp;<a style="color:rgb(149,75,75);" @click="deleteAlert(member[i].alert_id)">Delete</a> <br>
            </p>


        </div>
        <p v-if="!show" align="center" class="nothing">You have no new notifications.</p>
        </div>
        <p v-if="show" align="center" @click="ClearAll()" class="link" style="margin-bottom: 0px" >Clear All</p>
    </div>
</template>

<script>
   import {buss} from  '../../../../app'
    export default {

        data () {
            return {
                num:10,
                member: [],
                show: true,
            }
        },
        created(){
            this.getAlerts()
            buss.$emit('setColor','')
        },
        methods: {
            ClearAll(){
                $.get('/api/clearAll/', (response) => {
                    buss.$emit('Closeloading','')
                    if (response === 'Ok') {
                        this. getAlerts()
                    }
                })
            },
            LoardMoreAlerts(num){
                var element = document.getElementById('wrap');
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    $.get('/api/alerts/'+ num , (data) => {
                        if (data.length > 0) {
                            for (var i = 0; i < data.length; i++) {
                                this.member = data
                            }
                            this.num += 10
                        }
                    });
                }
            },
            getAlerts(){
                var vm = this
                $.get('/api/alerts/' + 0, function (response) {
                    buss.$emit('Closeloading','')
                    if (response.length !== 0) {
                        vm.member = response
                        vm.show = true
                    } else {
                        vm.show = false
                    }
                })
            },
            deleteAlert(id){
                var vm = this
                $.get('/api/deleteAlert/' + id, (response) => {
                    if (response === 'Ok') {
                        vm.getAlerts();
                    }
                })
            }
        },
        metaInfo: {
            title: 'Notifications',
        }


    }
</script>

<style scoped>
    .link{
        cursor: pointer;
        color: #954b4b;
    }
    .link:hover{
        text-decoration: underline;
    }
    a {
        color: rgb(149, 75, 75);
        margin-top: -15px;
        cursor: pointer;
    }

    .nothing {
        font-style: italic;
        margin: 20px auto;
        font-size: 20px;
    }

    .notBox {
        height: 500px;
        overflow: auto;
    }

    .notBox {
        height: 430px;
        width: 100%;
        padding: 3px;
        overflow: auto;
    }

    .notBox::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    .notBox::-webkit-scrollbar-thumb {
        background-color: rgb(149, 75, 75);
    }

    .notBox::-webkit-scrollbar-track {
        /*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        background-color: transparent;
    }
</style>
