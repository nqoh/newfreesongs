function _(x) {return document.getElementById(x)}
import {buss} from '../../../../app'
import VueContentLoading from 'vue-content-loading';
export const headerMixin={
    components:{
        VueContentLoading
    },
    props:['id'],
    data () {
        return {
            account_type: '',
            user: [],
            show: false,
            member_image: '',
            img: true,
            flag:'',
            username: this.$session.get('username'),
            name: this.$session.get('name'),
            doIfollowu:false,
            twitter:'http://twitter.com/share?url=https://www.bogiyo.com/',
            whatsapp:'whatsapp://send?text=https://www.bogiyo.com/',
            fb:'http://www.facebook.com/sharer.php?u=https://www.bogiyo.com/',
            showLoader:true
        }
    },

    created(){
        buss.$emit('setColor','')
        this.getDetails(this.id)
        this.doIfollowU(this.id);
        buss.$on("getLoungeDetails",(data)=>{
            this.getDetails(this.id)
            this.doIfollowU(this.id);
        });

            buss.$on('getLounge',(id)=>{
                this.id=id
                this.getDetails(id)
                this.doIfollowU(id);
            })
        buss.$on('userLogin',(data)=>{
            if(this.$session.has('username')){
              this.username=this.$session.get('username');
              this.name = this.$session.get('name');
            }
        })

        buss.$on('setLinkColor',()=>{
            _('followings').style.color ="rgb(149, 75, 75)"
            _('followers').style.color  = "rgb(149, 75, 75)"
            _('followingsM').style.color ="rgb(149, 75, 75)"
            _('followersM').style.color  = "rgb(149, 75, 75)"
        })



    },

    methods: {
        getDetails(id){
            $.get('/api/getLoungeDetails/'+id, (response) => {
                this.showLoader = false
                this.user = response;
                this.flag = '/flags/'+response.member.abv +'.png'
                this.account_type = response.member.account_type;
                buss.$emit('closeProgress','');
                buss.$emit('setNave',this.account_type)
            });
        },
        Login(){
            buss.$emit('login', 'Log In')
            $("[data-toggle=modal]").trigger({type: "click"});
        },
        getLounge(id,component){
            buss.$emit('setLoungLink','')
            if(component === 'followings'){
                _('followers').style.color ="rgb(149, 75, 75)"
                _('followings').style.color ="#d19275"
            }

            if(component === 'followers'){
                _('followers').style.color ="#d19275"
                _('followings').style.color ="rgb(149, 75, 75)"
            }

            this.id = id
            buss.$emit(component,'');
        },

        getLoungeM(id,component){
            buss.$emit('setLoungLink','')
            if(component === 'followingsM'){
                _('followersM').style.color ="rgb(149, 75, 75)"
                _('followingsM').style.color ="#d19275"
            }

            if(component === 'followersM'){
                _('followersM').style.color ="#d19275"
                _('followingsM').style.color ="rgb(149, 75, 75)"
            }

            this.id = id
            buss.$emit(component,'');
        },

        doIfollowU(id){
            $.get('/api/DoIFollowU/'+id , (response)=>{
                if(response === 'yes'){
                    this.doIfollowu = true
                }else{
                    this.doIfollowu = false
                }
            });
        },

        Follow(){
            _('follow').innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
          $.get('/api/LoungeFollowMember/'+this.id , (response)=>{
              if(response === 'Ok') {
                  _('follow').innerHTML = 'Unfollow'
                  this.getDetails(this.id)
                  this.doIfollowU(this.id);
                  buss.$emit('followMember','');
                  buss.$emit('setColor','')
              }
          })
        },

        UnFollow(){
            _('unfollow').innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
            $.get('/api/LoungeUnfollowMember/'+this.id , (response)=>{
                if(response === 'Ok') {
                    _('unfollow').innerHTML = 'Follow'
                    this.getDetails(this.id)
                    this.doIfollowU(this.id);
                    buss.$emit('followMember','');
                    buss.$emit('setColor','')
                }
            });
        }


    }

}
