<template>
    <div class="container-fluid" style="padding: 5px;">
        <hr>
        <div class="sub-container">
            <h1 align=center> {{title}} </h1>
        </div>
        <hr>
        <div class="sub-container">
            <div class="col-md-6 col-sm-6 col-10" style="height: 120px">
                <component :is="selectedComponent" :title="title" :name="name" :image="image" :email="email" :surname="surname"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import resetPasswordForm from '../resetpassword/resetpassword_form.vue'
    import reset_confirm from '../resetpassword/reset_confirm.vue'
    import result from '../resetpassword/result.vue'
    import {buss} from '../../../app'
    export default {
        components:{
            appResetpassword:resetPasswordForm,
            appResetConfirm:reset_confirm,
            appResult:result
        },
        data () {
            return {
                selectedComponent:"appResetpassword",
                title:"Reset Password",
                name:'',
                surname:'',
                image:'',
                email:''
            }
        },


        created(){
            buss.$on('MobileConfirm', (val)=>{
                this.selectedComponent = "appResetConfirm",
                this.title = val[0]
                this.name=val[1]
                this.surname=val[2]
                this.image=val[3]
                this.email=val[4]
            });

            buss.$on('MobileResult',(val)=>{
                this.title = val
                this.selectedComponent = "appResult"
            });

            buss.$emit('setColor','')
        },

        metaInfo: {
            title: 'Reset Password',
        }

    }
</script>

<style>

</style>
