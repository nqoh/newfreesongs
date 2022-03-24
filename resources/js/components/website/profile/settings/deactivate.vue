<template>
    <div>
        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9">
            <div class="form-group">
                <label fo="password">Enter Your Password: <span class="star" id="ErrorPass"></span></label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
        </div>
        <div style="clear: both; margin-left: 15px">
            <button class="btn" @click="Deactivate()">Deactivate</button>
        </div>
    </div>
</template>

<script>
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                password:''
            }
        },

        created(){
            buss.$emit('setColor','')
        },

        methods:{
            Deactivate(){
                if(this.password.length >= 6) {
                    document.getElementById('ErrorPass').innerHTML='';
                    $.get('/api/Deactivate/' + this.password, (response) => {
                        if(response === "Ok"){
                            this.$session.destroy()
                            this.$router.push('/')
                        }else{
                            document.getElementById('ErrorPass').innerHTML=response;
                        }
                    })
                }else{
                    document.getElementById('ErrorPass').innerHTML="Invalid Password";
                }
            }
        },
        metaInfo: {
            title: 'Deactivate Account',
        }

    }
</script>

<style>

</style>
