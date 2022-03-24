<template>
    
    <div><h1>No uploads, under maintenance. apologies</h1></div>
   <!--- <div>
        <h1 v-if=" account_type == 'artist' "  align="center">Grow your fanbase,
            <a href="/artist/promote">Promote</a>
            your music
        </h1>

        <h1 v-if=" account_type ==  'fan' "  align="center">Make money with Bogiyo,
            <a href="/fan/promote" >Start Now </a>
        </h1>

        <h1 v-if=" account_type ==  '' "  align="center">Connect with music lovers,
            <a @click="signUp()" style="cursor: pointer;text-decoration: underline">Signup Now </a>
        </h1>
    </div> --->
</template>
<script>
import {buss}  from '../../../app'
    export default {
        props:['account_type'],
        data () {
            return {}
        },
        
         methods: {
            signUp(){
                buss.$emit('signup', "Sign Up")
                $("[data-toggle=modal]").trigger({type: "click"});
            }
        },

    }
</script>
<style scoped>
    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }
</style>
