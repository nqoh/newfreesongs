<template>
    <div class="container-fluid" style="padding:5px 5px 0px 5px; margin: 0px">
        <a href="/">
            <div class="alert logo-container">
                <img src="/thumbnails/logo.png" class="card-img embed-responsive">
            </div>
        </a>

        <nav class="navbar navbar-expand ">
            <div class="input-group desktop_search_box col-xl-4 col-lg-4 col-md-5 col-sm-6 col-6" >
               <input type="text" style="padding-right: 8%" @keyup.enter="Search()" @keyup.once="getSearchDataList()" id="search"  class="form-control awesomplete"
                       :data="dataList" placeholder="Search...">
                <div class="input-group-prepend" @click="Search()">
                        <span class="input-group-text" id="mm">
                        </span>
                </div>
            </div>
            <span style="display: none" data-dismiss="modal"></span>

            <ul class="navbar-nav  embed-responsive">

                    <span class="d-none d-xl-block d-lg-block col-md-12" style="padding: 0px">

                    <li class="nav-item" v-if="!logedin">
                        <a class="nav-link" style="cursor: pointer; font-weight: bold;color: white;cursor: pointer;"
                           @click="logIn()">Log In</a>
                    </li>

                    <li class="nav-item" v-if="logedin">
                        <a class="nav-link" style=" font-weight: bold;color: white;cursor: pointer;" @click="LogOut()">Log Out</a>
                    </li>

                    </span>

                <span style="padding: 0px" v-if="!logedin" class="d-none d-xl-none d-lg-none d-block">
                        <li><a class="nav-link" href="#login" style=" font-weight: bold;color: white;">Log In</a></li>
                   </span>

                <span style="padding: 0px" v-if="logedin" class="d-none d-xl-none d-lg-none d-block">
                       <li><a class="nav-link" @click="LogOut()"
                              style="cursor: pointer; font-weight: bold;color: white;">Log Out</a></li>
                   </span>

                <span style="display: none" data-toggle="modal" data-target="#signup" aria-hidden="true"></span>

                <li class="nav-item" style="margin: 0px;">
                    <a class="nav-link" style="color: white">|</a>
                </li>

                <span class="d-none d-xl-block d-lg-block  col-md-12" style="padding: 0px">

                    <li class="nav-item" v-if="!logedin">
                        <a class="nav-link" style=" font-weight: bold;color: white;cursor: pointer;" @click="signUp()">Sign Up</a>
                    </li>

                    <li class="nav-item" v-if="logedin">

                            <a class="nav-link" :id="color"
                               style=" font-weight: bold; cursor: pointer;" href="/profile/feeds">
                                {{name.charAt(0).toUpperCase() + name.slice(1) }}</a>
                    </li>

                    </span>

                <span style="padding: 0px" v-if="!logedin" class="d-none d-xl-none d-lg-none d-block">
                       <li><a class="nav-link" href="/signup" style=" font-weight: bold;color: white;">Sign Up</a></li>
                   </span>

                <span style="padding: 0px" v-if="logedin" class="d-none d-xl-none d-lg-none d-md-block d-block">
                       <li>
                           <a class="nav-link" href="/profile/feeds" :id="color" style=" font-weight: bold;">{{ name.charAt(0).toUpperCase() + name.slice(1).substr(0,7)}}</a>
                       </li>
                   </span>


                <li class="nav-item">
                    <a href="/profile/feeds">
                        <img v-if="username" :src="image"
                             onerror="this.src='/thumbnails/newuser.gif';"
                             class="d-none d-xl-block  d-lg-block d-md-block d-sm-block d-none" style="width:40px;">
                    </a>
                </li>

            </ul>
        </nav>
        <app-modal></app-modal>
    </div>
</template>

<script>
    function _(x) {
        return document.getElementById(x)
    }
    import modal   from  '../../website/modal/modal.vue'
    import {buss} from '../../../app'
    export default {
        components:{
            appModal: modal,
        },
        data () {
            return {
                id: 0,
                name: 'Sign Up',
                username: '',
                logedin: false,
                dataList:this.$session.get('data') ,
                image: '/pictures/newuser.gif',
                color:'white'
            }

        },

        created(){

            buss.$on('userLogin', () => {
                if (this.$session.has('id') && this.$session.has('name') && this.$session.has('username')) {
                    this.setSessions()
                }else {
                    this.Refreshsessions();
                }
            });
            this.Refreshsessions();
            this.setColor();

            buss.$on('setColor',()=>{
                this.setColor();
            })


        },

        methods: {
            setColor(){
                $.get('/api/setColor/',(response)=>{
                    if(response.message !== 0 || response.alert !== 0){
                        this.color = 'green'
                    }else{
                        this.color = 'white'
                    }
                })
            },

            Refreshsessions(){
                $.get('/api/getSessions', (sessions) => {
                    if (sessions[0] !== null && sessions[1] !== null && sessions[2] !== null) {
                        this.$session.start()
                        this.$session.set('id',sessions[1])
                        this.$session.set('name',sessions[0])
                        this.$session.set('username',sessions[2])
                        this.$session.set('email',sessions[3])
                        this.setSessions()
                    } else {
                        this.id=0
                        this.name='Sign Up'
                        this.username= ''
                        this.logedin=false
                    }
                });
            },

            Search(){
                if(_('search').value !== "") {
                    window.location = '/search/' + _('search').value
                }
            },

            getSearchDataList(){
                $.get('/api/searchDataList',(response)=>{
                    this.$session.start()
                    this.$session.set('data',response);
                })
            },

            setSessions(){
                this.id = this.$session.get('id')
                this.name = this.$session.get('name')
                this.username = "/profile/" + this.$session.get('username')
                this.logedin = true
                $.get('/api/getUserImage/' + this.id, (image) => {
                    this.image = image
                })
                buss.$emit('MobileLogin', this.logedin)
            },
            LogOut(){
                this.id = 0
                this.name = 'Sign Up'
                this.username = ''
                this.logedin = false
                this.$session.destroy()
                $.get('/api/DestroySessions', (data) => {
                    buss.$emit('account_type','')
                    buss.$emit('MobileLogin', this.logedin)
                    window.location = '/';
                })


            },
            logIn(){
                $("[data-toggle=modal]").trigger({type: "click"});
                buss.$emit('login', 'Log In')
            },
            signUp(){
                $("[data-toggle=modal]").trigger({type: "click"});
                buss.$emit('signup', "Sign Up")
            }
        }

    }
</script>

<style scoped>
    #white{
        color: white;
    }
    #green{
        color: lightgreen;
    }
    .signup {
        font-weight: bold;
        color: white;
        cursor: pointer;
        padding: 0px
    }

    .logo-container {
        background: #b05f3c;
        border: none;
        border-radius: 0px;
        margin: 0px;
        padding: 0px;
    }

    .navbar {
        margin-top: 2px;
        background: #b05f3c;
        padding: 0px;

    }

    .navbar li {
        float: right;

    }

    .has-search .form-control {
        padding-left: 2.375rem;
        margin-right: 50%
    }

    .navbar-expand .navbar-nav .nav-link {
        padding-right: 0.2rem;
        padding-left: 0.2rem;
    }

    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        outline: none;
        text-align: center;
        pointer-events: none;
        color: #aaa;
    }

    .form-control {
        outline: none;
        border: none;
        height: 30px
    }

    .input-group-text {
        border: none;
        cursor: pointer;
        height: 30px;
        width: 33px;
        background: rgb(149, 75, 75);
    }

    .input-group-text {
        background-image: url("/thumbnails/searr.png")
    }

    .input-group-text:hover {
        background-image: url("/thumbnails/seeer1.png")
    }

    .desktop_search_box {
        margin-left: 3%;
        padding: 0;
    }

    .mobile_search_box {
        width: 50%;
        margin-left: 6%;
        padding: 0;
    }

    .d-sm-none {
        padding: 0px;
        width: 40%;
        margin-right: 1%;
        margin-left: 6%;
    }
</style>
