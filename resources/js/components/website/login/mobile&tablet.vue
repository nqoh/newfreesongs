<template>
    <div class="container-fluid" style="padding: 5px;">
        <hr>
        <div class="sub-container">
            <h1 align=center> Log In </h1>
        </div>
        <hr>
        <div class="sub-container">
            <div class="col-md-6 col-sm-6 col-10" style="height: 200px">
                <app-login :logedin="logedin"></app-login>
                <span id="login"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import login from './login_form.vue'
    import {buss} from '../../../app'
    export default {
          components:{
            appLogin:login
          },
        data () {
            return {

            }
        },

    }
</script>

<style>

</style>
