<template>
    <div class="modal animated zoomInUp"  id="signup"  tabindex="-1" role="dialog" aria-labelledby="signup" aria-hidden="false">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title"  align="center"  id="modalLabelName">{{ title }}</div>
                    <button class="close" @click="closeModal()" aria-label="close" style="outline: none">
                        <span aria-hidden="true" style="color: #954b4b">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="col-12"  >
                        <component :is="CurrentComponent" :id="id" :title="title" :name="name" :image="image" :email="email" :surname="surname"></component>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import signup_form from '../signup/signup_form.vue'
    import login_form from '../login/login_form.vue'
    import reset_form from '../resetpassword/resetpassword_form.vue'
    import reset_confirm from '../resetpassword/reset_confirm.vue'
    import reset_result from '../resetpassword/result.vue'
    import change_psw_form from '../resetpassword/change_password_form.vue'
    import unsubscribe from '../unsuscribe/form.vue'
    import unsubscribed from '../unsuscribe/unsubscribed.vue'
    import {buss} from '../../../app'

    export default {
        components:{
            appSignup:signup_form,
            appLogin:login_form,
            appReset:reset_form,
            appConfirm:reset_confirm,
            appResult:reset_result,
            appChange:change_psw_form,
            appUnsubscribe:unsubscribe,
            appUnsubscribed:unsubscribed
        },
        data(){
            return{
                CurrentComponent:'',
                title:'',
                email:'',
                name:'',
                image:'',
                surname:'',
                id:''
            }
        },

        methods:{
            closeModal(){

                $('#signup').addClass('zoomOutUp')
                setTimeout(function () {
                        $("[data-dismiss=modal]").trigger({ type: "click" });
                        $('#signup').removeClass('zoomOutUp')
                        $('#signup').removeClass('shake')
                        $('#signup').addClass('zoomInUp')
                    }
                    ,600)
            },

        },
        mounted(){
            $('#signup').on('hidden.bs.modal', function () {
                $('#signup').show();
                $('#signup').addClass('zoomOutUp')
                setTimeout(function () {
                        $('#signup').hide();
                        $('#signup').removeClass('zoomOutUp')
                        $('#signup').removeClass('shake')
                        $('#signup').addClass('zoomInUp')
                    }
                    ,300)
            });

        },
        created(){
            buss.$on('login',(val)=>{
                this.title= val
                this.CurrentComponent='appLogin'
            });
            buss.$on('signup', (val)=>{
                this.title=val
                this.CurrentComponent='appSignup'
            });
            buss.$on('resetpassword', (val)=>{
                this.title=val
                this.CurrentComponent='appReset'
            });
            buss.$on('Desktopconfirm', (val)=>{
                this.title=val[0]
                this.name=val[1]
                this.surname=val[2]
                this.image=val[3]
                this.email=val[4]
                this.CurrentComponent='appConfirm'
            });
            buss.$on('result', (val)=>{
                this.title=val
                this.CurrentComponent='appResult'
            });
            buss.$on('changepassword',(val)=>{
                this.title = val
                this.CurrentComponent = 'appChange'
            })

            buss.$on('unsubscribe', (val)=>{
                this.id = val[1];
                this.title = val[0];
                this.CurrentComponent = 'appUnsubscribe'
            });

            buss.$on('DesktopUnsubscribe', (val)=>{
                 this.CurrentComponent = 'appUnsubscribed'
            });

        },


    }



</script>


<style scoped>
    .modal-content{
        background:#eed5b7;
        width: 70%;
        border: 1px solid #954b4b;
        margin:0px auto;
        border-radius: 3%;
    }
    .modal-header{
        border: none;
        padding: 5px
    }
    .modal-title{
        width: 100%;
        align-content: center;
        color  : #954b4b;
        font-weight: bold;
        font-size:23px
    }
</style>
