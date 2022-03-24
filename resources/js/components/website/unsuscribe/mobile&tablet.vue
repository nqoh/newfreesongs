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
    import unsuscribeForm from '../unsuscribe/form.vue'
    import unsubscribeDesk from './unsubscribed.vue'
    import {buss} from '../../../app'
    export default {
        components:{
            appResetpassword:unsuscribeForm,
            appResetConfirm:unsubscribeDesk,
        },
        data () {
            return {
                selectedComponent:"appResetpassword",
                title:"Unsubscribe",
                name:'',
                surname:'',
                image:'',
                email:''
            }
        },
        created(){
            buss.$on('MobileUnsubscribe', (val)=>{
                this.selectedComponent = "appResetConfirm"
            });
            buss.$emit('setColor','')
        },

    }
</script>

<style>

</style>
