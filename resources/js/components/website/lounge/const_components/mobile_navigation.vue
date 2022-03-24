<template>
    <div style="margin-top:3px;background-color: #eed5b7;align-content: center">
        <ul class="nav" style="padding:0px;">
            <li v-show=" account_type == 'artist' ">
                <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" id="musicM" role="button"
                   aria-haspopup="true" aria-expanded="false">Music</a>
                    <div class="dropdown-menu" aria-labelledby="musicM">
                        <a><span @click="setComponent('AllM')" class="dropdown-item">All</span></a>
                        <a><span @click="setComponent('FreeM')"  class="dropdown-item">Free Music</span></a>
                        <a><span @click="setComponent('PaidM')" class="dropdown-item">Paid Music</span></a>
                    </div>
            </li>

            <li>
            <a>
            <span class="nav-link" id="playlistM" @click="setComponent('Playlist')" >Playlist</span>
            </a>
            </li>

             <li>
            <a v-show="sessionIson" >
                <span class="nav-link" id="messageM" @click="setComponent('Messages')">Message</span>
            </a>
            </li>
            <li>
            <a v-if="!sessionIson" href="#login" >
                <span class="nav-link" >Message</span>
            </a>
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
            }
        },

        created(){
             buss.$on('setNave',(account_type)=>{
                this.account_type = account_type
            });
            
            $.get('/api/getLoungeMemberDetails/'+this.id,(response)=>{
                this.account_type = response.member.account_type;
            });

            buss.$on('setAcountType',(id)=>{
                $.get('/api/getLoungeMemberDetails/'+id,(response)=>{
                    this.account_type = response.member.account_type;
                });
            })

            buss.$on('userLogin',(data)=>{
                this.sessionIsOn();
            })

            this.sessionIsOn();

            buss.$on('setLoungLink',()=>{
                _('musicM').style.color='rgb(149, 75, 75)'
                _('playlistM').style.color='rgb(149, 75, 75)'
                _('messageM').style.color='rgb(149, 75, 75)'
            })
        },

        methods: {

            sessionIsOn(){
                if (this.$session.has('username')) {
                    this.sessionIson = true
                } else {
                    this.sessionIson = false
                }
            },

            setComponent(Comp){
                _('musicM').style.color='rgb(149, 75, 75)'
                _('playlistM').style.color='rgb(149, 75, 75)'
                _('messageM').style.color='rgb(149, 75, 75)'
                buss.$emit('setLinkColor','')
                if(Comp === 'FreeM'){
                    buss.$emit('freeMusic','')
                    _('musicM').style.color='#d19275'
                }

                if(Comp === 'PaidM'){
                    buss.$emit('PaidMusic','')
                    _('musicM').style.color='#d19275'
                }

                if(Comp === 'AllM'){
                    buss.$emit('allMusic','')
                    _('musicM').style.color='#d19275'
                }

                if(Comp === 'Playlist'){
                    _('playlistM').style.color = '#d19275'
                    buss.$emit('Playlist','')
                }
                if(Comp === 'Messages'){
                    buss.$emit('messages','')
                    _('messageM').style.color='#d19275'
                }
            }
        }
    }
</script>

<style scoped>
    .active a {
        color: #d19275;
    }

    a {
        font-weight: bold;
        font-size: 95%;
    }

    .nav-link {
        font-weight: bold;
        font-size: 95%;
        cursor: pointer;
        margin-left: -10px;
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
