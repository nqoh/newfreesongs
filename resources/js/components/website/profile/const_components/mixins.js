function _(x) {return document.getElementById(x)}
import {buss} from '../../../../app'
export const headerMixin={
    data () {
        return {
            account_type: '',
            user: [],
            show: false,
            member_image: '',
            img: true,
            twitter:'http://twitter.com/share?url=https://www.bogiyo.com/',
            whatsapp:'whatsapp://send?text=https://www.bogiyo.com/',
            fb:'http://www.facebook.com/sharer.php?u=https://www.bogiyo.com/',
            tablet: true,
            username: this.$session.get('username'),
            name: this.$session.get('name'),
        }
    },
    beforeCreate(){
            $.get('/api/getMemberDetails', (response) => {
                this.user = response;
                this.account_type = response.member.account_type;
            });
    },
    created(){
        buss.$on("getMemberDetails",(data)=>{
            this.getDetails();
        })
    },
    methods: {
        getMusic(){
            this.$router.push('/profile/explore/music')
        },
        getDetails(){
            $.get('/api/getMemberDetails', (response) => {
                this.user = response;
                this.account_type = response.member.account_type;
            });
        },
        upload(){
            this.$router.push('/profile/upload/music')
        },
        DisplayControls(bool){
            this.show = bool
            this.tablet = !bool
        },
        remove_pp(){
            $.get('/remove_pp', (data) => {
                this.show= false
                this.getDetails();
                buss.$emit('PpChanged',this.user)
                buss.$emit('userLogin','');
            })
        },
        change_pp(){
            var vm = this
            var file = _('pp_input').files[0]
            if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "image/gif") {
                _('loader').style.display = "block";
                vm.show=false
                if (_("pp_input").value !== "") {
                    var formdata = new FormData();
                    formdata.append("file", file)
                    formdata.append('_token', $('meta[name=_token]').attr('content'));

                    var ajax = new XMLHttpRequest();

                    ajax.upload.addEventListener("progress", function (event) {
                        var percent = (event.loaded / event.total) * 100;
                        _("loader").style.display = "block";
                        _("pic_status").style.display = "block";
                        _("pic_status").style.color = "green"
                        _('pic_status').innerHTML = 'Please wait... ' + Math.round(percent) + "%";
                        if (percent === 100) {
                            _("pic_status").innerHTML = "Please wait... 100%";
                        }
                    }, false);
                    ajax.addEventListener("load", function (event) {
                        if (event.target.responseText !== 'Select image before click upload' || event.target.responseText !== "We only accept png,jpeg and gif format") {
                            _("pic_status").innerHTML = "";
                            _("pic_status").style.display = "none";
                            _("loader").style.display = "none";
                              vm.getDetails()
                              buss.$emit('PpChanged',vm.user)
                              buss.$emit('userLogin','');
                        } else {
                            _("pic_status").innerHTML = event.target.responseText;
                            _("pic_status").style.color = "red"
                            _("pp_input").value = "";
                            _("loader").style.display = "none";
                        }
                    }, false);
                    ajax.addEventListener("error", function (event) {
                        _("pic_status").innerHTML = "Upload Failed";
                        _("pic_status").style.color = "red"
                        _("pp_input").value = "";
                        _("loader").style.display = "none";
                    }, false);
                    ajax.addEventListener("abort", function (event) {
                        _("pic_status").innerHTML = "Upload Aborted";
                        _("pic_status").style.color = "red"
                        _("pp_input").value = "";
                        _("loader").style.display = "none";
                    }, false);
                    ajax.open("POST", "/change_pp");
                    ajax.send(formdata);
                } else {
                    _("pic_status").innerHTML = "Please select your picture before Upload";

                }
            } else {
                _("pic_status").style.display = "block";
                _("pic_status").style.color = "red"
                _("pic_status").innerHTML = "We only accept png,jpeg and gif format";
            }

        }
    }

}
