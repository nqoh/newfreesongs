<template>
    <div style="margin-top: 3px; align-content: center">
            <ul class="nav">
                <li v-show=" account_type == 'artist' ">
                    <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" id="musicD" role="button"
                       aria-haspopup="true" aria-expanded="false">Music</a>
                    <div class="dropdown-menu" aria-labelledby="music">
                        <a><span v-if=" account_type == 'artist' " @click="setComponent('AllM')"  class="dropdown-item">All</span></a>
                        <a><span v-if=" account_type == 'artist' " @click="setComponent('FreeM')"  class="dropdown-item">Free Music</span></a>
                        <a><span v-if=" account_type == 'artist' " @click="setComponent('PaidM')" class="dropdown-item">Paid Music</span></a>
                    </div>
                </li>

                <li>
                    <a><span class="nav-link"  id="playlistD"  @click="setComponent('Playlist')" >Playlist</span></a>
                </li>


                <li v-show="sessionIson"  >
                    <a><span class="nav-link" id="messageD" @click="setComponent('messages')">Message</span></a>
                </li>

                <li v-if="!sessionIson" >
                    <a><span  class="nav-link" @click="Login()">Message</span></a>
                </li>

            </ul>
    </div>
</template>

<script>
    import {buss} from '../../../../app'
     function _(x) {return document.getElementById(x)}
    export default {
        props:['id'],
        data () {
            return {
                account_type:'',
                sessionIson:false,
                pointer:''
            }
        },
        created(){
            
             buss.$on('setNave',(account_type)=>{
                this.account_type = account_type
            })
            
            $.get('/api/getLoungeMemberDetails/'+this.id,(response)=>{
                this.account_type = response.member.account_type;
            });
            buss.$on('userLogin',(data)=>{
              this.sessionIsOn();
            })
            this.sessionIsOn();
            buss.$on('setLoungLink',()=>{
                _("musicD").style.color='rgb(149, 75, 75)'
                _("playlistD").style.color='rgb(149, 75, 75)'
                _("messageD").style.color='rgb(149, 75, 75)'
            })
        },
        methods:{
            
           /* setLoader(val){
                if(this.pointer !== val ) {
                    this.pointer = val
                    buss.$emit('Openloading', '')
                }
            },*/
            
            Login(){
                buss.$emit('login', 'Log In')
                $("[data-toggle=modal]").trigger({type: "click"});
            },
            
             sessionIsOn(){
               if(this.$session.has('username')){
                 this.sessionIson = true
               }else{
                 this.sessionIson = false
               }
             },
             
            setComponent(Comp){
                _("musicD").style.color='rgb(149, 75, 75)'
                _("playlistD").style.color='rgb(149, 75, 75)'
                _("messageD").style.color='rgb(149, 75, 75)'
                 buss.$emit('setLinkColor','')
                
                if(Comp === 'FreeM'){
                    buss.$emit('freeMusic','')
                    _('musicD').style.color='#d19275'
                }

                if(Comp === 'PaidM'){
                    buss.$emit('PaidMusic','')
                    _('musicD').style.color='#d19275'
                }

                if(Comp === 'AllM'){
                    buss.$emit('allMusic','')
                     _('musicD').style.color='#d19275'
                }
                if(Comp === 'Playlist'){
                    buss.$emit('Playlist','')
                    _('playlistD').style.color='#d19275'
                }
                if(Comp === 'messages'){
                    buss.$emit('messages','')
                    _('messageD').style.color='#d19275'
                }
            }
        }
    }
</script>

<style scoped>
    .link{
        cursor: pointer;
        color: rgb(149, 75, 75);
    }

    .active span{
        color: #d19275;
    }

    span {
        font-weight: bold;
        font-size: 130%;
    }

    .nav-link {
        font-weight: bold;
        font-size: 140%;
        cursor: pointer;
        color: rgb(149, 75, 75);
    }

    .dropdown-menu {
        background-color: #d19275;
        border: 1px solid rgb(149, 75, 75);
    }

    .dropdown-menu span {
        cursor: pointer;
        color: #eed5b7;
    }

    .dropdown-menu span:hover {
        color: #d19275;
        background-color: #eed5b7;
    }
</style>
