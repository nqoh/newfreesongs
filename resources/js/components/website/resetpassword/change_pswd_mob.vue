<template>
    <div class="container-fluid" style="padding: 5px;">
        <hr>
        <div class="sub-container">
            <h1 align=center> Change Password </h1>
        </div>
        <hr>
        <div class="sub-container">
            <div class="col-md-6 col-sm-6 col-10" style="height: auto; bottom: 10px">
                <passwrd_form></passwrd_form>
            </div>
        </div>
    </div>
</template>

<script>
    import passwrd_form from './change_password_form.vue'
    export default {
          components:{
              passwrd_form
          },
        data () {
            return {}
        },

    }
</script>

<style>

</style>
